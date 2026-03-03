import './App.css'
import { useState } from 'react'
import Card from './components/cards'
import QueueForm from "./components/QueueForm"
import QueueDisplay from "./components/QueueDisplay"
import { Button } from "./components/ui/button.tsx"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu.tsx"

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)
  const [queue, setQueue] = useState([])

  const addToQueue = (customer) => {
    // add new item to queue
    setQueue([...queue, {...customer, status: 'pending', id:Date.now()}]);
  }

  const updateStatus = (id, newStatus) => {
    // update the status of the item in the queue
    setQueue(queue.map((customer)=> customer.id == id ? {...customer, status: newStatus} : customer))
  }
  
  const removeFromQueue = (id) => {
    // remove item from queue
    setQueue(queue.filter((customer) => customer.id !== id))
  }

  return (
    <> 
      <div className="bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white px-4 py-4 rounded-lg mb-6 shadow-lg flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14l2-2m0 0l2-2m-2 2v6" />
        </svg>
        <div>
          <h2 className="text-xl font-semibold mb-1">React Learning Playground</h2>
          <p className="text-base text-violet-200">
            Welcome! This page showcases experiments and projects as part of my exploration into React, Vite, Tailwind, and Shadcn UI. Explore UI components, state, props, forms, and more below.
          </p>
        </div>
      </div>

      <div className="border-b border-gray-300 pb-6 mb-6">
        <h1>Mangal Baazar</h1>
        <p>Your One Stop Shop for all your needs</p>

        <div className="flex flex-row gap-1 justify-center m-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Men's Clothing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>T-Shirts</NavigationMenuLink>
                <NavigationMenuLink>Shirts</NavigationMenuLink>
                <NavigationMenuLink>Pants</NavigationMenuLink>
                <NavigationMenuLink>Shoes</NavigationMenuLink>
                <NavigationMenuLink>Accessories</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="outline">Shadcn Button</Button>
        </div>
        

        <div className="flex flex-row gap-1 justify-center">
          <Card 
            id={1}
            name="Artwork Tee"
            href="#"
            imageSrc="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
            imageAlt="Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube."
            price="$15"
            color="Iso Dots"
          />

          <Card 
            id={2}
            name="Basic Tee"
            href="#"
            imageSrc="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg"
            imageAlt="Front of men's Basic Tee in white."
            price="$35"
            color="Aspen White"
          />
        </div>
        <div className='learnings mt-5' style={{ textAlign: "left" }}>
          <p>Learnings:</p>
          <ol style={{ listStyleType: "decimal" }}>
            <li>building card as component for T shirt</li>
            <li>passing properties to it components as props</li>
            <li>Tailwind css</li>
            <li>Shadcn button</li>
            <li>Shadcn navigation menu</li>
          </ol>
        </div>
      </div>

      <div className="border-b border-gray-300 pb-6 mb-6 justify-center">
        <h1>Counter</h1>
        <button variant="outline" onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button variant="secondary"onClick={() => setCount((count) => count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>Count: {count}</p>
        <input type="number" value={input} onChange={(e) => {
        setInput(Number(e.target.value)); 
        setCount(Number(e.target.value)) 
        }} />
        <div className='learnings mt-5' style={{ textAlign: "left" }}>
          <p>Learnings:</p>
          <ol style={{ listStyleType: "decimal" }}>
            <li>Using hook: useState</li>
            <li>Using input field to set state</li>
            <li>Tailwind css</li>
            <li>Shadcn button</li>
          </ol>
        </div>
      </div>

      <div className="border-b border-gray-800 pb-12 mb-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-violet-400">Queue Management Application</h1>
          <p className="text-zinc-400 mt-2">Manage your customers efficiently</p>
        </div>
        <div className="flex flex-row items-start gap-12 justify-center">
          {/* 
              we  are passing function [addToQueue] in props of component [ QueueForm ]
           */}
          <QueueForm onAdd={addToQueue}/> 
          <QueueDisplay queue={queue} 
          onUpdateStatus={updateStatus}
          removeFromQueue={removeFromQueue}
          />
        </div>
        <div className='learnings mt-5' style={{ textAlign: "left" }}>
          <p>Learnings:</p>
          <ol style={{ listStyleType: "decimal" }}>
            <li>Using hook: useState</li>
            <li>Using button to set state</li>
            <li>Passing function as props to components</li>
            <li>Using react icons to show user icon</li>
            <li>Form</li>
            <li>Conditional Rendering</li>
            <li>Tailwind css</li>
            <li>Shadcn button</li>
          </ol>
        </div>
      </div>

      <div className="mb-8 text-center">
        <a
          href="https://portfolio-plain-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:underline text-lg font-semibold"
        >
          Visit my Portfolio
        </a>
      </div>

    </>
  )
}

export default App