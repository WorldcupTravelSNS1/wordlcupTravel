const BoardData = [
  {
    id: 1,
    title: "첫번째 Post",
    content: " 첫번째 Posting!!",
    createAt: "2023-08-21T12:34:56",
    tema: "travel",
    likeCount: 10,
    member: {
      id: 1,
      username: "user1",
    },
    comments: [
      { id: 1, author: "user2", text: "Cool post!" },
      { id: 2, author: "user3", text: "Nice picture!" },
    ],
    boardImages: [{ id: 1, imageUrl: "https://via.placeholder.com/300" }],
  },
];

export default BoardData;
