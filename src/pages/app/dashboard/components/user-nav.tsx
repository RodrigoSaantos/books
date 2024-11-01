import { Button } from "@/components/button";
import { getInitials } from "@/utils/function";

export function UserNav() {
  return (
    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
      {getInitials('Rodrigo Santos')}
    </Button>
  )
}