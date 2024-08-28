import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const LoadingScreen = React.lazy(() => import("./components/ui/LoadingScreen.tsx"));

const NamesOfAllah = React.lazy(() => import("./components/pages/NamesOfAllah.tsx"));

const InspirationalQuotes = React.lazy(() => import("./components/pages/InspirationalQuotes.tsx"));

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
            {
                path: "99-names-of-allah",
                element: <NamesOfAllah/>
            },
            {
                path: "inspirational-quotes",
                element: <InspirationalQuotes/>
            }
        ],
    },
]);


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<LoadingScreen/>}/>
    </QueryClientProvider>
    ,
)
