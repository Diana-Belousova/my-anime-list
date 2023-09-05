import { dataList } from "./dataList";
import { useState } from "react";
import './App.css';

function AnimeList() {
    const [animeL, setAnime] = useState(dataList);

    const removeAnime = (id) => {
        let newAnimeL = animeL.filter(item => item.id !== id);
        setAnime(newAnimeL);
    }

    return(
        <div className="cardBox">
            <div className='container'>
                <h2>Запланированные {animeL.length}</h2>
            </div>
            <div className='cardBox' >
                {animeL.map(anime => {
                const { id, name, image } = anime;
                return(
                    <div className='card' key={id}>
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
        </div>
    )
}

export default AnimeList;