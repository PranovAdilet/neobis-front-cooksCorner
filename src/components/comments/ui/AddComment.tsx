import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import Image from "next/image";
import avatar from "../../../../public/user.jpg";
import clsx from "clsx";
import {useAddReply} from "@/hooks/user/useComment";
import {Button} from "@/components/ui/button/Button";
import Loader from "@/components/ui/loader/Loader";
import {toast} from "react-toastify";
import {InvalidateQueryFilters, useQueryClient} from "@tanstack/react-query";
import {KEYS} from "@/constants/query-keys.constants";


interface IProps{
    isReply: boolean
    setIsReply: (state: boolean) => void
    id: number
    placeholder: string
    type: 'comment' | 'reply'
    recipeId: number
    setComments?: (state: boolean) => void
}

const AddComment = ({isReply, setIsReply, id, type, placeholder, recipeId} : IProps) => {


    const [text, setText] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    console.log(isReply)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    const handleClose = () => {
        if (type === "comment"){
            setIsOpen(true)
            return
        }
        setText('')
        setIsReply(false)
    }

    const handleOpen = () => {
        if (type === "comment") setIsOpen(false)
    }

    const newId = `${type === "comment" ? recipeId : id}`

    const {mutate, isLoading} = useAddReply(newId, text, type)
    const queryClient = useQueryClient()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate()
            .then(() => {
                queryClient.invalidateQueries(KEYS.comments as InvalidateQueryFilters)
                toast.success('Сomment has been added')
            })
                .catch(() => toast.error('Failed!'))
        setText('')
        if (type === "comment"){
            return
        }
        setIsReply(false)
    }


    return (
        <form onSubmit={handleSubmit} className={clsx({
            [styles.hidden]: !isReply,
            [styles.reply]: isReply ,
            [styles.addComment]: isReply && type === "comment"
        })}
        >
            {
                isLoading && <Loader/>
            }
            <div className={clsx({
                [styles.left]: type === "reply",
                [styles.blockImage]: type === "comment"
            })}>
                <Image className={styles.reply__image} src={avatar} alt="avatar" width={200}
                       height={200}/>
            </div>
            <div className={styles.reply__content}>
                <input
                    onFocus={handleOpen}
                    disabled={isLoading}
                    placeholder={placeholder}
                    value={text}
                    onChange={handleChange}
                    className={styles.input}
                    type="text"
                />
                <div className={styles.reply__bottom}>
                    <div></div>
                    <div className={clsx(styles.btns, type === "comment" && 'mb-5')}>
                        {
                            !isOpen && <>
                                <Button onClick={handleClose} type="button" className={styles.button}>Cancel</Button>
                                {
                                    type === 'comment' ?
                                        <Button
                                            disabled={!text.length || isLoading}
                                            type="submit"
                                            className={styles.btn}>Leave a comment
                                        </Button>
                                        :
                                        <Button
                                            disabled={!text.length || isLoading}
                                            type="submit"
                                            className={styles.button}>Reply
                                        </Button>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddComment;