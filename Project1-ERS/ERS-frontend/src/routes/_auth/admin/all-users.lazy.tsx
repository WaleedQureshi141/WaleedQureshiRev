import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { allUsersColumns } from '@/features/admin/column-defs/all-users-defs';
import { useAllUsers } from '@/features/admin/hooks/useAllUsers';
import { useLogout } from '@/features/auth/components/hooks/use-logout';
import { UserInfo } from '@/features/auth/components/user-info';
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/admin/all-users')({
  component: RouteComponent,
})

function RouteComponent() {
  const {data} = useAllUsers();
  const router = useRouter();
  const {mutate: logout} = useLogout();
  
  function route()
  {
    router.navigate({to:"/admin/pending"});
  }
        
  return (
    <div className="dark text-white bg-gray-600 min-h-screen">
      <nav className='border-b h-[45px] flex items-center shadow-xl bg-gray-800'>
        <div className='max-w-2x1 mx-auto w-11/12 flex items-center justify-between'>
          <h1 className='text-2x1 font bold'>EMPLOYEE REIMBURSEMENT SYSTEM</h1>
          <div>
            <Button type='button' variant={'destructive'} className="ml-36" onClick={route}>
              PENDING REIMBURSEMENTS
            </Button>
            <Button type='button' className="ml-8" onClick={() => logout()}>
              LOGOUT
            </Button>
          </div>
        </div>
      </nav>
      <UserInfo />
      <br />
      <Card className="w-screen place-self-center">
        <CardHeader className="justify-self-center">
          <CardTitle>
            ALL USERS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto py-10">
            <DataTable columns={allUsersColumns} data={data || []}/>
          </div>
      </CardContent>
      </Card>
    </div>
  )
}
