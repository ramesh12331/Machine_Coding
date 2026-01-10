// Nested File Folder Structure
// Expand and Collapse folders
// Add/Remove File/Folder

import React, { useState } from 'react'
import json from "../data.json"

// *************Folder Expand Issue******************
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

// ***********Folder Expand Issue Fixed****************

const List = ({list, addNodeToList, deleteNodeFromList}) =>{
      // Stores expand/collapse state per folder
      // Example: { src: true, components: false }
        const [isExpanded, setIsEpanded] = useState({})
      return  <div className='container'>
            {
                list?.map((node)=>(
                        <div key={node?.id}>
                          {/* File / Folder row */}
                             <span className='name'>
                              {/* Expand / Collapse button */}
                            {node.isFolder&&<span onClick={()=>setIsEpanded((prev) => ({...prev, [node.name]: !prev[node.name]}))} className='btn'>{isExpanded?.[node.name] ? "-" : "+"}</span>}

                              {/* Folder / File name */}
                              {node?.name}
                              {/* Add Folder button (only for folders) */}
                              {node?.isFolder && <span onClick={()=>addNodeToList(node.id)}>
                                <img src={"https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"} className='w-5' alt="" />
                              
                              </span>}
                              <span>
                                {/* Delete Folder button */}
                                {node?.isFolder && <span onClick={()=>deleteNodeFromList(node.id)}>
                                <img src={"https://cdn-icons-png.flaticon.com/512/3405/3405244.png"} className='w-5' alt="" />
                                </span>
                                }
                              </span>
                             </span>
                             <span>
                              
                             </span>
                              {/* Recursively render children if expanded */}
                            {isExpanded?.[node.name] && node.children && <List list={node.children} addNodeToList={addNodeToList}/>}
                        </div>
                    ))
            }
        </div>
    }

 
const FileExplorer = () => {
    // Holds entire folder structure
    const [data, setData] = useState(json)
    console.log(data);

    /* ============================
     ADD FOLDER LOGIC
     ============================ */

  const addNodeToList = (parentId) =>{

    // Ask user for folder name
    const name = prompt("Enter Name");

    // Recursive function to update tree
    const updateTree = (list) =>{
      return list.map(node => {
        // If this is the parent folder
        if(node.id === parentId){
          return {
            ...node,
            children: [...node.children, {id: Date.now.toString() , name , isFolder : true, children : []}]
          }
        }
        // Search deeper in tree
        if(node.children) {
          return {...node, children:updateTree(node.children)}
        }
        return node;
      })
    }
    setData((prev)=>updateTree(prev))
  }

  /* ============================
     DELETE NODE LOGIC
     ============================ */

  const deleteNodeFromList = (itemId) =>{
    const updateTree = (list) =>{
      
      return list
       // Remove the node
      .filter((node)=>node.id !== itemId)
      // Recursively clean children
      .map((node)=>{
        if(node.children){
          return {...node, children:updateTree(node.children)}
        }
        return node;
      })
    }
    setData(prev => updateTree(data))
  }

  return (
    <div>
      <h1 className='title'>File/Folder Explorer</h1>
      <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
    </div>
  )
}

export default FileExplorer
