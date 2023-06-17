import React from 'react';

class WeatherDay extends React.Component {
  render(){
    return (
    <tr key={this.props.index}>
      <td>{this.props.day.date}</td>
      <td>{this.props.day.description}</td>
    </tr>)
  }
}

export default WeatherDay;