import React from 'react'

export const FETCH_STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3
}

const MoviesContext = React.createContext()

export function MoviesProvider(props) {
  const [movies, setMovies] = React.useState([])
  const [status, setStatus] = React.useState(FETCH_STATUS.idle)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  async function fetchMovies() {
    setStatus(FETCH_STATUS.pending)
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      if (!response.ok) throw new Error('Could not fetch data', response)
      const responseBody = await response.json()
      setMovies(responseBody.results)
      setStatus(FETCH_STATUS.resolved)
    } catch (err) {
      setError(err)
      setStatus(FETCH_STATUS.rejected)
    }
  }

  return <MoviesContext.Provider value={[movies, status, error]} {...props} />
}

export function useMovies() {
  const context = React.useContext(MoviesContext)
  if (!context)
    throw new Error('useMovies hook must be called within a MoviesProvider')
  return context
}
