import { DataTable } from "@/components/ui/data-table";
import { useUserTickets } from "./hooks/use-user-tickets";
import { reimbColumns } from "./column-defs/user-tickets-def";

export function UserTicketsTable ()
{
    const {data} = useUserTickets();
    
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={reimbColumns} data={data || []}/>
        </div>
    )
}