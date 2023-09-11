import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies} = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries( new FormData(event.target))

    /* 
    para obtener un solo value
    Esta es otra manera de obtener el value
      const fields = new FormData(event.target)
      const query = fields.get('query')
    */

    //Tambien puedes obtener el value de esta manera ("event.target.query.value") aqui debes llenar el nombre del input en este caso "query" y luego poner la propiedad del input que quieres en este caso un "value"
    console.log(fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder="God's not Dead, I can Only Imagen...." />
          <input name='toro' placeholder="God's not Dead, I can Only Imagen...." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
