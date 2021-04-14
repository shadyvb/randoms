import React from 'react';
import Article from './article';

export default function RelatedPosts({ id }: { id: number }) {
    const relatedposts = [ 3, 4, 5 ];

    return (
        <div>
            <span>Related Articles</span>
            <ul>
                {relatedposts.map((postId: number ) => (
                    <li key={postId}>
                        <Article id={postId} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
