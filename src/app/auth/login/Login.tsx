'use client'

import React from 'react';
import {Field} from "@/components/ui/field/Field";
import {useLoginForm} from "@/hooks/auth/use-login-form";
import {Button} from "@/components/ui/button/Button";
import styles from './Login.module.scss'
import Link from "next/link";
import {ROUTES} from "@/config/pages-url.config";
import {LuEye, LuEyeOff} from "react-icons/lu";
import {MdAlternateEmail} from "react-icons/md";
import clsx from "clsx";

const Login = () => {

    const {
        handleSubmit,
        isLoading,
        register, errors
    } = useLoginForm();


    return (
        <div className={styles.login}>
            <form className={styles.login__form} onSubmit={handleSubmit}>
                <div className={styles.login__block}>
                    <Field
                        Icon={MdAlternateEmail}
                        placeholder='Enter email:'
                        type='email'
                        {...register('email', {
                            required: 'Email is required!',
                            pattern: {
                                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                message: 'Invalid address',
                            }
                        })}> Gmail {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </Field>
                    <Field
                        placeholder='Enter password'
                        type='password'
                        Icon={LuEyeOff}
                        HideIcon={LuEye}
                        {...register('password', {
                            required: 'Password is required!'
                        })}> Password {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                    </Field>
                </div>

                <Button className={clsx(styles.login__button, 'button')} disabled={isLoading}>
                    Sign In
                </Button>

                <p className={styles.link}>I don’t have an account?
                    <Link href={ROUTES.SIGN_UP} className={styles.link__text}> Sign Up Now</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;