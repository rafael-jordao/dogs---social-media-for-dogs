import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../Hooks/useFetch'
import styles from './PhotoDelete.module.css'
import { useNavigate } from 'react-router-dom'

const PhotoDelete = ({ id }) => {
    const { request, loading } = useFetch()

    const navigate = useNavigate()

    const handleClickDelete = async () => {
        const confirm = window.confirm('Tem certeza que deseja deletar?')
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const response = await request(url, options);
            console.log(response.response.status)
            if (response.response.status === 200) navigate('/')
        }

    }

    return (
        <>
            {loading ? <button className={styles.delete} disabled>Deletando...</button> : <button onClick={handleClickDelete} className={styles.delete}>Deletar</button>}
        </>
    )
}

export default PhotoDelete;