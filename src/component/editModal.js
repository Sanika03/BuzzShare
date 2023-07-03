import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/editModal.css";
import { usePost } from '../contexts/postContext';
import { useAuth } from '../contexts/authContext';

export const EditModal = ({ individualPost, editModalOpen, setEditModalOpen, setOptionsOpen }) => {
    const { editPostHandler, postData } = usePost();
    const { token } = useAuth();
    const post = postData?.find((post) => post._id === individualPost._id)
    const { profileAvatar, content, postImage } = post;
    const [inputValue, setInputValue] = useState(content);
    const [inputImage, setInputImage] = useState(postImage);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault(); 
        setEditModalOpen(false);
        setOptionsOpen(false);
        editPostHandler({token, postImage: inputImage, post, input: inputValue});
    };

    const handleCancel = (e) => {
        e.preventDefault(); 
        setEditModalOpen(false);
        setOptionsOpen(false);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setInputImage(reader.result);
        };
    };

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleClearFileInput = () => {
        fileInputRef.current.value = null;
        setInputImage(null);
    };

    return (
        <div onClick={(e) => { e.stopPropagation() }}>
        <Modal
            isOpen={editModalOpen}
            onRequestClose={handleCancel}
            contentLabel="Edit Modal"
            className="edit-modal"
            shouldCloseOnOverlayClick={true}
            style={{overlay: { background: "#00000080" } }}
        >
            <form onSubmit={handleSave} className="input-form">
                <div className="horizontal">
                    <img className="poster-avatar" src={profileAvatar} alt="Profile Avatar"/>
                    <textarea
                    className="post-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                </div>
                {inputImage && (
                <div className="posted-media">
                    <img src={inputImage} alt="Posted Media" id="post-image"/>
                    <button className="remove-image-button" onClick={handleClearFileInput}>X</button>
                </div>
                )}
                <div className="buttons-container">
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
                    <button type="button" className="form-btn cancel" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="form-btn save" disabled={inputValue || inputImage ? false : true }>Save</button>
                </div>
            </form>
        </Modal>
        </div>
    );
};
