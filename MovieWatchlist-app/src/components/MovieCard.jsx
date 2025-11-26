function MovieCard({ movie, onToggleStatus, onEdit, onDelete }) {
  const handlePosterError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x450/4a5568/ffffff?text=No+Poster'
  }

  return (
    <div className={`movie-card ${movie.status}`}>
      <div className="movie-poster">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          onError={handlePosterError}
        />
        <div className="movie-year">{movie.year}</div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-director">Режиссер: {movie.director}</p>
        <p className="movie-description">{movie.description}</p>
        
        {movie.rating && (
          <div className="movie-rating">
            ⭐ Рейтинг: {movie.rating}/10
          </div>
        )}
        
        <div className="movie-actions">
          <button
            className={`status-toggle ${movie.status}`}
            onClick={() => onToggleStatus(movie.id)}
          >
            {movie.status === 'wantToWatch' ? '✅ Отметить просмотренным' : '↩️ Вернуть в желаемое'}
          </button>
          
          <div className="action-buttons">
            <button 
              className="edit-button"
              onClick={() => onEdit(movie)}
            >
              ✏️
            </button>
            <button 
              className="delete-button"
              onClick={() => onDelete(movie.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard