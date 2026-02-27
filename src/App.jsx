import './App.css'
import Card from './components/cards'

function App() {
  return (
    <>  
      <h1>Mangal Baazar</h1>
      <p>Your One Stop Shop for all your needs</p>
      
      <div className="flex flex-row gap-1">
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