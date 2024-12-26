import { Toaster } from 'sonner';
import './App.css'
import { AddTicketForm } from './features/auth/components/add-ticket-form'
import { LoginForm } from './features/auth/components/login-form'
import { RegisterForm } from './features/auth/components/register-form'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserTicketsTable } from './features/auth/components/user-tickets-table';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <RegisterForm/>
      <LoginForm/>
      <AddTicketForm/>
      <UserTicketsTable/>
    </QueryClientProvider>
  )
}

export default App
