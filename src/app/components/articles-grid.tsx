import React from 'react';
import { usePostQuery } from '../store/hooks/usePostQuery';
import { Post } from '../store/types/post';
import Article from './article';
import Divider from './divider'

const ArticlesGrid = () => {
    const postQuery = usePostQuery({ page: 1, per_page: 10 });

    if ( postQuery.isPending ) {
        return (
            <em>Loading</em>
        );
    }

    if ( postQuery.isFailed ) {
        return (
            <em>try again later</em>
        );
    }

    if (
        postQuery.isFinished &&
        ! postQuery.isFailed &&
        ! postQuery.result.posts.length
    ) {
        return (
            <em>no articles yet</em>
        );
    }

    return (
        <div className='articles-grid'>
            <div className='container'>
                <Divider>احدث المقالات</Divider>
                <div className='posts'>
                    {postQuery.result.posts.map((post: Post, i: number) => (
                        <Article key={i} id={post.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticlesGrid;
