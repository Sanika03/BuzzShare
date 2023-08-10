import React, { useState } from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faComment,
  faBookmark as solidBookmark,
  faEllipsis,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faBookmark as regularBookmark
} from "@fortawesome/free-regular-svg-icons";

import { usePost } from "../contexts/postContext";
import { useAuth } from "../contexts/authContext";
import { useUser } from "../contexts/userContext";

import "../styles/post.css";
import { EditModal } from "./editPostModal";
import { CommentModal } from "./commentModal";

export const Post = ({ post }) => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [commentModalOpen, setCommentModalOpen] = useState(false);

    const { postData, likePostHandler, dislikePostHandler, deletePostHandler } = usePost();
    const {
      bookmarks,
      addBookmarkHandler,
      removeBookmarkHandler
    } = useUser();
    const { token, currUser } = useAuth();

    const navigate = useNavigate();

    const individualPost = postData?.find(({ _id }) => _id === post._id);
    const { _id, content, postImage, firstName, lastName, username, profileAvatar, createdAt, likes, comments } = individualPost;

    const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    
    const isVideo = (media) => {
      const videoExtensions = ["mp4", "avi", "mov", "mkv"];
      const extension = media.split(".").pop().toLowerCase();
      return videoExtensions.includes(extension);
    }

    const renderMedia = () => {
      if (postImage && isVideo(postImage)) {
        return (
          <video controls className="post-image" onClick={(e) => { e.stopPropagation() }}>
            <source src={post.postImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      } else if (postImage) {
        return <img src={postImage} alt="Post" className="post-image" onClick={(e) => { e.stopPropagation() }} />;
      } else {
        return null;
      }
    };

    const handleNavToProfile = (e) => {
      e.stopPropagation();
      navigate(`/profile/${username}`);
    };

    const handlePostEdit = (e) => {
      e.stopPropagation();
      setOptionsOpen(false);
      setEditModalOpen(true);
    };

    const handlePostDelete = (e) => {
      e.stopPropagation();
      deletePostHandler({ _id, token });
      setOptionsOpen(false);
    };

    const handleComment = (e) => {
      e.stopPropagation();
      setCommentModalOpen(true);
    }

    const getPostActionBox = () => {
      if (currUser.username === username) {
        return (
          <div className="options-box">
            <button
              className="edit"
              onClick={(e) => handlePostEdit(e)}
            >
              <FontAwesomeIcon
                icon={faPen}
                className="post-action-icon light"
              />
              <span>Edit</span>
            </button>
            <button
              className="delete"
              onClick={(e) => handlePostDelete(e)}
            >
              <FontAwesomeIcon
                icon={faTrash}
                className="post-action-icon light"
              />
              <span>Delete</span>
            </button>
          </div>
        );
      }
    };

    return individualPost && (
      <div
        className="individual-post-container"
        key={_id}
        onClick={() => navigate(`/post/${_id}`)}
      >
        <div className="horizontal no-gap">
          <img
            src={profileAvatar}
            alt="User Avatar"
            className="user-avatar"
            onClick={(e) => handleNavToProfile(e)}
          />
          <div className="user-details-container">
            <div className="horizontal last-right">
              <p className="user-details" onClick={(e) => handleNavToProfile(e)}>
                {firstName} {lastName}
              </p>
              <span className="date">·</span>
              <p className="text date">{formattedDate}</p>
              <div className="post-action-container">
                {
                  currUser.username === username ? 
                    <FontAwesomeIcon
                    icon={faEllipsis}
                    className="action-option-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOptionsOpen(!optionsOpen);
                    }}
                  /> : null
                }
                {optionsOpen ? getPostActionBox() : null}
              </div>
            </div>
            <p
              className="user-details-username"
              onClick={(e) => handleNavToProfile(e)}
            >
              @{username}
            </p>
          </div>
        </div>
        <p className="post-text">{content}</p>
        {renderMedia()}
        <div className="post-action-buttons">
          {likes && (
            likes.likedBy.some((user) => user.username === currUser.username) ? (
              <div className="post-action">
                <FontAwesomeIcon
                  icon={solidHeart}
                  className="post-action-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    dislikePostHandler({ _id, token });
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
                    likePostHandler({ _id, token });
                  }}
                />
                <span className="post-action-count">{likes.likeCount}</span>
              </div>
            )
          )}
          <div className="post-action">
            <FontAwesomeIcon
              icon={faComment}
              className="post-action-icon"
              onClick={(e) => handleComment(e)}
            />
            <span className="post-action-count">{comments?.length}</span>
          </div>
          {bookmarks?.some((post) => post._id === _id) ? (
            <FontAwesomeIcon
              icon={solidBookmark}
              className="post-action-icon"
              onClick={(e) => {
                e.stopPropagation();
                removeBookmarkHandler(token, _id);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularBookmark}
              className="post-action-icon"
              onClick={(e) => {
                e.stopPropagation();
                addBookmarkHandler(token, _id);
              }}
            />
          )}
        </div>
        <EditModal 
        individualPost={individualPost}
        editModalOpen={editModalOpen}
        setEditModalOpen={setEditModalOpen}
        setOptionsOpen={setOptionsOpen}
        />
        <CommentModal 
        commentModalOpen={commentModalOpen} 
        setCommentModalOpen={setCommentModalOpen} 
        userProfile={currUser.profileAvatar}
        postId={_id}
        token={token}
        />
      </div>
    );
};