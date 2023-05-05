import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Recipes from '../pages/Recipes/Recipes';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../ErrorPage';
import Blog from '../pages/Blog/Blog';


const Routes = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'recipes/:id',
            element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
            loader: ({params}) => fetch(`https://assignment-10-server-annisha-siddika.vercel.app/recipes/${params.id}`)
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        }
    ]
}

])

export default Routes;