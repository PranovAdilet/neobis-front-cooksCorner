import React from 'react';
import Author from "../Author";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";


export const metadata: Metadata = {
    title: 'Author',
    ...NO_INDEX_PAGE
}
const AuthorPage = () => {
    return <Author/>
};

export default AuthorPage;