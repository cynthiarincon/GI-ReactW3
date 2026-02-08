import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      )
      const data = await response.json()
      setMovie(data)
    }

    fetchMovie()
  }, [id, API_KEY])

  if (!movie) return <div>Loading...</div>

  return (
    <div>
      <Link to="/">← Back to Search</Link>
      
      <h1>{movie.title}</h1>
      
      {movie.poster_path && (
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
        />
      )}
      
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}/10</p>
      <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
    </div>
  )
}

export default MovieDetail;