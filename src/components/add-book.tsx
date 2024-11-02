import { addBook } from "@/api/add-book";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

const booksForm = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  description: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  cover: z.string().url({ message: 'Deve ser uma URL válida' })
});

type BooksForm = z.infer<typeof booksForm>

export function AddBook() {
  const queryClient = useQueryClient()
  const dialogRef = useRef<HTMLDialogElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<BooksForm>({
    resolver: zodResolver(booksForm)
  })

  const openDialog = () => {
    dialogRef?.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef?.current?.close();
  };

  const { mutateAsync: addBookFn } = useMutation({
    mutationFn: addBook,
    async onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['books']
      })
      alert('Livro criado com sucesso')
      closeDialog()
      reset()
    },
  })

  async function handleCreateBook({ name, cover, description }: BooksForm) {
    try {
      await addBookFn({ name, cover, description })
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message)
      }
    }
  }

  return (
    <>
      <Button onClick={openDialog} id="updateDetails">Adicionar livro</Button>
      <dialog className="m-auto rounded-lg max-w-lg w-full" ref={dialogRef} id="favDialog">
        <form onSubmit={handleSubmit(handleCreateBook)} method="dialog">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Adicionar novo livro</h3>
            </div>
            <div className="p-6 pt-0 grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="cover">
                  Imagem
                </Label>
                <Input
                  id="cover"
                  type="cover"
                  placeholder="https://..."
                  autoCapitalize="none"
                  autoComplete="cover"
                  autoCorrect="off"
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
                  type="name"
                  placeholder="Nome do livro"
                  autoCapitalize="none"
                  autoComplete="name"
                  autoCorrect="off"
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
                  placeholder="Descrição para o livro"
                  autoCapitalize="none"
                  autoComplete="name"
                  autoCorrect="off"
                  disabled={isSubmitting}
                  {...register('description')}
                />
                {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
              </div>
            </div>
            <div className="flex items-center p-6 pt-0 justify-between space-x-2">
              <Button variant="ghost" onClick={closeDialog} id="cancel" type="reset">Cancelar</Button>
              <Button type="submit">Adicionar</Button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  )
}