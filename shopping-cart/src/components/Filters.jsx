import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import {useState, useId} from 'react'
function Filters() {

  const {filters, setFilters} = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({ 
      ...prevState, 
      minPrice: event.target.value 
      })
    )
  }
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({ 
      ...prevState, 
      category: event.target.value 
      })
    )
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio minimo</label>
        <input 
        type="range"
        name="range"
        id={minPriceFilterId} 
        min="0" 
        max={1500}
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categorias</label>
        <select onChange={handleChangeCategory} name="category" id={categoryFilterId}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="home-decoration">casa</option>
          <option value="smartphones">Telefonos</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Cremas</option>
          <option value="groceries">Verduras</option>
        </select>
      </div>
    </section>
  )
}

export default Filters