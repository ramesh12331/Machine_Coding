import React, { useState } from 'react'

/*
  Hierarchical checkbox data
  Each node can optionally have children
*/
const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange"
          },
          {
            id: 4,
            name: "Lemon"
          }
        ]
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry"
          },
          {
            id: 7,
            name: "Blueberry"
          }
        ]
      }
    ]
  }
];

const Checkboxes = ({data, checked, setChecked}) => {
  /*
    Handles checkbox toggle
    Updates checked state using node id as key
  */
  const handleChange = (e,id) =>{
    setChecked((prev)=>{
      const newState = {...prev, [id]:e.target.checked};
      return newState;
    })
  }

  console.log(checked)
  return (
    <div className='container'>
      {data.map((node)=>(
        <div key={node.id}>
          <input type="checkbox" checked={checked[node.id] || false} onChange={(e)=>handleChange(e, node.id)}/>
          {/* Checkbox label */}
          <span>{node.name}</span>
          {/* 
            Recursive call:
            If node has children, render Checkboxes again
          */}
          {node.children && <Checkboxes data={node.children} checked={checked}
          setChecked={setChecked}/>}
        </div>
      ))}
    </div>
  )
}

const App = () => {
  /*
    Stores checked state as an object
    Example:
    {
      1: true,
      3: false,
      6: true
    }
  */
  const [checked, setChecked] = useState({})
  return (
    <div className='app'>
      <h1 className='title'>Start editing to see some magic happen!</h1>
      <Checkboxes data={checkboxesData} checked={checked} setChecked={setChecked}/>
    </div>
  )
}

export default App


// checked = {
//   1: true,   // Fruits
//   2: true,   // Citrus
//   3: false,  // Orange
//   6: true    // Strawberry
// }