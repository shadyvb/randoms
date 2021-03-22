import React from "react";
import classnames from "classnames-prefix";
import {NavMenu} from './nav-menu';
import {SocilLinks} from './social-links';
import {FeedLink} from './feed-link';
import {Sidebar} from './sidebar';

const cx = classnames('header');


const Logo = () => (
  <a className={cx('__logo')} href='/'>
    <img
      src='https://via.placeholder.com/150x40'
      alt='3shwa2yat site logo'
      height='40'
      width='150'
    />
  </a>
);

const Header = () => {
  return (
    <header className={cx('')}>
      <Sidebar />
      <Logo />
      <NavMenu />
      <FeedLink />
      <SocilLinks />
    </header>
  );
}

export {Header};
