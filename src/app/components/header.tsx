import React from "react";
import NavMenu from './nav-menu';
import SocilLinks from './social-links';
import FeedLink from './feed-link';
import Sidebar from './sidebar';
import Logo from './logo';

const Header = () => {
  return (
    <header className='header'>
      <Sidebar />
      <Logo />
      <NavMenu />
      <FeedLink />
      <SocilLinks />
    </header>
  );
}

export default Header;
