import style from './Card.module.css';
import { useEffect, useState } from "react";

const Card = ({ number, id, choseHandler, setReadyBoard }) => {
  const [visibleStatus, setVisibleStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisibleStatus(false);
      setReadyBoard(true); 
    }, 5000);
  }, [setReadyBoard, visibleStatus]);

  return (
    <article
      className={style.cardWrapper}
      onClick={choseHandler}
    >
      <h3
        id={id}
        className={!visibleStatus ? style.cardContentUnvisible : style.cardContent}
      >
        {number}
      </h3>
    </article>
  );
}

export default Card;
