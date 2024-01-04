import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { useFilters } from "./hooks/useFilters.js"
import Cart from "./components/Cart.jsx"
import CartProvider from "./context/CartContext.jsx"

function App() {
  const { filterProducts, filters } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
