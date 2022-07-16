import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {
    const { request, loading } = useFetch()

    const handleClickDelete = async (e) => {
        e.preventDefault();
        const { url, options } = PHOTO_DELETE(id);
        const response = await request(url, options);
        if (response.response.status === 200) {
            window.location.reload()
        }
    }

    return (
        <>
            <button onClick={handleClickDelete} className={styles.delete}>Deletar</button>
        </>
    )
}

export default PhotoDelete;