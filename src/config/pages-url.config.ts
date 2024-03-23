import {AuthTokensService} from "@/services/auth-token.service";

class DASHBOARD{
    HOME = '/home'
    SEARCH = `/search`
    PROFILE = `/profile/${AuthTokensService.getUserId()}`
}

export const ROUTES = {
    HOME: "/home",
    SIGN_UP: "/auth/register",
    SIGN_IN: "/auth/login",
    DETAILS: "/detail",
    AUTHOR: "/author",
    CONFIRMATION: "/auth/confirmation",
    CONFIRMED: "/auth/confirmed"
};



export const DASHBOARD_PAGES = new DASHBOARD()



