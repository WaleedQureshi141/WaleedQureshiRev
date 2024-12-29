import { ColumnDef } from "@tanstack/react-table"

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
]