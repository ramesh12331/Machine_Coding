import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from "react-icons/fa";


const Accordion = ({items}) => {
    /*
    Stores the index of the currently open accordion item
    null → no item is open
    0,1,2... → index of open item
  */
    const [openIndex, setOpenIndex] = useState(null);

     /*
    Toggle logic:
    - If clicked item is already open → close it
    - Else → open the clicked item
  */
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    // Handle empty or missing items
  return !items || (items.length === 0) ? "No items available" : (
    <div>
        <h1 className='title'>Accordion</h1>
     <div className='main-container'>
         {
        items.map((item,index)=>(
            <div key={index} className='container'>
                <div className='acc-title flex justify-between' onClick={()=>handleToggle(index)}>
                    {item.title}
                    <span className='flex'>{openIndex === index ? <FaChevronUp/>:<FaChevronDown />}</span>
                </div>
                {/* Accordion content (shown only when open) */}
                {openIndex === index && <div className='acc-dec'>
                    {item.content}
                </div>}
            </div>
        ))
      }
     </div>
    </div>
  )
}

export default Accordion

// ******SUMMERY********

// Click title
// ↓
// Check if clicked index === openIndex
// ↓
// If same → close (set null)
// If different → open clicked index