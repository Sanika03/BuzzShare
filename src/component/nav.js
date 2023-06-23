import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from "../contexts/authContext";

import "../styles/nav.css";

export const Nav = () => {
  const {currUser} = useAuth();
  
  const getTitle = () => <div className="app-heading">
    <img src="https://res.cloudinary.com/dnagcmyka/image/upload/v1687499676/BuzzShare_2_eosvva.png" className="app-logo" alt="App logo"/>
    <p className="app-title">BuzzShare</p>
  </div>

  const getNav = () => <div className="nav-container">
    <NavLink to="/" className="nav-link">
      <FontAwesomeIcon icon={faHouse} className="icon"/>
      Home
    </NavLink>
    <NavLink to="/explore" className="nav-link">
      <FontAwesomeIcon icon={faCompass} className="icon"/>
      Explore
    </NavLink>
    <NavLink to="/bookmarks" className="nav-link">
      <FontAwesomeIcon icon={faBookmark} className="icon"/>
      Bookmarks
    </NavLink>
    <button className="logout-btn">Logout</button>
  </div>

  const getProfileLink = () => <div className="user-profile">
    <NavLink to={`/profile/${currUser?.username}`} className="nav-link">
      <img src={currUser?.profileAvatar} alt="User Avatar" className="user-avatar"/>
      <div className="user-details-container">
        <p className="user-details">{currUser?.firstName} {currUser?.lastName}</p>
        <p className="user-details-username">@{currUser?.username}</p>
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