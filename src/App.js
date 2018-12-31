import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import './App.css';

class App extends Component {
  state = {
    img: 'https://www.knowledgesharing.me/static/media/ks_logo.c9df07af.svg',
  }
  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span> Happy New Year !</span>;
    } else {
      return (
        <ul>
          <li> <span>{hours}</span> Hours</li>
          <li> <span>{minutes}</span>Minutes</li>
          <li> <span>{seconds}</span>Seconds</li>
        </ul>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Happy New Year 2019</h1>
          <p>
            <Countdown 
              date={new Date("Jan 1, 2019 00:00:00").getTime()} 
              renderer={this.renderer}
            />
          </p>
        </header>
        <div>
          <img src="https://www.knowledgesharing.me/static/media/ks_logo.c9df07af.svg" />
        </div>
      </div>
    );
  }
}

export default App;
