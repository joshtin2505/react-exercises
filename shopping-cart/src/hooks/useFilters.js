import {useContext} from "react"
import { FilterContext } from "../context/FilterContext.jsx"

export function useFilters(){
    const {filters, setFilters} = useContext(FilterContext)

    const filterProducts = (products) => {
      // Recibe por parametro los productos a ser filtrados
      return products.filter(product => {
        // retorna productos filtrados
        return (
          // prodcto condicionado a precio
          product.price >= filters.minPrice &&
          (
            // producto condicionado a categoria
            filters.category === "all" ||
            filters.category === product.category
          )
        )
      })
    }
  
    return { filterProducts, setFilters, filters}
}
