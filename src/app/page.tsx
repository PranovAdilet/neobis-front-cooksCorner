'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {DASHBOARD_PAGES} from "@/config/pages-url.config";

export default function App() {
    const router = useRouter()
    useEffect(() => {
        router.replace(DASHBOARD_PAGES.HOME)
    }, [router]);

  return <div>

  </div>
}
