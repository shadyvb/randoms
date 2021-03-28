import React from 'react';
import { Link } from 'react-router-dom';
import { usePost } from '../store/hooks/usePost';
import Thumbnail from './thumbnail';
import Category from './category';
import Author from './author';

const Article = (props: any) => {
    const article = usePost(props.postId);

    return (
        <article>
            <div>
                <Link to={`/${article.id}`}>
                    <Thumbnail id={article.meta._thumbnail_id} />
                </Link>
                <div>
                    <span>
                        {article.categories.map(id => (
                            <Category key={id} id={id} />
                        ))}
                    </span>
                    <span>/</span>
                    <Author id={article.author} />
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
