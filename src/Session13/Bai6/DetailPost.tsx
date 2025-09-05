import React from "react";
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  post: Post;
}

const DetailPost: React.FC<DetailPostProps> = ({ post }) => {
  return (
    <div style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
      <p>
        <strong>Id:</strong> {post.id}
      </p>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Content:</strong> {post.content}
      </p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
    </div>
  );
};

export default DetailPost;
