import { User } from "@/hooks/auth";
import { api } from "@/lib/axios";

interface DeleteBook {
   id: string;
}

export async function deleteBook({ id }: DeleteBook) {
   await api.delete<User>(`/books/${id}`)

   return id
}