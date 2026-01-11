import React, { useState } from 'react'

// OTP INPUT - only numbers

const OTP_DIGITS_COUNT = 5;

const OtpDemoOne = () => {
  const [inputArr, setInputArray] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

  const handleOnChange = (value, index) =>{
    if(isNaN(value)) return;

    console.log(value)

    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArray(newArr)
  }

  return (
    <div className='app'>
      <h1 className='title'>Validate OTP</h1>

      
      {inputArr.map((input,index)=>(<input type="text" key={index} value={inputArr[index]} onChange={(e)=>handleOnChange(e.target.value, index)} className='input'/>))}
      
    </div>
  )
}

export default OtpDemoOne
