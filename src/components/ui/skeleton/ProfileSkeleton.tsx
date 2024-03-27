import React from 'react';
import Title from "@/components/ui/title/Title";
import Image from "next/image";
import avatar from "../../../../public/user.jpg";
import Recipes from "@/app/(sidebar)/profile/Recipes";
import clsx from "clsx";
import styles from "@/app/(sidebar)/profile/Profile.module.scss"


const ProfileSkeleton = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <Title>Profile</Title>
                </div>
                <div className={styles.content}>

                    <Image width={160} height={160} className={styles.image} src={avatar}
                           priority={true} alt="avatar"/>
                    <div className={styles.content__info}>
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
                        <h4 className={styles.name}>Loading</h4>

                        <p className={styles.text}>Loading</p>
                        <div  className={styles.btn}>Loading</div>
                    </div>
                </div>
                <Recipes/>
            </div>
        </section>
    );
};

export default ProfileSkeleton;