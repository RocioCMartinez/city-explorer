import React from 'react';
import Movie from './Movie';



class Movies extends React.Component{
 
 

  render(){
    return(
     <>

      <h2>Movie Recommendations Related To Your City</h2>
        {this.props.movieData.map((movie, index) => {
          return(
            <Movie movie={movie} key={index}/>
          )

        })}
      
     </>
    );
  }




}

export default Movies;