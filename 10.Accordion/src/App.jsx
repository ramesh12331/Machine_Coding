import React from 'react'
import Accordion from './components/Accordion';

/*
  Static data passed to Accordion component
  Each item has:
  - title → clickable header
  - content → hidden / shown on toggle
*/
const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];

const App = () => {
  return (
    <div className='app'>
      {/* Pass accordion items as props */}
      <Accordion items={items}/>
    </div>
  )
}

export default App
