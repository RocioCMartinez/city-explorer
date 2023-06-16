import React from 'react';
import Table from 'react-bootstrap/Table';
import WeatherDay from './WeatherDay';



class Forecast extends React.Component {
  render() {
    return (
      <>
        <h2>Weather Forecast</h2>
        <Table striped bordered hover variant="dark" className='weather'>
          <thead>
            <tr>
              <th>Date: </th>
              <th>Weather:</th>
            </tr>
          </thead>
          <tbody>

            {this.props.forecastInfo.map((day, index) => {
              return(
              
              <WeatherDay day={day} index={index}></WeatherDay>
               
              )
            })};
          </tbody>
        </Table>
      </>
    )
  }
}

export default Forecast;
