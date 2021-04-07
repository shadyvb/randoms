import React from 'react';
import { usePostQuery } from '../store/hooks/usePostQuery';
import { Post } from '../store/types/post';
import Article from './article';

const ArticlesGrid = () => {
    const postQuery = usePostQuery({ page: 1, per_page: 10 });

    if ( postQuery.status === 'pending' ) {
        return (
            <em>Loading</em>
        );
    } else if ( postQuery.status === 'failed' ) {
        return (
            <em>try again later</em>
        );
    } else if ( postQuery.status === 'finished' && ! postQuery.result.posts.length ) {
        return (
            <em>no articles yet</em>
        );
    } else {
        return (
            <div>
                {postQuery.result.posts.map((post: Post, i: number) => (
                    <Article key={i} id={post.id} />
                ))}
            </div>
        );
    }
}

export default ArticlesGrid;
