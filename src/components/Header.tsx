import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
  const name = useSelector((state: RootState) => state.game.name);

  return <div>Welcome, {name}</div>;
};

export default Header;
