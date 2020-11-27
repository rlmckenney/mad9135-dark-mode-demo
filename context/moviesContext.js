import React from 'react'

const MoviesContext = React.createContext()

function MoviesProvider(props) {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    ;(async function () {
      const {movieData} = await import('../data/swapi.films')
      setMovies(movieData)
    })()
  }, [])

  return <MoviesContext.Provider value={[movies]} {...props} />
}

function useMovies() {
  const context = React.useContext(MoviesContext)
  if (!context)
    throw new Error('useMovies hook must be called within a MoviesProvider')
  return context
}

export {MoviesProvider, useMovies}
