import { useState } from 'react'

function MovieForm({ onSave, onCancel }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onSave(title.trim())
      setTitle('')
    }
  }

  return (
    <div className="movie-form-overlay">
      <div className="movie-form">
        <h2>Добавить фильм</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название фильма"
            autoFocus
          />
          <div className="form-actions">
            <button type="button" onClick={onCancel}>Отмена</button>
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MovieForm