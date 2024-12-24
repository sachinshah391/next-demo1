import React from 'react'
import ProductData from '../components/ProductData'
import Navabar from '../components/Navabar'

function page() {
  return (
    <div>
        <Navabar />
        <div className="bg-gray-50">
            <ProductData />
        </div>
        
    </div>
  )
}

export default page