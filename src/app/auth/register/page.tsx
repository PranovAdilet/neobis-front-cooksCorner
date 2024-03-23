import React from 'react';
import {Heading} from "@/components/ui/Heading";
import Register from "@/app/auth/register/Register";



const RegisterPage = () => {

    return (
        <div>
            <Heading text="Sign up for delicious " title="Discoveries!"/>
            <Register/>
        </div>
    );
};

export default RegisterPage;