import './App.css'
import { useState } from 'react'
import Card from './components/2.cards.jsx'
import QueueForm from "./components/4.QueueForm.jsx"
import QueueDisplay from "./components/4.QueueDisplay.jsx"
import { Button } from "./components/ui/button.tsx"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu.tsx"
import BasicProps from "./components/3.BasicProps.jsx";
import RefProps from "./components/3.RefProps.jsx";
import ChildrenProps from "./components/3.ChildrenProps.jsx";
import ComplexProps from "./components/3.ComplexProps.jsx";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/3.ThemeToggler.jsx";
import { useCart } from "./hooks/useCart.js";
import { products } from "./data/products.js";
import ProductCard from "./components/5.ProductCard.jsx";
import Cart from "./components/5.Cart.jsx";
import Counter from "./components/6.Counter";
import Posts from "./components/6.Posts";

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

  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <> 
    {/* Banner */}
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


      {/* Section 1 */}
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
      
      {/* Section 2 */}
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

      {/* Section 3 */}
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

      {/* Section 4 */}
      <div className="border-b border-gray-800 pb-12 mb-6">
        <div>
          <ThemeProvider>
            <AppContent />
          </ThemeProvider>
        </div>
        <div className='learnings mt-5' style={{ textAlign: "left" }}>
          <p>Learnings:</p>
          <ol style={{ listStyleType: "decimal" }}>
            <li>Using props: passing functions and var</li>
            <li>Using dynamic button component</li>
            <li>Child component</li>
            <li>Nested Child components</li>
            <li>Using ref hook</li>
            <li>Using context for global state</li>
          </ol>
        </div>
      </div>
      

      {/* Section 5 */}
      <div className="border-b border-gray-800 pb-12 mb-6">
        <div className="Shopping-cart">
            <h1>Shopping Cart</h1>
          <div className="products">
            <div>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </div>
          <div className='learnings mt-5' style={{ textAlign: "left" }}>
          <p>Learnings:</p>
          <ol style={{ listStyleType: "decimal" }}>
            <li>Using useEffect hook</li>
            <li>Using useMemo hook</li>
            <li>Using local storage for saving data</li>
          </ol>
        </div>
        </div>
      </div>

      {/* Section 6 */}

      <>
      <h1>Zustand</h1>
      <Counter />
      <Posts />
      </>

      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </>
  )
}

function Footer(){
  return (
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
  )
}
function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white
                hover:bg-blue-800
              `}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  // const isDark = true;
  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen bg-gray-800 ${
        isDark ? "bg-gray-900" : "bg-purple-400"
      }`}
    >
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
          <div
            className={`mt-4 inline-block px-6 py-2 rounded-full ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <span className="font-semibold">
              Built with Bun + Vite + React + Tailwind CSS
            </span>
          </div>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>

          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
export default App