import { MdCottage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import type { IMenuItem } from './types/menu.interface'

export const MENU: IMenuItem[] = [
    {
        icon: MdCottage,
        link: DASHBOARD_PAGES.HOME,
        name: 'Home'
    },
    {
        icon: CiSearch,
        link: DASHBOARD_PAGES.SEARCH,
        name: 'Search'
    },
    {
        icon: CgProfile,
        link: DASHBOARD_PAGES.PROFILE,
        name: 'Profile'
    }
]
