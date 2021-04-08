import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../store/hooks/useUser';

const Author = ({ id }: { id: number }) => {
    const { name } = useUser( id );

    return (
        <Link to={`/author/${name}`} className='author'>
            {name}
        </Link>
    );
}

export default Author;
