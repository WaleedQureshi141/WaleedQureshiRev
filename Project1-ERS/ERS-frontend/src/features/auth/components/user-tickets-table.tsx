import { DataTable } from "@/components/ui/data-table";
import { useUserTickets } from "./hooks/use-user-tickets";
import { reimbColumns, Reimbs } from "./column-defs/user-tickets-def";
import { Button } from "@/components/ui/button";

export function UserTicketsTable ()
{
    const {data} = useUserTickets();
    
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={reimbColumns} data={data || []}/>
        </div>
    )
}