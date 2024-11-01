import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./pages/auth/sign-up";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";

export const router = createBrowserRouter([
  { path: '/', element: <SignUp />, },
  { path: '/sign-in', element: <SignIn />, },
  { path: '/dashboard', element: <Dashboard />, },
])