import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/FormInput";
import { Header } from "../Header/Header";
import "../Login/Login.css";
import { useDarkMode } from "../../context/DarkModeContext";

export const Signup = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { darkMode } = useDarkMode();
  const handleSignup = () => {
    if (password !== confirmPassword) {
      return alert("Please check your paassword");
    }
    const userData = { email, password };
    login(userData);
  };
  
  return (
    <div  className={darkMode ? "login-page-dark" : "login-page"}>
      <Header />
      <div className="login-main">
        <form onSubmit={handleSignup} className="  login-form">
          <h1>Sign Up</h1>
          <FormInput
            id="username"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
