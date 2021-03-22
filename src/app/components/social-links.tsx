import React from 'react';

const links = [
  {icon: 'F', path: 'https://facebook.com'},
  {icon: 'T', path: 'https://twitter.com'},
  {icon: 'Y', path: 'https://youtube.com'},
  {icon: 'I', path: 'https://instagram.com'},
  {icon: 'F', path: 'https://flipboard.com'},
  {icon: 'F', path: '/feed'},
];

const SocilLinks = () => (
  <ul className='__social-links'>
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

export default SocilLinks;
