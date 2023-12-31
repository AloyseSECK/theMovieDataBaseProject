import './App.css'
import { MyRoutes } from './routes/MyRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyRoutes />
    </QueryClientProvider>

  )
}

export default App
