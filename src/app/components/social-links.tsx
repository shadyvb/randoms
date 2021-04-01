import React from 'react';

const links = [
    { icon: 'فيسبوك', path: 'https://facebook.com' },
    { icon: 'يوتيوب', path: 'https://youtube.com' },
];

const SocialLinks = () => (
    <ul className='social-links-menu'>
        {links.map(link => (
            <li key={link.path}>
                <a
                    href={link.path}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i>{link.icon}</i>
                </a>
            </li>
        ))}
    </ul>
);

export default SocialLinks;
