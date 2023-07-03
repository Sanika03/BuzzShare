import { useUser } from "../contexts/userContext";
import { useAuth } from "../contexts/authContext";
import { useState, useEffect } from "react";
import "../styles/suggestedUsers.css";
import { useNavigate } from "react-router";

export const SuggestedUsers = () => {
  const { users, followUserHandler } = useUser();
  const { currUser, token } = useAuth();
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const getFilteredUsers = (users, currUser) => {
    return users.filter(
      (user) =>
        user.username !== currUser.username &&
        !currUser.following?.some(
          (followingUser) => followingUser.username === user.username
        )
    );
  };

  useEffect(() => {
    const filteredUsers = getFilteredUsers(users, currUser);
    setSuggestedUsers(filteredUsers);
  }, [users, currUser]);

  const handleFollow = (e, id) => {
    e.stopPropagation();
    followUserHandler(token, id);

    setSuggestedUsers((prevUsers) =>
      prevUsers.filter((user) => user._id !== id)
    );
  };

  const getUsers = () => suggestedUsers.length > 0 && (
    <div id="s-users-container">
      <p className="bold">Suggested Users</p>
      {suggestedUsers.map((user) => (
        <div id="single-s-user-container" key={user._id} >
          <img
            src={user?.profileAvatar}
            alt="User Avatar"
            className="s-user-avatar"
            onClick={() => navigate(`/profile/${user?.username}`)}
          />
          <div className="user-details-container" onClick={() => navigate(`/profile/${user?.username}`)}>
            <p className="user-details s" >
              {user?.firstName} {user?.lastName}
            </p>
            <p className="user-details-username s">@{user?.username}</p>
          </div>
          <button onClick={(e) => handleFollow(e, user._id)} className="light-btn">
            Follow
          </button>
        </div>
      ))}
    </div>
  );

  const getSearch = () => <div id="search-container">
    <input type="search" placeholder="Search users..." id="search-bar" onChange={(e) => setSearchValue(e.target.value)}/>
  </div>

  const FilteredUsersBox = () => {
    const searchUsers = users.filter(({firstName, lastName, username}) => firstName.toLowerCase().includes(searchValue.toLowerCase()) || lastName.toLowerCase().includes(searchValue.toLowerCase()) || username.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <div id="searched-users-container">
        {searchUsers.length > 0 ? (searchUsers.map((user) => (
        <div id="single-s-user-container" key={user._id} >
          <img
            src={user?.profileAvatar}
            alt="User Avatar"
            className="s-user-avatar"
            onClick={() => navigate(`/profile/${user?.username}`)}
          />
          <div className="user-details-container" onClick={() => navigate(`/profile/${user?.username}`)}>
            <p className="user-details s" >
              {user?.firstName} {user?.lastName}
            </p>
            <p className="user-details-username s dark">@{user?.username}</p>
          </div>
        </div>
      ))) : <p>No users found</p>}
      </div>
    )
  }

  return (
    <div className="right-container">
      {getSearch()}
      {getUsers()}
      {searchValue.length > 0 && <FilteredUsersBox/> }
    </div>
  );
};
