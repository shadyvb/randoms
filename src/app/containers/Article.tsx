import React from 'react';
import { useParams } from 'react-router';
import Author from '../components/author';
import Thumbnail from '../components/thumbnail';
import { usePostBySlug } from '../store/hooks/usePostBySlug';

export default function Article() {
    const { slug }: { slug: string } = useParams();
    const { title, author, content, meta } = usePostBySlug( slug );

    return (
        <main>
            <article>
                <h1>{title.rendered}</h1>
                <div>
                    <Thumbnail id={meta._thumbnail_id} />
                </div>
                <div>
                    <span>By</span>
                    <Author id={author} />
                </div>
                <div>
                    {content.rendered}
                </div>
            </article>
        </main>
    );
}
