import { useState, createContext } from "react"
import { products as initialProducts } from "../mocks/products.json"
import { useFilters } from "../hooks/useFilters.js"

export const FilterContext = createContext()

function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })
    const [products, setProducts] = useState(initialProducts)
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(products)


    return (
        <FilterContext.Provider value={{ 
                filters,
                setFilters, 
                filteredProducts
            }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider