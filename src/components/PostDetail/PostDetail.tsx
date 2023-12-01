import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';
import formatDateTime from '../TimeConverter/TimeConverter';

interface PostDetailProps {
}

interface Post {
  title: string;
  content: string;
  createdAt: string;
}

const PostDetail: React.FC<PostDetailProps> = () => {
  const [post, setPost] = useState<Post | null>(null);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axiosAPI.get(`/posts/${id}.json`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axiosAPI.delete(`/posts/${id}.json`);
      console.log('Post deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Created on: {formatDateTime(post.createdAt)}</p>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate(`/posts/${id}/edit`)}>Edit</button>
    </div>
  );
};

export default PostDetail;
