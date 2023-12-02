import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';

const PostForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        if (id) {
          const response = await axiosAPI.get(`/posts/${id}.json`);
          if (response.data) {
            const {title, content} = response.data;
            setTitle(title);
            setContent(content);
          }
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const createdAt = new Date().toISOString();

    try {
      if (id) {
        await axiosAPI.put(`/posts/${id}.json`, {title, content, createdAt});
        console.log('Post updated successfully');
        navigate(`/posts/${id}`);
      } else {
        const response = await axiosAPI.post('/posts.json', {title, content, createdAt});
        console.log('Post added successfully:', response.data);
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating/adding post:', error);
    }
  };

  return (
    <div className="add-post-container">
      <h2 className="add-post-header">{id ? 'Edit post' : 'Add new post'}</h2>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <label className="add-post-label">
          Title:
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="add-post-input"/>
        </label>
        <br/>
        <label className="add-post-label">
          Content:
          <textarea value={content} required onChange={(e) => setContent(e.target.value)} className="add-post-textarea"/>
        </label>
        <br/>
        <button type="submit" className="add-post-button">
          {id ? 'Update post' : 'Create post'}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
