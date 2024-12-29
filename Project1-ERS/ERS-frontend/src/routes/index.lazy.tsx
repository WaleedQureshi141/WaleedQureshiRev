import { LoginForm } from '@/features/auth/components/login-form';
import { createLazyFileRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner';

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <LoginForm/>
      <Toaster/>
    </div>
  )
}