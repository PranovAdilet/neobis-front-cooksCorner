import React from 'react';
import Confirmed from "@/app/auth/confirmed/Confirmed";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";


export const metadata: Metadata = {
    title: 'Confirmed',
    ...NO_INDEX_PAGE
}


const ConfirmedPage = () => {
    return <Confirmed/>
};

export default ConfirmedPage;