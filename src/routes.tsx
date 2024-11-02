import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { MainLayout } from "./pages/_layouts/main";
import { Book } from "./pages/app/book";
import { Dashboard } from "./pages/app/dashboard";
import { SignUp } from "./pages/auth/sign-up";
import { SignIn } from "./pages/auth/sign-in";

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
    ]
  },
])