import React from 'react';
import {IMenuProps} from "../dashboard-sidebar/types/menu.interface";
import Link from "next/link";
import styles from '../dashboard-sidebar/Sidebar.module.scss'
import {usePathname} from "next/navigation";
import clsx from "clsx";


export default  function MenuItem ({item} : IMenuProps)  {

    const pathname = usePathname()

    const className = clsx({[styles.item_active]: pathname.includes(item.link)}, styles.item)

    return <Link scroll={false} className={className} href={`${item.link}`} >
        <span className={styles.icon}>
            {<item.icon/>}
        </span>
    </Link>
}
