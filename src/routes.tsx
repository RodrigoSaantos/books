import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { MainLayout } from "./pages/_layouts/main";
import { Book } from "./pages/app/book";
import { Dashboard } from "./pages/app/dashboard";
import { SignUp } from "./pages/auth/sign-up";
import { SignIn } from "./pages/auth/sign-in";
import { ConfigUsers } from "./pages/app/config-users";
import { ConfigBooks } from "./pages/app/config-books";

export const router = createBrowserRouter([
  {
    path: '/', element: <AuthLayout />,
    children: [
      {
        path: '/', element: <SignUp />,
      },
      {
        path: '/sign-in', element: <SignIn />,
      },
    ]
  },
  {
    path: '/dashboard', element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/book/:id',
        element: <Book />
      },
      {
        path: '/dashboard/config-users',
        element: <ConfigUsers />
      },
      {
        path: '/dashboard/config-books',
        element: <ConfigBooks />
      },
    ]
  },
])