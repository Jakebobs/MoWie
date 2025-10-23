import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import "/src/style/homePage.css";
import "/src/style/global.css";
import { VibeModal } from "../components/vibeModal.jsx";
import { GenreModal } from "../components/genreModal.jsx";
import { MoodModal } from "../components/moodModal.jsx";
import placeholderImage from '../../assets/placeholder.png';

export const HomePage = observer(function HomePage(props) {
    const [activeModal, setActiveModal] = useState(null);

    function handleEnterPressACB(evt) {
        if (evt.key === 'Enter') {
            submitACB();
        }
    }

     function submitACB() {
        props.onSubmit()
    }

    function loadRandomTopicsACB(){
        props.onLoadTopics();
    }

    function setQueryACB(evt) {
        props.onSetQuery(evt.target.value)
    }

    function handleVibeToggleACB(vibe) {
        props.onVibeToggle(vibe);
    }

    function handleVibesClearACB() {
        props.onVibesClear();
    }

    function handleGenreToggleACB(genre) {
        props.onGenreToggle(genre);
    }

    function handleGenresClearACB() {
        props.onGenresClear();
    }

    function handleMoodToggleACB(mood) {
        props.onMoodToggle(mood);
    }

    function handleEnergyChangeACB(value) {
        props.onEnergyChange(value);
    }

    function handleAttentionChangeACB(value) {
        props.onAttentionChange(value);
    }

    function handleMoodResetACB() {
        props.onMoodReset();
    }

    function handleDropdownClickACB(option) {
        setActiveModal(option.toLowerCase());
    }  

    function handleTopicClickACB(topic) {
        props.onTopicToggle(topic);
    }

    function selectMovieACB(movie){
        props.onMovieSelect(movie);
        window.location.href = `#/movie/${movie.imdb_id}`;
    }

    const hasVibesSelected = props.selectedVibes && props.selectedVibes.length > 0;

    const hasGenresSelected = props.selectedGenres && props.selectedGenres.length > 0;

    const hasMoodSelected = (props.selectedMoods && props.selectedMoods.length > 0) ||
                            props.energyLevel !== 50 ||
                            props.attentionLevel !== 50;


    useEffect(() => {
    if (props.model?.topics?.length > 0) {
        loadRandomTopicsACB();
    }
    }, []);

    return (
        <div className="movie-finder-wrapper">
        <div className="container">
            {props.result === 0 && <h1>Let the Wizard Find You a Movie!</h1>}
            <div className="search-box">
                <input type="text" className="search-input" onChange={setQueryACB} onKeyDown={handleEnterPressACB} placeholder="I want the Movie to have the vibe of..."></input>
                <span className="search-icon" onClick={submitACB}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </span>
            </div>

            <div className="filter-section">
                {props.randomTopics?.map((topic, i) => (
                        <button 
                            key={i} 
                            className={`filter-btn ${props.selectedTopics?.includes(topic) ? 'selected' : ''}`}
                            onClick={() => handleTopicClickACB(topic)}
                        >
                            {topic}
                        </button>
                ))}
            </div>

            <div className="dropdown-section">
                <div 
                    className={`dropdown ${hasVibesSelected ? 'selected' : ''}`}
                    onClick={() => handleDropdownClickACB('Vibe')}
                >
                    Vibe
                </div>
                <div 
                    className={`dropdown ${hasGenresSelected ? 'selected' : ''}`}
                    onClick={() => handleDropdownClickACB('Genre')}
                >
                    Genre
                </div>
                <div 
                    className={`dropdown ${hasMoodSelected ? 'selected' : ''}`}
                    onClick={() => handleDropdownClickACB('Set the Mood')}
                >
                    Set the Mood
                </div>
            </div>


            <VibeModal
                isOpen={activeModal === 'vibe'}
                onClose={() => setActiveModal(null)}
                selectedVibes={props.selectedVibes || []}
                onVibeToggle={handleVibeToggleACB}
                onVibesClear={handleVibesClearACB}
            />

            <GenreModal
                isOpen={activeModal === 'genre'}
                onClose={() => setActiveModal(null)}
                selectedGenres={props.selectedGenres || []}
                onGenreToggle={handleGenreToggleACB}
                onGenresClear={handleGenresClearACB}
            />

            <MoodModal
                isOpen={activeModal === 'set the mood'}
                onClose={() => setActiveModal(null)}
                selectedMoods={props.selectedMoods || []}
                onMoodToggle={handleMoodToggleACB}
                energyLevel={props.energyLevel || 50}
                onEnergyChange={handleEnergyChangeACB}
                attentionLevel={props.attentionLevel || 50}
                onAttentionChange={handleAttentionChangeACB}
                onMoodReset={handleMoodResetACB}
            />

            <div className="trending-section">
                {props.result !== 0 ? (
                    <>
                    <h2 className="trending-title">The Wizard Recommends:</h2>
                        <div className="movie-grid">
                            {props.model.result.map((movie, index) => (
                                <div
                                    key={movie.imdb_id}
                                    className="movie-card"
                                    style={{
                                        backgroundImage: `url(${movie.Poster || placeholderImage})`,
                                    }}
                                    onClick={() => {
                                        selectMovieACB(movie)
                                    }}
                                >
                                    <div className="movie-rank">{index + 1}</div>

                                    <div className="movie-overlay">
                                        <h4 className="movie-title">{movie.name}</h4>
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
                    </>
                ) : (
                    <>
                        <h2 className="trending-title">Currently trending</h2>
                        <div className="movie-grid">
                            {props.testMovies.map((movie, index) => (
                                <div
                                    key={movie.id}
                                    className="movie-card"
                                    style={{
                                        backgroundImage: `url(${placeholderImage})`,
                                    }}
                                    onClick={() => {
                                        
                                        const testMovie = {
                                            name: movie.title,
                                            year: movie.year,
                                            genre: movie.genre,
                                            imdb_rating: movie.imdb_rating,
                                            rt_rating: movie.rt_rating,
                                            imdb_id: movie.id
                                        };
                                        selectMovieACB(testMovie)
                                    }}
                                >
                                    <div className="movie-rank">
                                        {index + 1}
                                    </div>
                                    <div className="movie-overlay">
                                        <h4 className="movie-title">{movie.title}</h4>
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
                    </>
                )}
            </div>
        </div>
    </div>
    );
});