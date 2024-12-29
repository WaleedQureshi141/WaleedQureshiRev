import { ColumnDef } from "@tanstack/react-table"

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
]