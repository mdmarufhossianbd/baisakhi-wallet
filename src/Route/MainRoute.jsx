import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : '/about',
            element : <About></About>
        }
      ]
    },
  ]);

export default router