import home from "./home";
import catchall from "./catchall";
import landing from "./landing";

type route = {
  component: any;
  options: {
    path?: string;
    exact?: boolean;
  };
};

const routes: route[] = [home, landing, catchall];

export default routes;
