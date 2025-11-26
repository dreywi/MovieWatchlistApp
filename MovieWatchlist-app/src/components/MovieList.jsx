function MovieList({ title, movies, onToggleStatus, onDelete }) {
  return (
    <div className="movie-list">
      <h2>{title} ({movies.length})</h2>
      {movies.length === 0 ? (
        <p className="empty">Список пуст</p>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <div key={movie.id} className="movie-item">
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className="year">{movie.year}</span>
              </div>
              <div className="movie-actions">
                <button 
                  className="status-btn"
                  onClick={() => onToggleStatus(movie.id)}
                >
                  {title === "Хочу посмотреть" ? "✅" : "↩️"}
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => onDelete(movie.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieList