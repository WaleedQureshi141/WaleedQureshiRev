import { DataTable } from '@/components/ui/data-table';
import { pendingColumns } from '@/features/admin/column-defs/pending-reimb-defs';
import { PendingTable } from '@/features/admin/components/pending-table'
import { usePending } from '@/features/admin/hooks/usePending';
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/pending')({
  component: RouteComponent,
})

function RouteComponent() {

  const {data} = usePending();
      
  return (
    <div className="container mx-auto py-10">
        <DataTable columns={pendingColumns} data={data || []}/>
    </div>
  )
}
