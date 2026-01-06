import React from 'react'

const Settings = ({data, setData}) => {
  const {theme} = data;

  // Update theme value
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState, theme: e.target.name
    }))
  }
  return (
    <div>
      <label htmlFor="" className='label-check'>
        <input type="radio" name="dark" className='check-input' checked={theme === "dark"}  onChange={handleDataChange}/>
        <span className='labelText'>Dark</span> 
      </label>

      <label htmlFor="" className='label-check'>
        <input type="radio" name="light" className='check-input' checked={theme === "light"} onChange={handleDataChange}/>
        <span className='labelText'>Light</span> 
      </label>
    </div>
  )
}

export default Settings
