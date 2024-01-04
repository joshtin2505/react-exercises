import { useState, createContext } from "react"
export const FilterContext = createContext()

function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })

    return (
        <FilterContext.Provider value={{ 
                filters,
                setFilters,
            }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider