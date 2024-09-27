import React, { useState } from 'react';

const MoviesList = () => {
    const[movies, setMovies]=useState([{description: "descriptions", title: "Moonlight", genre: "Drama"}, {description: 'description', title:"But I'm a Cheerleader", genre: "Comedy"}])
    const [showDescription, setShowDescription]=useState({});
    const [showAction, setShowAction]= useState(false);
    const [allMovies, setAllMovies] = useState(true)
    const filteredMovies = showAction ? movies.filter(movie => movie.genre === 'Drama') : movies;
   

    const showActionMovie = () => {
        setShowAction((prevValue) => !prevValue)
        setAllMovies(!allMovies)
        
    }
    
    const movieClick = (index) => {
        setShowDescription((prevDetails) => ({
            ...prevDetails,
            [index]: !prevDetails[index],
        }));
        
    }
    const deleteMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
    }

    return (
        <div>
            
            <ul>
                {filteredMovies.map((movie, index) =>(
                    <li key={index}>
                        <button onClick={() => movieClick(index)}>
                            {movie.title}
                        </button> 
                        {showDescription[index] && (
                            <>
                                <h2>{movie.title}</h2> 
                                <p>{movie.description}</p>
                            </>
                        )}
                        <button onClick={() => deleteMovie(index)}>
                            Delete
                        </button>
                    </li>))}
            </ul>
           {allMovies ? <button onClick={showActionMovie}> Show Action Movies</button> : <button onClick={showActionMovie}> Show All Movies</button>             }
        </div>
    );
};
export default MoviesList;