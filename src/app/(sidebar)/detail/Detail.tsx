import React from 'react';
import styles from "@/app/(sidebar)/detail[id]/Detail.module.scss";
import Image from "next/image";
import img from "../../../../public/card.png";
import Title from "@/components/ui/title/Title";
import {IoTimeOutline} from "react-icons/io5";
import {IoIosHeartEmpty} from "react-icons/io";
import {PiBookmarkSimpleLight} from "react-icons/pi";

const Detail = () => {
    return (
        <section className={styles.detail}>
            <Image className={styles.image} src={img} alt="detailImage"/>
            <div className={styles.content}>
                <Title>Ainsley’s Jerk Chicken</Title>
                <p className={styles.author}>by Ainsley Harriott</p>
                <div className={styles.time}>
                    <span className={styles.time__icon}><IoTimeOutline/></span>
                    <p className={styles.time__textr}>20-30 min</p>
                </div>
                <span className={styles.difficulty}>Easy</span>
                <div className={styles.likes}>
                    <span className={styles.likes__icon}><IoIosHeartEmpty/></span>
                    <p className={styles.likes__text}>12 likes</p>
                    <span className={styles.likes__icon}><PiBookmarkSimpleLight/></span>
                    <p className={styles.likes__text}>12 likes</p>
                </div>
                <h3 className={styles.subtitle}>Description</h3>
                <p className={styles.text}>
                    You pick up your palette knife and then work that into. Give your meat a good old rub.
                    That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and
                    then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat.
                    He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub.
                    That’s it, nice and hot, hot and spicy meat. He-he boy...
                </p>
                <h3 className={styles.subtitle}>Ingredients</h3>
                <div className={styles.ingredients__content}>
                    <div className={styles.ingredients}>
                        <p className={styles.ingredient}>Chicken</p>
                        <span className={styles.amount}>1 kg</span>
                    </div>
                    <div className={styles.ingredients}>
                        <p className={styles.ingredient}>Olive oil</p>
                        <span className={styles.amount}>3/4 spoon</span>
                    </div>
                    <div className={styles.ingredients}>
                        <p className={styles.ingredient}>Garlic powder</p>
                        <span className={styles.amount}>1/2 spoon</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Detail;