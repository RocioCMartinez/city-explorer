import React from 'react';
import Movie from './Movie';



class Movies extends React.Component{
 
 

  render(){
    return(
     <>

      <h2>Movie Recommendations Related To Your City</h2>
        {this.props.movieData.map((movie, index) => {
          return(
            <Movie movie={movie} index={index}/>
          )
          //  <ListGroup key={index} as="ol" >
          // <ListGroup.Item variant="primary">Movie Title: {movie.title}</ListGroup.Item>
          // <ListGroup.Item>Movie Description: {movie.overview}</ListGroup.Item>
          // </ListGroup>

        })}
      
     </>
    );
  }




}

export default Movies;