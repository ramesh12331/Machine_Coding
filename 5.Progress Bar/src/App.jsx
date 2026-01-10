import { useEffect, useState } from "react"

const ProgressBar = ({progress}) => {

  // State used to animate the progress smoothly
  // Starts from 0 and moves to the actual progress value
  const [animatedProgress, setAnimatedProgress] = useState(0)

  // Runs whenever `progress` prop changes
  useEffect(()=>{
    // Delay is added so CSS transition can animate properly
    setTimeout(()=>setAnimatedProgress(progress),100)
  },[progress])

  return <div className="outer">
      {/* Inner progress bar */}
      <div className="inner" style={{
        // width : `${progress}%`,
        transform : `translateX(${animatedProgress-100}%)`, 
        color : animatedProgress<5 ? "black" : "white"}} 
        role="progressbar" aria-valuenow={progress} aria-valuemax="100" aria-valuemin="0">
        {progress}%
      </div>
  </div>
}

function App() {
  // Different progress values to display multiple bars
  const bars = [1, 5, 10, 30, 50, 70, 90, 100]
 
  return (
   <>
      <div className="app">
        <h1 className="title">Progress Bar</h1>
        {/* Render a ProgressBar for each value */}
        {bars.map((value)=>(<ProgressBar key={value} progress={value} />))}
        
      </div>
   </>
  )
}

export default App


// Initial render:
// animatedProgress = 0 → bar is hidden

// After 100ms:
// animatedProgress = progress → bar slides in