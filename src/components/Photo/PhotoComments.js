import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoComentsForm from './PhotoComentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
    const { login } = React.useContext(UserContext)
    const [comments, setComments] = React.useState([], () => props.comments)

    return (
        <>
            <ul className={styles.comments}>
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_content}>
                            <b>{comment.comment_author} </b>
                            <span>{comment.comment_content}</span>
                        </li>
                    )
                })}
            </ul>
            {login && <PhotoComentsForm setComments={setComments} id={props.id} />}
        </>
    )
}

export default PhotoComments