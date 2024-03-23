'use client'

import React, {useEffect, useState} from 'react';
import styles from './Confirmed.module.scss'
import {useRouter} from "next/navigation";
import {ROUTES} from "@/config/pages-url.config";
import Link from "next/link";
import image from '@/../public/confirmed.png'
import Image from "next/image";

const Confirmed = () => {
    const [seconds, setSeconds] = useState(10)

    const {replace} = useRouter()

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            setSeconds(prevSeconds => prevSeconds - 1)
            if (seconds <= 1) {
                replace(ROUTES.SIGN_IN);
            }
        }, 1000);

        return () => clearTimeout(redirectTimer);
    }, [replace, seconds]);


    return (
        <div className={styles.confirmed}>
            <h2 className={styles.title}>Email Confirmed! </h2>
            <div className={styles.animation}>
                <Image className={styles.image} width={300} height={300} src={image} alt="confirmationImage"/>
            </div>

            <p className={styles.info}>Thank you for confirming your email address. You will be redirected to login page
                after <span className={styles.count}> {seconds}</span></p>

            <Link className={styles.btn} href={ROUTES.SIGN_IN}>Return to login page</Link>
        </div>
    );
};

export default Confirmed;