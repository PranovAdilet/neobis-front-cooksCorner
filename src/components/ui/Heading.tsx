import styles from './Heading.module.scss'
interface IHeading {
    title: string
    text: string
}

export function Heading ({title, text} : IHeading) {
    return <div className={styles.parent}>
        <h1 className={styles.text}>{text} <span className={styles.title}>{title}</span></h1>
    </div>
}