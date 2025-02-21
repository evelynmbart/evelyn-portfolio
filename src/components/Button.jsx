import { FaArrowRight } from "react-icons/fa6";
import "./Button.css";

export default function Button({ children, className }) {
  return (
    <a className="contact-btn" href={children}>
      {children}
      <FaArrowRight size={30} id="arrow-right" />
    </a>
  );
}
