const API_KEY = '3117a857'

export const searchMovies = async ({search}) => {
    const mappedMovies = (movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
        type: movie.Type
    })
    if (search === '') return null
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await res.json()
        const movies = json.Search

        return movies?.map(mappedMovies)

    } catch (error) {
        throw new Error('Error searching movies')
    }


}