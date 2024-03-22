import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

type Params = {
  isOpen: boolean;
  onClose: () => void;
  score: number;
};

const Modal = ({ isOpen, onClose, score }: Params) => {
  const status = useSelector((state: RootState) => state.game.status);
  if (!isOpen) return null;

  const modalWon = (
    <p>
      Congratulations, you won! Your final score is: <strong>{score}</strong>{" "}
      points. Click the button below to view high scores from other users.
    </p>
  );

  const modalLost = (
    <p>
      Unfortunately, you lost! Close this modal and try again. Better luck next
      time!
    </p>
  );

  return ReactDOM.createPortal(
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>{status === "won" ? "You won!" : "You lost"}</h2>
          <button onClick={onClose}>
            <img src="" alt="" width={24} height={24} />
          </button>
        </div>
        <div>
          <p>{status === "won" ? modalWon : modalLost}</p>
        </div>
        <div>
          <button>Close</button>
          <Link to='/highscore'>View high scores</Link>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") ?? document.body
  );
};

export default Modal;
