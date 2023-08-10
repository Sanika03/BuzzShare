import Modal from 'react-modal';

import "../styles/commentModal.css";
import { useState } from 'react';
import { usePost } from '../contexts/postContext';

export const CommentModal = ({commentModalOpen, setCommentModalOpen, userProfile, postId, token}) => {
    const [comment, setComment] = useState("");
    const { addCommentHandler } = usePost();

    const handleCancel = () => {
        setCommentModalOpen(false);
        setComment("");
    }

    const handleSave = () => {
        addCommentHandler({postId, commentData: comment, token})
        setComment("");
        setCommentModalOpen(false);
    }

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <Modal
                isOpen={commentModalOpen}
                contentLabel="Comment Modal"
                onRequestClose={() => setCommentModalOpen(false)}
                className="comment-modal"
                shouldCloseOnOverlayClick={true}
                style={{overlay: { background: "#00000080" } }}
            >
                <div className="horizontal"> 
                    <img
                        src={userProfile}
                        alt="User Avatar"
                        className="s-user-avatar"
                    />
                    <textarea type="text" placeholder="Post your reply" className="comment-input" onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className="horizontal right">
                    <button className="form-btn cancel" onClick={() => handleCancel()}>
                        Cancel
                    </button>
                    <button className="form-btn save" disabled={!comment.length > 0} style={{cursor: comment.length > 0 ? "pointer" : "not-allowed"}} onClick={() => handleSave()}>
                        Reply
                    </button>
                </div>
            </Modal>
        </div>
    )
}