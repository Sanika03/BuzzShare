import React from "react";

import "../styles/post.css";
import { usePost } from "../contexts/postContext";

export const Post = ({post}) => {
    const { posts } = usePost();

    const individualPost = posts.find(({_id}) => _id === post._id)
    const { _id, content, media, firstName, lastName, username, profileAvatar, createdAt } = individualPost;

    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="individual-post-container" key={_id}>
            <div className="horizontal no-gap">
                <img src={profileAvatar} alt="User Avatar" className="user-avatar"/>
                <div className="user-details-container">
                    <div className="horizontal">
                        <p className="user-details">{firstName} {lastName}</p>
                        <span className="date">·</span>
                        <p className="text date">{formattedDate}</p>
                    </div>
                    <p className="user-details-username">@{username}</p>
                </div>
            </div>
            <p className="post-text">{content}</p>
            {media && <img src={media} alt="Post" className="post-image"/>}
        </div>
    )
}