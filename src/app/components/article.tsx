import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames-prefix';
import { usePost } from '../store/hooks/usePost';
import Thumbnail from './thumbnail';
import Category from './category';
import Author from './author';

const cx = classnames( 'article-block' );

export default function Article({ id }: { id: number }) {
    const article = usePost( id );

    return (
        <article className={cx('article-block')}>
            <div className={cx('__image-holder')}>
                <Link to={`/articles/${article.slug}`}>
                    <Thumbnail id={article.meta._thumbnail_id} width='400' height='220' />
                </Link>
                <div className={cx('__info')}>
                    <span className='category'>
                        {article.categories.map(categoryId => (
                            <Category key={categoryId} id={categoryId} />
                        ))}
                    </span>
                    <span className='byline-slash'>/</span>
                    <Author id={article.author} />
                </div>
            </div>
            <div className={cx('__description')}>
                <h3>
                    <Link to={`/${article.id}`}>{article.title.rendered}</Link>
                </h3>
            </div>
        </article>
    );
}
