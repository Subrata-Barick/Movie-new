import Movie from './Movie';
import Movies from "./movie.json";

const Moviesss = () => {
  return (
    
<div className='main'>
         {Movies.map((element,index)=>{
         return (<Movie key={index}
          title={element.Title}
          year={element.Year}
         img={element.Poster} />)
         })}

    </div>
  )
}

export default Moviesss;