import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
    [

{
path:'/',
element:<DefaultLayout/>,
children:[
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/',
        element:<Navigate to="/dashboard"/>
        },

]
},

{
    path:'/',
    element:<GuestLayout/>,
    children:[
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
    ]
}

    ]
);

export default router;