import React from 'react';
import classnames from "classnames-prefix";

const cx = classnames('header');

const FeedLink = () => (
  <div className={cx('__feed-link')}>
    <a href='/feed'>
      <i>env</i>
      <span>newsletter</span>
    </a>
  </div>
);

export {FeedLink};
