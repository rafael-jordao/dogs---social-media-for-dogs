import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  const handleOutsideClick = (e) => {
    if(e.target === e.currentTarget) {
      setModalPhoto(null)
    }
  }
  
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div onClick={handleOutsideClick} className={styles.modal}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal