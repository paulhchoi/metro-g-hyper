import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Metro
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generic">Generic</Link>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
        </li>
        <li>
          <Link to="/sermons">Sermons</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
