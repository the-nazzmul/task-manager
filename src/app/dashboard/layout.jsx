import Dashboard from "@/components/dashboardsrc";
import { TodoContextProvider } from "@/contexts/TodoContextsrc";

export default function DashboardLayout({ children }) {
  return (
    <TodoContextProvider>
      <Dashboard>{children}</Dashboard>
    </TodoContextProvider>
  );
}
