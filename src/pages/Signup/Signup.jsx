import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/FormInput";
import "../Login/Login.css";
export const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignup = () => {
    if (password !== confirmPassword) {
      return alert("Please check your paassword");
    }
    const userData = { email, password };
    login(userData);
  };
  return (
    <div className="login-page">
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

// <div>
//   <h2>Signup Page</h2>
//   <input
//     type="email"
//     placeholder="Enter your email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//   />
//   <input
//     type="password"
//     placeholder="Enter your password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//   />
//   <input
//     type="password"
//     placeholder="Confirm your password"
//     value={confirmPassword}
//     onChange={(e) => setConfirmPassword(e.target.value)}
//   />
//   <button onClick={handleSignup}>Signup</button>
// </div>
