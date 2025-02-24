import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Post = ({ date, title, post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PostCard onClick={() => setIsModalOpen(true)}>
        <PostContent>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          <PostText>{post}</PostText>
        </PostContent>
      </PostCard>

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

const PostCard = styled.div`
  background: var(--card-bg-color);
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 300px;
  min-height: 220px;
  height: 220px;
  max-height: 220px;
  margin: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostContent = styled.div`
  height: 100%;
`;

const PostDate = styled.span`
  color: var(--primary-color);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const PostTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: var(--text-color);
`;

const PostText = styled.p`
  margin: 0;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
