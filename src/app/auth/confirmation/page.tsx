import React from 'react';
import Confirmation from "@/app/auth/confirmation/Confirmation";
import {Heading} from "@/components/ui/Heading";

const ConfirmationPage = () => {
    return <div>
        <Heading text="Welcome Back To " title="CooksCorner "/>
        <Confirmation/>
    </div>
};

export default ConfirmationPage;