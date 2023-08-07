import { useEffect, useState } from "react";
import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";
import { usePost } from "../contexts/postContext";

import "../styles/profile.css";
import { Post } from "../component/post";
import { useParams } from "react-router";
import { useUser } from "../contexts/userContext";
import { useAuth } from "../contexts/authContext";
import { EditProfileModal } from "../component/editProfileModal";
import { Loader } from "../component/loader";
import { ConnectionsModal } from "../component/connectionsModal";

export const UserProfile = () => {
    const { username } = useParams();
    const [ editModalOpen, setEditModalOpen ] = useState(false);
    const [ connectionsModalOpen , setConnectionsModalOpen ] = useState(false);
    const [ connections, setConnections ] = useState({value: [], type: ""});
    const { getUserPostsHandler, userPosts, isLoading } = usePost();
    const { users, followUserHandler, unfollowUserHandler } = useUser(); 
    const { currUser, token } = useAuth(); 

    const currentUser = users.find((user) => user?.username === currUser.username)
    const user = users?.find((user) => user?.username === username);

    const getTitle = () => user && (
        <div className="title-container left">
            <p className="text">{user.firstName} {user.lastName}</p>
            <p className="text user-details-username small">{userPosts.length} Posts</p>
        </div>
    );

    const isFollowing = () => {
        if (currentUser && user) {
            return !currUser.following?.some(
                (followingUser) => followingUser.username === user.username
              )
        }
        return false;
    };

    const handleConnections = (value, type) => {
        setConnectionsModalOpen(true);
        setConnections({value, type});
    }

    const getUserDetails = () => user && (
    <div className="profile-details-container">
        <div className="horizontal gap-between">
            <div className="horizontal">
                <img src={user.profileAvatar} alt="User" className="profile-avatar" />
                <div className="profile-details">
                    <div className="s-gap">
                        <p className="text bold">{user.firstName} {user.lastName}</p>
                        <p className="text user-details-username">@{user.username}</p>
                    </div>
                    <div className="s-gap">
                        <p className="text s-gap">{user.bio}</p>
                        {user.website && (
                            <a
                                href={user.website.startsWith("http://") || user.website.startsWith("https://")
                                ? user.website
                                : `http://${user.website}`}
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {user.website}
                            </a>
                        )}
                    </div>
                    <div className="horizontal s-gap">
                        <p className="text highlight" onClick={() => handleConnections(user.followers, "Followers")}>{user.followers.length} <span className="user-details-username">Followers</span></p>
                        <p className="text highlight" onClick={() => handleConnections(user.following, "Following")}>{user.following.length} <span className="user-details-username">Following</span></p>
                    </div>
                </div>
            </div>
            {
                currUser.username === user.username ? 
                <button className="profile-btn" onClick={() => setEditModalOpen(true)}>Edit Profile</button> :
                isFollowing() ? 
                <button className="profile-btn" onClick={() => followUserHandler(token, user._id)}>Follow</button> :
                <button className="profile-btn" onClick={() => unfollowUserHandler(token, user._id)}>Unfollow</button>
            }
        </div>
    </div>
    )

    const getUserPosts = () => <div className="user-posts-container">
        {userPosts.length > 0 ? userPosts.map((post) => <Post post={post} key={post._id}/>) : <h3 className="center">No posts to show</h3>}
    </div>

    useEffect(() => {
        user && getUserPostsHandler(user.username);
    }, [user])

    return (
        <div className="profile-page">
            <Nav />
            <div className="profile-container">
                {getTitle()}
                {getUserDetails()}
                {isLoading.userPosts ? <Loader/> : getUserPosts()}
                <EditProfileModal user={user} editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} />
                <ConnectionsModal connectionsModalOpen={connectionsModalOpen} setConnectionsModalOpen={setConnectionsModalOpen} connections={connections}/>
            </div>
            <SuggestedUsers />
        </div>
    )
}