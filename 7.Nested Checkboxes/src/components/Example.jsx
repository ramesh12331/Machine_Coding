import React, { useState } from 'react'

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
          <span>{node.name}</span>
          {node.children && <Checkboxes data={node.children} checked={checked}
          setChecked={setChecked}/>}
        </div>
      ))}
    </div>
  )
}

const Example = () => {
  const [checked, setChecked] = useState({})
  return (
    <div className='app'>
      <h1 className='title'>Start editing to see some magic happen!</h1>
      <Checkboxes data={checkboxesData} checked={checked} setChecked={setChecked}/>
    </div>
  )
}

export default Example
