import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Logo () {
    return (
        <Link className='site-logo' to='/'>
            <h1>
                <img
                    title='الموقع الرسمي لمجموعة قنوات عشوائيات'
                    src={logo}
                    alt='عشوائيات'
                    height='46'
                    width='46'
                />
            </h1>
        </Link>
    );
}
