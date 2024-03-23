import React, {useEffect, useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import {BiSolidDislike, BiSolidLike} from "react-icons/bi";
import {useToggleActions} from "@/hooks/useToggleActions";
import {TOGGLE_ACTIONS} from "@/constants/bookmarkAndLike.constants";
import clsx from "clsx";
import {toast} from "react-toastify";

interface IProps{
    likes: number
    isLiked: boolean
    commentId: number
}

const LikeButtons = ({likes, isLiked, commentId} : IProps) => {

    const {mutate, isLoading, isError} = useToggleActions('comments')

    const [likesLength, setLikesLength] = useState(likes)
    const [action, setAction] = useState<number | null>(isLiked ? TOGGLE_ACTIONS.LIKE : null);

    const handleToggleAction = (event: React.MouseEvent<HTMLButtonElement>, newAction: number) => {
        event.preventDefault();

        if (isLoading) return;

        if (action !== newAction) {  // проверяем равно ли предыдущее действие этому
            const newData = formatKeysActions(newAction);
            mutate(newData);
            setAction(newAction); // устанавливаем новое действие
            if (action === null && newAction === TOGGLE_ACTIONS.DISLIKE){ // если будет повторный дизлайк, то вернет prev
                setLikesLength(prev => prev)
                return;
            }
            //а иначе вернет либо +1 либо -1
            setLikesLength(prev => newAction === TOGGLE_ACTIONS.LIKE ? prev + 1 : prev - 1);
        } else {
            if (newAction === TOGGLE_ACTIONS.LIKE && isLiked){ // если на момент входа у пользователя уже
                // лайкнутый комментарий, то при повторном нажатии, запрос на дизлайк не срабатывает, поэтому делаем условие
                const newData = formatKeysActions(TOGGLE_ACTIONS.DISLIKE);
                mutate(newData);
            }

            setAction(null); // устанавливаем null, чтобы убрать и лайки и дизлайки, так как предыдущее действие равно этому
            setLikesLength(prev => action === TOGGLE_ACTIONS.LIKE ? prev - 1 : prev )

        }
    };
    const formatKeysActions = (actionId : number, objectId = TOGGLE_ACTIONS.COMMENT_ID, id = commentId) => {
        return {
            actionId, objectId, id
        }
    }
    useEffect(() => {
        if (isError){
            setAction(null)
            setLikesLength(likes)
            toast.error('Error, please try again!')
        }
        // нам не нужно включать сюда likes поэтому отключаем предупреждение Eslint
        // eslint-disable-line react-hooks/exhaustive-deps
    },[isError])

    return (
        <div className={styles.icons}>
            <div className={styles.block}>
                <button
                    disabled={isLoading}
                    className={clsx(styles.icon, action === TOGGLE_ACTIONS.LIKE && styles.icon_active)}
                    onClick={(event) => handleToggleAction(event, TOGGLE_ACTIONS.LIKE)}
                    type="button">
                    <BiSolidLike/>
                </button>
                <p className={styles.likes}>
                    {likesLength > 0 && likesLength}
                </p>
            </div>
            <div className={styles.block}>
                <button
                    disabled={isLoading}
                    onClick={(event) => handleToggleAction(event, TOGGLE_ACTIONS.DISLIKE)}
                    className={clsx(styles.icon, action === TOGGLE_ACTIONS.DISLIKE && styles.icon_active)}>
                    <BiSolidDislike/>
                </button>
            </div>
        </div>
    );
};

export default LikeButtons;

