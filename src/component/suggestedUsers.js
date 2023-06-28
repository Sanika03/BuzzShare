import { useUser } from "../contexts/userContext";
import { useAuth } from "../contexts/authContext";
import { useState, useEffect } from "react";
import "../styles/suggestedUsers.css";
import { followUserService } from "../services/userServices";
import { useNavigate } from "react-router";

export const SuggestedUsers = () => {
  const { users } = useUser();
  const { currUser, token } = useAuth();
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const navigate = useNavigate();

  const getFilteredUsers = (users, currUser) => {
    return users.filter(
      (user) =>
        user.username !== currUser.username &&
        !currUser.following.some(
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
    followUserService({ token, followUserId: id });

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
          <button onClick={(e) => handleFollow(e, user._id)} className="follow-btn">
            Follow
          </button>
        </div>
      ))}
    </div>
  );

  return <div className="right-container">{getUsers()}</div>;
};
