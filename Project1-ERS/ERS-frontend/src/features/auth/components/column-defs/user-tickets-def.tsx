"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="STATUS" />
        ),
        enableSorting: true,
    },
]