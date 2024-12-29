import { DataTable } from "@/components/ui/data-table";
import { allUsersColumns } from "../column-defs/all-users-defs";
import { useAllUsers } from "../hooks/useAllUsers";

export function AllUsersTable()
{
    const {data} = useAllUsers();
        
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={allUsersColumns} data={data || []}/>
        </div>
    )
}