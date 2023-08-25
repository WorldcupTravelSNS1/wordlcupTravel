import React from 'react';
import { useQuery } from 'react-query';
import { apiNoToken } from '../network/api';
import { useRecoilValue } from 'recoil';
import { me } from '../atoms/MeAtom';
import { useNavigate } from 'react-router';
import './CommentList.css'; // CommentList 컴포넌트에 대한 스타일을 담은 CSS 파일을 불러옵니다.
import ImageList from '../components/makeImageList/ImageList';

export const BoardQueryById = () => {
    const meData = useRecoilValue(me)
    const nav = useNavigate()

    const queryParams = new URLSearchParams(window.location.search);
    const boardId = queryParams.get('boardId'); // boardid 값을 가져옴

    const { isLoading, data } = useQuery('todosById', () =>
        apiNoToken(
            `http://localhost:8080/api/v1/board/${boardId}`,
            'GET',
            '',
            {}
        )
    );

    if (isLoading) {
        return <span>Loading...</span>;
    }
    console.log(data)

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
                        <span className="feed-likes">
                            {todo.likeCount} likes</span>
                        <span className="feed-date">{todo.createAt}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
