import SideBar from "@/components/sub-components/SideBar";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full">
        <SideBar />
        {children}
      </main>
     
    );
  }
  