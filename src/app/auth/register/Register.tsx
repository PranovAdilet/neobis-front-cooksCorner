'use client'

import styles from "@/app/auth/login/Login.module.scss";
import {Field} from "@/components/ui/field/Field";
import {Button} from "@/components/ui/button/Button";
import { MdAlternateEmail } from "react-icons/md";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import {ROUTES} from "@/config/pages-url.config";
import {useRegisterForm} from "@/hooks/auth/use-register-form";
import {useRef} from "react";
import clsx from "clsx";

const Register = () => {

    const {
        handleSubmit,
        isLoading,
        register
        , errorMessage, watch, errors,
        isValid
    } = useRegisterForm();

    const password =  useRef({});
    password.current = watch("password", "");

    return (
        <div className="flex justify-center items-center">
            <form className={styles.login__form} onSubmit={handleSubmit}>
                <div className={styles.login__block}>
                    <Field
                        Icon={HiOutlineUser}
                        placeholder='Enter name'
                        type='text'
                        {...register('name', {
                            required: 'Name is required!',
                            minLength: {value: 3, message: 'Minimum length is 3'},
                            maxLength: {
                                value: 25,
                                message: 'Name should not exceed 25 characters',
                            }
                        })}> Name {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </Field>

                    <Field
                        Icon={MdAlternateEmail}
                        placeholder='Enter email'
                        type='email'
                        {...register('email', {
                            required: 'Email is required!',
                            pattern: {
                                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                message: 'Invalid address',
                            },
                            minLength: {value: 5, message: 'Minimum length is 5'},
                            maxLength: {
                                value: 25,
                                message: 'E-Mail should not exceed 25 characters',
                            }
                        })}> Gmail {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </Field>

                    <Field

                        placeholder='Enter password'
                        type='password'
                        Icon={LuEyeOff}
                        HideIcon={LuEye}
                        {...register('password', {
                            required: 'Enter password',
                            minLength: {
                                value: 8,
                                message: 'Password must be between 8 and 15 characters long',
                            },
                            maxLength: {
                                value: 15,
                                message: 'Password must be between 8 and 15 characters long',
                            },
                            pattern: {
                                value: /(?=.*[a-z])(?=.*[A-Z])/,
                                message: 'Include both lowercase and uppercase letters',
                            },
                            validate: {
                                containsNumber: (value) => /\d/.test(value) || 'At least 1 digit',
                                containsSymbol: (value) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value) || 'At least 1 special character',
                            },
                        })}> Password {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                    </Field>

                    <Field
                        placeholder='Re-Enter password'
                        type='password'
                        Icon={LuEyeOff}
                        HideIcon={LuEye}
                        {...register('rePassword', {
                            required: 'Repeat the password',
                            validate: (value) => value === password.current || 'Passwords must match'
                        })}> Re-Password {errors.rePassword && <p className={styles.error}>{errors.rePassword.message}</p>}
                    </Field>

                </div>


                <Button className={clsx(styles.login__button, 'button')} type="submit" disabled={isLoading || !isValid}>
                    Sign In
                </Button>

                <div className={styles.link}>Already have an account?
                    <Link href={ROUTES.SIGN_IN} className={styles.link__text}> Sign In Now</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;