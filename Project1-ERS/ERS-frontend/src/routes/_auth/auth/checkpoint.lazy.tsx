import { useUserInfo } from '@/features/auth/components/hooks/use-user-info'
import { UserInfo } from '@/features/auth/components/user-info'
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/auth/checkpoint')({
  component: RouteComponent,
})

function RouteComponent() 
{
    const {data} = useUserInfo();
    const router = useRouter();

    if (data?.role === "USER")
    {
        router.navigate({to:"/reimb/reimb-table"});
    }
    else if (data?.role === "ADMIN")
    {
      router.navigate({to:"/admin/all-users"})
    }

  return (
    <div className='dark text-white bg-gray-600 h-screen'>
        <UserInfo/>
    </div>
  )
}
