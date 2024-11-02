import { Outlet } from "react-router-dom";
import { MainNav } from "../app/dashboard/components/main-nav";
import { UserNav } from "../app/dashboard/components/user-nav";
import { PrivateRoute } from "@/components/private-route";

export function MainLayout() {
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 m-auto">
          <Outlet />
        </div>
      </div>
    </PrivateRoute>
  )
}