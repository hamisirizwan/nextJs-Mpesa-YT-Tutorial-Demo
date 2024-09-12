import { ReactNode } from "react"
import SideBar from "@/components/shell/SideBar"
import NavBar from "@/components/shell/NavBar"
import { PaymentDialog } from "@/components/dialogs/PaymentDialog"

export default function DashBoardLayout({children}:{children:ReactNode}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
   <SideBar />
      <div className="flex flex-col">
         <NavBar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
        <PaymentDialog />
      </div>
    </div>
  )
}
