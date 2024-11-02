import { Book } from "@/components/book-cover";
import { api } from "@/lib/axios";

export async function getBooks() {
   const response = await api.get<Book[]>('/books')

   return response.data
}