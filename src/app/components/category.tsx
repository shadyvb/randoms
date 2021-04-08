import React from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../store/hooks/useCategory';

const Category = ({ id }: { id: number }) => {
    const { name, slug } = useCategory( id );

    return (
        <Link to={`/category/${slug}`}>
            {name}
        </Link>
    );
}

export default Category;
