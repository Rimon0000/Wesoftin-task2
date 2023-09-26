import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home"
import UserDetails from "../pages/Home/Users/UserDetails";
import Users from "../pages/Home/Users/Users";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/users",
          element: <Users></Users>,
        },
        {
          path: "/users/:id",
          element: <UserDetails></UserDetails>,
          loader: ({params}) => {
            const id = params.Id
            const data = fetch('/data.json')
            return data
          }
        },
      ]
    },
  ]);

export default router