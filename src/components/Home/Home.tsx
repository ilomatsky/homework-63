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
    <div>
      <h2>My blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{formatDateTime(post.createdAt)}</p>
            <p>{post.title}</p>
            <Link to={`/posts/${post.id}`}>
              <span>Read more{'>>'}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
