import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';

// Number of products per page
const PAGE_SIZE = 10;

const ProductsMenu = () => {
    // Stores all fetched products
    const [products, setProducts] = useState([])

    // Tracks the current page index (0-based)
    const [currentPage, setCurrentPage] = useState(0)

    // Fetch products from API
    const fetchData = async() =>{
        const data = await fetch("https://dummyjson.com/products?limit=1000");
        const json = await data.json();
        console.log(json.products)

        // Store products in state
        setProducts(json.products)
    }

    // Fetch data once when component mounts
    useEffect(()=>{
        fetchData()
    }, [])

    // Total number of products
    const totalProducts = products.length;
    // Calculate total pages needed
    const noOfPages = Math.ceil(totalProducts/PAGE_SIZE);
    // Calculate slice indexes for pagination
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    // Jump to a specific page
     const handlePageChange = (n) =>{
      setCurrentPage(n)
    }

    // Go to previous page
    const goToPrevPage = () =>{
      setCurrentPage((prev) => prev-1)
    }

    // Go to next page
    const goToNextPage = () =>{
      setCurrentPage((prev) => prev+1)
    }
  return (
    <div className='card-menu'>
      <h2 className='heading'>Pagination</h2>
      {/* Pagination controls */}
      <div className='pagination'>
        {/* {[...Array(10).keys()].map((n)=>(<span className='page-number'>{n}</span>))} */}
        {/* Previous button (disabled on first page) */}
        <button disabled = {currentPage === 0} onClick={goToPrevPage}>◀</button>
        {/* Page numbers */}
        {[...Array(noOfPages).keys()].map((n)=>(<span className={'page-number' + (n === currentPage ? 'active' : '')} onClick={()=>handlePageChange(n)}>{n}</span>))}
       {/* Next button (disabled on last page) */}
       <button disabled = {currentPage === noOfPages} onClick={goToNextPage}>▶</button>
      </div>
      {/* Product cards for current page */}
      <ProductsCard products={products} start={start} end={end}/>
    </div>
  )
}

export default ProductsMenu


// currentPage = 0
// PAGE_SIZE = 10

// start = 0 * 10 = 0
// end = 0 + 10 = 10

// products.slice(0, 10) → Page 1
