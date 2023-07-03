import { useEffect } from "react";
import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";
import { usePost } from "../contexts/postContext";

import "../styles/profile.css";
import { Post } from "../component/post";
import { useParams } from "react-router";
import { useUser } from "../contexts/userContext";
import { useAuth } from "../contexts/authContext";

export const UserProfile = () => {
    const { username } = useParams();
    const { getUserPostsHandler, userPosts } = usePost();
    const { users, followUserHandler, unfollowUserHandler } = useUser(); 
    const { currUser, token } = useAuth(); 

    const currentUser = users.find((user) => user?.username === currUser.username)
    const user = users?.find((user) => user?.username === username);

    const getTitle = () => user && (
        <div className="title-container left">
            <p className="text left-gap">{user.firstName} {user.lastName}</p>
            <p className="text left-gap user-details-username small">{userPosts.length} Posts</p>
        </div>
    );

    console.log(currUser)

    const isFollowing = () => {
        if (currentUser && user) {
            return !currUser.following?.some(
                (followingUser) => followingUser.username === user.username
              )
        }
        return false;
    };

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
                        {user.website && <p className="s-gap">{user.website}</p>}
                    </div>
                    <div className="horizontal s-gap">
                        <p className="text">{user.followers.length} <span className="user-details-username">Followers</span></p>
                        <p className="text">{user.following.length} <span className="user-details-username">Following</span></p>
                    </div>
                </div>
            </div>
            {
                currUser.username === user.username ? 
                <button className="profile-btn">Edit Profile</button> :
                isFollowing() ? 
                <button className="profile-btn" onClick={() => followUserHandler(token, user._id)}>Follow</button> : <button className="profile-btn" onClick={() => unfollowUserHandler(token, user._id)}>Unfollow</button>
            }
        </div>
    </div>
    )

    const getUserPosts = () => <div className="user-posts-container">
        {userPosts.length > 0 ? userPosts.map((post) => <Post post={post}/>) : <h3 className="center">No posts to show</h3>}
    </div>

    useEffect(() => {
        user && getUserPostsHandler(user.username);
    }, [user, getUserPostsHandler])

    return (
        <div className="profile-page">
            <Nav />
            <div className="profile-container">
                {getTitle()}
                {getUserDetails()}
                {getUserPosts()}
            </div>
            <SuggestedUsers />
        </div>
    )
}