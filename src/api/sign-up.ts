import { api } from '@/lib/axios'

export interface SignUpBody {
  name: string
  email: string
  password: string
}
export async function signUp({ name, email, password }: SignUpBody) {
  return await api.post(`/users`, {
    id: Math.floor(Math.random() * (999999 - 999 + 1)) + 999,
    name,
    email,
    password,
    isAdm: false,
  }) 
}