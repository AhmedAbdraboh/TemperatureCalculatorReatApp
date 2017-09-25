import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fehrenheit'
}
class TemperatureInput extends Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.props.onTemperatureChange(e.target.value)
  }
  render(){
    const scale = this.props.scale
    const temperature = this.props.temperature
    return(
      <fieldset>
        <legend>
          Enter temperature in {scaleNames[scale]}: 
        </legend>
        <input value={temperature} onChange = {this.handleChange} />

      </fieldset>
    )
  }
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
export class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {temperature: '', scale:'c'}
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFehrenheitChange = this.handleFehrenheitChange.bind(this)
  }
  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature})
  }
  handleFehrenheitChange(temperature){
    this.setState({scale:'f', temperature})
  }
  render(){
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fehrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature
    return(
    <div>
      <TemperatureInput scale = 'c' temperature = {celsius} onTemperatureChange = {this.handleCelsiusChange}/>
      <TemperatureInput scale = 'f' temperature = {fehrenheit} onTemperatureChange = {this.handleFehrenheitChange}/>
      <BoilingVerdict celsius = {parseFloat(temperature)} />
    </div>
    )
  }

}
export default App;
