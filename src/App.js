import { useState } from 'react';
import './App.css';
import { dataFav } from './dataFav';
import { dataList } from './dataList';

function App() {
  const [animeL, setAnime] = useState(dataList);

  const [animeF, setAnimeFav] = useState(0);
  const {idF, nameF, imageF} = dataFav[animeF];

  const removeAnime = (id) => {
    let newAnimeL = animeL.filter(item => item.id !== id);
    setAnime(newAnimeL);
  }

  const previousAnime = () => {
    setAnimeFav(animeF => {
      animeF--;
      if (animeF < 0) {
        animeF = dataFav.length - 1;
      }
      return animeF;
    })
  }

  const nextAnime = () => {
    setAnimeFav(animeF => {
      animeF++;
      if (animeF > dataFav.length - 1) {
        animeF = 0;
      }
      return animeF;

    })
  }

  return (
    <div className='main'>
      <div className='container'>
        <h1>Мои Аниме</h1>
      </div>
      <div className='container'>
        <h2>Запланированные {animeL.length}</h2>
      </div>
      <div className='cardBox'>
        {animeL.map(anime => {
          const { id, name, image } = anime;
          return(
            <div className='card'>
              <div className='container'>
                <img src={image} alt="anime" width={300}/>
              </div>
              <div className='container'>
                <h2>{id} - {name}</h2>
              </div>
              <div className='container'>
                <button onClick={() => removeAnime(id)}>Удалить</button>
              </div>
            </div>
          )
        })}
      </div >
      <div className='container'>
        <button onClick={() => setAnime([])}>Удалить все</button>
      </div>

      <div className='container'>
          <h2>Аниме, которые могу смотреть снова и снова</h2>
        </div>
      <div className='cardBox'>
        <div className='card'>
          <div className='container'>
            <img src={imageF} alt="anime favourite" width={300}/>
          </div>
          <div className='container'>
            <h3>{idF} - {nameF}</h3>
          </div>
          <div className='container'>
            <button onClick={previousAnime}>Назад</button>
            <button onClick={nextAnime}>Вперед</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
