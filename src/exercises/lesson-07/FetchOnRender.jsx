import './Lesson07Styles.css';
import { getPosts } from './api';
import { useEffect, useState } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch {
        setError('Failed to fetch posts');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {error && <p>{error}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
