import React from 'react';
import Article from './article';

export default function RelatedPosts({ slug }: { slug: string }) {
    const relatedposts = [ 3, 4, 5 ];

    return (
        <div>
            <span>Related Articles</span>
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
