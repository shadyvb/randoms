import React from "react";
import NavMenu from './nav-menu';
import SocilLinks from './social-links';
import SidebarTrigger from './sidebar-trigger';
import Logo from './logo';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <SidebarTrigger />
                <Logo />
                <NavMenu />
                <SocilLinks />
            </div>
        </header>
    );
}

export default Header;
