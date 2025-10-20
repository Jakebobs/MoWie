import { observer } from 'mobx-react-lite';
import '/src/style/genreModal.css';

export const GenreModal = observer(function GenreModal({ isOpen, onClose, selectedGenres, onGenreToggle, onGenresClear }) {
  const genres = [
    'Romance', 'Comedy', 'Horror', 'Drama', 'Adventure',
    'Action', 'Thriller', 'Sci-Fi', 'Fantasy', 'Documentary'
  ];

  const toggleGenre = (genre) => {
    onGenreToggle(genre);
  };

  const handleClear = () => {
    onGenresClear();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content tag-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Genre</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="tag-list">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`tag-btn-list ${selectedGenres.includes(genre) ? 'selected' : ''}`}
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="reset-btn" onClick={handleClear}>
            Clear All
          </button>
          <button className="apply-btn" onClick={onClose}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
});