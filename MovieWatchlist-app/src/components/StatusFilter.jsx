function StatusFilter({ selectedStatus, onStatusChange, status }) {
  return (
    <div className="status-filter">
      <h2>Фильтр по статусу:</h2>
      <div className="status-buttons">
        <button
          className={`status-button ${selectedStatus === status.ALL ? 'active' : ''}`}
          onClick={() => onStatusChange(status.ALL)}
        >
          Все фильмы
        </button>
        <button
          className={`status-button ${selectedStatus === status.WANT_TO_WATCH ? 'active' : ''}`}
          onClick={() => onStatusChange(status.WANT_TO_WATCH)}
        >
          Хочу посмотреть
        </button>
        <button
          className={`status-button ${selectedStatus === status.WATCHED ? 'active' : ''}`}
          onClick={() => onStatusChange(status.WATCHED)}
        >
          Посмотрено
        </button>
      </div>
    </div>
  )
}

export default StatusFilter