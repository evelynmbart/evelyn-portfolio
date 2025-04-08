import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Post = ({ date, title, post, isFirst }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PostCard onClick={() => setIsModalOpen(true)}>
        <PostContent>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          <PostText>{post}</PostText>
        </PostContent>

        <RightSide>
          <TimelineArrow>&gt;</TimelineArrow>
          {isFirst && <SwipeText>Swipe for more</SwipeText>}
        </RightSide>
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
  background: white;
  border-radius: 12px;
  padding: 1.5rem 0.5rem 1.5rem 1.5rem;
  min-width: 300px;
  min-height: 220px;
  height: 220px;
  max-height: 220px;
  margin: 0 3rem 0 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  overflow: hidden;
  display: flex;

  &:hover {
    border-color: var(--primary-color);
  }
`;

const PostContent = styled.div`
  height: 100%;
  flex: 1;
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

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
`;

const SwipeText = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(0deg);
  color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TimelineArrow = styled.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  color: var(--primary-color);
  margin: 0.5rem;
`;
