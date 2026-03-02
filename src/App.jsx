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
      </div>

    </>
  )
}

export default App