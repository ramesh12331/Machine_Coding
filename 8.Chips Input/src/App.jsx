import React, { useState } from 'react'

const App = () => {
  // Stores the current text typed in the input field
  const [inputText, setInputText] = useState("");
  // Stores all the chips entered by the user
  const [chips, setChips] = useState([]);

  /* ==========================
     HANDLE ENTER KEY
     ========================== */
  const handleKeyDown = (e) =>{
    console.log(e)

    // If Enter is pressed and input is not empty
    if(e.key === "Enter" && inputText.trim() !== "") {
      // logic add to chips

      // Add input value as a new chip
      setChips(prev=> [...prev, inputText])
      // Clear input after adding chip
      setInputText("")
    }
  }

  /* ==========================
     DELETE CHIP
     ========================== */
  const handleDeleteChip = (index) =>{
    // Create a copy of chips array
    const copyChips = [...chips];

    // Remove chip at given index
    copyChips.splice(index,1);

    // Update state
    setChips(copyChips);
  }
  return (
    <div className='app'>
      <h2 className='title'>Chips Input</h2>
      <input type="text"  className='input' value={inputText} 
      onChange={(e)=>setInputText(e.target.value)}
      onKeyDown={(e)=>handleKeyDown(e)}
      />
      <div className="flex justify-center flex-wrap gap-2">
        {/* Render each chip */}
        {chips.map((chip, i) => (
        <span key={i} className="chip">
        {/* Chip text */}
        {chip} 
        {/* Delete button */}
        <button className='btn text-red-500 p-2 bg-gray-300 text-center rounded-full' onClick={()=>handleDeleteChip(i)}>X</button>
        </span>
        ))}
      </div>

    </div>
  )
}

export default App


// User types text
// ↓
// Presses Enter
// ↓
// Text added to chips array
// ↓
// Input cleared
// ↓
// Chips displayed with delete option