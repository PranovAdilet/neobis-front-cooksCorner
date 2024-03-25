import React, {MouseEventHandler, useState} from 'react';
import styles from "@/app/(sidebar)/detail/Detail.module.scss";
import {useToggleActions} from "@/hooks/useToggleActions";
import {TOGGLE_ACTIONS} from "@/constants/bookmarkAndLike.constants";
import likeImage from '@/../public/like.svg'
import likedImage from '@/../public/liked.svg'
import bookmarkImage from '@/../public/bookmark.svg'
import bookmarkedImage from '@/../public/bookmarked.svg'
import cardLikeImage from '@/../public/cardLike.svg'
import cardBookmarkImage from '@/../public/cardBook.svg'
import Image from "next/image";



interface IProps{
    likes: number
    bookmarks: number
    isLiked: boolean
    isBookmarked: boolean
    recipeId: number
    type: "detail" | "card" | 'search'
}

const ToggleButtons = ({likes, isLiked, recipeId, isBookmarked, bookmarks, type} : IProps) => {

    const {mutate, isLoading} = useToggleActions('recipes')

    // из-за долгого изменения со стороны сервера добавил стейты, которые видит пользователь, когда ставит лайки

    const [isLikedState, setIsLikedState] = useState(isLiked)
    const [isBookmarkState, setIsBookmarkState] = useState(isBookmarked)

    const [likesLength, setLikesLength] = useState(likes)
    const [bookmarksLength, setBookmarksLength] = useState(bookmarks)


    const handleToggleLike: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        if (!isLikedState){
            setIsLikedState(true)
            setLikesLength(prev => prev + 1)
            const newData = formatKeysActions(TOGGLE_ACTIONS.LIKE)
            mutate(newData)
        }else {
            setIsLikedState(false)
            setLikesLength(prev => prev - 1)
            const newData = formatKeysActions(TOGGLE_ACTIONS.DISLIKE)
            mutate(newData)
        }
    }
    const handleToggleBookmark: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        if (!isBookmarkState){
            setIsBookmarkState(true)
            setBookmarksLength(prev => prev + 1)
            const newData = formatKeysActions(TOGGLE_ACTIONS.BOOKMARK)
            mutate(newData)
        }else {
            setIsBookmarkState(false)
            setBookmarksLength(prev => prev - 1)
            const newData = formatKeysActions(TOGGLE_ACTIONS.REMOVE_BOOKMARK)
            mutate(newData)
        }
    }
    const formatKeysActions = (actionId : number, objectId = TOGGLE_ACTIONS.RECIPE_ID, id = recipeId) => {
        return {
            actionId, objectId, id
        }
    }
    const typeButtons = (value: string) =>  type === "detail" ? value : ''


    const typeImage = (image: string, image2: string) => { // В зависимости от типа, получаем нужный размер изображения
        if (type === "search"){
            return image2
        }

        if ( type === "card"){
            return image
        }else {
            return image2
        }
    }

    return (
        <div className={styles.likes}>
            <button
                onClick={handleToggleLike}
                type="button" className={styles.likes__icon}>
                <Image
                    src={!isLikedState ? typeImage(cardLikeImage, likeImage) : likedImage}
                    alt="icon"
                    width={30}
                    height={30}
                />
            </button>
            <p className={styles.likes__text}>
                { likesLength > 0 && likesLength + typeButtons(' likes')}
            </p>
            <button
                onClick={handleToggleBookmark}
                type="button"
                >
                <Image
                    src={!isBookmarkState ? typeImage(cardBookmarkImage, bookmarkImage) : bookmarkedImage}
                    alt="icon"
                    width={isBookmarkState ? 25 : 20}
                    height={isBookmarkState ? 25 : 20}
                />
            </button>
            <p className={styles.likes__text}>
                { bookmarksLength > 0 && bookmarksLength + typeButtons(' bookmarks') }
            </p>
        </div>
    );
};

export default ToggleButtons;