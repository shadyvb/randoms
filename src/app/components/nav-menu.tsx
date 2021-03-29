import React from 'react';
import NavLink from './nav-link';

const links = [
    { title: 'News', path: '/news' },
    { title: 'Exclosive', path: '/exclosive' },
    { title: 'Movies', path: '/movies' },
    { title: 'Tv', path: '/tv' },
    { title: 'Gaming', path: '/gaming' },
];

const NavMenu = () => {
    return (
        <ul className='nav-menu'>
            {links.map((link: { title: string, path: string }) => (
                <li key={link.title}>
                    <NavLink to={link.path}>{link.title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default NavMenu;
