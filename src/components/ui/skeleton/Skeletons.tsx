import styles from './Skeleton.module.scss'
import clsx from "clsx";

interface IProps{
    count: number
    className: string
}

const SkeletonCard = ({count, className}: IProps) => {

    const skeletonCards = new Array(count).fill(0).map((_, idx) => (
        <div className={clsx(styles.card, className)} key={idx}>

        </div>
    ));

    return <>
        {skeletonCards}
    </>;
}

export default SkeletonCard;