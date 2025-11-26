import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

// Перенесем константы прямо в App.jsx
const STATUS = {
  WANT_TO_WATCH: 'wantToWatch',
  WATCHED: 'watched'
}

const INITIAL_MOVIES = [
  {
    id: 1,
    title: "Крестный отец",
    year: 1972,
    status: STATUS.WANT_TO_WATCH
  },
  {
    id: 2,
    title: "Побег из Шоушенка", 
    year: 1994,
    status: STATUS.WATCHED
  },
  {
    id: 3,
    title: "Темный рыцарь",
    year: 2008,
    status: STATUS.WANT_TO_WATCH
  }
]

function App() {
  const [movies, setMovies] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const savedMovies = localStorage.getItem('movieWatchlist')
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies))
    } else {
      setMovies(INITIAL_MOVIES)
    }
  }, [])

  const saveMovies = (newMovies) => {
    localStorage.setItem('movieWatchlist', JSON.stringify(newMovies))
    setMovies(newMovies)
  }

  const addMovie = (title) => {
    const newMovie = {
      id: Date.now(),
      title,
      year: new Date().getFullYear(),
      status: STATUS.WANT_TO_WATCH
    }
    saveMovies([...movies, newMovie])
    setShowForm(false)
  }

  const toggleStatus = (movieId) => {
    const newMovies = movies.map(movie => 
      movie.id === movieId 
        ? { 
            ...movie, 
            status: movie.status === STATUS.WANT_TO_WATCH ? STATUS.WATCHED : STATUS.WANT_TO_WATCH 
          }
        : movie
    )
    saveMovies(newMovies)
  }

  const deleteMovie = (movieId) => {
    const newMovies = movies.filter(movie => movie.id !== movieId)
    saveMovies(newMovies)
  }

  const wantToWatchMovies = movies.filter(m => m.status === STATUS.WANT_TO_WATCH)
  const watchedMovies = movies.filter(m => m.status === STATUS.WATCHED)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Мой список фильмов</h1>
        <p>Простое приложение для отслеживания просмотренных фильмов</p>
      </header>

      <main className="app-main">
        <button 
          className="add-button"
          onClick={() => setShowForm(true)}
        >
          + Добавить фильм
        </button>

        {showForm && (
          <MovieForm 
            onSave={addMovie}
            onCancel={() => setShowForm(false)}
          />
        )}

        <div className="movies-container">
          <MovieList 
            title="Хочу посмотреть"
            movies={wantToWatchMovies}
            onToggleStatus={toggleStatus}
            onDelete={deleteMovie}
          />
          
          <MovieList 
            title="Посмотрено"
            movies={watchedMovies}
            onToggleStatus={toggleStatus}
            onDelete={deleteMovie}
          />
        </div>
      </main>
    </div>
  )
}

export default App