import { observer } from 'mobx-react-lite';
import '/src/style/vibeModal.css';

export const VibeModal = observer(function VibeModal({ isOpen, onClose, selectedVibes, onVibeToggle, onVibesClear }) {
  const vibes = [
    'Cozy', 'Autumn', 'Summer', 'Make me laugh',
    'Mystery', "90's", "80's", 'Political', 'Christmas'
  ];

  const toggleVibe = (vibe) => {
    onVibeToggle(vibe);
  };

  const handleClear = () => {
    onVibesClear();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content tag-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Vibe</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="tag-grid">
            {vibes.map((vibe) => (
              <button
                key={vibe}
                className={`tag-btn ${selectedVibes.includes(vibe) ? 'selected' : ''}`}
                onClick={() => toggleVibe(vibe)}
              >
                {vibe}
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