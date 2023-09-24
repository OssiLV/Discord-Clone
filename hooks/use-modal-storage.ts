import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType } from "@prisma/client";
import { create } from "zustand";

export type ModalType =
    | "CREATE-SERVER"
    | "INVITE"
    | "EDIT-SERVER"
    | "MEMBERS"
    | "CREATE-CHANNEL"
    | "LEAVE-SERVER"
    | "DELETE-SERVER";

interface ModalData {
    server?: ServerWithMembersWithProfiles;
    channelType?: ChannelType;
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
