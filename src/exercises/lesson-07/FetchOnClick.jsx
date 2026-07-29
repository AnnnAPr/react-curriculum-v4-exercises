import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async (postId) => {
    setIsLoading(true);
    try {
      const post = await getSinglePost(postId);
      setPost(post);
    } catch {
      setError('Failed to fetch post');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button onClick={() => handleClick(1)} type="button">
        Get post
      </button>
      <div className="content">
        {error && <p>{error}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
