import React, { useState } from 'react'

const data = [
    "https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_hybrid&w=740&q=80",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg",
    "https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg"
]

const ImageSliderOne = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handlePreviousClick = () => {
        // if(activeImageIndex === 0) setActiveImageIndex(data.length-1)
        // else setActiveImageIndex(activeImageIndex - 1)

        // *********OR**********
        setActiveImageIndex(!activeImageIndex ? data.length - 1 : activeImageIndex -1)
    }

    const handleNextClick = () => {
        setActiveImageIndex((activeImageIndex + 1) % data.length)
    }
  return (
    <div>
        <h1 className='title text-center'>Onclick Funcion Improving</h1>
        <div className='flex justify-center mt-5'>
      <button onClick={handlePreviousClick}>Prev</button>
      {/* <img src={data[0]} alt="" /> */}
      <img src={data[activeImageIndex]} className='w-[700px] h-[400px]' alt="" />
      <button onClick={handleNextClick}>Next</button>
    </div>
    </div>
  )
}

export default ImageSliderOne
