import { useParams } from "react-router"

import { usePost } from "../contexts/postContext";
import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";

import "../styles/singlePost.css";
import { Loader } from "../component/loader";
import { Post } from "../component/post";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";

export const SinglePost = () => {
    const { _id } = useParams();
    const { postData, addCommentHandler } = usePost();
    const { token } = useAuth();
    const [comment, setComment] = useState("");

    const singlePost = postData.find((curr) => curr._id === _id) || {};

    const { likes, comments, profileAvatar } = singlePost;
    console.log(singlePost)
    
    const getTitle = () => <div className="title-container">
        <p className="text left">Post</p>
    </div>

    const handleSave = () => {
        addCommentHandler({postId: _id, commentData: comment, token})
        setComment("");
    }

    const getCommentBox = () => <div className="comment-container">
        <div className="horizontal distant"> 
            <div className="horizontal">
                <img
                    src={profileAvatar}
                    alt="User Avatar"
                    className="s-user-avatar"
                />
                <input value={comment} type="text" placeholder="Post your reply" className="comment-text" onChange={(e) => setComment(e.target.value)} />
            </div>
            <button className="form-btn save" disabled={!comment.length > 0} style={{cursor: comment.length > 0 ? "pointer" : "not-allowed"}} onClick={() => handleSave()}>
                Reply
            </button>
        </div>
    </div>

    const getPostDetails = () => {
        return (
            <>
                <Post post={singlePost}/> 
                <div className="horizontal action-details">
                    {likes?.likeCount > 0 && <p className="text underline">{likes.likeCount} <span className="light">likes</span></p>}
                    {comments?.length > 0 && <p className="text">{comments.length} <span className="light">{comments.length > 1 ? "comments" : "comment"}</span></p>}
                </div>
                {getCommentBox()}
            </>
        )
    }

    return (
        <div className="single-post-page">
            <Nav/>
            <div className="single-post-container">
                {getTitle()}
                {singlePost ? getPostDetails() : <Loader/>}
            </div>
            <SuggestedUsers/>
        </div>
    )
}