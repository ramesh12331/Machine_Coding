import React, { useEffect, useRef, useState } from 'react'

// OTP INPUT - only numbers

// Number of OTP digits
const OTP_DIGITS_COUNT = 5;

const App = () => {

  // Holds OTP values for each input box
  // Example: ["1", "2", "3", "", ""]
  const [inputArr, setInputArray] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

  // Stores references to each input element
  const refArr = useRef([]);

  // Focus the first input when component mounts
  useEffect(()=>{
    refArr.current[0]?.focus();
  },[])

   /* ==========================
     HANDLE INPUT CHANGE
     ========================== */
  const handleOnChange = (value, index) =>{
    // Allow only numbers
    if(isNaN(value)) return;

    console.log(value)
    // Remove spaces
    const newValue = value.trim();
    // Create a copy of state
    const newArr = [...inputArr];
    // Take only the last digit (prevents pasting multiple digits)
    newArr[index] = newValue.slice(-1);
    // Update state
    setInputArray(newArr)

     // Move focus to next input if value exists
   newValue && refArr.current[index+1]?.focus();
  }

  /* ==========================
     HANDLE BACKSPACE
     ========================== */
  const handleOnKeyDown = (e, index) => {
    console.log(e)

    // If current input is empty and Backspace is pressed
    // move focus to previous input
    if(!e.target.value && e.key === "Backspace") {
      refArr.current[index-1]?.focus();
    }
    
  }

  return (
    <div className='app'>
      <h1 className='title'>Validate OTP</h1>

      {/* Render OTP input boxes */}
      {inputArr.map((input,index)=>(<input type="text" key={index} value={inputArr[index]} 
      // Save reference of each input
      ref={(input)=>(refArr.current[index]=input)} 
      // Handle input change
      onChange={(e)=>handleOnChange(e.target.value, index)} 
      // Handle backspace navigation
      onKeyDown={(e)=>handleOnKeyDown(e,index)}
      className='input'/>))}
      
    </div>
  )
}

export default App


// User types digit
// ↓
// Only last digit is stored
// ↓
// Focus automatically moves to next input
// ↓
// Backspace on empty input moves focus backward
