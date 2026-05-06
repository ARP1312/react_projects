import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'



function MovieDetail() {
 
const {id} = useParams()
const [movie,setMovie] = useState(null);

useEffect(() => {
    async function getMovie() {
        const res = await fetch(`http://www.omdbapi.com/?apikey=80321f37&i=${id}`)
        const data = await res.json();
        setMovie(data)
        console.log(data);
        
    }
    getMovie();
},[id])


if(!movie) return <p>Loading....</p>
    
 return (
<div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster}/>
		
        <div className='movie-description'>
          
             <p><strong>Actors:</strong>{movie.Actors}</p>
             <p><strong>Awards:</strong>{movie.Awards}</p>
             <p><strong>BoxOffice:</strong>{movie.BoxOffice}</p>
             <p><strong>Country:</strong>{movie.Country}</p>
             <p><strong>Language:</strong>{movie.Language}</p>
             <p><strong>Duration:</strong>{movie.Runtime}</p>
             <p><strong>Writer:</strong>{movie.Writer}</p>
             <p><strong>imdbRating:</strong>{movie.imdbRating}</p>
		     <p><strong>Genre:</strong>{movie.Genre}</p>
		     <p><strong>Released:</strong>{movie.Released}</p>
		     <p><strong>Plot:</strong>{movie.Plot}</p>

        </div>

</div>

  )
}

export default MovieDetail