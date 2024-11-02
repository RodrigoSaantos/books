import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";

export interface Book {
  id: string
  name: string
  description: string
  cover: string;
}

interface BookCoverProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function BookCover({
  book,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: BookCoverProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Link to={`/dashboard/book/${book.id}`}>
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
        <h3 className="font-medium leading-none truncate">{book.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{book.description}</p>
      </div>
    </div>
  )
}