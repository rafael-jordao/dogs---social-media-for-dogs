import React from 'react';
import Input from '../Forms/Input';
import Button from "../Forms/Button";
import styles from "./UserPhotoPost.module.css";
import useForm from "../Hooks/useForm";
import useFetch from "../Hooks/useFetch";
import { PHOTO_POST } from '../../api';

const UserPhotoPost = () => {

  const name = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('name', name.value);
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

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type='number' name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview} s
            tyle={{ backgroundImage: `url(${img.preview})` }}>
          </div>
        )}
      </div>
    </section>
  )
}

export default UserPhotoPost;