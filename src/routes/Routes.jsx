import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Recipes from '../pages/Recipes/Recipes';

const Routes = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
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
            element: <Recipes></Recipes>,
            loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
        }
    ]
}

])

export default Routes;