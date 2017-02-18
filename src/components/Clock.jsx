import React from 'react';
import Typist from 'react-typist';


let Clock = React.createClass({
  setTime: function(){
  	let currentdate = new Date();
  	let hours = currentdate.getUTCHours();
    let minutes = currentdate.getUTCMinutes();
    let seconds = currentdate.getUTCSeconds();
      // correct for number over 24, and negatives

      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      hours += "";
      if( hours.length === 1 ){ hours = "0" + hours; }

      minutes += "";
      if( minutes.length === 1 ){ minutes = "0" + minutes; }

      seconds += "";
      if (seconds.length === 1){ seconds = "0" + seconds; }


      this.setState({
      	hours: hours,
        minutes: minutes,
        seconds: seconds
      });
  },
  componentWillMount: function(){
  	this.setTime();
  },
  componentDidMount: function(){
  	 window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  },

  render: function() {

    return(
      <div className="clock">
        <p><Typist startDelay={1500} avgTypingDelay={120} cursor={{ show: false, hideWhenDoneDelay: 500, hideWhenDone: true, blink: true }}>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</Typist></p>
      </div>
    )
  }
});

export default Clock;
