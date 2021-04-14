import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    to: string,
};

export default function NavLink( props: Props ) {
    const match = useRouteMatch( props.to );

    return (
        <Link
            className={match ? 'active' : ''}
            {...props}
        />
    );
}
