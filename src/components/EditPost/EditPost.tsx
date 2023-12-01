import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axiosAPI.get(`/posts/${id}.json`);
        if (response.data) {
          const {title, content} = response.data;
          setTitle(title);
          setContent(content);
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const createdAt = new Date().toISOString();

    try {
      await axiosAPI.put(`/posts/${id}.json`, {title, content, createdAt});
      console.log('Post updated successfully');
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <br/>
        <label>
          Description:
          <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
        </label>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
