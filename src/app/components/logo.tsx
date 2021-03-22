import React from "react";
import {Link} from 'react-router-dom';

const Logo = () => (
  <Link className='site-logo' to='/'>
    <img
      src='https://via.placeholder.com/150x40'
      alt='3shwa2yat site logo'
      height='40'
      width='150'
    />
  </Link>
);

export default Logo;
