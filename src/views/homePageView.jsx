
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
                </center>
            </div>
        </div>
    );
}