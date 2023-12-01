import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';
import formatDateTime from '../TimeConverter/TimeConverter';

interface HomeProps {
}

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const Home: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosAPI.get('/posts.json');
        if (response.data) {
          const fetchedPosts: Post[] = Object.entries(response.data).map(([id, data]) => ({
            id,
            ...data,
          }));
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h5>Created on: {formatDateTime(post.createdAt)}</h5>
            <h4>{post.title}</h4>
            <Link to={`/posts/${post.id}`} className="read-more">
              <strong>Read more{'>>'}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
