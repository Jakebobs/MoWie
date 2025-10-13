import React, { useEffect, useState } from "react";
import "../style/global.css";
import "../style/authView.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export function AuthView(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InvalidCredential, setInvalidCredential] = useState(false);

  async function loginACB(e) {
  }

  return (
    <div>
      <center>
        <h2 className="title">Please login here</h2>
        <div className="login-wrapper">
          <form onSubmit={loginACB}>
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
            {InvalidCredential && (
              <div className="error-text">
                <p>Login failed</p>
              </div>
            )}
            <button type="submit" className="btn">
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="#register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}