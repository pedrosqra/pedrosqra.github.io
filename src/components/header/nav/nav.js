import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a
          href="https://github.com/pedrosqra"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
