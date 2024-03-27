import React, {useState} from 'react';
import styles from "@/app/(sidebar)/profile/Profile.module.scss";
import {FiLogOut} from "react-icons/fi";
import Logout from "@/components/dashboard-layout/ui/Logout";

const LogoutProfile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    return (
        <>
            <Logout isOpen={isOpen} setIsOpen={setIsOpen}/>
            <button onClick={handleOpen} className={styles.logout}>
                <span className={styles.icon}>
                    <FiLogOut/>
                </span>
            </button>
        </>
    );
};

export default LogoutProfile;