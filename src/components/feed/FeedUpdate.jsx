import React, { useState } from 'react';
import { apiWithToken } from '../../network/api';
import { useRecoilValue } from 'recoil';
import { me } from '../../atoms/MeAtom';
import './UpdateFeed.css'
import { useNavigate } from 'react-router';

const UpdateFeed = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const meData = useRecoilValue(me);
    const [imageUrl, setImageUrl] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const boardId = queryParams.get('boardid'); // boardid 값을 가져옴
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateData = {
            title,
            content,
            imageUrl
        };

        try {
            await apiWithToken(
                `http://localhost:8080/api/v1/board/${boardId}`,
                'PUT',
                updateData,
                { Authorization: meData.token }
            );
            // 수정 완료 후 리다이렉트 등의 동작 수행
            nav("../feed")
        } catch (error) {
            console.error('Error updating feed:', error);
        }
    };

    return (
        <div className="update-feed-container">
            <h2 className="update-feed-title">Update Feed</h2>
            <form className="update-feed-form" onSubmit={handleSubmit}>
                <div className="update-feed-input">
                    <label className="update-feed-label">Title:</label>
                    <input
                        required
                        type="text"
                        className="update-feed-text-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="update-feed-input">
                    <label className="update-feed-label">Content:</label>
                    <textarea
                        required
                        className="update-feed-textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="feed-post-input">
                    <label className="feed-post-label">Image URLs (comma-separated):</label>
                    <input type="text" className="feed-post-text-input" value={imageUrl.join(',')} onChange={(e) => setImageUrl(e.target.value.split(','))} />
                </div>

                <button type="submit" className="update-feed-button">
                    Update Feed
                </button>
            </form>
        </div>
    );
};

export default UpdateFeed;
