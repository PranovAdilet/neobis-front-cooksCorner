'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/config/pages-url.config";

export default function App() {
    const router = useRouter()
    useEffect(() => {
        router.replace(ROUTES.SIGN_IN)
    }, [router]);

  return <div>

  </div>
}
