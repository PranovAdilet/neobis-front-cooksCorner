import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import {IComment} from "@/types/comments.types";
import {Button} from "@/components/ui/button/Button";
import {useUpdateAndRemoveComment} from "@/hooks/user/useComment";
import Loader from "@/components/ui/loader/Loader";

interface IProps{
    item: IComment
    setEdit: (state: boolean) => void
    edit: boolean
    type: string
}
const EditForm = ({item, setEdit, edit, type} : IProps) => {

    const [text, setText] = useState(item.text)
    const inputRef = useRef<null | HTMLInputElement>(null)

    useEffect(() => {
        if (edit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [edit]);


    const {update, isLoading} = useUpdateAndRemoveComment(type)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    const handleClose = () => setEdit(false)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        update(item.commentId, text)
        setEdit(false)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {
                isLoading && <Loader/>
            }
            <input
                ref={inputRef}
                value={text}
                onChange={handleChange}
                className={styles.field}
                type="text"
            />
            <div className="flex justify-between mt-3">
               <div></div>
                <div>
                    <Button onClick={handleClose} type="button" className={styles.button}>
                        Cancel
                    </Button>

                    <Button
                        disabled={!text.length}
                        type="submit"
                        className={styles.button}>Save
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default EditForm;