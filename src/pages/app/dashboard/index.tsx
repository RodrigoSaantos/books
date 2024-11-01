import { BookCover } from "@/components/book-cover";
import { MainNav } from "./components/main-nav";
import { UserNav } from "./components/user-nav";

const data = [
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
  {name: 'Irure commodo', description: 'In Lorem dolore duis laboris qui exercitation occaecat dolore ex consectetur. Esse velit', cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},
]

export function Dashboard() {
  return (
      <div className="flex flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 m-auto">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 max-w-5xl">
            {data.map(book => (
              <BookCover 
                key={book.name}
                book={book}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
  )
}