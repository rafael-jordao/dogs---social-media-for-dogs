import React from 'react'
import styles from "./FeedPhotosItem.module.css"
import ImageSkeleton from '../Helper/ImageSkeleton'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  const handleClick = () => {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;