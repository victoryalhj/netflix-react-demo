import React from 'react'
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';


const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery()
 
  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList=genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    });
    if (genreNameList.length > 1) {
      return [...genreNameList.slice(0, 1)];
    }

    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
        "url(" +
        `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + 
        ")",
        }}
        className="movie-card"
        >
      <div className="overlay">
        <h1>{movie.title}</h1>
       
      <div className='badge'>
        {showGenre(movie.genre_ids).map((id)=> (
        <Badge bg="danger">{id}</Badge>
        ))}
      </div>

      <div>
        <div className='vote'>⭐{Math.floor(movie.vote_average)}</div>
        <div className='popularity'>📽️{Math.floor(movie.popularity)}</div>
        <div>{movie.adult?'over18':'under18'}</div>
      </div>
      </div>
    </div>
  );
};

export default MovieCard
