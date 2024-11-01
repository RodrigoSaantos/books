import { Link } from "react-router-dom";
import { UserAuthForm } from "./components/user-auth-form";

export function SignUp() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center max-w-full flex md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          Logo
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar uma conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Coloque seu email abaixo para criar sua conta
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link
              to="/sign-in"
              className="underline underline-offset-4 hover:text-primary"
            >
              Fazer login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}