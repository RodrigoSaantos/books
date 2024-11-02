import { Link } from "react-router-dom";
import { UserAuthForm } from "./components/user-auth-form";

export function SignIn() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Fazer login
        </h1>
        <p className="text-sm text-muted-foreground">
          Coloque seu email abaixo para realizar login
        </p>
      </div>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Não tem uma conta?{" "}
        <Link
          to="/"
          className="underline underline-offset-4 hover:text-primary"
        >
          Criar conta
        </Link>
        .
      </p>
    </>
  )
}