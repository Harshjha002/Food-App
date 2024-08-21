import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"))



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>loading....</h1>}><Grocery /></Suspense>
            },
            {
                path: 'restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

]);


const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<RouterProvider router={appRouter} />);