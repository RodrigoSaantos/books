import { api } from '@/lib/axios'

export interface PutBookBody {
  id: string
  name: string
  description: string
  cover: string
}
export async function putBook({ cover, id, name, description }: PutBookBody) {
  return await api.put(`/books/${id}`, {
    name,
    cover,
    description,
  }) 
}