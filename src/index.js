import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header } from "./components/Header";
import { MovieDetail } from "./views/MovieDetail";
import { Home } from "./views/Home";
import { Favoritos } from "./views/Favoritos";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";

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
            },
            {
                path: "/favoritos",
                element: <Favoritos/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();