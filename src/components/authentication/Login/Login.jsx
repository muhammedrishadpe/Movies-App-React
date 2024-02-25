import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Form } from "react-router-dom";
import "../Login/Login.css";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="login-page">
      <div className="login-main">
        <form onSubmit={handleLogin} className="login-form">
          <h1>Sign In</h1>
          <input
            id="username"
            type="text"
            placeholder="Email or phone number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          <p>Forgot Password?</p>
        </form>
        <p className="signup-p">
          <span>New to Moovis? </span>Sign up now.
        </p>
      </div>
    </div>
  );
};
