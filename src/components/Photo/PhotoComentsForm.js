import React from 'react'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'

const PhotoComentsForm = ({ id }) => {
    const [comment, setComment] = React.useState('');

    const { request, error } = useFetch();

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        const { url, options } = COMMENT_POST(id, { comment })
        await request(url, options)
        setComment('')
    }

    return (
        <form onSubmit={handleCommentSubmit}>
            <textarea
                id='comment'
                name='comment'
                placeholder='Comente...'
                value={comment}
                onChange={({ target }) => setComment(target.value)} />
            <Error error={error} />
            <button>
                <Enviar />
            </button>
        </form>
    )
}

export default PhotoComentsForm;