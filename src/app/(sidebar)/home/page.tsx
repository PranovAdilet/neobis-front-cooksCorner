import Home from "./Home";
import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constance";

export const metadata: Metadata = {
    title: 'Home',
    ...NO_INDEX_PAGE
}

export default function HomePage(){
    return <Home/>
}