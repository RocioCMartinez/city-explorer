import React from 'react';
import Table from 'react-bootstrap/Table';



class Forecast extends React.Component {
  render() {
    return (
      <>
        <h2>Weather Forecast</h2>

        {this.props.forecastInfo.map((day, index) => {
          return <Table striped bordered hover variant="dark" key={index} className='weather'>
            <thead>
              <tr>
                <th>Date: </th>
                <th>Weather:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{day.date}</td>
                <td>{day.description}</td>
              </tr>
            </tbody>
          </Table>
        })};
      </>
    )
  }
}

export default Forecast;
