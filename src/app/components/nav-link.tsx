import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    to: string,
};

const NavLink = ( props: Props ) => {
    const match = useRouteMatch( props.to );

    return (
        <Link
            style={{ color: match ? 'red' : '#000000' }}
            {...props}
        />
    );
}

export default NavLink;
