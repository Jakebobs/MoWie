import { useState } from "react";
import "../style/global.css";
import "../style/authView.css";

export function RegisterView(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <center>
        <h2 className="title">Please register here</h2>
        <div className="login-wrapper">
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
  
            <button type="submit" className="btn">
              Register
            </button>

            <div className="register-link">
              <p>
                Already have an account? <a href="#auth">Login</a>
              </p>
            </div>
        </div>
      </center>
    </div>
  );
}