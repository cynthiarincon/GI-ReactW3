import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchPage() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  const searchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    )
    const data = await response.json()
    setMovies(data.results)
  }

  return (
    <div>
      <h1>Movie Search</h1>

      <input 
        type='text' 
        placeholder='Type in a movie name!' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovie}>Search!</button>

      <div>
        {movies.map((m) => (
          <div key={m.id}>
            <Link to={`/movie/${m.id}`}>
              <h3>{m.title}</h3>
            </Link>
            <p>Release Date: {m.release_date}</p>
            <p>Rating: {m.vote_average}/10</p>
            {m.poster_path && (
              <img 
                src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} 
                alt={m.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage;