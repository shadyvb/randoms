import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Logo () {
    const { isExact, path } = useRouteMatch();
    const Element = isExact && path === '/' ? 'h1' : React.Fragment;

    return (
        <Link className='site-logo' to='/'>
            <Element>
                <img
                    title='الموقع الرسمي لمجموعة قنوات عشوائيات'
                    src={logo}
                    alt='عشوائيات'
                    height='46'
                    width='46'
                />
            </Element>
        </Link>
    );
}
