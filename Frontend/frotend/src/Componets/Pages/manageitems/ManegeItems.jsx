import React from 'react'
import './ManageItems.css'
import ItemsForm from '../../forms/ItemsForm'
import ItemsList from '../../list/itemlist/ItemsList'
export default function ManegeItems() {
  return (
    <div className="items-container text-light">
    <div className="left-column">
      <ItemsForm/>
    </div>
    <div className="right-column">
      <ItemsList/>
    </div>
  </div>
  )
}
