import { User } from "@/hooks/auth";
import { api } from "@/lib/axios";

interface DeleteUser {
   id: string;
}

export async function deleteUser({ id }: DeleteUser) {
   await api.delete<User>(`/users/${id}`)

   return id
}