import React from "react";
import NavMenu from './nav-menu';
import SocilLinks from './social-links';
import SidebarTrigger from './sidebar-trigger';
import Logo from './logo';

const Header = () => {
    return (
        <header className='header'>
            <SidebarTrigger />
            <Logo />
            <NavMenu />
            <SocilLinks />
        </header>
    );
}

export default Header;
