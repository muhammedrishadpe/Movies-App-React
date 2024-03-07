import { useAuth } from "../../context/AuthContext";
import userImg from "../../assets/user.png";
import "../Logout/Logout.css";
import { useDarkMode } from "../../context/DarkModeContext";
export const Logout = () => {
  const { logout } = useAuth();
  const { darkMode } = useDarkMode();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="logout-container">
      <button
        className={
          darkMode ? "logout-button" : "logout-button  logout-button-hover"
        }
        onClick={handleLogout}
      >
        <p>Logout</p>{" "}
        <img
          style={{
            width: "25px",
            height: "25px",
            filter: darkMode
              ? "none"
              : "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%) ",
          }}
          src={userImg}
        />
      </button>
    </div>
  );
};
