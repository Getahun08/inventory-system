import React, { useRef } from 'react';

export default function ItemsForm() {
    const fileInputRef = useRef(null);
    
      const handleImageClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
  return (
    <div>
      <div  className="item-form-container"
  style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
       <form className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-8 form-container">
          <div className="card-body">
            {/* Image Upload */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <img
                  src="https://placehold.co/48x48"
                  alt="Upload"
                  width={48}
                  style={{ cursor: 'pointer' }}
                  onClick={handleImageClick}
                />
              </label>
              <input
                type="file"
                name="image"
                id="image"
                ref={fileInputRef}
                className="form-control"
                hidden
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
                placeholder="Item Name"
              />
            </div>
            <div className="mb-3">
  <label htmlFor="productDate" className="form-label">Product Date</label>
  <input
    type="date"
    name="productDate"
    id="productDate"
    className="form-control"
  />
</div>

<div className="mb-3">
  <label htmlFor="expireDate" className="form-label">Expire Date</label>
  <input
    type="date"
    name="expireDate"
    id="expireDate"
    className="form-control"
  />
</div>

            
            <div className="mb-3">
  <label className="form-label" htmlFor="category">
    Category
  </label>
  <select name="category" id="category" className="form-control">
    <option value="">--SELECT CATEGORY--</option>
    <option value="Category 1">Category 1</option>
    <option value="Category 2">Category 2</option>
    <option value="Category 3">Category 3</option>
  </select>
</div>


            {/* Description Textarea */}
            <div className="mb-3 w-100">
  <label htmlFor="description" className="form-label">Description</label>
  <textarea
    rows="5"
    name="description"
    id="description"
    className="form-control"
    placeholder="Write content here..."
    style={{ width: '100%' }}
  ></textarea>
</div>


            <div className="mb-3">
  <label htmlFor="price" className="form-label">Price</label>
  <input
    type="number"
    name="price"
    id="price"
    className="form-control"
    placeholder="ET 200.00"
  />
</div>


            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
    </div>
    </div>
  )
}
