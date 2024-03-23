import {NextRequest, NextResponse} from "next/server";
import {EnumTokens} from "@/services/auth-token.service";
import {DASHBOARD_PAGES} from "@/config/pages-url.config";


export async function _middleware(request: NextRequest, response: NextResponse){

    const {url, cookies} = request

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
    const isAuthPage = url.includes('/auth')

    if (isAuthPage && refreshToken) NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
    if (isAuthPage) NextResponse.next()
    if (!refreshToken) NextResponse.redirect(new URL('/auth', request.url))

    return NextResponse.next()
}


export const config ={
    matcher: ['/profile/:path*', '/auth/:path*', '/home']
}