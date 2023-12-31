export function Movies({movies}){
    const hasMovies = movies?.length > 0
    if (hasMovies){
         return (
            <ul className="movies">
              {
                movies.map(movie => (
                  <li className="movie" key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                  </li>
                ))
              }
            </ul>
         )
    }
    else{
           return <p>No se han encotrado peliculas para esta busqueda</p> 
           
    }
}