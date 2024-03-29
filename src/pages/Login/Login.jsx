import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FormInput } from "../../components/FormInput.jsx";
import { Header } from "../Header/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext.jsx";
import "./Login.css";
import "../../styles/globel.css";
export const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { darkMode } = useDarkMode();

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      login(userData);
    } else {
      alert("please check your email or password");
    }
  };
  return (
    <div className={darkMode ? "login-page-dark" : "login-page"}>
      <Header />
      <div className="login-main">
        <form onSubmit={handleLogin} className="login-form">
          <h1>Sign In</h1>
          <FormInput
            id="username"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          <p>Forgot Password?</p>
        </form>
        <p className="signup-p">
          New to Moovis?{" "}
          <span onClick={() => navigate("signup")}>Sign up now.</span>
        </p>
      </div>
    </div>
  );
};
