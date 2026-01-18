import React from 'react'
import Header from './Header'
import ImageSlider from './ImageSlider';
import ImageSliderOne from './ImageSliderOne';
import ImageSlideMapTwo from './ImageSlideMapTwo';
import FinalImageSlider from './FinalImageSlider';

const App = () => {

  // Normal JavaScript variable
  // This value belongs to App component
  const country = "India";
  return (
    <div>

      {/*
        Passing data from Parent (App)
        to Child (Header) using PROPS

        country={country}
        left side  → prop name (child receives this)
        right side → variable from App component
      */}
      <Header country={country} /> 
      <ImageSlider />
      <ImageSliderOne/>
      <ImageSlideMapTwo/>
      <FinalImageSlider/>
    </div>
  )
}

export default App



/*
==================== REACT PROPS SUMMARY ====================

Props:
- Used to pass data from parent to child
- Read-only (cannot be modified by child)
- Flow is one-directional (top-down)

--------------------------------
In this example:

App → Parent
Header → Child
country → prop

--------------------------------
Key Rules 🔥

✔ Parent controls data
✔ Child receives via props
✔ UI updates when props change

--------------------------------
Interview Golden Rule 🏆

"Props are inputs to a component"

--------------------------------
One-line Memory Trick 🧠

"State manages, Props transfer"

================================================
*/
