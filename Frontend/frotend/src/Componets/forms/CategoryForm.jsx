import React, { useRef, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import assets from '../../assets/logo/logo';
import { addCategory, uploadCategoryImage } from '../../Service/ServiceCategory';
import { AppContext } from '../../context/AppContext';

export default function CategoryForm() {
  const { categories, setCategories } = useContext(AppContext);

  const [data, setData] = useState({
    name: '',
    description: '',
    bgColor: '#ffffff',
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!data.name.trim()) {
      toast.error('Category name is required.');
      setLoading(false);
      return;
    }
    if (!data.description.trim()) {
      toast.error('Description is required.');
      setLoading(false);
      return;
    }
    if (!image) {
      toast.error('Please select an image for the category.');
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create category (JSON only)
      const response = await addCategory(data);
      if (response.status === 201) {
        const newCategory = response.data;

        // Step 2: Upload image
        const imgResponse = await uploadCategoryImage(newCategory.categoryId, image);

        // Update state with backend’s returned imageUrl
        setCategories((prev) => [
          ...prev,
          { ...newCategory, imageUrl: imgResponse.data.imageUrl },
        ]);

        toast.success('Category added successfully!');

        // Reset form
        setData({ name: '', description: '', bgColor: '#ffffff' });
        setImage(null);
      } else {
        toast.error('Failed to add category.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error adding category.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mx-2 mt-2" onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="card col-md-12 form-container">
          <div className="card-body">
            {/* Image Upload */}
            <div className="mb-3 ">
              
    <label htmlFor="image" className="form-label">
      <img src={image ? URL.createObjectURL(image) : assets.upload} 
      alt="Upload" width={100} 
      style={{ cursor: 'pointer', borderRadius: '8px' }} 
      onClick={handleImageClick} />
    </label>
    <input type="file" name="image" id="image" ref={fileInputRef} hidden onChange={(e) => {
        if (e.target.files && e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      }}
    />
            </div>

            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Category Name"
                value={data.name}
                onChange={onChangeHandler}
              />
            </div>

            {/* Description Textarea */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                rows="4"
                name="description"
                id="description"
                className="form-control"
                placeholder="Write content here..."
                value={data.description}
                onChange={onChangeHandler}
              ></textarea>
            </div>

            {/* Background Color Picker */}
            <div className="mb-3">
              <label htmlFor="bgColor" className="form-label">Background Color</label>
              <input
                type="color"
                name="bgColor"
                id="bgColor"
                className="form-control form-control-color"
                value={data.bgColor}
                onChange={onChangeHandler}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="btn btn-primary w-100">
              {loading ? 'Loading...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
