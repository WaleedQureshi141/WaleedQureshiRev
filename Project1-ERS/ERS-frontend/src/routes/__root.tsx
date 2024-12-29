import QueryProvider from '@/providers/query-provider'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from 'sonner'

export const Route = createRootRoute({
  component: () => (

    <QueryProvider>
        <div>
            <Outlet/>
            <Toaster/>
        </div>
    </QueryProvider>

    // <>
    //   <div className="p-2 flex gap-2">
    //     <Link to="/" className="[&.active]:font-bold">
    //       Home
    //     </Link>{' '}
    //     <Link to="/about" className="[&.active]:font-bold">
    //       About
    //     </Link>
    //   </div>
    //   <hr />
    //   <Outlet />
    //   <TanStackRouterDevtools />
    // </>
  ),
})