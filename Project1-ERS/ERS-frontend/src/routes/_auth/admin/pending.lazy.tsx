import { PendingTable } from '@/features/admin/components/pending-table'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/pending')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <PendingTable/>
    </div>
  )
}
