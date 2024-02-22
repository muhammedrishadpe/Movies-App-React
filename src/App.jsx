
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/authentication/Login/Login";
import { Home } from "./components/Home/Home.jsx";

import "./App.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProtectedRoute } from "./routes/ProtectedRoute.jsx";
// import { Secret } from "./components/Secret/Secret.jsx";
import './styles/variables.css'
function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  </AuthProvider>
  );
}

export default App;