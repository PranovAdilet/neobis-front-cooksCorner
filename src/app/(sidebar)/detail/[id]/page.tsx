import React, {FC} from 'react';
import Detail from "@/app/(sidebar)/detail/Detail";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";

export const metadata: Metadata = {
    title: 'Description',
    ...NO_INDEX_PAGE
}

const DetailPage: FC = () => {
    return <Detail/>
};

export default DetailPage;