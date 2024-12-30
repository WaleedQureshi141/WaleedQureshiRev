"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

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
        header: ({ column }) => 
        {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                STATUS
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },
]