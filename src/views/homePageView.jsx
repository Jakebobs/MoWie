import "/src/style/homePage.css";
import "/src/style/global.css";

export function HomePage(props) {
    function handleEnterPressACB(evt) {
        if (evt.key === 'Enter') {
            submitACB();
        }
    }

     function submitACB() {
        props.onSubmit()
    }

    function setQueryACB(evt) {
        props.onSetQuery(evt.target.value)
    }

    return (
        <div className="movie-finder-wrapper">
        <div className="container">
            <h1>Let me find you a Movie!</h1>
            
            <div className="search-box">
                <input type="text" className="search-input" onChange={setQueryACB} onKeyDown={handleEnterPressACB} placeholder="I want the Movie to have the vibe of..."></input>
                <span className="search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </span>
            </div>

            {
            props.result===0
            ? <h3>No result</h3>
                : <div>
                    <h3> The wizard recommends:</h3>
                        <div>
                            {props.model.result.map((movie, index) => (
                                <div key={movie.imdb_id}>
                                    {index + 1}. {movie.name} ({movie.year}, {movie.genre}, {movie.imdb_rating}, {movie.rt_rating})
                                </div>
                            ))}
                        </div>
                    </div>
            }

            <div className="filter-section">
                <button className="filter-btn">Break-up</button>
                <button className="filter-btn">Political</button>
                <button className="filter-btn">Sad Crime</button>
                <button className="filter-btn">Korean Thriller</button>
                <button className="filter-btn">Survival Game</button>
                <button className="filter-btn">Scary Zombies</button>
            </div>

            <div className="dropdown-section">
                <div className="dropdown">Series</div>
                <div className="dropdown">Genre</div>
                <div className="dropdown">Vibe</div>
                <div className="dropdown">Set the Mood</div>
                <div className="dropdown">IMDB Rating</div>
                <div className="dropdown">Streaming Services</div>
            </div>

            <div className="trending-section">
                <h2 className="trending-title">Currently Trending This Week</h2>
                <div className="movie-grid">
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                </div>
            </div>
        </div>
    </div>
    );
}