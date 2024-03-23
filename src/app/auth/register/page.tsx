import React from 'react';
import {Heading} from "@/components/ui/Heading";
import Register from "@/app/auth/register/Register";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";


export const metadata: Metadata = {
    title: 'Register',
    ...NO_INDEX_PAGE
}
const RegisterPage = () => {

    return (
        <div>
            <Heading text="Sign up for delicious " title="Discoveries!"/>
            <Register/>
        </div>
    );
};

export default RegisterPage;