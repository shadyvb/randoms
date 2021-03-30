import React from 'react';
import { useParams } from 'react-router';
import Author from '../components/author';
import Thumbnail from '../components/thumbnail';
import { usePostBySlug } from '../store/hooks/usePostBySlug';
import classnames from 'classnames-prefix';

const cx = classnames( 'article' );

export default function Article() {
    const { slug }: { slug: string } = useParams();
    const { title, author, content, meta } = usePostBySlug( slug );

    return (
        <main>
            <article className={cx('')}>
                <h1 className={cx('__title')}>{title.rendered}</h1>
                <div className={cx('__thumbnail')}>
                    <Thumbnail id={meta._thumbnail_id} />
                </div>
                <div className={cx('__info')}>
                    <span>By</span>
                    <Author id={author} />
                </div>
                <div className={cx('__content')}>
                    {content.rendered}
                </div>
            </article>
        </main>
    );
}
