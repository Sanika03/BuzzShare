import Modal from 'react-modal';
import { useNavigate } from 'react-router';

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/connectionsModal.css";

export const ConnectionsModal = ({connectionsModalOpen, setConnectionsModalOpen, connections}) => {
    const navigate = useNavigate();

    const handleUserClick = (user) => {
        setConnectionsModalOpen(false);
        setTimeout(() => {
            navigate(`/profile/${user?.username}`);
        }, 100);
    }

    return (
        <Modal
            isOpen={connectionsModalOpen}
            contentLabel="Connections Modal"
            onRequestClose={() => setConnectionsModalOpen(false)}
            className="connections-modal"
            shouldCloseOnOverlayClick={true}
            style={{overlay: { background: "#00000080" } }}
        >   
            <div className="horizontal">
                <FontAwesomeIcon icon={faXmark} className="cancel-btn" onClick={() => setConnectionsModalOpen(false)}/>
                <h3 className="text">{connections.type}</h3>
            </div>
            {connections.value.length > 0 && connections.value.map((user) => 
                <div id="single-s-user-container" key={user._id} onClick={() => handleUserClick(user)}>
                    <img
                        src={user?.profileAvatar}
                        alt="User Avatar"
                        className="s-user-avatar"
                    />
                    <div className="user-details-container">
                        <p className="user-details s" >
                        {user?.firstName} {user?.lastName}
                        </p>
                        <p className="user-details-username s dark">@{user?.username}</p>
                    </div>
                </div>
            )}
        </Modal>
    )
}