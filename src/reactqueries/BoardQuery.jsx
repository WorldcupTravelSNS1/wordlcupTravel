// Feed.js

import React from 'react';
import { useQuery } from 'react-query';
import { apiNoToken, apiWithToken } from '../network/api';
import { useRecoilValue } from 'recoil';
import { feedGetState } from '../atoms/BoardAtom';

import './Feed.css';
import ImageList from '../components/makeImageList/ImageList';
import { me } from '../atoms/MeAtom';

export const GetFeedData = () => {
  const meData = useRecoilValue(me)

  const onClickHandler = async (boardid, memberid) => {
    await apiNoToken(`http://localhost:8080/api/v1/like/${boardid}/${memberid}`, "POST", {}, {})
  }

  const onClickDeleteHandler = async (boardid) => {
    await apiWithToken(`http://localhost:8080/api/v1/board/${boardid}`, "DELETE", {}, { "Authorization": meData.token })
  }

  const feedGet = useRecoilValue(feedGetState);
  const { isLoading, data } = useQuery('todos', () =>
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
            <p className="feed-text">{todo.content}</p>
            {todo.boardImages ? (
              <ImageList jsonString={todo.boardImages} />
            ) : (
              <p className="feed-text">No Images</p>
            )}
          </div>
          <div className="feed-footer">
            <span className="feed-likes"><button onClick={e => onClickHandler(todo.id, todo.memberId)}>
              {todo.likeCount}
            </button> likes</span>
            <button onClick={e => onClickDeleteHandler(todo.id)}>delete</button>
            <span className="feed-date">{todo.createAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};