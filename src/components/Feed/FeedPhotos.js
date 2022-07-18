import React from 'react'
import Error from "../Helper/Error"
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../api';
import useFetch from '../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import styles from "./FeedPhotos.module.css"

const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { json, response } = await request(url, options);
      console.log('Request: ', json )
      if (response & response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)

    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => {
          return (
            <FeedPhotosItem setModalPhoto={setModalPhoto} photo={photo} key={photo.id} />
          )
        })}
      </ul>
    )
  else return null
}

export default FeedPhotos;