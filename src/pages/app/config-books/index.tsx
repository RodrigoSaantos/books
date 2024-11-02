import { EditBookCover } from "@/components/edit-book-cover";
import { useQueryBooks } from "@/hooks/use-query-books";

export function ConfigBooks() {
  const { data } = useQueryBooks()
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Livros</h2>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 max-w-5xl w-full">
        {data && data.map(book => (
          <EditBookCover
            key={book.id}
            book={book}
            aspectRatio="square"
            width={150}
            height={150}
          />
        ))}
      </div>
    </>
  )
}