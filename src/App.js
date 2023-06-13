import React from 'react';
import Location from './Location';
import Header from './Header';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      imgUrl: ''
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



  render(){
    
    return (
      <>
       <Header></Header>
       <form onSubmit={this.handleCityInfo}>
        <label htmlFor=''> Enter City Name: 
          <input type="text" onInput={this.handleCity}/>
        </label>
        <button type="submit"> Explore! </button>
       </form>

       
       <Image src={this.state.imgUrl} rounded />
       
       {this.state.error
       ? <Alert variant="danger">{this.state.errMsg}</Alert>
       : <p></p>
       } 
       <Location
         cityLocation={this.state.locationData.display_name}
         lat={this.state.locationData.lat}  
         long={this.state.locationData.lon}> 
        </Location>
      </>
      
    )
  }
}

export default App;

