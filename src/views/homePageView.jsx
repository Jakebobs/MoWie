
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
        <div className="home-container">
            <div className="glass-panel">
                <center>
                    <h1 className="title">MoWie</h1>
                    <h2 className="subtitle">The movie magician</h2>
                    <p className="description">
                    </p>
                     <div className="guess-window">
                            <input type="text" placeholder="Write your query here" onChange={setQueryACB} onKeyDown={handleEnterPressACB} />
                            <button onClick={submitACB}>Submit!</button>
                    </div>
                    {
                        props.result===0
                        ? <h3>No result</h3>
                        : <div>
                            <h3> The wizard recommends:</h3>
                                <div>
                                    {props.model.result.map((movie, index) => (
                                        <div key={movie.imdb_id}>
                                            {index + 1}. {movie.name} ({movie.year})
                                        </div>
                                    ))}
                                </div>
                          </div>
                        }
                </center>
            </div>
        </div>
    );
}