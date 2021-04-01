import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Logo = () => (
    <Link className='site-logo' to='/'>
        <img
            src={logo}
            alt='3shwa2yat site logo'
            height='40'
            width='40'
        />
    </Link>
);

export default Logo;
