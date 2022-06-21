import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPictures } from "../../assets/feed.svg";
import { ReactComponent as Statics } from "../../assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Logout } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css"
import useMedia from '../Hooks/useMedia';


const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile && <button
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        aria-label="Menu"
        onClick={() => setMobileMenu(!mobileMenu)}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end><MyPictures />{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to="/conta/estatisticas"><Statics />{mobile && 'Estatísticas'}</NavLink>
        <NavLink to="/conta/postar"><AddPhoto />{mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={userLogout}><Logout />{mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UserHeaderNav;