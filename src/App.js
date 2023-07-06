import React, {useState} from "react";
import './Assets/css/global.scss';
import HomePage from './Pages/HomePage/HomePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage";
import UsefulPage from "./Pages/UsefulPage/UsefulPage";
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/contact',
            element: <ContactPage/>
        },
        {
            path: '/useful',
            element: <UsefulPage/>
        },
        {
            path: '*',
            element: <HomePage/>
        }
    ])
    return (
      <RouterProvider router={router}/>
    );
}

export default App;
