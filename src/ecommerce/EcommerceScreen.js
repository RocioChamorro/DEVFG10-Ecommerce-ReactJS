import React, { useState } from 'react';
import ProductsGrid from './ProductsGrid';

const EcommerceScreen = () => {
  const [categories, setCategories] = useState(['all categories'])
  return (
    <>
      <div className='container'>
        {
          categories.map( category => (
            <ProductsGrid
              key= { category } 
              category= { category }
            />
          ))
        }
      </div>
    </>
  )
}

export default EcommerceScreen

