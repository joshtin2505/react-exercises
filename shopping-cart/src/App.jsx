import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { useFilters } from "./hooks/useFilters.js"

function App() {
  const { filterProducts, filters } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  
  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
