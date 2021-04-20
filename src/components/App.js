import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
const APIKEY = "02fd9737174b641b8f6e772c3457a13f";
class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
    main: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value === 0) return;
    if (prevState.value !== this.state.value) {
      this.setState({ value: this.state.value });
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKEY}&units=metric`;

      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState({
            date: time,
            city: this.state.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            main: data.weather[0].main,
            err: false,
          });
        })
        .catch((err) => {
          this.setState({ err: true, city: this.state.value });
        });
    }
  }
  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
