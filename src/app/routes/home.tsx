import React from 'react';

export const Home = () => {
    return (
        <div>
            <h1>3shwa2yat - Home</h1>
        </div>
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
