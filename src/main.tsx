import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadingScreen from "./components/ui/LoadingScreen.tsx";
import React from "react";

const Random = React.lazy(() => import("./components/pages/Random.tsx"))

const About = React.lazy(() => import("./components/pages/About.tsx"))

const Layout = React.lazy(() => import("./components/layout/Layout.tsx"))

const App = React.lazy(() => import("./App.tsx"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "random",
                element: <Random/>,
            },
            {
                path: "about",
                element: <About/>,
            },
        ],
    },
]);


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} fallbackElement={<LoadingScreen/>}/>
    ,
)
