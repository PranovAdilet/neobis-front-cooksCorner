import React from 'react';
import styles from './Home.module.scss'
import Title from "@/components/ui/title/Title";
import Card from "@/components/food-card/Card";


const ManePage = () => {
    return (
        <section className={styles.home}>
            <div className="container">
                <h2 className={styles.title}>Hi, Sarthak. UI Designer & Cook</h2>
                <Title>Category</Title>
                <ul className={styles.list}>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
                <div className={styles.cards}>

                </div>

            </div>
        </section>
    );
};

export default ManePage;