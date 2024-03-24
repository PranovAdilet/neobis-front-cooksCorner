import {forwardRef, ReactNode, useState} from 'react'
import type {IconType} from "react-icons";
import clsx from "clsx";
import styles from '@/app/auth/login/Login.module.scss'

interface InputFieldProps {
    placeholder: string
    disabled?: boolean
    type?: string
    isNumber?: boolean
    Icon?: IconType
    HideIcon?: IconType
    children?: ReactNode
    classname?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>((
        { Icon, HideIcon, type, placeholder,
            disabled, isNumber, children, classname,
            ...rest}, ref) => {


    const [show, setShow] = useState(false)
    const handleClick = () => type === "password" && setShow(!show)

    const showPassword = show ? 'text' : 'password'
    const typeField = type !== 'password' ? type : showPassword

    const className = clsx(!!HideIcon && "cursor-pointer pointer-events-auto", classname, styles.icon)


        return (
            <div>
                <label className={styles.login__label}>
                    <h3 className={styles.login__text}>{children}</h3>
                    <input
                        {...rest}
                        ref={ref}
                        disabled={disabled}
                        maxLength={35}
                        type={typeField}
                        placeholder={placeholder}
                        className={styles.login__field}
                        onKeyDown={event => {
                            if (
                                isNumber &&
                                !/[0-9]/.test(event.key) &&
                                event.key !== 'Backspace' &&
                                event.key !== 'Tab' &&
                                event.key !== 'Enter' &&
                                event.key !== 'ArrowLeft' &&
                                event.key !== 'ArrowRight'
                            ) {
                                event.preventDefault()
                            }
                        }}
                    />
                    {Icon && <span
                        onClick={handleClick}
                        className={className}>
                        {!show ? <Icon /> : HideIcon && <HideIcon/>}
                    </span>}
                </label>
            </div>
        )
    }
)



Field.displayName = 'field'
