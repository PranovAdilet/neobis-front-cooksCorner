import Search from "./Search";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";

export const metadata: Metadata = {
    title: 'Search',
    ...NO_INDEX_PAGE
}

export default function SearchPage (){
    return <Search/>
};
