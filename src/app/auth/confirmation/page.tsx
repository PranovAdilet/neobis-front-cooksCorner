import React from 'react';
import Confirmation from "@/app/auth/confirmation/Confirmation";
import {Heading} from "@/components/ui/Heading";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";


export const metadata: Metadata = {
    title: 'Confirmation',
    ...NO_INDEX_PAGE
}

const ConfirmationPage = () => {
    return <div>
        <Heading text="Welcome Back To " title="CooksCorner "/>
        <Confirmation/>
    </div>
};

export default ConfirmationPage;