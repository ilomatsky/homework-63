import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AddPost from './components/AddPost/AddPost';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import PostDetail from './components/PostDetail/PostDetail';
import EditPost from './components/EditPost/EditPost';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const App = () => (
  <div>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Home/>}/>
        <Route path="/posts/add" element={<AddPost/>}/>
        <Route path="/posts/:id" element={<PostDetail/>}/>
        <Route path="/posts/:id/edit" element={<EditPost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  </div>
);

export default App;

