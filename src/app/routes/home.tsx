import React from 'react';
import ArchiveHero from '../components/archive-hero';
import ArticlesGrid from '../components/articles-grid';

export const Home = () => {
    return (
        <main>
            <h1>3shwa2yat - Home</h1>
            <ArchiveHero />
            <ArticlesGrid />
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
