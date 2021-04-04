import React from 'react';
import classnames from 'classnames-prefix';
import ArticleHero from './article-hero';

const cx = classnames( 'archive-hero' );

export default function ArchiveHero() {
    return (
        <div className={cx('archive-hero')}>
            <div className={cx('--primary')}>
                <ArticleHero id={1} />
            </div>
            <div className={cx('--secondary')}>
                <ArticleHero id={2} />
                <ArticleHero id={3} />
            </div>
        </div>
    );
}
