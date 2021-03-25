import React from 'react';
import ArticlesGrid from '../components/articles-grid';

export const Home = () => {
    return (
        <main>
            <h1>3shwa2yat - Home</h1>
            <ArticlesGrid articles={Array(12).fill(1)} />
        </main>
    );
};

const route = {
    component: Home,
    options: {
        path: "/",
        exact: true,
    },
};

export default route;
