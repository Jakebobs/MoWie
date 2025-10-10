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
        <div class="movie-finder-wrapper">
        <div class="container">
            <h1>Let me find you a Movie!</h1>
            
            <div class="search-box">
                <input type="text" class="search-input" placeholder="I want the Movie to have the vibe of..."></input>
                <span class="search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </span>
            </div>

            <div class="filter-section">
                <button class="filter-btn">Break-up</button>
                <button class="filter-btn">Political</button>
                <button class="filter-btn">Sad Crime</button>
                <button class="filter-btn">Korean Thriller</button>
                <button class="filter-btn">Survival Game</button>
                <button class="filter-btn">Scary Zombies</button>
            </div>

            <div class="dropdown-section">
                <div class="dropdown">Series</div>
                <div class="dropdown">Genre</div>
                <div class="dropdown">Vibe</div>
                <div class="dropdown">Set the Mood</div>
                <div class="dropdown">IMDB Rating</div>
                <div class="dropdown">Streaming Services</div>
            </div>

            <div class="trending-section">
                <h2 class="trending-title">Currently Trending This Week</h2>
                <div class="movie-grid">
                    <div class="movie-card"></div>
                    <div class="movie-card"></div>
                    <div class="movie-card"></div>
                    <div class="movie-card"></div>
                </div>
            </div>
        </div>
    </div>
    );
}