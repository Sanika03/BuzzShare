import { useState } from "react";
import Modal from 'react-modal';

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useUser } from "../contexts/userContext";
import { useAuth } from "../contexts/authContext";

import "../styles/editProfileModal.css";


export const EditProfileModal = ({user, editModalOpen, setEditModalOpen}) => {
    const { updateProfileHandler } = useUser();
    const { token } = useAuth();

    const [ editInput, setEditInput ] = useState({...user})
    const { profileAvatar, firstName, lastName, bio, website } = editInput;

    const handleSave = (e) => {
        e.preventDefault(); 
        setEditModalOpen(false);
        updateProfileHandler(editInput, token);
    };

    const handleCancel = (e) => {
        e.preventDefault(); 
        setEditInput({...user});
        setEditModalOpen(false);
    };

    return (
        <div onClick={(e) => { e.stopPropagation() }}>
            <Modal
                isOpen={editModalOpen}
                onRequestClose={handleCancel}
                contentLabel="Edit Modal"
                className="edit-modal profile-edit"
                shouldCloseOnOverlayClick={true}
                style={{overlay: { background: "#00000080" } }}
            >
                <form onSubmit={handleSave}>
                    <div className="horizontal space-between">
                        <div className="start">
                            <FontAwesomeIcon icon={faXmark} className="cancel-btn" onClick={handleCancel}/>
                            <p className="text">Edit Profile</p>
                        </div>
                        <button type="submit" className="form-btn save-btn">Save</button>
                    </div>
                    <div className="inputs-container">
                        <img className="profile-avatar-edit" src={profileAvatar} alt="Profile Avatar"/>
                        <label className="sub-input text">
                            First Name
                            <input
                            className="profile-input"
                            value={firstName}
                            onChange={(e) => setEditInput({...editInput, firstName: e.target.value})}
                            />
                        </label>

                        <label className="sub-input text">
                            Last Name
                            <input
                            className="profile-input"
                            value={lastName}
                            onChange={(e) => setEditInput({...editInput, lastName: e.target.value})}
                            />
                        </label>

                        <label className="sub-input text">
                            Bio
                            <input
                            className="profile-input"
                            value={bio}
                            onChange={(e) => setEditInput({...editInput, bio: e.target.value})}
                            />
                        </label>

                        <label className="sub-input text">
                            Website
                            <input
                            className="profile-input"
                            value={website}
                            onChange={(e) => setEditInput({...editInput, website: e.target.value})}
                            />
                        </label>
                    </div>
                </form>
            </Modal>
        </div>
    )
}