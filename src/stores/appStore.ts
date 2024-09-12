
import { create } from 'zustand'

interface DialogState {
  isMobileSideBarOpen: boolean,
  toggleMobileSideBar: () => void
  isPaymentDialogOpen: boolean,
  togglePaymentDialog: () => void
  closePaymentDialog: () => void
}

const useAppStore = create<DialogState>()((set) => ({
    isMobileSideBarOpen: false,
    toggleMobileSideBar: () => {set((state) => ({ isMobileSideBarOpen: !state.isMobileSideBarOpen }))},
    isPaymentDialogOpen: false,
    togglePaymentDialog: () => {set((state) => ({ isPaymentDialogOpen: !state.isPaymentDialogOpen }))},
    closePaymentDialog: () => {set((state) => ({ isPaymentDialogOpen: false }))}
}))

export default useAppStore