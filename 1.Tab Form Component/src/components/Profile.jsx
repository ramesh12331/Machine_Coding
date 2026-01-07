import React from 'react'

const Profile = ({data, setData, errors}) => {
  console.log(data)
  // Destructure values from data
  const {name, age, email} = data

  // Update specific field dynamically
  const handleDataChange = (e, item) =>{
    setData((prevState) => ({
      ...prevState,
      // age: e.target.value
      [item] : e.target.value,
    }))
  }
  return (
    <div>
      <form>
        <label htmlFor="" className='label'>Name</label>
        <input type="text" className='input' value={name} onChange={(e) => handleDataChange(e, "name")}/>
        {errors.name && <span className='text-red-500 text-xs font-medium'>{errors.name}</span>}

        <label htmlFor="" className='label'>Name</label>
        <input type="number" className='input' value={age} onChange={(e) => handleDataChange(e, "age")}/>
        {errors.age && <span className='text-red-500 text-xs font-medium'>{errors.age}</span>}

        <label htmlFor="" className='label'>Name</label>
        <input type="text" className='input' value={email} onChange={(e) => handleDataChange(e, "email")}/>
        {errors.email && <span className='text-red-500 text-xs font-medium'>{errors.email}</span>}
      </form>
    </div>
  )
}

export default Profile
