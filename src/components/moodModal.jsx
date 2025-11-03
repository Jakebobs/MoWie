import { observer } from 'mobx-react-lite';
import '/src/style/moodModal.css';

export const MoodModal = observer(function MoodModal({ isOpen, onClose, selectedMoods, onMoodToggle, energyLevel, onEnergyChange, attentionLevel, onAttentionChange, onMoodReset }) {
  const moods = [
    { name: 'Happiness', emoji: '😊', color: '#FFD700' },
    { name: 'Surprise', emoji: '🤩', color: '#4A9EFF' },
    { name: 'Fear', emoji: '😱', color: '#FF6B35' },
    { name: 'Anger', emoji: '😠', color: '#FF4444' },
    { name: 'Curious', emoji: '🤔', color: '#FFA500' },
    { name: 'Sadness', emoji: '😢', color: '#6B8EFF' },
    { name: 'Disgust', emoji: '🤢', color: '#90B44B' }
  ];

  const toggleMood = (mood) => {
    onMoodToggle(mood);
  };

  const handleReset = () => {
    onMoodReset();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Set the Mood</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="filter-group">
            <h3>Mood</h3>
            <div className="mood-grid">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  className={`mood-btn ${selectedMoods.includes(mood.name) ? 'selected' : ''}`}
                  onClick={() => toggleMood(mood.name)}
                  style={{
                    borderColor: selectedMoods.includes(mood.name) ? mood.color : 'transparent'
                  }}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <span className="mood-name">{mood.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Energy</h3>
            <p className="slider-description">How energetic or intense do you want the movie to feel?</p>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="100"
                value={energyLevel}
                onChange={(e) => onEnergyChange(Number(e.target.value))}
                className="slider"
              />
              <div className="slider-labels">
                <span>Calm & Relaxed</span>
                <span>High Energy & Thrilling</span>
              </div>
            </div>
          </div>

          <div className="filter-group">
            <h3>Attention</h3>
            <p className="slider-description">How focused do you want to be while watching?</p>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="100"
                value={attentionLevel}
                onChange={(e) => onAttentionChange(Number(e.target.value))}
                className="slider"
              />
              <div className="slider-labels">
                <span>Casual Watching</span>
                <span>Fully Engaged</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="reset-btn" onClick={handleReset}>
            Clear All
          </button>
          <button className="apply-btn" onClick={onClose}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
});