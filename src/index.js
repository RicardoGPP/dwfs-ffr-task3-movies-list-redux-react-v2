import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header } from "./components/Header";
import { MovieDetail } from "./views/MovieDetail";
import { Home } from "./views/Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Header/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/movie/:id",
                element: <MovieDetail/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();