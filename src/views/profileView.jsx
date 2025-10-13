import "/src/style/global.css";
import { FiLogIn } from "react-icons/fi";

export function ProfileView(props) {
    function logOutACB(){        
        props.onLogOut()
        window.location.href = "#"
    }

    return (
        <div>
            <div className="home-container">
                <div className="glass-panel">
                    <center>
                        <h1 className="title">Hello {props.model.user.email.split("@")[0]}!</h1>
                        <h2 className="subtitle">Current saved run:</h2>
                        {
                            props.storedRun[0]===0
                            ? <h3>No run saved.</h3>
                            : <div>
                                <h3> Category: {props.storedRun[0]}</h3>
                                <h3> Lives remaining: {props.storedRun[1]}</h3>
                                <h3> Round: {props.storedRun[2]}</h3>
                                <h3> Score: {props.storedRun[3]}</h3>
                                </div>
                        }
                        <button className="btn-play" onClick={logOutACB}><FiLogIn /> Log Out</button>
                    </center>
                </div>
            </div>
        </div >
    );
}