import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "register",
    element: <SignUpPage/>
  },
  {
    path: "login",
    element: <SignInPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <RouterProvider router={router} />
);
