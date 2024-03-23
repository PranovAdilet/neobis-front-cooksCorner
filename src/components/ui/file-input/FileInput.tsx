import React from 'react';
import styles from "./FileInput.module.scss";
import {PiCameraThin} from "react-icons/pi";
import {UseFormRegister} from "react-hook-form";



interface IProps{
    selectedFile: File | null
    setSelectedFile: (state: File | null) => void
    register: UseFormRegister<any>
}

const FileInput = ({setSelectedFile, selectedFile, register}: IProps) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };


    return (
        <div className={styles.input}>
            <div className={styles.block}>
                <input
                    {...register('image')}
                    id="file"
                    accept="image/*,.png,.jpg,.gif,.web"
                    className={styles.hidden}
                    type="file"
                    onChange={handleFileChange}
                    required
                />
                {
                    !selectedFile && <>
                        <span className={styles.icon}><PiCameraThin/></span>
                        <label className={styles.text} htmlFor="file">Upload a new photo</label>
                    </>
                }

                {
                    selectedFile && <>
                        <img className={styles.image} src={URL.createObjectURL(selectedFile)} alt="Preview"/>
                        <label className={styles.textActive} htmlFor="file">Change photo</label>
                    </>
                }

            </div>
        </div>
    );
};

export default FileInput;