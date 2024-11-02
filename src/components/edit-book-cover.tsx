import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putBook } from "@/api/put-books";
import { Book } from "./book-cover";
import { deleteBook } from "@/api/delete-book";

interface EditBookCoverProps extends React.HTMLAttributes<HTMLFormElement> {
  book: Book
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

const booksForm = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  description: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  cover: z.string().url({ message: 'Deve ser uma URL válida' })
});

type BooksForm = z.infer<typeof booksForm>

export function EditBookCover({
  book,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: EditBookCoverProps) {
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<BooksForm>({
    resolver: zodResolver(booksForm)
  })

  const { mutateAsync: putBookFn } = useMutation({
    mutationFn: putBook,
    async onSuccess(_, { id, cover, description, name }) {
      queryClient.setQueryData<Book[]>(['books'], (data) => {
        if (!data) return
        const bookUpdated = data.map(b => {
          if (b.id === id) {
            return {
              ...b,
              cover,
              description,
              name,
            }
          }
          return b
        })
        return bookUpdated
      })
      alert('Livro editado com sucesso')
    },
  })

  const { mutateAsync: deleteBookFn } = useMutation({
    mutationFn: deleteBook,
    async onSuccess(_, { id }) {
      queryClient.setQueryData<Book[]>(['books'], (data) => {
        if (!data) return
        const removeBook = data.filter(b => b.id !== id)
        return removeBook
      })
      alert(`Livro ${book.name} removido com sucesso!`)
    },
  })

  async function handleSaveUpdates({ name, cover, description }: BooksForm) {
    try {
      await putBookFn({ name, cover, description, id: book.id })
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSaveUpdates)} className={cn("space-y-3 ring-1 ring-primary rounded-md p-4", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Link to={`/dashboard/book/${book.name}`}>
          <img
            src={book.cover}
            alt={book.name}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </Link>
      </div>
      <div className="space-y-1 text-sm">
        <div className="grid gap-2">
          <Label htmlFor="cover">
            Imagem
          </Label>
          <Input
            id="cover"
            type="cover"
            autoCapitalize="none"
            autoComplete="cover"
            autoCorrect="off"
            defaultValue={book.cover}
            disabled={isSubmitting}
            {...register('cover')}
          />
          {errors.cover && <p className="text-xs text-destructive">{errors.cover.message}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">
            Título
          </Label>
          <Input
            id="name"
            placeholder="name@example.com"
            type="name"
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect="off"
            defaultValue={book.name}
            disabled={isSubmitting}
            {...register('name')}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">
            Descrição
          </Label>
          <textarea
            className="flex min-h-36 h-36 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="name@example.com"
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect="off"
            defaultValue={book.description}
            disabled={isSubmitting}
            {...register('description')}
          />
          {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
        </div>
        <div className="flex space-x-2">
          <Button disabled={isSubmitting} type="submit" className="w-full">Salvar</Button>
          <Button onClick={() => deleteBookFn({id: book.id})} type="button" variant={'destructive'} className="w-full">Excluir</Button>
        </div>
      </div>
    </form>
  )
}