import './App.css';
import AnimeList from './AnimeList';
import AnimeFavourite from './AnimeFavourite';


function App() {

  return (
    <div className='main'>
      <div className='container'>
        <h1>Мои Аниме</h1>
      </div>

      <AnimeList />
      <AnimeFavourite />
    </div>
  );
}

export default App;
