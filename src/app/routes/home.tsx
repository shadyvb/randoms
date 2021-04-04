import React from 'react';
import ArchiveHero from '../components/archive-hero';
import ArticlesGrid from '../components/articles-grid';

export function Home() {
    return (
        <main>
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
