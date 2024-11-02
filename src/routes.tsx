import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./pages/auth/sign-up";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { Book } from "./pages/app/book";
import { PrivateRoute } from "./components/private-route";
import { PublicRoute } from "./components/public-route";

export const router = createBrowserRouter([
  {
    path: '/', element:
      <PublicRoute>
        <SignUp />
      </PublicRoute>
  },
  {
    path: '/sign-in', element:
      <PublicRoute>
        <SignIn />
      </PublicRoute>
  },
  {
    path: '/dashboard', element:
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
  },
  {
    path: '/dashboard/book/:id', element:
      <PrivateRoute>
        <Book />
      </PrivateRoute>
  },
])