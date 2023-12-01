import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const createdAt = new Date().toISOString();

    try {
      const response = await axiosAPI.post('/posts.json', {title, content, createdAt});

      console.log('Post added successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <br/>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
        </label>
        <br/>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default AddPost;
