import home from "./home";
import catchall from "./catchall";

type route = {
  component: any;
  options: {
    path?: string;
    exact?: boolean;
  };
};

const routes: route[] = [home, catchall];

export default routes;
