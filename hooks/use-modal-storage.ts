import { Server } from "@prisma/client";
import { type } from "os";
import { create } from "zustand";

export type ModalType = "createServer" | "invite";

interface ModalData {
    server?: Server;
}
interface ModalStorage {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStorage>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data: data }),
    onClose: () => set({ isOpen: false, type: null }),
}));
