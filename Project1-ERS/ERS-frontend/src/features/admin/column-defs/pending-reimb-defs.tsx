import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useReimbUpdate } from "@/features/auth/components/hooks/use-update-reimb"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export type PendingReimbs = 
{
    id: number
    description: string
    amount: string
    status: "PENDING" | "DENIED" | "APPROVED"
    name: string
    username: string
}

export const pendingColumns: ColumnDef<PendingReimbs>[] = 
[
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "description",
        header: "DESCRIPTION"
    },
    {
        accessorKey: "amount",
        header: "AMOUNT"
    },
    {
        accessorKey: "status",
        header: "STATUS"
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
        id: "actions",
        cell: ({ row }) => {
          const pending = row.original
          const update = useReimbUpdate();

          const updateStatus = (status: "APPROVED" | "DENIED") =>
          {
            update.mutate({id: pending.id, status})
          }
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">UPDATE STATUS</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>UPDATE STATUS</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => updateStatus("APPROVED")}
                >
                  APPROVE
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => updateStatus("DENIED")}
                >
                  DENY
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            )
        },
    },
]