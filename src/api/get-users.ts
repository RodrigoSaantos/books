import { User } from "@/hooks/auth";
import { api } from "@/lib/axios";

export async function getUsers() {
   const response = await api.get<User[]>('/users')

   return response.data
}