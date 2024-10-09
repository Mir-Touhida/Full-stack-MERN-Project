import {
    createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import Login from "../Pages/Login/Login";
import CourseDetail from "../Pages/Shared/CourseDetail/CourseDetail";
import Register from "../Pages/Register/Register";
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,

      children:[{

        path:"/",
      element: <Home></Home>,
      },
      {
        path: "/courseDetail",
        element: <CourseDetail></CourseDetail>,
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