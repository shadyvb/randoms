import React from 'react';
import NavLink from './nav-link';

const links = [
    { title: 'عامة', path: '/category/miscellaneous' },
    { title: 'علوم وفلك', path: '/category/science-and-astronomy' },
    { title: 'برية وطبيعة', path: '/category/wild-and-nature' },
    { title: 'عجائب وغرائب', path: '/category/bizzare-and-weird' },
];

const NavMenu = () => {
    return (
        <ul className='header__item nav-menu'>
            {links.map((link: { title: string, path: string }) => (
                <li key={link.title}>
                    <NavLink to={link.path}>{link.title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default NavMenu;
