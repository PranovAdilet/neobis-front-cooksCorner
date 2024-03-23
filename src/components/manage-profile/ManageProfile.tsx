import React, {Dispatch, SetStateAction, useState} from 'react';
import Title from "@/components/ui/title/Title";
import {Field} from "@/components/ui/field/Field";
import styles from './ManageProfile.module.scss'
import {Button} from "@/components/ui/button/Button";
import FileInput from "@/components/ui/file-input/FileInput";
import {useUpdateProfile} from "@/components/manage-profile/useUpdateProfile";

interface IProps{
    setIsOpen: Dispatch<SetStateAction<boolean>>
    userId: number | undefined
}
const ManageProfile = ({setIsOpen, userId} : IProps) => {
    const handleClose = () => setIsOpen(false)
    const [image, setImage] = useState<File | null>(null)

    const {handleSubmit, register, isLoading, isValid, errors}
        = useUpdateProfile(userId || 0, image)


    return (
        <form onSubmit={handleSubmit} className={styles.profile}>
            <Title>Manage profile</Title>
            <p className={styles.subtitle}>Change your name</p>
            <Field
                placeholder="Enter your name"
                {...register('name', {
                    required: 'Name is required!',
                    minLength: {value: 3, message: 'Minimum length is 3'},
                    maxLength: {
                        value: 30,
                        message: 'Name should not exceed 30 characters',
                    }
                })}
            > {errors.name && <p className={styles.error}>{errors.name.message}</p>}

            </Field>

            <p className={styles.subtitle}>Change your bio</p>
            <textarea
                placeholder="Enter your bio"
                className={styles.area}
                {...register('bio', {
                    required: 'Bio is required!',
                    maxLength: {
                        value: 500,
                        message: 'Bio should not exceed 500 characters',
                    }
                })}
            />

            <p className={styles.subtitle}>Add a recipe photo</p>
            <FileInput register={register} selectedFile={image} setSelectedFile={setImage} />

            <Button type="submit" disabled={isLoading || !isValid} onClick={handleClose} className={styles.button}>Save changes</Button>
        </form>
    );
};

export default ManageProfile;