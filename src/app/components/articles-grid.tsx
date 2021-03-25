import React from 'react';
import Article from './article';

const ArticlesGrid = (props: any) => {
    if ( ! props.articles.length ) {
        return <em>Loading</em>;
    }

    return (
        <div>
            {props.articles.map((post: any, i: number) => (
                <Article key={i} postId={post.id} />
            ))}
        </div>
    );
}

export default ArticlesGrid;
