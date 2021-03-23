import React from 'react';
import {Link} from 'react-router-dom';
import {useUser} from '../store/hooks/useUser';
import {useAttachment} from '../store/hooks/useAttachment';
import {useCategory} from '../store/hooks/useCategory';

const Article = (props: any) => {
  const {article} = props;
  const author = useUser(article.author);
  const poster = useAttachment(article.meta.__thumbnail_id);
  const category = useCategory(article.category);

  return (
    <article>
      <div>
        <Link to={`/${article.id}`}>
          <img alt={poster.caption.rendered} src={poster.source_url} />
        </Link>
        <div>
          <span>{category.name}</span>
          <span>/</span>
          <span>{author.name}</span>
        </div>
      </div>
      <div>
        <h3>
          <Link to={`/${article.id}`}>
            {article.title.rendered}
          </Link>
        </h3>
      </div>
    </article>
  );
}

export default Article;
