import React from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../store/hooks/useCategory';

const Category = ( props: any ) => {
    const { name, slug } = useCategory( props.id );

    return (
        <Link key={slug} to={`/category/${slug}`}>
            {name}
        </Link>
    );
}

export default Category;
