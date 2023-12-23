import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TaskManagementLayout from "../layouts/TaskManagementLayout";
import YourTasks from "../components/TaskManagement/YourTasks/YourTasks";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../components/TaskManagement/UpdateTask/UpdateTask";
import { axiosPublic } from "../api";
import UserProfile from "../components/TaskManagement/UserProfile/UserProfile";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>page not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  // Task Management Layout
  {
    path: "/manage-tasks",
    element: (
      <PrivateRoute>
        <TaskManagementLayout></TaskManagementLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "your-tasks",
        element: <YourTasks />,
      },
      {
        path: 'your-tasks/update-task/:id',
        element: <UpdateTask/>,
        loader: ({params})=> axiosPublic.get(`/single-task/${params.id}`)
      },
      {
        path: 'user-profile',
        element: <UserProfile/>
      }
    ],
  },
]);
