import styles from './Confirmation.module.scss'
import {Button} from "@/components/ui/button/Button";
import clsx from "clsx";

interface IProps{
    isOpen: boolean
    setIsOpen: (state:boolean) => void
}

const ConfirmationModal = ({setIsOpen, isOpen}:IProps) => {
    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Мы выслали еще одно письмо на указанную тобой почту
                example@gmail.com</h2>
            <div className={clsx(styles.text, "text-text")}>Не забудь проверить
                ящик “Спам”!!!!!!!
            </div>
            <Button className={styles.button} onClick={handleOpen}>Понятно!!!</Button>
        </div>
    );
};

export default ConfirmationModal;