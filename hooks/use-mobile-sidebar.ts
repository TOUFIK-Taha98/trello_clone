import { create } from "zustand";

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
// export const useMobileSidebar = create<MobileSidebarStore>((set) => {
//     return {
//       isOpen: false,
//       onOpen: () => set({ isOpen: true }),
//       onClose: () => set({ isOpen: false }),
//     };
// })
