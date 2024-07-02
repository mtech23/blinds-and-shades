import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">login</Link>
        </div>

        <h2>
            This is my Header.
        </h2>
    </>
  )
}

export default Header