import './App.css'
import { useState } from 'react'
import Card from './components/cards'
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

      <div className="border-b border-gray-300 pb-6 mb-6">
        <h1>Queue Management System</h1>
        <p>Efficiently manage and track customers</p>
      </div>

    </>
  )
}

export default App