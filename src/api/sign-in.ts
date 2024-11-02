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

      localStorage.setItem('auth', JSON.stringify({
        name: response.data[0].name,
        email: response.data[0].email,
        isAdm: response.data[0].isAdm,
      }))

      return response.data[0]
    }
  }
  throw new Error('Usuário ou senha inválido')
}