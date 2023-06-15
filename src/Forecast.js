import React from 'react';



class Forecast extends React.Component {
  render() {
    return(
      <>
       <h2>Weather Forecast</h2>
       {this.props.forecastInfo.map((day,index) => 
       {return <div key={index} className='weather'>
        <p>Date: {day.date}</p>
        <p>Weather: {day.description}</p>
        
        </div>})};
      </>
    )
  }
}

export default Forecast;
