const Board = () => {

    return <div className="board">
        <h2>게시판</h2>
        <PostList posts={posts} />
        <AddPostForm addPost={addPost} />
    </div>

}
export default Board;