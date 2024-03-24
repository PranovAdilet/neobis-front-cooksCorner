'use client'

import React, {useState} from 'react';
import logo from '@/../public/logo.svg'
import logoDark from '@/../public/logo_dark.svg'
import Image from "next/image";
import {MENU} from "@/components/dashboard-layout/dashboard-sidebar/menu.data";
import styles from './Sidebar.module.scss'
import MenuItem from "@/components/dashboard-layout/ui/MenuItem";
import Logout from "@/components/dashboard-layout/ui/Logout";
import {FiLogOut} from "react-icons/fi";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {DASHBOARD_PAGES} from "@/config/pages-url.config";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const isActive = pathname === DASHBOARD_PAGES.HOME || pathname === DASHBOARD_PAGES.SEARCH || pathname.includes(DASHBOARD_PAGES.PROFILE)

    const handleOpen = () => setIsOpen(true)

    return (
        <aside className={styles.sidebar}>
            <div>
                <div className={styles.logo}>
                    <Image src={isActive ? logo : logoDark} alt="logo"/>
                    <p className={clsx(styles.logo__text, !isActive && styles.logo__text_active)}>CooksCorner</p>
                </div>
                <div className={styles.line}/>
                <ul className={styles.list}>
                    {
                        MENU.map(item => (
                            <MenuItem key={item.name} classname={styles.item} item={item}/>
                        ))
                    }
                </ul>
            </div>
            <button onClick={handleOpen} className={clsx(styles.item)}>
                <span className="text-red-500 text-1.5xl">
                    <FiLogOut/>
                </span>
            </button>
            <Logout isOpen={isOpen} setIsOpen={setIsOpen}/>
        </aside>
    );
};

export default Sidebar;