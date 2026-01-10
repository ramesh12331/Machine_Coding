// Nested File Folder Structure
// Features:
// 1. Expand and Collapse folders
// 2. Recursive rendering of folders/files

import React, { useState } from 'react'
import json from "../data.json"

// *************Folder Expand Issue ❌ WRONG APPROACH******************
//    const List = ({list}) =>{
//         const [isExpanded, setIsEpanded] = useState(false)
//       return  <div className='container'>
//             {
//                 list?.map((node)=>(
//                         <div key={node?.id}>
//                             {node.isFolder&&<span onClick={()=>setIsEpanded(prev => !prev)} className='btn'>{isExpanded ? "-" : "+"}</span>}
//                              <span>{node?.name}</span>
//                             {isExpanded && node.children && <List list={node.children} />}
//                         </div>
//                     ))
//             }
//         </div>
//     }

// ❌ Why it fails

// isExpanded is one boolean
// All folders share the same state
// Clicking any folder toggles every folder

// ✅ CORRECT APPROACH
// Uses an object to track expand state per folder
// ***********Folder Expand Issue Fixed****************

const List = ({list}) =>{
        // Stores expand/collapse state per folder
        // Example: { "src": true, "components": false }
        const [isExpanded, setIsEpanded] = useState({})
      return  <div className='container'>
            {
                list?.map((node)=>(
                        <div key={node?.id}>
                            {/* Show expand/collapse button only for folders */}
                            {node.isFolder&&<span onClick={()=>setIsEpanded((prev) => ({...prev, [node.name]: !prev[node.name]}))} className='btn'>{isExpanded?.[node.name] ? "-" : "+"}</span>}
                             {/* Display file/folder name */}
                             <span>{node?.name}</span>
                             {/* Recursively render children if expanded */}
                            {isExpanded?.[node.name] && node.children && <List list={node.children} />}
                        </div>
                    ))
            }
        </div>
    }

 
const FileExplorer = () => {
    // Store JSON file structure in state
    const [data, setData] = useState(json)
    console.log(data);



  return (
    <div>
      <h1 className='title'>File/Folder Explorer</h1>
      <List list={data}/>
    </div>
  )
}

export default FileExplorer
