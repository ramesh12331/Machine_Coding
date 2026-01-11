import React, { useState } from 'react'

const TodoList = () => {
    // Stores the current text typed in the input field
    const [input, setInput] = useState("");

    // Stores the list of todo items
    const [todoList, setTodoList] = useState([]);

    /* ==========================
     ADD TODO ITEM
     ========================== */
 const addTodoItem = () =>{
        // if(input === "") return;
        // Prevent adding empty or whitespace-only todos
        if(input.trim() === "") return;

        // Create a new todo item object
        const item = {
            id : todoList.length, // unique id (simple approach)
            text : input.trim(), // todo text
            completed : false // checkbox state
        }

        // Add new item to todo list
        setTodoList(prev => [...prev, item]);

        // Clear input field
        setInput("")
    }

    /* ==========================
     TOGGLE COMPLETED STATE
     ========================== */
    const toggleComleted = (id) =>{
        // Toggle completed value for selected todo
        setTodoList(
            todoList.map(t=>{
                if(t.id === id){
                    return{
                        ...t,
                        completed: !t.completed
                    }
                }else{
                    return t;
                }
            })
        )
    }

    /* ==========================
     DELETE TODO ITEM
     ========================== */
    const deleteTodo =(id) =>{
        setTodoList(
            // Remove todo item with matching id
            todoList.filter(
                (t) => (t.id !== id)
            )
        )
    }
  return (
    <div>
        <h2 className='title'>ToDo List</h2>
        {/* Input field */}
      <input type="text" className='input' placeholder='Enter todo'value={input} onChange={(e)=>setInput(e.target.value)}/>
      {/* Add button */}
      <button className='btn' onClick={()=>addTodoItem()}>Add</button>
       {/* Todo list */}
      <ul>
        {todoList.map(t=><li key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={()=>toggleComleted(t.id)}/>
            <span className={t.completed ? 'strikeThrough' : ''}>{t.text}</span>
            <button className='btn' onClick={()=>deleteTodo(t.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default TodoList


// *****************

// User types todo
// ↓
// Clicks Add
// ↓
// Todo added to list
// ↓
// Checkbox toggles completed state
// ↓
// Delete removes todo

// ⚠️ Important Note (ID Issue)
// ❌ Current approach => id: todoList.length
// ✅ Better approach => id: Date.now() ==OR== id: crypto.randomUUID()