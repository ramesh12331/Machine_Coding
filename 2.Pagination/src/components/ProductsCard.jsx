import React from 'react'

// Displays paginated product cards
const ProductsCard = ({products, start, end}) => {
    // const {image, title} = products;
   
  return (
    <div className='card'>
      {/* Show only products for current page */}
       {
        // products.slice(0,10).map((product)=>(
        //     <div key={product.id} className='card-section'>
        //         <img src={product.thumbnail} alt={product.title} className='img'/>
        //         <span className='title'>{product.title}</span>
        //     </div>
        // ))

        // ************************

        products.slice(start, end).map((product)=>(
            <div key={product.id} className='card-section'>
                <img src={product.thumbnail} alt={product.title} className='img'/>
                <span className='title'>{product.title}</span>
            </div>
        ))
       }
    </div>
  )
}

export default ProductsCard
