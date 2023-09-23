"use client";

import { Fragment, useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Fragment>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
        </Fragment>
    );
};
