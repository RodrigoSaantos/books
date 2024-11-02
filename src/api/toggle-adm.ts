import { User } from "@/hooks/auth";
import { api } from "@/lib/axios";

interface ToggleAdm {
   id: string;
   value: boolean;
}

export async function toggleAdm({ id, value }: ToggleAdm) {
   await api.patch<User>(`/users/${id}`, {
      isAdm: value,
   })

   return id
}