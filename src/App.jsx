import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Signup } from "./pages/Signup/Signup.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { ProtectedRouteLogin } from "./components/ProtectedRouteLogin.jsx";
import { Footer } from "./pages/footer/Footer.jsx";
import { Header } from "./pages/Header/Header.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import "./App.css";
import "./styles/globel.css";
import "./styles/variables.css";

function App() {
  return (
     <AuthProvider>
    <DarkModeProvider >
  
      <Routes>
        <Route  path="/signup"  element={<Signup />} />  
        <Route element={<ProtectedRouteLogin />}>
        <Route path="/" element={<Login />} />
        </Route>
         <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
