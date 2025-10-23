import { observer } from "mobx-react-lite";
import "/src/style/homePage.css";
import placeholderImage from '../../assets/placeholder.png';

export const WatchlistView = observer(function WatchlistView(props) {
    function selectMovieACB(movie){
        props.onMovieSelect(movie);
        window.location.href = `#/movie/${movie.imdb_id}`;
    }
    
    return (
        <div className="movie-finder-wrapper">
            <div className="container">
                <h1>My Watchlist</h1>
                
                {props.watchlist && props.watchlist.length > 0 ? (
                    <div className="trending-section">
                        <div className="movie-grid">
                            {props.watchlist.map((movie, index) => (
                                <div
                                    key={movie.imdb_id || movie.id}
                                    className="movie-card"
                                    style={{
                                        backgroundImage: `url(${movie.Poster || placeholderImage})`,
                                    }}
                                    onClick={() => {
                                        selectMovieACB(movie);
                                    }}
                                >

                                    <div className="movie-overlay">
                                        <h4 className="movie-title">{movie.name || movie.title}</h4>
                                        <div className="movie-details">
                                            <span>{movie.year}</span>
                                            <span>{movie.genre}</span>
                                            <span>IMDB: {movie.imdb_rating}</span>
                                            <span>RT: {movie.rt_rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Your watchlist is empty.</p>
                )}
            </div>
        </div>
    );
});