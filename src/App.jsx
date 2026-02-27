import './App.css'
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
  return (
    <>  
      <h1>Mangal Baazar</h1>
      <p>Your One Stop Shop for all your needs</p>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-row gap-1">
        <Button variant="outline">Click me</Button>
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
    </>
  )
}

export default App