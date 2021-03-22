import React from 'react';
import {Link} from 'react-router-dom';

const FeedLink = () => (
  <div className='feed-link'>
    <Link to='/feed'>
      <i>env</i>
      <span>newsletter</span>
    </Link>
  </div>
);

export default FeedLink;
