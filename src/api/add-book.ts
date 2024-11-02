import { api } from '@/lib/axios'

export interface AddBookBody {
  cover: string
  name: string
  description: string
}
export async function addBook({ name, cover, description }: AddBookBody) {
  return await api.post(`/books`, {
    id: String(Math.floor(Math.random() * (999999 - 999 + 1)) + 999),
    name,
    cover,
    description,
  }) 
}