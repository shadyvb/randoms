import React from 'react';
import { useUser } from '../store/hooks/useUser';

const Author = ( props: any ) => {
    const { name } = useUser( props.id );

    return (
        <span>{name}</span>
    );
}

export default Author;
