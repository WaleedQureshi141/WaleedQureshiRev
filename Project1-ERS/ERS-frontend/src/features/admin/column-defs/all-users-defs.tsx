import { ColumnDef } from "@tanstack/react-table"
import { useDelReimbs } from "@/features/auth/components/hooks/use-del-reimbs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export type AllUsers = 
{
    id: number
    name: string
    username: string
    role: "USER" | "MANAGER"
}

export const allUsersColumns: ColumnDef<AllUsers>[] = 
[
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "EMPLOYEE NAME"
    },
    {
        accessorKey: "username",
        header: "USERNAME"
    },
    {
        accessorKey: "role",
        header: "ROLE"
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const user = row.original
          const del = useDelReimbs();

          function delFunc()
          {
            del.mutate(
              {
                id: user.id
              }
            )
          }
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>ACTIONS</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => delFunc()}
                >
                  DELETE USER
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            )
        },
    },
]