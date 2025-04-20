import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../components/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        { index: true, Component: Home },
        { index: true, path:'about', element: <h1>about</h1> },
        { index: true, path:'cart', element: <h1>cart</h1> },
        { index: true, path:'bookmark', element: <h1>bookmark</h1> },
    ],
  }
]);
