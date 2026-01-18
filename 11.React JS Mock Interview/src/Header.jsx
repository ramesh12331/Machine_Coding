import React, { useState } from 'react'

const Header = (props) => {
    /*
    useState returns an ARRAY with 2 values:
    [ currentStateValue, functionToUpdateState ]

    Example:
    const arr = useState("Deepika");
    arr[0] → current state value
    arr[1] → function to update state
    */

    // const [name, setName] = useState("Deepika");
    const arr = useState("Deepika");

    // Destructuring manually (same as array destructuring)
    const name = arr[0];    // state value
    const setName = arr[1]  // state updater function

    /*
    Shortcut syntax (most common):
    const [name, setName] = useState("Deepika");
    */

    // ❌ Normal variable (NOT state)
    // Changing this will NOT trigger re-render
    let name1 = "Virat"; // Not Reender on change
  return (
    <div  className='app'>
      {/* Uses STATE → updates on change */}
      <h1 className='title'>Hello, {name} from {props.country}</h1>

      {/* Uses NORMAL VARIABLE → does NOT update */}
      <h1 className='title'>Hello, {name1}</h1>

      {/* ❌ This changes variable but React does NOT re-render */}
      <button className='btn' onClick={()=>{ 
                    name1 = "xyz";
                    console.log(name1);}}>Name not Change</button>
        {/* ✅ This updates STATE → React re-renders component */}
      <button className='btn' onClick={()=>setName("Sachin")}>Name Change</button>
    </div>
  )
}

export default Header


/*
==================== REACT STATE SUMMARY ====================

Normal Variable:
- Plain JavaScript variable
- React does NOT track it
- Updating it does NOT re-render UI

useState:
- React Hook
- Returns [state, setState]
- React tracks state changes
- Updating state triggers re-render

--------------------------------
Important Rules 🔥

- UI should depend on state or props
- Never update normal variables for UI
- Always use setState function

--------------------------------
Interview Golden Rule 🏆

"If UI should change → useState"

--------------------------------
One-line Memory Trick 🧠

"Variable changes data, State changes UI"

================================================
*/
