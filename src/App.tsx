import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "/login",
        element: <Login />,
        // loader: contactLoader,
      },
      {
        path: "/register",
        element: <Register />,
        // loader: contactLoader,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
    ]
  }
]);

export default function App () {
  return (
    <RouterProvider router={router} />
  )
}