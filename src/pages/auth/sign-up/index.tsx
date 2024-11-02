import { Link } from "react-router-dom";
import { UserAuthForm } from "./components/user-auth-form";

export function SignUp() {
  return (
    <>
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
    </>
  )
}