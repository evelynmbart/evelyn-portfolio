import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";

export default function Button({ children }) {
  return (
    <ContactButton href={children}>
      {children}
      <ArrowIcon size={30} />
    </ContactButton>
  );
}

const ContactButton = styled.a`
  border-radius: 50px;
  cursor: pointer;
  background-color: rgba(124, 124, 124, 0.086);
  border: 1px solid rgb(149, 149, 149);
  text-align: center;
  margin: 0 6rem;
  padding: 1rem;
  width: 300px;
  transition: transform 0.4s ease-in-out;
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  position: absolute;
  right: 5px;
  background-color: var(--primary-color);
  padding: 8px;
  border-radius: 50%;
`;
