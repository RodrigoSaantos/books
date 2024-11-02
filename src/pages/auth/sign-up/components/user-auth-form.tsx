import { signUp } from "@/api/sign-up"
import { Button } from "@/components/button"
import { Icons } from "@/components/icons"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import * as React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as z from "zod"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

const signUpForm = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres'}),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres'})
});

type SignUpForm = z.infer<typeof signUpForm>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm<SignUpForm>({ 
    resolver: zodResolver(signUpForm)
  })

  const { mutateAsync: createAccount } = useMutation({
    mutationFn: signUp,
  })

  async function handleSignUp({ name, email, password}: SignUpForm) {
    try {
      await createAccount({ name, email, password })
      alert('Conta criada com sucesso')
      reset()
      navigate('/sign-in')
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message)
      }
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label htmlFor="name">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Seu nome"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isSubmitting}
              {...register('name')}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isSubmitting}
              {...register('email')}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isSubmitting}
              {...register('password')}
            />
            {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
          </div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : 'Criar Conta'}
          </Button>
        </div>
      </form>
    </div>
  )
}