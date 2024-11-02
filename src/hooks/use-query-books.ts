import { getBooks } from "@/api/get-books";
import { useQuery } from "@tanstack/react-query";

export function useQueryBooks() {
  return useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
    staleTime: Infinity
  });
}