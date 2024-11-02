import { Book } from "@/components/book-cover";
import { api } from "@/lib/axios";

interface GetBook {
   id: string
}

export async function getBook({ id }: GetBook) {
   const response = await api.get<Book>(`/books/${id}`)

   return response.data
}