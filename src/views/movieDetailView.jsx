import { observer } from "mobx-react-lite";
import "/src/style/movieDetail.css";
import placeholderImage from '../../assets/placeholder.png';
import imdbLogo from '../../assets/IMDB.png';
import rtLogo from '../../assets/RT.png';

export const MovieDetailView = observer(function MovieDetailView(props) {
    const movie = props.selectedMovie;

    function returnHomeACB() {
        window.location.href = "#/"
    }

    function addToWatchlistACB(){
        props.onAddToWatchlist()
    }

    if (!movie) {
        return (
            <div className="movie-detail-container">
                <h2>Movie not found</h2>
                <button onClick={() => returnHomeACB()}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="movie-detail-wrapper">
            <div 
                className="movie-hero"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%), url(${movie.Poster || placeholderImage})`
                }}
            >
                <button className="back-btn" onClick={() => returnHomeACB()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>

                <div className="hero-content">
                    <h1 className="movie-title-hero">{movie.name}</h1>
                </div>
            </div>

            <div className="movie-info-container">
                <div className="movie-meta-row">
                    <div className="meta-items">
                        {movie.genre && movie.genre.split(',').map((g, i) => (
                            <span key={i} className="meta-item">{g.trim()}</span>
                        ))}
                    </div>
                </div>

                <div className="movie-details-row">
                    <span className="detail-item">{movie.year}</span>
                    <span className="detail-item imdb-badge">
                        <img src={imdbLogo} alt="IMDB" className="rating-logo-detail" />
                        <strong>{movie.imdb_rating}</strong>
                    </span>
                    <span className="detail-item rt-badge">
                        <img src={rtLogo} alt="Rotten Tomatoes" className="rating-logo-detail" />
                        <strong>{movie.rt_rating}</strong>
                     </span>
                </div>

                {movie.description && (
                    <div className="description-section">
                        <p className="description-text">{movie.description}</p>
                    </div>
                )}

                <div className="action-buttons">
                    <button className="action-btn primary" onClick={addToWatchlistACB}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {props.isInWatchlist ? (
                                <path d="M5 13l4 4L19 7"/>
                            ) : (
                                <path d="M12 5v14M5 12h14"/>
                            )}
                        </svg>
                        {props.isInWatchlist ? 'Added' : 'Add to Watchlist'}
                    </button>
                </div>

                <div className="external-links-section">
                    <div className="streaming-buttons">
                        {movie.imdb_id && (
                            <a 
                                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="streaming-btn imdb-btn"
                            >
                                View on IMDB
                            </a>
                        )}
                        
                        <button className="streaming-btn netflix-btn">
                            Watch on Netflix
                        </button>
                        
                        <button className="streaming-btn hbo-btn">
                            Watch on HBO Max
                        </button>
                    </div>
        
                </div>
            </div>
        </div>
    );
});