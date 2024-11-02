import { Button } from "@/components/button";
import { useAuth } from "@/hooks/auth";
import { getInitials } from "@/utils/function";
import { useNavigate } from "react-router-dom";

export function UserNav() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('auth')
    navigate('/sign-in')
  }
  return (
    <div className="flex space-x-4 justify-center items-center">
      <Button type="button" variant="default" className="relative h-8 w-8 rounded-full">
        {getInitials(user?.name ?? '')}
      </Button>
      <Button onClick={handleLogout} variant="link" className="relative">
        Sair
      </Button>
    </div>
  )
}