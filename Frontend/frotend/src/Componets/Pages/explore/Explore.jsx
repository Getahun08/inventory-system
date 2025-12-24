import React, { useContext } from 'react'
import './Explore.css'
import { AppContext } from '../../../context/AppContext'
export default function Explore() {
  const {categories}=useContext(AppContext)
  console.log(categories);
  return (
  
    <div>
      <div className="explore-container text-light">
  {/* Left Column */}
  <div className="left-column">
    <div className="first-row" style={{ overflowY: 'auto' }}>
      {/* Categories go here */}
      categories
    </div>

    <hr className="horizontal-line" />

    <div className="second-row" style={{ overflowY: 'auto' }}>
      {/* Items go here */}
      items
    </div>
  </div>

  {/* Right Column */}
  <div className="right-column d-flex flex-column">
    <div className="customer-form-container" style={{ height: '15%' }}>
      {/* Customer form goes here */}
      customer form
    </div>

    <div className="my-3 text-light" />

    <div className="cart-items-container" style={{ height: '55%', overflowY: 'auto' }}>
      {/* Cart items go here */}
      cart items
    </div>

    <div className="cart-summary-container" style={{ height: '30%' }}>
      {/* Cart summary goes here */}
      cart summary
    </div>
  </div>
</div>

    </div>
  )
}
