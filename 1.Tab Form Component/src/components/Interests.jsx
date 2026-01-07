import React from 'react'

const Interests = ({data, setData, errors}) => {
 
  const {interests} = data;

  // Handle checkbox add/remove
  const handleDataChange = (e, name) =>{
    setData((prevState) => ({
      ...prevState,
      interests : e.target.checked
      ? [...prevState.interests, e.target.name]
      : prevState.interests.filter((i) =>i !== e.target.name),
    }));
  }

  console.log(interests)
  return (
    <div>
      <label htmlFor="" className='label-check'>
        <input type="checkbox" name="coding" className='check-input' checked={interests.includes("coding")} onChange={handleDataChange}/>
        <span className='labelText'>Coding</span> 
      </label>

      <label htmlFor="" className='label-check'>
        <input type="checkbox" name="music" className='check-input' checked={interests.includes("music")} onChange={handleDataChange}/>
        <span className='labelText'>Music</span>
      </label>

       <label htmlFor="" className='label-check'>
        <input type="checkbox" name="javaScript" className='check-input' checked={interests.includes("javaScript")} onChange={handleDataChange}/>
        <span className='labelText'>JavaScript</span>
      </label>
       {errors.interests && <span className='text-red-500 text-xs font-medium'>{errors.interests}</span>}
    </div>
  )
} 

export default Interests
