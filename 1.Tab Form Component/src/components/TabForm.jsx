import React, {  useState } from 'react'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'

const TabForm = () => {

  // Holds complete form data for all tabs
  const [data, setData] = useState({
    name : "Akshay",
    age : "29",
    email : "akshay@gmail.com",
    interests : ["coding", "music", "javaScript"],
    theme : "dark",
  })

  // Stores validation errors for current tab
  const [errors, setErrors] = useState({})

  // Keeps track of active tab index
  const [activeTab, setActiveTab] = useState(0)

  // Tab configuration array
  const tabs = [
    {
      name : "Profile",
      component : Profile,

      // Validation function for Profile tab
      validate : () => {
        const err = {};
        if(!data.name || data.name.length < 2){
          err.name = "Name is not valid";
        }
        if(!data.age || data.age<18){
          err.age = "Age is not valid";
        }
        if(!data.email || data.email.length<2){
          err.email = "Email is not valid";
        }

        setErrors(err);

        // Return true only if no errors
        return err.name || err.age || err.email ? false : true
      },
    },
    {
      name : "Interests",
      component : Interests,

       // Validation for Interests tab
      validate : () => {
        const err = {}
        if(data.interests.length < 1) {
          err.interests = "Select atleast one interests"
        }
        setErrors(err)
        return err.interests ? false : true ;
      }
    },
    {
      name : "Settings",
      component : Settings
      // No validation required
    }
  ]

  // Get the currently active tab component
  const ActiveTabComponent = tabs[activeTab].component;

  // Move to next tab after validation
  const handleNextClick = () =>{
    if (tabs[activeTab].validate()){
      setActiveTab((prev)=>prev+1)
    };
  }

  // Move to previous tab
  const handlePrevClick = () =>{
    if (tabs[activeTab].validate()){
      setActiveTab((prev)=>prev-1)
    };
  }

  // Final submit
  const handleSubmitClick = () =>{
    // API call can be made here
    console.log(data)
  }
  return (
    <div className='main'>

      {/* Tab buttons */}
      <div className='tabs'>
        {
          tabs.map((t, index) => (
            <div key={index} onClick={()=>setActiveTab(index)} className='btn'>
              {t.name}
            </div>
          ))
        }
      </div>
        
        {/* Active tab content */}
      <div className='dashBoard'>
          <div className='dashboard-card'>
            <ActiveTabComponent data={data} setData = {setData} errors={errors}/>
          </div>
          
      </div>

      {/* Navigation buttons */}
      <div className='text-center space-x-1'>
            {activeTab > 0 && <button className='bg-green-600 text-white p-2 rounded mt-2 font-medium' onClick={handlePrevClick}>Prev</button>}
            {activeTab < tabs.length - 1 && <button className='bg-green-600 text-white p-2 rounded mt-2 font-medium' onClick={handleNextClick}>Next</button>}
            {activeTab === tabs.length - 1 && <button className='bg-green-600 text-white p-2 rounded mt-2 font-medium' onClick={handleSubmitClick}>Submit</button>}
          </div>
    </div>
  )
}

export default TabForm
