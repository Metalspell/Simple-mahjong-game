import style from './Board.module.css';
import Card from '../card-prototype/Card';
import { simpleNumbersGenerator } from '../../numbers-generator';
import { useState, useMemo } from "react";

const Board = () => {
  const gameArr = useMemo(() => simpleNumbersGenerator(10), []);
  const comparisonArr = [];
  const [readyBoard, setReadyBoard] = useState(false);
  const [progress, setProgress] = useState(0);

  const choseHandler = (id, value) => {
    if (comparisonArr.length === 0) {
      comparisonArr.push({ 'id': id, 'value': value });
      document.getElementById(`${id}`).style.opacity = '1';
    } else {
      if (id !== comparisonArr[comparisonArr.length - 1].id) {
        comparisonArr.push({ 'id': id, 'value': value });
        document.getElementById(`${id}`).style.opacity = '1';
      }
    }
    if (comparisonArr.length === 2) {
      if (comparisonArr[0].value !== comparisonArr[1].value) {
        setReadyBoard(false);
        setTimeout(() => {
          document.getElementById(`${comparisonArr[0].id}`).style.opacity = '0';
          document.getElementById(`${comparisonArr[1].id}`).style.opacity = '0';
          comparisonArr.splice(0, comparisonArr.length);
          setReadyBoard(true);
        }, 500);
      } else {
        comparisonArr.splice(0, comparisonArr.length);
        setProgress(progress + 2);
      }
    }
  }

  return (
    <section className={style.boardWrapper}>
      {gameArr.map((number, i) => {
        return (
          <Card
            id={i}
            key={i}
            number={number}
            setReadyBoard={setReadyBoard}
            choseHandler={readyBoard ? () => choseHandler(i, number) : null}
          />
        )
      })}
      {progress === gameArr.length
        ?
        <h1 className={style.finalTitle}>
          Congratulation! Mahjong is complete!
        </h1>
        :
        null
      }
    </section>
  );
}

export default Board;