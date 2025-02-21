import React, { useState } from "react";
import Modal from "./Modal";
import "./Post.css";

const Post = ({ date, title, post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="post" onClick={() => setIsModalOpen(true)}>
        <div className="post__content">
          <span className="post__date">{date}</span>
          <h3 className="post__title">{title}</h3>
          <p className="post__text">{post}</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        date={date}
        content={post}
      />
    </>
  );
};

export default Post;
