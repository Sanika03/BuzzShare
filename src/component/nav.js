import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from "../contexts/authContext";

import "../styles/nav.css";
import { useUser } from "../contexts/userContext";

const activeStyle = {
  backgroundColor: "#171e35",
  borderRadius: "2rem",
  width: "max-content"
};

export const Nav = () => {
  const { currUser, logoutHandler } = useAuth();
  const { users } = useUser()

  const navigate = useNavigate();

  const user = users?.find((user) => user?.username === currUser?.username)

  const handleLogout = () => logoutHandler();
  
  const getTitle = () => <div className="app-heading" onClick={() => navigate("/")}>
    <img src="https://res.cloudinary.com/dnagcmyka/image/upload/v1687499676/BuzzShare_2_eosvva.png" className="app-logo" alt="App logo"/>
    <p className="app-title">BuzzShare</p>
  </div>

  const getNav = () => <div className="nav-container">
    <NavLink to="/" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
      <FontAwesomeIcon icon={faHouse} className="icon"/>
      Home
    </NavLink>
    <NavLink to="/explore" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
      <FontAwesomeIcon icon={faCompass} className="icon"/>
      Explore
    </NavLink>
    <NavLink to="/bookmarks" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
      <FontAwesomeIcon icon={faBookmark} className="icon"/>
      Bookmarks
    </NavLink>
    <button onClick={() => handleLogout()}  className="logout-btn">Logout</button>
  </div>

  const getProfileLink = () => <div className="user-profile">
    <NavLink to={`/profile/${user?.username}`} className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
      <img src={user?.profileAvatar} alt="User Avatar" className="user-avatar"/>
      <div className="user-details-container">
        <p className="user-details max">{user?.firstName} {user?.lastName}</p>
        <p className="user-details-username">@{user?.username}</p>
      </div>
    </NavLink>
  </div>

  return (
    <div className="main-nav">
      {getTitle()}
      {getNav()}
      {getProfileLink()}
    </div>
  );
}