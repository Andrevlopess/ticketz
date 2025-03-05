import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarProvider
} from "@/components/ui/sidebar";

export default function Main({ children }: { children: React.ReactNode }) {
  
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
