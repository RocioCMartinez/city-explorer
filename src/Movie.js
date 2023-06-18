import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render(){
    return (
      <ListGroup key={this.props.index} as="ol" >
      <ListGroup.Item variant="primary" >Movie Title: {this.props.movie.title}</ListGroup.Item>
      <ListGroup.Item>Movie Description: {this.props.movie.overview}</ListGroup.Item>
      </ListGroup>)
  }
}

export default Movie;