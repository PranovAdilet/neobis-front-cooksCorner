import React from 'react';
import styles from './Confirmation.module.scss'

const Confirmed = () => {
    return (
        <div className={styles.confirmed}>
            <div className={styles.animation}>
                {/* Ваша анимация или изображение, сообщающее о подтверждении почты */}
                <span role="img" aria-label="Email confirmed">✅</span>
            </div>
            <h2 className={styles.title}>Email Confirmed!</h2>
            <p className={styles.text}>Thank you for confirming your email address. You will be redirected to login page
                shortly.</p>
        </div>
    );
};

export default Confirmed;