import { dataFav } from "./dataFav";
import { useState } from "react";
import './App.css';

function AnimeFavourite() {
    const [animeF, setAnimeFav] = useState(0);
    const {idF, nameF, imageF} = dataFav[animeF];

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

    return(
        <div className="cardBox">
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
    )
}

export default AnimeFavourite;