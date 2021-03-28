import React from 'react';
import { usePostQuery } from '../store/hooks/usePostQuery';
import Article from './article';

const ArticlesGrid = () => {
    const postQuery = usePostQuery({ page: 0, per_page: 10 });

    if ( postQuery.status === 'pending' ) {
        return <em>Loading</em>;
    }

    if ( postQuery.status === 'failed' ) {
        return <em>try again later</em>;
    }

    if ( postQuery.status === 'finished' && ! postQuery.result.posts.length ) {
        return <em>no articles yet</em>;
    }

    return (
        <div>
            {postQuery.result.posts.map((post: any, i: number) => (
                <Article key={i} postId={post.id} />
            ))}
        </div>
    );
}

export default ArticlesGrid;
