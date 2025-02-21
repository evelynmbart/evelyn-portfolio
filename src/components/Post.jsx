import { useState } from "react";
import Modal from "./Modal";
import "./Post.css";

const Post = ({ date, title, post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedPost = post.length > 150 ? post.slice(0, 150) + "..." : post;

  return (
    <>
      <div className="post" onClick={() => setIsModalOpen(true)}>
        <div className="post__date">{date}</div>
        <h3 className="post__title">{title}</h3>
        <p className="post__content">{truncatedPost}</p>
        {post.length > 150 && (
          <button className="post__read-more">Read More</button>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-date">{date}</div>
        <p className="modal-post">{post}</p>
      </Modal>
    </>
  );
};

export default Post;
