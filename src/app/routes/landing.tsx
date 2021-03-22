import React from 'react';
import {Header} from '../components/header';

export const Landing = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const route = {
  component: Landing,
  options: {
    path: "/landing",
    exact: undefined,
  },
};

export default route;
