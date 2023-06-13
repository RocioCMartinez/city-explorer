import React from 'react';
import Card from 'react-bootstrap/Card';

class Location extends React.Component{
 
 

  render(){
    return(
     <>
       <Card style={{ width: '50rem' }} >
        <Card.Body>
         <Card.Title>{this.props.cityLocation}</Card.Title>
         <Card.Text>{this.props.lat}</Card.Text>
         <Card.Text>{this.props.long}</Card.Text>
        </Card.Body>
       </Card>
     </>
    );
  }




}

export default Location;