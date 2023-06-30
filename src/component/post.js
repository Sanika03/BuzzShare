import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart, faComment, faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart, faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";

import "../styles/post.css";
import { usePost } from "../contexts/postContext";
import { useAuth } from "../contexts/authContext";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router";

export const Post = ({ post }) => {
    const { postData, likePostHandler, dislikePostHandler } = usePost();
    const { bookmarks, addBookmarkHandler, removeBookmarkHandler } = useUser();
    const { token, currUser } = useAuth();

    const navigate = useNavigate();

    const individualPost = postData?.find(({ _id }) => _id === post._id);
    const { _id, content, postImage, firstName, lastName, username, profileAvatar, createdAt, likes, comments } = individualPost;

    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleNavToProfile = (e) => {
        e.stopPropagation();
        navigate(`/profile/${username}`);
    }

    return (
        <div className="individual-post-container" key={_id} onClick={() => navigate(`/post/${_id}`)}>
        <div className="horizontal no-gap">
            <img src={profileAvatar} alt="User Avatar" className="user-avatar" onClick={(e) => handleNavToProfile(e)}/>
            <div className="user-details-container">
            <div className="horizontal">
                <p className="user-details" onClick={(e) => handleNavToProfile(e)}>
                {firstName} {lastName}
                </p>
                <span className="date">·</span>
                <p className="text date">{formattedDate}</p>
            </div>
            <p className="user-details-username" onClick={(e) => handleNavToProfile(e)}>@{username}</p>
            </div>
        </div>
        <p className="post-text">{content}</p>
        {postImage && <img src={postImage} alt="Post" className="post-image" />}
        <div className="post-action-buttons">
        {likes.likedBy.some(user => user.username === currUser.username) ? (
            <div className="post-action">
                <FontAwesomeIcon
                    icon={solidHeart}
                    className="post-action-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        dislikePostHandler({ _id, token })
                    }}
                />
                <span className="post-action-count">{likes.likeCount}</span>
            </div>
            ) : (
            <div className="post-action">
                <FontAwesomeIcon
                    icon={regularHeart}
                    className="post-action-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        likePostHandler({ _id, token })
                    }}
                />
                <span className="post-action-count">{likes.likeCount}</span>
            </div>
            )}
            <div className="post-action">
                <FontAwesomeIcon icon={faComment} className="post-action-icon" onClick={(e) => {
                    e.stopPropagation();
                }}/>
                <span className="post-action-count">{comments.length}</span>
            </div>
            {bookmarks?.some(post => post._id === _id) ? (
                <FontAwesomeIcon
                    icon={solidBookmark}
                    className="post-action-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        removeBookmarkHandler(token, _id)
                    }}
                />
                ) : (
                <FontAwesomeIcon
                    icon={regularBookmark}
                    className="post-action-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        addBookmarkHandler(token, _id)
                    }}   
                />
                )}
        </div>
        </div>
    );
};