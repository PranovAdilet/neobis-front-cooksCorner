import React from 'react';
import {Heading} from "@/components/ui/Heading";
import Login from "@/app/auth/login/Login";


const LoginPage = () => {
    return (
        <div>
            <h2></h2>
            <Heading text="Welcome Back To " title="CooksCorner "/>
            <Login/>
        </div>
    );
};

export default LoginPage;