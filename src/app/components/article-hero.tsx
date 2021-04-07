import React from 'react';
import { Link } from 'react-router-dom';
import { usePost } from '../store/hooks/usePost';
import Thumbnail from './thumbnail';

export default function ArticleHero({ id }: { id: number }) {
    const { slug, meta, title } = usePost( id );

    return (
        <Link to={`/articles/${slug}`}>
            <div>
                <Thumbnail id={meta._thumbnail_id} />
                <div>{title.rendered}</div>
            </div>
        </Link>
    );
}
