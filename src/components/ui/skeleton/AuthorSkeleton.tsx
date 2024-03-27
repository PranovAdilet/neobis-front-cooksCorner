import React from 'react';
import styles from "@/app/(sidebar)/author/Author.module.scss";
import Image from "next/image";
import avatar from "../../../../public/user.jpg";
import {Button} from "@/components/ui/button/Button";
import clsx from "clsx";


const AuthorSkeleton = () => {
    return (
        <section className={styles.author}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Image src={avatar} width={160} height={160} className={styles.image} alt="avatar"/>
                    <h4 className={styles.name}>Loading</h4>

                    <div className={styles.info}>
                        <div className={styles.info}>
                            <div>
                                <p className={styles.info__count}>0</p>
                                <p className={styles.info__text}>recipe</p>
                            </div>
                            <div>
                                <p
                                    className={clsx(styles.info__count)}>
                                    0
                                </p>
                                <p className={styles.info__text}>Followers</p>
                            </div>
                            <div>
                                <p
                                    className={clsx(styles.info__count)}>
                                    0
                                </p>
                                <p className={styles.info__text}>Following</p>
                            </div>

                        </div>
                    </div>

                    <p className={styles.text}>Loading</p>
                    <Button className={styles.btn}>
                        Loading
                    </Button>

                </div>

            </div>
        </section>
    );
};

export default AuthorSkeleton;