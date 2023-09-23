"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { Fragment, useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <CreateServerModal />
        </div>
    );
};
