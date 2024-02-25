import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Signup } from "./pages/Signup/Signup.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { ProtectedRouteLogin } from "./components/ProtectedRouteLogin.jsx";
import "./App.css";
import "./styles/variables.css";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        
        <Route element={<ProtectedRouteLogin />}>
        <Route path="/" element={<Login />} />
        </Route>
         <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
