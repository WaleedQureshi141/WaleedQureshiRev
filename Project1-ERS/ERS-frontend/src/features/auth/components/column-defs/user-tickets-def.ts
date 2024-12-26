import { ColumnDef } from "@tanstack/react-table"

export type Reimbs = 
{
    id: number
    description: string
    amount: number
    status: "PENDING" | "DENIED" | "APPROVED"
}

export const reimbColumns: ColumnDef<Reimbs>[] = 
[
    {
        accessorKey: "amount",
        header: "AMOUNT",
    },
    {
        accessorKey: "description",
        header: "DESCRIPTION",
    },
    {
        accessorKey: "status",
        header: "STATUS",
    },
]