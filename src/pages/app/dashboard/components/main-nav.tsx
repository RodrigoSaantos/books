
import * as React from 'react'
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { useAuth } from '@/hooks/auth'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { user } = useAuth()
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      {user?.isAdm && (
        <Link
          to="/dashboard/config-books"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Livros
        </Link>
      )}
      {user?.isAdm && (
        <Link
          to="/dashboard/config-users"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Usuários
        </Link>
      )}
    </nav>
  )
}