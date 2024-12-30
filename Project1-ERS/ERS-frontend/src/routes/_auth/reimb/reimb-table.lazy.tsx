import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { AddTicketForm } from '@/features/auth/components/add-ticket-form'
import { reimbColumns } from '@/features/auth/components/column-defs/user-tickets-def'
import { useUserTickets } from '@/features/auth/components/hooks/use-user-tickets'
import { UserInfo } from '@/features/auth/components/user-info'
import { UserTicketsTable } from '@/features/auth/components/user-tickets-table'
import { useQueryClient } from '@tanstack/react-query'
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/reimb/reimb-table')({
  component: RouteComponent,
})

function RouteComponent() 
{
  const {data} = useUserTickets();
  const router = useRouter();
  // const queryClient = useQueryClient();

  function route()
  {
    // if ()
    router.navigate({to:"/reimb/add-ticket"});
  }

  return (
    <div className="dark text-white bg-gray-600 min-h-screen">
      {/* <div className="z-10 absolute w-screen" id="add-ticket">
        <AddTicketForm />
      </div> */}
      <UserInfo />
      {/* <br /> */}
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
          {/* <UserTicketsTable /> */}
          <div className="container mx-auto py-10">
            <DataTable columns={reimbColumns} data={data || []}/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
