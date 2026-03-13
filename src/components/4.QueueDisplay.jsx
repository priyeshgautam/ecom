import { useState } from 'react'

export default function QueueDisplay({queue, onUpdateStatus, removeFromQueue}) {
    
    const getColor = (status)=>{
        console.log(status)
        switch(status){
            case "pending":
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
    <div className = "queue-display bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-xl px-8 py-6 w-full max-w-md">
      <h2 className='text-xl font-semibold text-violet-400 mb-4'>Current Queue</h2>
      {queue.length === 0? (
        <p className='text-white'> No Customer data available</p> 
      ):(
        <div className='queue-list'>
            {queue.map((customer) => (
                <div className='queue-item' key={customer.id}>
                    <div className='customer-info'>
                        <h3>{customer.name}</h3>
                        <p>{customer.service}</p>
                        <p className='status' style={{color: getColor(customer.status)}}>{customer.status}</p>
                    </div>
                    <div className='actions'>
                        {
                        customer.status == 'pending' && (
                            <button 
                                className='serve-btn'
                                onClick={()=>onUpdateStatus(customer.id,"serving")}> 
                                Serve
                            </button>)
                        }
                        {
                        customer.status == 'serving' && (
                            <button 
                                className='complete-btn'
                                onClick={()=>onUpdateStatus(customer.id,"completed")}> 
                                Complete
                            </button>)
                        }
                        <button className='remove-btn' onClick={()=> removeFromQueue(customer.id)}> Remove </button>
                    </div>
                </div>
            ))}
        </div>
    )}
    </div>
  )
}