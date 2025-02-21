import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, date, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h2>{title}</h2>
          <p className="modal-date">{date}</p>
        </div>
        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
