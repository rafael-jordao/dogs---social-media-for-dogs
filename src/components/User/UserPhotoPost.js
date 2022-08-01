import React from 'react';
import Input from '../Forms/Input';
import Button from "../Forms/Button";
import Error from '../Helper/Error'
import styles from "./UserPhotoPost.module.css";
import useForm from "../Hooks/useForm";
import useFetch from "../Hooks/useFetch";
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../api';
import Loading from '../Helper/Loading';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const navigate = useNavigate();
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  React.useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  return (
    <>
      {loading && <Loading />}
      <section className={`${styles.photoPost} animeLeft`}>
        <Head title="Poste sua foto" />
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            type="text"
            name="name" {...nome} />
          <Input
            label="Peso"
            type="number"
            name="peso" {...peso} />
          <Input
            label="Idade"
            type='number'
            name="idade" {...idade} />
          <input
            className={styles.file}
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange} />
          {loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}
          <Error error={error} />
        </form>
        <div>
          {img.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url(${img.preview})` }}>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default UserPhotoPost;