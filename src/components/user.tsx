import { useAuth, User } from "@/hooks/auth"
import { cn } from "@/lib/utils"
import { getInitials } from "@/utils/function"
import { Input } from "./input"
import { Button } from "./button"
import { Label } from "./label"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser } from "@/api/delete-user"
import { toggleAdm } from "@/api/toggle-adm"

interface UserProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User
}

export function Users({ user: userProp, className, ...props }: UserProps) {
  const { user } = useAuth()

  const queryClient = useQueryClient()
  const { mutateAsync: deleteUserFn } = useMutation({
    mutationFn: deleteUser,
    async onSuccess(_, { id }) {
      queryClient.setQueryData<User[]>(['users'], (data) => {
        if (!data) return
        const removeUser = data.filter(usr => usr.id !== id)
        return removeUser
      })
      alert(`Usuário ${userProp.name} removido com sucesso!`)
    },
  })

  const { mutateAsync: toggleUserAdmFn } = useMutation({
    mutationFn: toggleAdm,
    async onSuccess(_, { id, value }) {
      queryClient.setQueryData<User[]>(['users'], (data) => {
        if (!data) return
        const userUpdated = data.map(usr => {
          if (usr.id === id) {
            return {
              ...usr,
              isAdm: value,
            }
          }
          return usr
        })
        return userUpdated
      })
      alert(`Usuário ${userProp.name} atualizado com sucesso!`)
    },
  })
  
  return (
    <div className={cn('relative shadow-2xl grid grid-cols-[32px_1fr_32px] ring-1 ring-primary rounded-lg py-2 px-4 space-x-2 items-center', className)}  {...props}>
      <div className="flex bg-primary/20 justify-center items-center min-h-8 min-w-8 h-8 w-8 rounded-full">
        {getInitials(userProp.name ?? '')}
      </div>
      <div className="flex flex-col">
        <span className="font-bold truncate">{userProp.name}</span>
        <span className="text-sm truncate">{userProp.email}</span>
        <div className="flex items-center space-x-4">
          <Label htmlFor={`admin-${userProp.name}`} className="text-sm truncate">
            Administrador
          </Label>
          <Input onChange={(e) => toggleUserAdmFn({
            id: userProp.id,
            value: e.target.checked
          })} disabled={userProp.id === user?.id} id={`admin-${userProp.name}`} type="checkbox" className="size-4" defaultChecked={userProp.isAdm} />
        </div>
      </div>
      <div className="flex flex-col">
        <Button onClick={() => deleteUserFn({ id: userProp.id })} disabled={userProp.id === user?.id} size={'icon'} variant={'destructive'}>X</Button>
      </div>
    </div>
  )
}