// Modal.js
import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="top-container">
      <button onClick={handleOpenModal}>Open Modal</button>

      {modalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
            <p>This is the Modal Content</p>
            <div className="modal-footer">
              <button onClick={handleCloseModal}>Close</button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
