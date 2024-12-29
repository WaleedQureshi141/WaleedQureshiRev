import { AllUsersTable } from '@/features/admin/components/all-users-table'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/all-users')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AllUsersTable />
    </div>
  )
}
