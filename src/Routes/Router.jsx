
import {
      createBrowserRouter,
    } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

    const router = createBrowserRouter([
      {
        path: "/",
        errorElement:<Error></Error>,
        element: <LayOut></LayOut>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            }
        ]
      },
    ]);
    export default router;