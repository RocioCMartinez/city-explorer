import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class Movies extends React.Component{
 
 

  render(){
    return(
     <>

      <h2>Movie Recommendations Related To Your City</h2>
        {this.props.movieData.map((movie, index) => {
          return <ListGroup key={index} as="ol" >
          <ListGroup.Item variant="primary">Movie Title: {movie.title}</ListGroup.Item>
          <ListGroup.Item>Movie Description: {movie.overview}</ListGroup.Item>
          </ListGroup>

        })}
      
     </>
    );
  }




}

export default Movies;