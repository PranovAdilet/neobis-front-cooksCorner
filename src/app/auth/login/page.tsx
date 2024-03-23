import React from 'react';
import {Heading} from "@/components/ui/Heading";
import Login from "@/app/auth/login/Login";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Login',
    ...NO_INDEX_PAGE
}
const LoginPage = () => {
    return (
        <div>
            <Heading text="Welcome Back To " title="CooksCorner "/>
            <Login/>
        </div>
    );
};

export default LoginPage;