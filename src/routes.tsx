import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./pages/auth/sign-up";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { Book } from "./pages/app/book";

export const router = createBrowserRouter([
  { path: '/', element: <SignUp />, },
  { path: '/sign-in', element: <SignIn />, },
  { path: '/dashboard', element: <Dashboard />, },
  { path: '/dashboard/book/:id', element: <Book />, },
])