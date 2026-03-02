import { useState } from 'react'

export default function QueueDisplay({queue, onUpdateStatus, onRemove}) {
    const getColor = (status)=>{
        switch(status){
            case "waiting":
                return "var(--warning)";
            case "serving":
                return "var(--success)";
            case "completed":
                return "var(--info)";
            default:
                return "var(--text)";
        }
    }
    return (
    <div className = "queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0? <p> No Customer data available</p> : <p> Customer available</p>}
    </div>
  )
}