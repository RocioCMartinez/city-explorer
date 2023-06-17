import React from 'react';
import Location from './Location';
import Header from './Header';
import Forecast from './Forecast';
import Movies from './Movies';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: '',
      cityLat: '',
      cityLon: '',
      locationData: [],
      mapData: '',
      error: false,
      errMsg: '',
      imgUrl: '',
      forecastInfo: [],
      movieData: []
    }
  }


  handleCity = (event) => {
     this.setState({
      city: event.target.value
       })
    }

    handleCityInfo = async (event) => {
      event.preventDefault();
      
     try {
       let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`
  
       let axiosCityData = await axios.get(url);
  
       this.setState({
        locationData: axiosCityData.data[0],
        cityLat: axiosCityData.data[0].lat,
        cityLon: axiosCityData.data[0].lon,
        error:false,
        errMsg:'',
        imgUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${axiosCityData.data[0].lat},${axiosCityData.data[0].lon}&zoom=12&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>` 
        })
        
        this.handleWeatherForecast(axiosCityData.data[0].lat, axiosCityData.data[0].lon);

        let movieURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`;

        let movieDataFromAxios = await axios.get(movieURL);

        // console.log(movieDataFromAxios.data);
        this.setState({
          movieData: movieDataFromAxios.data
        
        })

      } catch (error){
       this.setState({
        error: true,
        errMsg: error.response.data.error
       })
      }
    }

    handleCityMap = async (lat, lon) => {
      
       let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${lat},${lon}&zoom=1-18`
    
       let axiosMapData = await axios.get(url);
       console.log(axiosMapData);
  
       this.setState({
         mapData: axiosMapData.data
        })

     
      
      
    }

    handleWeatherForecast = async (lat, lon) => {
      try {
        let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`;
        let weatherDataAxios = await axios.get(weatherURL);
        let forecastInfo = weatherDataAxios.data;

        this.setState({
          forecastInfo,
        });
      } catch (error){

        this.setState({
          error: true,
          errMsg: error.response.data.error
        })
      }
    }



  render(){
    
    return (
      <div className='body'>


       <Header></Header>
       <form className='cityform' onSubmit={this.handleCityInfo}>
         <label htmlFor=''> Enter City Name:  </label>
         <br></br> 
          <input type="text" onInput={this.handleCity}/>
         
         <br></br>
         <Button variant="info" type="submit"> Explore! </Button>
       </form>

       

        {this.state.error
          ? <Alert variant="danger">{this.state.errMsg}</Alert>
          : <p></p>
        };

        
        <Location className='citycard'
          cityLocation={this.state.locationData.display_name}
          lat={this.state.locationData.lat}
          lon={this.state.locationData.lon} 
        />

        <Image className='map' src={this.state.imgUrl} rounded />

        {this.state.forecastInfo.length > 0 && <Forecast className='weather' forecastInfo={this.state.forecastInfo} />}

        {this.state.movieData.length > 0 && <Movies className='movies' movieData={this.state.movieData} />}



       <footer>Author: Rocio Martinez </footer>


      </div>
      
    )
  }
}

export default App;

