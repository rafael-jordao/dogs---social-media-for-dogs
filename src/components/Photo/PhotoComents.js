import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoComentsForm from './PhotoComentsForm'

const PhotoComents = (props) => {
    const { login } = React.useContext(UserContext)

    return (
        <div>
            {login && <PhotoComentsForm id={props.id} /> }
        </div>
    )
}

export default PhotoComents