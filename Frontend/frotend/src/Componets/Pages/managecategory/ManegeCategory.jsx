import React from 'react'
import './ManageCategory.css'
import CategoryForm from '../../forms/CategoryForm'
import CategoryList from '../../list/categorylist/CategoryList'

export default function ManegeCategory() {
  return (
    <div className="category-container text-light">
    <div className="left-column">
      <CategoryForm/>
    </div>
    <div className="right-column">
      <CategoryList/>
    </div>
  </div>
  )
}
