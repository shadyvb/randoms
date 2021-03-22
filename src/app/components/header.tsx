import React from "react";
import classnames from "classnames-prefix";
import NavMenu from './nav-menu';
import SocilLinks from './social-links';
import FeedLink from './feed-link';
import Sidebar from './sidebar';
import Logo from './logo';

const cx = classnames('header');

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

export default Header;
