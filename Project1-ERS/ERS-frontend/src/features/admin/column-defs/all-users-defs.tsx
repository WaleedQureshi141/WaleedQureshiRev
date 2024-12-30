import { ColumnDef } from "@tanstack/react-table"
import { useDelReimbs } from "@/features/auth/components/hooks/use-del-reimbs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { useUpdateUser } from "@/features/auth/components/hooks/use-update-role"

export type AllUsers = 
{
    id: number
    firstName: string
    lastName: string
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
        header: "EMPLOYEE NAME",
        cell: ({row}) =>
        {
          const firstName = row.original.firstName;
          const lastName = row.original.lastName;
          return `${firstName} ${lastName}`;
        }
    },
    {
        accessorKey: "username",
        header: ({ column }) => 
        {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              USERNAME
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
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
          const update = useUpdateUser();

          function updFunc()
          {
            update.mutate(
              {
                id: user.id
              }
            )
          }

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
                <DropdownMenuItem
                  onClick={updFunc}
                >
                  PROMOTE TO ADMIN
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            )
        },
    },
]