

const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img} alt="movie image"/>
        <h4>{props.title}</h4>
        <h5>year:{props.year}</h5>
        

    </div>
  )
}

export default Movie;