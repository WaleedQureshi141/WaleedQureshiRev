import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { reimbColumns } from '@/features/auth/components/column-defs/user-tickets-def'
import { useLogout } from '@/features/auth/components/hooks/use-logout'
import { useUserTickets } from '@/features/auth/components/hooks/use-user-tickets'
import { UserInfo } from '@/features/auth/components/user-info'
import { useQueryClient } from '@tanstack/react-query'
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { toast } from 'sonner'

export const Route = createLazyFileRoute('/_auth/reimb/reimb-table')({
  component: RouteComponent,
})

function RouteComponent() 
{
  const {data} = useUserTickets();
  const router = useRouter();
  const {mutate: logout} = useLogout();

  function route()
  {
    router.navigate({to:"/reimb/add-ticket"});
  }

  return (
    <div className="dark text-white bg-gray-600 min-h-screen">
      <nav className='border-b h-[45px] flex items-center shadow-xl bg-gray-800'>
        <div className='max-w-2x1 mx-auto w-11/12 flex items-center justify-between'>
          <h1 className='text-2x1 font bold'>EMPLOYEE REIMBURSEMENT SYSTEM</h1>
          <Button type='button' className="ml-8" onClick={() => logout()}>
            LOGOUT
          </Button>
        </div>
      </nav>
      <UserInfo />
      <br />
      <Card className="w-screen place-self-center">
        <CardHeader className="justify-self-center">
          <CardTitle>
            ALL TICKETS
            <Button type='button' variant={'destructive'} className="ml-36" onClick={route}>
              REQUEST REIMBURSEMENT
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto py-10">
            <DataTable columns={reimbColumns} data={data || []}/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
