import React from "react";
import NavMenu from './nav-menu';
import SocilLinks from './social-links';
import NavMenuTrigger from './nav-menu-trigger';
import Logo from './logo';

const Header = () => {
    return (
        <header className='header'>
            <input
                type='checkbox'
                id='nav-trigger'
                className='visually-hidden'
                aria-hidden={true}
                hidden={true}
            />
            <div className='header__container container'>
                <Logo />
                <NavMenu />
                <SocilLinks />
                <NavMenuTrigger />
            </div>
        </header>
    );
}

export default Header;
