import React from "react";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, title, date, content }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
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
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

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
