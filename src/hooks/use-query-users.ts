import { getUsers } from "@/api/get-users";
import { useQuery } from "@tanstack/react-query";

export function useQueryUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: Infinity
  });
}