import React from 'react';
import Article from './article';

export default function RelatedPosts() {
    const relatedposts = [ 3, 4, 5 ];

    return (
        <div>
            <h4>Related Articles</h4>
            <ul>
                {relatedposts.map((id: number ) => (
                    <li key={id}>
                        <Article id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
