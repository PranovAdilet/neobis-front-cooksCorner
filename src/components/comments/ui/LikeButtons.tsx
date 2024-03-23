import React, {MouseEventHandler, useState} from 'react';
import styles from "@/components/comments/Comments.module.scss";
import {BiSolidDislike, BiSolidLike} from "react-icons/bi";
import {useToggleActions} from "@/hooks/useToggleActions";
import {TOGGLE_ACTIONS} from "@/constants/bookmarkAndLike.constants";
import clsx from "clsx";
import {AuthTokensService} from "@/services/auth-token.service";

interface IProps{
    likes: number
    isLiked: boolean
    commentId: number
}

const LikeButtons = ({likes, isLiked, commentId} : IProps) => {

    const {mutate, isLoading} = useToggleActions('comments')
    const [isLikedState, setIsLikedState] = useState(isLiked)
    const [isDislikeState, setIsDislikeState] = useState(false)

    const [likesLength, setLikesLength] = useState(likes)

    const token = AuthTokensService.getAccessToken()

    const handleToggleLike: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()

        if (!isLikedState){
            setLikesLength(prev => prev + 1)
            setIsDislikeState(false)
            setIsLikedState(true)
            const newData = formatKeysActions(TOGGLE_ACTIONS.LIKE)
            mutate(newData)
        }else {
            setIsLikedState(false)
            setLikesLength(prev => prev - 1)
            const newData = formatKeysActions(TOGGLE_ACTIONS.DISLIKE)
            mutate(newData)
        }
    }
    const handleToggleDislike: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        if (isLikedState){
            setIsDislikeState(true)
            setIsLikedState(false)
            setLikesLength(prev => prev - 1)
            const newData = formatKeysActions(TOGGLE_ACTIONS.DISLIKE)
            mutate(newData)
        }else if (isDislikeState){
            setIsDislikeState(false)
        }else {
            setIsDislikeState(true)
        }
    }
    const formatKeysActions = (actionId : number, objectId = TOGGLE_ACTIONS.COMMENT_ID, id = commentId) => {
        return {
            actionId, objectId, id
        }
    }

    return (
        <div className={styles.icons}>
            <div className={styles.block}>
                <button
                    disabled={isLoading || !token}
                    className={clsx(styles.icon, isLikedState && styles.icon_active)}
                    onClick={handleToggleLike}
                    type="button">
                    <BiSolidLike/>
                </button>
                <p className={styles.likes}>
                    {likesLength > 0 && likesLength}
                </p>
            </div>
            <div className={styles.block}>
                <button
                    disabled={isLoading || !token}
                    onClick={handleToggleDislike}
                    className={clsx(styles.icon, isDislikeState && styles.icon_active)}>
                    <BiSolidDislike/>
                </button>
            </div>
        </div>
    );
};

export default LikeButtons;

