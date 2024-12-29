import { RegisterForm } from '@/features/auth/components/register-form'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner'

export const Route = createLazyFileRoute('/_auth/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {/* Hello "/_auth/auth/register"! */}
      <RegisterForm />
      <Toaster/>
    </div>
  )
}
