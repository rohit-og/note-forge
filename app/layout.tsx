import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system">
        <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 w-full overflow-y-auto p-4 scrollbar-hide">
        
        {children}
      </main>
    </SidebarProvider>
    </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
