import {createRoot} from 'react-dom/client'
import './index.css'
import Random from "./components/pages/Random.tsx";
import About from "./components/pages/About.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import App from "./App.tsx";
import Loading from "./components/ui/Loading.tsx";

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
    <RouterProvider router={router} fallbackElement={<Loading/>}/>
    ,
)
