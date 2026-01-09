import React, { useEffect, useState } from 'react'

const AutoSearch = () => {
    // Stores the current input value typed by the user
    const [input, setInput] = useState("");
    // Stores API search results
    const [results, setResult] = useState([]);
    // Controls whether the results dropdown is visible
    const [showResults, setShowResuts] = useState(false)

    // Fetch data from API based on input value
    const fetchData = async () =>{
        console.log("API CALL", input)
         // Call autocomplete API
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const json = await data.json();
        // console.log(json.recipes);

        // Store recipes in results state
        setResult(json.recipes);
    }

    // Runs whenever input value changes
    useEffect(()=>{
        // fetchData()

        // Debounce: wait 300ms before making API call
        const timer = setTimeout(fetchData, 300);

        // Cleanup function
        // Clears previous timer before next effect runs
        return () => {
            clearTimeout(timer)
        }

    },[input])

  return (
    <div className='container'>
        <h1>Autocomplete Search Bar</h1>

         {/* Input field */}
      <div>
        <input type="text" className='input-text' value={input}
        // Update input value on typing 
        onChange={(e)=>setInput(e.target.value)} 
        
        // Show results when input is focused
        onFocus={()=>setShowResuts(true)} 
        
        // Hide results when input loses focus
        onBlur={()=>setResult(false)}/>
      </div>

       {/* Show results only if input is focused and results exist */}
     {showResults && results.length > 0 && <div className='results-container'>
        {
            results.map((r)=>(
                <span key={r.id} className='results'>{r.name}</span>
            ))
        }
      </div>}
    </div>
  )
}

export default AutoSearch


// User types → waits 300ms → API call
// If user types again → previous call cancelled

// User types → input state updates
// ↓
// useEffect runs
// ↓
// waits 300ms (debounce)
// ↓
// fetch API
// ↓
// results stored
// ↓
// results shown in dropdown