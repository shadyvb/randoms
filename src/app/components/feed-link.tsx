import React from 'react';
import {Link} from 'react-router-dom';
import classnames from "classnames-prefix";

const cx = classnames('header');

const FeedLink = () => (
  <div className={cx('__feed-link')}>
    <Link to='/feed'>
      <i>env</i>
      <span>newsletter</span>
    </Link>
  </div>
);

export default FeedLink;
