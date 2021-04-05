import React from 'react';
import { useUser } from '../store/hooks/useUser';

const Author = ({ id }: { id: number }) => {
    const { name } = useUser( id );

    return (
        <span className='author'>{name}</span>
    );
}

export default Author;
