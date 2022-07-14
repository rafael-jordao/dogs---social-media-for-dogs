import React from 'react'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'

const PhotoComentsForm = ({ id, setComments }) => {
    const [comment, setComment] = React.useState('');
    const { request, error } = useFetch();

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        const { url, options } = COMMENT_POST(id, { comment })
        const { response, json } = await request(url, options)
        if (response.ok) setComments((comments) => [...comments, json])
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
            <button>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoComentsForm;