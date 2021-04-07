import Article from '../containers/Article';

const route = {
    component: Article,
    options: {
        path: "/articles/:slug",
        exact: false,
    },
};

export default route;
