import React, { useContext, useState } from 'react';
import './CategoryList.css';
import toast from 'react-hot-toast';
import { deleteCategory, updateCategory } from '../../../Service/ServiceCategory';
import { AppContext } from '../../../context/AppContext';

export default function CategoryList() {
  const { categories, setCategories } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [newName, setNewName] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const filteredCategories = categories
    .filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = async (categoryId) => {
    const confirm = window.confirm('Are you sure you want to delete this category?');
    if (!confirm) return;

    try {
      const response = await deleteCategory(categoryId);
      if (response.status === 204) {
        const updated = categories.filter(cat => cat.categoryId !== categoryId);
        setCategories(updated);
        toast.success('Category deleted successfully!');
      } else {
        toast.error('Failed to delete category.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error deleting category.');
    }
  };

  const openEditModal = (category) => {
    setEditingCategory(category);
    setNewName(category.name);
    setNewImageUrl(category.imageUrl);
  };

  const handleEditSubmit = async () => {
    if (!newName || newName === editingCategory.name) return;

    const updatedCategory = {
      ...editingCategory,
      name: newName,
      imageUrl: newImageUrl
    };

    try {
      const response = await updateCategory(editingCategory.categoryId, updatedCategory);
      if (response.status === 200 || response.status === 204) {
        const updated = categories.map(cat =>
          cat.categoryId === editingCategory.categoryId ? updatedCategory : cat
        );
        setCategories(updated);
        toast.success('Category updated successfully!');
        setEditingCategory(null);
      } else {
        toast.error('Failed to update category.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error updating category.');
    }
  };

  return (
    <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto' }}>
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by keyword"
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <span className="input-group-text bg-warning text-dark" title="Search">
            <i className="bi bi-search" style={{ fontSize: '1.2rem' }}></i>
          </span>
        </div>
      </div>

      <div className="row g-3 pe-2">
        {filteredCategories.map((category, index) => (
          <div key={index} className="col-12">
            <div className="card p-3" style={{ backgroundColor: category.bgColor }}>
              <div className="d-flex align-items-center">
                <div style={{ marginRight: '15px' }}>
                  <img
                    src={`http://localhost:8082${category.imageUrl}`}
                    alt={category.name}
                    className="category-img"
                    style={{ width: '50px', height: '50px', borderRadius: '8px' }}
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 text-white">{category.name}</h5>
                  <p className="mb-0 text-white">{category.items} Items</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm" onClick={() => openEditModal(category)}>
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(category.categoryId)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingCategory && (
        <div className="edit-modal">
          <div className="modal-content p-4 bg-light rounded shadow">
            <h5>Edit Category</h5>
            <input
              type="text"
              className="form-control mb-2"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New category name"
            />
            <input
              type="text"
              className="form-control mb-3"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="New image URL"
            />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={() => setEditingCategory(null)}>Cancel</button>
              <button className="btn btn-success" onClick={handleEditSubmit}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
