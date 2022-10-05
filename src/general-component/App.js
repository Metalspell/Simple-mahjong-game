import style from './App.module.css';
import Board from '../components/game-board/Board';

function App() {

  return (
    <section className={style.generalWrapper}>
      <h1 className={style.generalTitle}>
        Mahjong
      </h1>
      <Board/>
    </section>
  );
}

export default App;
