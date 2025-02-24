import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, title, date, content }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 9999
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "var(--background-color)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto"
        }
      }}
    >
      <CloseButton onClick={onClose}>×</CloseButton>
      <Header>
        <h2>
          {title}
        </h2>
        <Date>
          {date}
        </Date>
      </Header>
      <Body>
        <p>
          {content}
        </p>
      </Body>
    </ReactModal>
  );
};

export default Modal;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
`;

const Header = styled.div`
  margin-bottom: 1.5rem;

  h2 {
    margin-bottom: 0.5rem;
  }
`;

const Date = styled.p`
  color: var(--primary-color);
  font-size: 0.9rem;
`;

const Body = styled.div`line-height: 1.6;`;
