import React from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPictures } from "../../assets/feed.svg";
import { ReactComponent as Statics } from "../../assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Logout } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css"


const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)

  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end><MyPictures />{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to="/conta/estatisticas"><Statics />{mobile && 'Estatísticas'}</NavLink>
      <NavLink to="/conta/postar"><AddPhoto />{mobile && 'Adicionar Foto'}</NavLink>
      <button onClick={userLogout}><Logout />{mobile && 'Sair'}</button>
    </nav>
  )
}

export default UserHeaderNav;