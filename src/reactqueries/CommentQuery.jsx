import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { apiNoToken } from '../network/api';
import { useRecoilValue } from 'recoil';
import { me } from '../atoms/MeAtom';
import { useNavigate } from 'react-router';
import './CommentList.css'; // CommentList 컴포넌트에 대한 스타일을 담은 CSS 파일을 불러옵니다.
import DeleteComment from '../components/feedcomment/DeleteComment';
import UpdateComment from '../components/feedcomment/UpdateComment';


export const GetCommentQuery = () => {
    const meData = useRecoilValue(me)
    const nav = useNavigate()

    const [update, setUpdate] = useState(false)

    const queryParams = new URLSearchParams(window.location.search);
    const boardId = queryParams.get('boardId'); // boardid 값을 가져옴

    const { isLoading, data } = useQuery('todosComment', () =>
        apiNoToken(`http://localhost:8080/api/v1/comment?boardId=${boardId}`,
            "GET",
            '', {})
    );

    if (isLoading) {
        return <span>Loading...</span>;
    }
    console.log(data)

    return (<>
        <div className="comment-list-container">
            <h2 className="comment-list-title">댓글 목록</h2>
            <div className="comment-list">
                {data.map((comment, index) => (
                    <div key={index} className="comment-item">
                        <p className="comment-text">{comment.comment}</p>
                        <div className="comment-info">
                            <p className="comment-author">작성자: {comment.memberName}</p>
                        </div>
                        {meData.memberId == comment.memberId ? <DeleteComment commentId={comment.id} /> : ""}
                        {meData.memberId == comment.memberId ? <button onClick={e => setUpdate(true)}>수정</button> : ""}
                        {update ? <UpdateComment commentId={comment.id} /> : ""}
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};
