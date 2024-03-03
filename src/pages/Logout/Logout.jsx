import { useAuth } from "../../context/AuthContext";
import userImg from "../../assets/user.png"
import '../Logout/Logout.css'
export const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="logout-container">
      <button id="logout-button" onClick={handleLogout}><p>Logout</p> <img
               width={"25px"} height={"25px"} src={userImg}
              /></button>
    </div>
  );
};