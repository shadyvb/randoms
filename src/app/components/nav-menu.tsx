import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import classnames from "classnames-prefix";

const links = [
  { title: 'News', path: '/news' },
  { title: 'Exclosive', path: '/exclosive' },
  { title: 'Movies', path: '/movies' },
  { title: 'Tv', path: '/tv' },
  { title: 'Gaming', path: '/gaming' },
];

const cx = classnames('header');

const NavLink = (props: any) => {
  const match = useRouteMatch(props.to);

  return (
    <Link
      style={{ color: match ? 'red' : '#000000' }}
      {...props}
    />
  );
}

const NavMenu = () => {
  return (
    <ul className={cx('__nav-menu')}>
      {links.map(link => (
        <li key={link.title}>
          <NavLink to={link.path}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export {NavMenu};
