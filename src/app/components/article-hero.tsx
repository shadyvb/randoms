import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames-prefix';
import { usePost } from '../store/hooks/usePost';
import Thumbnail from './thumbnail';


const cx = classnames('hero-article');

export default function ArticleHero({ id }: { id: number }) {
    const { slug, meta, title } = usePost( id );

    return (
        <Link to={`/articles/${slug}`} className={cx('hero-article')}>
            <div className={cx('__thumb')}>
                <Thumbnail id={meta._thumbnail_id} width='1000' height='500' />
                <div className={cx('__title')}>{title.rendered}</div>
            </div>
        </Link>
    );
}
