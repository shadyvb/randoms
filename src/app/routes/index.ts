import home from './home';
import article from './article'
import catchall from './catchall';

type route = {
    component: any;
    options: {
        path?: string;
        exact?: boolean;
    };
};

const routes: route[] = [home, article, catchall];

export default routes;
