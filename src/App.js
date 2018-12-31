import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import './App.css';
import logo from './logo.svg';
import kslogo from './kslogo.svg';

class App extends Component {
  state = {
    completed: true,
  }
  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span><h1><b>สวัสดีปีใหม่ 2562 ขอให้ทุกคนมีความสุข <br /> สุขภาพแข็งแรง <br/> และ เจริญก้าวหน้ายิ่งขึ้นไป </b></h1></span>; 
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
        <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
        </div>
        <header className="App-header">
          <h1> Happy New Year 2019 | ส่งท้ายปีเก่า ต้อนรับปีใหม่ </h1>
          <p>
            <Countdown 
              onComplete={this.handleComplete}
              date={Date.now()+5000} 
              renderer={this.renderer}
            />
          </p>
          <div>
            Made With <img src={logo} width="80px" style={{ marginBottom: '-7px' }} /> By <img src={kslogo} width="120px" className="logo-app" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
