import { Button } from "@/components/button";
import { useAuth } from "@/hooks/auth";
import { getInitials } from "@/utils/function";

export function UserNav() {
  const { user } = useAuth()
  return (
    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
      {getInitials(user?.name ?? '')}
    </Button>
  )
}