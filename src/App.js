import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Arcade",
      artist: "Duance Laurence",
      img_src: "./images/song-2.jpg",
      src: "./music/Arcade.mp3"
    },
    {
      title: "Blanko",
      artist: "King",
      img_src: "./images/song-1.jpg",
      src: "./music/Blanko.mp3"
    },
    {
      title: "Enemy",
      artist: "Imagine Dragons",
      img_src: "./images/song-3.jpg",
      src: "./music/Enemy.mp3"
    },
    {
      title: "Without Me",
      artist: "Halsey",
      img_src: "./images/song-4.jpg",
      src: "./music/Without_Me.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
