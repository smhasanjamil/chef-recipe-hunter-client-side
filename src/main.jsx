import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Chef from './components/Chef/Chef.jsx';
import ChefRecipes from './components/ChefRecipes/ChefRecipes.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import NotFound from './components/NotFound/NotFound.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "*",
        element: <NotFound/>,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chef",
        element: <Chef />,
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
