import { Users } from "@/components/user";
import { useQueryUsers } from "@/hooks/use-query-users";

export function ConfigUsers() {
  const { data } = useQueryUsers()
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Usuários</h2>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 max-w-5xl w-full">
        {data && data.map(user => (
          <Users
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </>
  )
}