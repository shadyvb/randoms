import React from 'react';
import { Link } from 'react-router-dom';
import { usePost } from '../store/hooks/usePost';
import Thumbnail from './thumbnail';

const Article = (props: any) => {
    const article = usePost(props.postId);

    return (
        <article>
            <div>
                <Link to={`/${article.id}`}>
                    <Thumbnail id={article.meta._thumbnail} />
                </Link>
                <div>
                    <span>
                        {article.categories.map(({ name, slug }) => (
                            <Link key={slug} to={`/category/${slug}`}>
                                {name}
                            </Link>
                        ))}
                    </span>
                    <span>/</span>
                    <span>{article.author.name}</span>
                </div>
            </div>
            <div>
                <h3>
                    <Link to={`/${article.id}`}>{article.title.rendered}</Link>
                </h3>
            </div>
        </article>
    );
}

export default Article;
