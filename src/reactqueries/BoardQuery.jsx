// Feed.js

import React from 'react';
import { useQuery } from 'react-query';
import { apiNoToken, apiWithToken } from '../network/api';
import { useRecoilValue } from 'recoil';
import { feedGetState } from '../atoms/BoardAtom';

import './Feed.css';
import ImageList from '../components/makeImageList/ImageList';
import { me } from '../atoms/MeAtom';
import { useNavigate } from 'react-router';
import UpdateFeed from '../components/feed/FeedUpdate';
import styled from "styled-components";

const HeartButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => (props.liked ? "#C81AD1" : "#444")};
  &:hover {
    color: #C81AD1;
  }
`;
const UpdateButton = styled.button`
  background-color: #3A6DF0;
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
`;

export const GetFeedData = () => {
  const meData = useRecoilValue(me)
  const nav = useNavigate()

  const onClickHandler = async (boardid, memberid) => {
    await apiNoToken(`http://localhost:8080/api/v1/like/${boardid}/${memberid}`, "POST", {}, {})
    refetch()
  }

  const onClickDeleteHandler = async (boardid) => {
    await apiWithToken(`http://localhost:8080/api/v1/board/${boardid}`, "DELETE", {}, { "Authorization": meData.token })
    refetch()
  }

  const onClickCommentHandler = (boardid) => {
    nav(`../comment?boardId=${boardid}`)
  }


  const onClickUpdateHandler = (boardid) => {
    nav(`../feedupdate?boardid=${boardid}`)
  }

  const feedGet = useRecoilValue(feedGetState);
  const { refetch, isLoading, data } = useQuery('todos', () =>
    apiNoToken(
      `http://localhost:8080/api/v1/board?tema=${feedGet.tema}${feedGet.title ? '&title=' + feedGet.title : ''}${feedGet.content ? '&content=' + feedGet.content : ''
      }${feedGet.pageNumber ? '&pageNumber=' + feedGet.pageNumber : ''}${feedGet.pageSize ? '&PageSize=' + feedGet.pageSize : ''}`,
      'GET',
      '',
      {}
    )
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="feed-container">
      {data && data.content.map((todo) => (
        <div key={todo.id} className="feed-item">
          <div className="feed-header">
            <img src="profile-image.jpg" alt="Profile" className="profile-image" />
            <span className="member-name">{todo.memberName}</span>
          </div>
          <div className="feed-content">
            <h3 className="feed-title">{todo.title}</h3>
            {todo.boardImages ? (
              <ImageList jsonString={todo.boardImages} />
            ) : (
              <p className="feed-text">No Images</p>
            )}
            <p className="feed-text">{todo.content}</p>

          </div>
          <div className="feed-footer">
            <span className="feed-likes"><HeartButton onClick={e => onClickHandler(todo.id, todo.memberId)}>
              {todo.liked ? <span>❤️</span> : <span>❤️</span>}{todo.likeCount + " "}likes
            </HeartButton>
            </span>
            <button onClick={e => onClickDeleteHandler(todo.id)}>
              <svg
                class="close"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6M9 9l6 6" />
              </svg></button>


            {meData.memberId == todo.memberId ? <UpdateButton onClick={e => onClickUpdateHandler(todo.id)}>update</UpdateButton> : ""}
            {meData.memberId == todo.memberId ? <UpdateButton onClick={e => onClickCommentHandler(todo.id)}>comment</UpdateButton> : ""}
            <span className="feed-date">{todo.createAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};