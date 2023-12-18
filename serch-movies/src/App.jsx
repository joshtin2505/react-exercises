import './App.css'
import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSerch from './hooks/useSerch'
import debounce from 'just-debounce-it'
function App() {
  const [sort, setSort] = useState(false)
  const [search, setSerch, err] = useSerch()
  const {movies, getMovies, error, loading} = useMovies({search, sort})

  const debouncedSearch = useCallback(debounce(search => {
    getMovies({search})
  }, 500)
  ,[getMovies]
  )


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})

    /* 
    para obtener un solo value
    Esta es otra manera de obtener el value
      const fields = new FormData(event.target)
      const query = fields.get('query')
    */
    /* 
    para obtener un solo value
    Esta es otra manera de obtener el value
      const fields = Object.fromEntries( new FormData(event.target))
    */

    //Tambien puedes obtener el value de esta manera ("event.target.query.value") aqui debes llenar el nombre del input en este caso "query" y luego poner la propiedad del input que quieres en este caso un "value"
  } 
  const handleSort = () => {
    setSort(!sort)
  }
  const handleChange = (e) =>{
    const newSearch = e.target.value
    setSerch(e.target.value)
    debouncedSearch(newSearch)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={search} style={ err && {border: '2px solid red'}} onChange={handleChange} name='query' placeholder="God's not Dead, I can Only Imagen...." />
          <label htmlFor="">
            <input type="checkbox" onChange={handleSort} checked={sort} name="sort" id="" />
            Sort by Title
          </label>
          <button type="submit">Search</button>
        </form>
        {
          err && <p style={{
            color: 'red'
            }}>{err}</p>
        }
        {
          error && <p style={{
            color: 'red'
            }}>{error}</p>
        }
        
      </header>

      <main>
        {
          loading ? <p>Carcando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
