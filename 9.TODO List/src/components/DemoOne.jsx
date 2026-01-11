import React, { useState } from 'react'

const DemoOne = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([{
        id : 1,
        text : "javaScript",
        completed : true
    },
    {
        id : 2,
        text : "React",
        completed : true
    }
]);

    const addTodoItem = () =>{
        const item = {
            id : 0,
            text : input,
            completed : false
        }
        setTodoList(prev => [...prev, item]);
    }
  return (
    <div>
        <h2 className='title'>ToDo List</h2>
      <input type="text" className='input' placeholder='Enter todo'value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button className='btn' onClick={()=>addTodoItem()}>Add</button>
      <ul>
        {todoList.map(t=><li key={t.id}>
            <input type="checkbox" />
            <span>{t.text}</span>
            <button className='btn'>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default DemoOne
