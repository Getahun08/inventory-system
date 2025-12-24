import React, { useRef } from 'react';

export default function UsersForm() {
    const fileInputRef = useRef(null);
    
      const handleImageClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
  return (
    
    <div>
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
                placeholder="Category Name"
              />
            </div>

            {/* Description Textarea */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                rows="5"
                name="description"
                id="description"
                className="form-control"
                placeholder="Write content here..."
              ></textarea>
            </div>

            {/* Background Color Picker */}
            <div className="mb-3">
              <label htmlFor="bgcolor" className="form-label">Background Color</label>
              <input
                type="color"
                name="bgColor"
                id="bgcolor"
                className="form-control form-control-color"
                defaultValue="#ffffff"
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
  )
}
