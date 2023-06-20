import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    // main layout;
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <>this is error elements</>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
]);