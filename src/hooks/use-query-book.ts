import { getBook } from "@/api/get-book";
import { useQuery } from "@tanstack/react-query";

interface UseQueryBook {
  id: string
}

export function useQueryBook({ id }: UseQueryBook) {
  return useQuery({
    queryKey: ['book', id],
    queryFn: async() => await getBook({ id }),
    staleTime: Infinity,
    retry: 0
  });
}