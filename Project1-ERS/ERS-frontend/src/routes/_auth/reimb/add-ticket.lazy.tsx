import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AddTicketForm } from '@/features/auth/components/add-ticket-form'
import { useVisibility } from '@/features/auth/components/hooks/helpers/use-visibility'
import { UserInfo } from '@/features/auth/components/user-info'
import { UserTicketsTable } from '@/features/auth/components/user-tickets-table'
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createLazyFileRoute('/_auth/reimb/add-ticket')({
  component: RouteComponent,
})

function RouteComponent() 
{
  // const router = useRouter();

  // function route()
  // {
  //     router.navigate({to:"/reimb/reimb-table"})
  // }

  useEffect(() => 
  {
    document.body.style.overflow = "hidden";
    return () =>
    {
      document.body.style.overflow = "";
    }
  }, []);

  return (
    <div className="dark text-white bg-gray-600">
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-50">
        <div className="z-10 absolute w-screen">
          <AddTicketForm />
          {/* <Button variant={"destructive"} onClick={route}>CANCEL</Button> */}
        </div>
      </div>
      <UserInfo />
      <br />
      <br />
      <Card className="w-10/12 place-self-center">
        <CardHeader className="justify-self-center">
          <CardTitle>
            ALL TICKETS
            <Button variant={'destructive'} className="ml-36">
              REQUEST REIMBURSEMENT
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UserTicketsTable />
        </CardContent>
      </Card>
    </div>
  )
}
