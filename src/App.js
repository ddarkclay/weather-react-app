import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './components/weather.component'
import Search from './components/Search.component'

const api = {
  key: 'aa14885d32f060433dd547a718e132b0',
  base: 'https://api.openweathermap.org/data/2.5/'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      temp: '',
      minTemp: '',
      maxTemp: '',
      desc: '',
      icon: ''
    }
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  componentDidMount() {
    // this.getWeather()
  }

  calCelcius(temp) {
    return Math.floor(temp - 273.15)
  }

  getWeatherIcon(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm })
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle })
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain })
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow })
        break;
      case rangeId >= 700 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere })
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear })
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds })
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds })
    }
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;

    const apiCall = await fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    const response = await apiCall.json()
    console.log(response)
    this.setState({
      city: response.name,
      temp: this.calCelcius(response.main.temp),
      minTemp: this.calCelcius(response.main.temp_min),
      maxTemp: this.calCelcius(response.main.temp_max),
      desc: response.weather[0].description
    })
    this.getWeatherIcon(response.weather[0].id)
  }


  render() {
    const { city, icon, temp, minTemp, maxTemp, desc } = this.state;
    return (
      <div className="App">
        <Search handleSubmit={this.getWeather} />
        <Weather city={city} icon={icon} temp={temp} minTemp={minTemp} maxTemp={maxTemp} desc={desc} />
      </div>
    );
  }
}

export default App;
