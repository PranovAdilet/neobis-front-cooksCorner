import React from 'react';
import styles from './Author.module.scss'
import avatar from '../../../../public/avatar.png'
import Image from "next/image";
import Card from "@/components/food-card/Card";

const AuthorPage = () => {
    return (
        <section className={styles.author}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Image className={styles.image} src={avatar} alt="avatar"/>
                    <h4 className={styles.name}>Ainsley Harriott</h4>

                    <div className={styles.info}>
                        <div>
                            <p className={styles.info__count}>29</p>
                            <p className={styles.info__text}>recipe</p>
                        </div>
                        <div>
                            <p className={styles.info__count}>144</p>
                            <p className={styles.info__text}>Followers</p>
                        </div>
                        <div>
                            <p className={styles.info__count}>100</p>
                            <p className={styles.info__text}>Following</p>
                        </div>
                    </div>

                    <p className={styles.text}>Ainsley Denzil Dubriel Harriott MBE is an English chef and television presenter.
                        He is known for his BBC cookinп</p>
                    <button className={styles.btn}>Follow</button>
                </div>

                <div className={styles.cards}>

                </div>
            </div>
        </section>
    );
};

export default AuthorPage;