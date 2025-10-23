import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import '/src/style/vibeModal.css';

export const VibeModal = observer(function VibeModal({ isOpen, onClose, selectedVibes, onVibeToggle, onVibesClear, onVibeAdd }) {
  const [vibes, setVibes] = useState([
    'Cozy', 'Autumn', 'Summer', 'Make me laugh',
    'Mystery', "90's", "80's", 'Political', 'Christmas'
  ]);
  const [newVibe, setNewVibe] = useState('');
  const [showInput, setShowInput] = useState(false);

  const toggleVibe = (vibe) => {
    onVibeToggle(vibe);
  };

  const handleClear = () => {
    onVibesClear();
  };

  const handleAddVibe = () => {
    if (newVibe.trim() && !vibes.includes(newVibe.trim())) {
      setVibes([...vibes, newVibe.trim()]);
      if (onVibeAdd) {
        onVibeAdd(newVibe.trim());
      }
      setNewVibe('');
      setShowInput(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddVibe();
    }
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
            
            {showInput ? (
              <div className="add-vibe-input-container">
                <input
                  type="text"
                  className="add-vibe-input"
                  placeholder="New vibe..."
                  value={newVibe}
                  onChange={(e) => setNewVibe(e.target.value)}
                  onKeyPress={handleKeyPress}
                  autoFocus
                />
                <button className="confirm-add-btn" onClick={handleAddVibe}>
                  ✓
                </button>
                <button className="cancel-add-btn" onClick={() => {
                  setShowInput(false);
                  setNewVibe('');
                }}>
                  ×
                </button>
              </div>
            ) : (
              <button
                className="tag-btn add-btn"
                onClick={() => setShowInput(true)}
              >
                + Add Vibe
              </button>
            )}
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