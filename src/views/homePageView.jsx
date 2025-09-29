
export function HomePage() {
    return (
        <div className="home-container">
            <div className="glass-panel">
                <center>
                    <h1 className="title">What Am I Looking At?</h1>
                    <h2 className="subtitle">The ultimate guessing game!</h2>
                    <p className="description">
                        Think fast, guess faster! <strong>In What Am I Looking At?</strong>, your mission is simple:
                        identify the mystery image before time runs out. The faster you guess, the higher your score!
                        Stay sharp, challenge your friends, and see who reigns supreme on the leaderboard!
                    </p>
                </center>
                <button className="btn-play" onClick={() => window.location.href = "#gameSetup"}>
                    Start Game
                </button>
            </div>
        </div>
    );
}