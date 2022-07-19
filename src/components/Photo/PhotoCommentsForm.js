import React from 'react'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoComentsForm = ({ id, Comments, single }) => {
    const [comment, setComment] = React.useState('');
    const { request, error } = useFetch();

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        const { url, options } = COMMENT_POST(id, { comment })
        const { response, json } = await request(url, options)
        if (response.ok) {
            console.log(json)
            setComment('')
            Comments((comments) => [...comments, json])
        }
    }

    return (
        <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleCommentSubmit}>
            <textarea
                className={styles.textarea}
                id='comment'
                name='comment'
                placeholder='Comente...'
                value={comment}
                onChange={({ target }) => setComment(target.value)} />
            <button className={styles.button}>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoComentsForm;