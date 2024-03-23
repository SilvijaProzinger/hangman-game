import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from '../styles/Header.module.css'

const Header = () => {
  const name = useSelector((state: RootState) => state.game.name);

  return <h1 className={styles.header__title}>Welcome, {name}</h1>;
};

export default Header;
