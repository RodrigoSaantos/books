import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}
export async function signIn({ email, password }: SignInBody) {
  const response = await api.get(`/users?email=${email}`)
  const userExists = response.data.length > 0
  if (userExists) {
    if (response.data[0].password === password) {
      return response.data[0]
    }
  }
  throw new Error('Usuário ou senha inválido')
}