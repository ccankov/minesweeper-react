import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {
        name: 'Loading...',
        weather: [{
          description: 'Loading...'
        }]
      }
  };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    function geoPosCallback(geoPos) {
      this.setState({
        latitude: geoPos.coords.latitude,
        longitude: geoPos.coords.longitude
      });
      this.getWeather();
    }

    navigator.geolocation.getCurrentPosition(geoPosCallback.bind(this));
  }

  getWeather() {
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = (function() {
      if (xml.readyState === XMLHttpRequest.DONE ) {
        if (xml.status === 200) {
          this.setState({ weather: JSON.parse(xml.responseText) });
          console.log(this.state.weather);
        } else {
          alert('Cannot retrieve weather');
        }
      }
    }).bind(this);

    xml.open("GET",
             `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=1b03fe83ba740da73642986de556d300`, true);
    xml.send();

  }

  render() {
    return (
      <section className="weather">
        <h1>Location: {this.state.weather.name}</h1>
        <h1>Weather: {this.state.weather.weather[0].description}</h1>
      </section>
    );
  }
}

export default Weather;
