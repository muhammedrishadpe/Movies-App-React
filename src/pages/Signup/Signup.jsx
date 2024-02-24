import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const { signup } = useAuth();
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      return alert("Please check your paassword");
    }
    const userData = { email, password };
    signup(userData);
    alert("Successfully signed up. Now, login <3.")
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};
