import { useUser } from "../contexts/userContext";
import { useAuth } from "../contexts/authContext";
import "../styles/suggestedUsers.css";

export const SuggestedUsers = () => {
    const { users } = useUser();
    const { currUser } = useAuth();

    const filteredUsers = users.filter(user => {
        return !currUser.following.some(followingUser => followingUser.username === user.username);
    });
    const suggestedUsers = filteredUsers.filter((user) => user.username !== currUser.username);

    const getUsers = () => <div id="s-users-container">
        <p className="bold">Suggested Users</p>
        {suggestedUsers.map((user) => <div id="single-s-user-container">
            <img src={user?.profileAvatar} alt="User Avatar" className="s-user-avatar"/>
            <div className="user-details-container">
                <p className="user-details s">{user?.firstName} {user?.lastName}</p>
                <p className="user-details-username s">@{user?.username}</p>
            </div>
                <div className="lala"><button className="follow-btn">Follow</button></div>
        </div>)}
    </div>

    return (
        <div className="right-container">
            {getUsers()}
        </div>
    )
}