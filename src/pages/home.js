import React, { useState, useRef } from "react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";
import { useAuth } from "../contexts/authContext";
import "../styles/home.css";
import { usePost } from "../contexts/postContext";

export const Home = () => {
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
        addPostHandler(input, image, token, currUser);
        setInput("");
        setImage(null);
    };

    const getTitle = () => (
        <div className="title-container">
        <p className="text">Home</p>
        </div>
    );

    const getAddPost = () => {
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
                    <button className="remove-image-button" onClick={handleClearFileInput}>X</button>
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
                <button type="submit" className="light-btn" disabled={input || image ? false : true }>
                    Post
                </button>
                </div>
            </form>
        </div>
        );
    };

    return (
        <div className="home-page">
        <Nav />
        <div className="home-container">
            {getTitle()}
            <div className="sub-containers">
                {getAddPost()}
            </div>
        </div>
        <SuggestedUsers />
        </div>
    );
};
