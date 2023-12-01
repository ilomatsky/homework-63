import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AddPost from './components/AddPost/AddPost';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import PostDetail from './components/PostDetail/PostDetail';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const App = () => (
  <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Home/>}/>
        <Route path="/posts/add" element={<AddPost/>}/>
        <Route path="/posts/:id/edit" element={<AddPost/>}/>
        <Route path="/posts/:id" element={<PostDetail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  </>
);

export default App;

