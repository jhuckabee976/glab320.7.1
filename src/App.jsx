import {useState, useEffect} from 'react'

import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'


export default function App() {
  const apiKey = "aaef8f1a";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMovie("The Matrix");
  }, []);

return (
  <div className="App">
  <Form moviesearch={getMovie} />
    <MovieDisplay movie={movie} />
</div>
  );
}