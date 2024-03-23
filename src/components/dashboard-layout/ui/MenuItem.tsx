import React from 'react';
import {IMenuProps} from "./dashboard-sidebar/types/menu.interface";
import Link from "next/link";
import styles from './dashboard-sidebar/Sidebar.module.scss'
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {AuthTokensService} from "@/services/auth-token.service";


export default  function MenuItem ({item} : IMenuProps)  {
    const isProfile = () => {
        if (item.name === "Profile"){
            return `/${AuthTokensService.getUserId()}`
        }
        return ''
    }


    const pathname = usePathname()

    const className = clsx({[styles.item_active]: pathname === item.link}, styles.item)

    return <Link scroll={false} className={className} href={`${item.link}`} >
        <span className={styles.icon}>
            {<item.icon/>}
        </span>
    </Link>
}
