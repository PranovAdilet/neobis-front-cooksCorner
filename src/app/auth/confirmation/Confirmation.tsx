import React from 'react';

const Confirmation = () => {
    return (
        <section className="login">
            <div className="login__verification-content">
                <div className="login__left">
                    <div className="login__left-info">
                        <h2 className="login__left-title">Lorby </h2>
                        <p className="login__left-text">Твой личный репетитор</p>
                    </div>
                </div>
                <form className="login__verification login__form">
                    <h2 className="login__verification-title">Выслали письмо со ссылкой для завершения
                        регистрации на example@gmail.com
                    </h2>
                    <p className="login__text">
                        Если письмо не пришло, не спеши ждать совиную почту -
                        лучше <span className="login__text-bold">
                        проверь ящик “Спам” <br/>
                        <br/>
                        (´｡• ω •｡`)
                    </span>
                    </p>
                    <h4  className="login__form-text">Письмо не пришло</h4>
                </form>
            </div>
        </section>
    );
};

export default Confirmation;