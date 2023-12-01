import {Link} from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>My blog</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts/add">Add</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
