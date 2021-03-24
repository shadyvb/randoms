import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const NavLink = (props: any) => {
    const match = useRouteMatch(props.to);

    return (
        <Link
            style={{ color: match ? 'red' : '#000000' }}
            {...props}
        />
    );
}

export default NavLink;
