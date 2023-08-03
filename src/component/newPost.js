import React, { useState, useRef } from "react";

import { faImage, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuth } from "../contexts/authContext";
import { usePost } from "../contexts/postContext";

import "../styles/newPost.css";

export const NewPost = () => {
    const { currUser, token } = useAuth();
    const { addPostHandler } = usePost();
    const [input, setInput] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setImage(reader.result);
        };
    };

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleClearFileInput = () => {
        fileInputRef.current.value = null;
        setImage(null);
      };

    const handlePost = (e) => {
        e.preventDefault();
        addPostHandler({input, image, token, currUser});
        setInput("");
        setImage(null);
    };

    return (
        <div id="add-post-container">
            <form className="add-post-container" onSubmit={handlePost}>
                <div className="horizontal">
                    <img className="poster-avatar" src={currUser.profileAvatar} alt="Profile Avatar"/>
                    <textarea
                    className="post-input"
                    placeholder="What's happening?"
                    value={input}
                    onChange={handleInputChange}
                    />
                </div>
                {image && (
                <div className="posted-media">
                    <img src={image} alt="Posted Media" id="post-image"/>
                    <FontAwesomeIcon icon={faCircleXmark} className="remove-image-button" onClick={handleClearFileInput}/>
                </div>
                )}  
                <div className="post-buttons">
                <button
                    type="button"
                    className="upload-button"
                    onClick={handleChooseFile}
                >
                    <FontAwesomeIcon icon={faImage} className="image-icon" />
                </button>
                <input
                    ref={fileInputRef}
                    className="photo-upload hidden-button"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                />
                <button type="submit" className="light-btn" disabled={input || image ? false : true } style={{cursor: input || image ? "pointer" : "not-allowed"}}>
                    Post
                </button>
                </div>
            </form>
        </div>
    );
}