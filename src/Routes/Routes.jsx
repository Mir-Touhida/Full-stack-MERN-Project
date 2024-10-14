import {
    createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import Login from "../Pages/Login/Login";

import Register from "../Pages/Register/Register";
import CourseDetails from "../Pages/Shared/CourseDetails/CourseDetails";
import Details from "../Pages/Shared/ProductDetails/Details";
import PrivateRoute from "./PrivateRoute";

  const routes = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,

      children:[{

        path:"/",
      element: <Home></Home>,
      },
      {
        path:"/pDetails/:id",
        element: (
        <PrivateRoute>
          <Details></Details>
        </PrivateRoute>
          ),
        loader: ({ params }) =>
        fetch(
          `http://localhost:5000/courseDetails/${params.id}`
        ),
        
      },
      {
        path: "/CourseDetails",
        element: <CourseDetails></CourseDetails>,
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      ],
    },
]);
export default routes;