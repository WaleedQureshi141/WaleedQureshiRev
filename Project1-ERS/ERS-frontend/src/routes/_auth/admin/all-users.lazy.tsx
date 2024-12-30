import { DataTable } from '@/components/ui/data-table';
import { allUsersColumns } from '@/features/admin/column-defs/all-users-defs';
import { useAllUsers } from '@/features/admin/hooks/useAllUsers';
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/all-users')({
  component: RouteComponent,
})

function RouteComponent() {
  const {data} = useAllUsers();
        
    return (
      <div className="container mx-auto py-10">
          <DataTable columns={allUsersColumns} data={data || []}/>
      </div>
    )
}
