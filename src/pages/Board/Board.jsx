import { useEffect, useState } from "react";
import BoardData from "../../data/BoardData";
import CursorEffect from "./CursorEffect";
import Cursor from "./Cursor";

const CommentForm = ({ postId, onComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      onComment(postId, commentText);
      setCommentText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

const Board = () => {
  const [posts, setPosts] = useState(BoardData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadMorePosts();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadMorePosts = () => {
    setIsLoading(true);
    // 데이터를 불러오는 로직 추가
    setIsLoading(false);
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likeCount: post.likeCount + 1 } : post
      )
    );
  };

  const handleComment = (postId, commentText) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), author: "user", text: commentText },
              ],
            }
          : post
      )
    );
  };

  return (
    <div>
      <Cursor />
      <div className="board">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <img src={post.boardImages[0].imageUrl} alt={post.title} />
            <p>{post.content}</p>
            <p>Likes: {post.likeCount}</p>
            <button onClick={() => handleLike(post.id)}>Like</button>
            <CommentForm postId={post.id} onComment={handleComment} />
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul>
            {isLoading && <p>Loading...</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;