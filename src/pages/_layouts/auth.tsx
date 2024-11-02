import { PublicRoute } from "@/components/public-route";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <PublicRoute>
      <div className="container relative h-screen flex-col items-center justify-center max-w-full flex md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Logo
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Outlet />
          </div>
        </div>
      </div>
    </PublicRoute>
  )
}