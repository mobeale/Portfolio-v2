import React from 'react';
import Typist from 'react-typist';

var Footer = React.createClass({
  togglePriceView: function(){
    var view = this.props.view;
    var changeView = this.props.changeView;
    if (view === 'home'){
      changeView('price')}
      else if (view === 'price'){
        changeView('home')}
      else if (view === 'work'){
        changeView('price')}
    },

  toggleWorkView: function(){
    var view = this.props.view;
    var changeView = this.props.changeView;
    if (view === 'home'){
        changeView('work')}
      else if (view === 'work'){
        changeView('home')}
      else if (view === 'price'){
        changeView('work')}
    },

  toggleHomeView: function(){
    var view = this.props.view;
    var changeView = this.props.changeView;
    if (view === 'price'){
      changeView('home')}
      else if (view === 'work'){
        changeView('home')}

    },

 renderLabel(){

 },
  render(){
    var label = this.props.view === 'home' ? (<Typist startDelay={6700} avgTypingDelay={120} cursor={{ show: false, hideWhenDone: true, blink: true }}> <label>^</label></Typist>) : null;
    var label2 = this.props.view === 'price' ? (<label>^</label>) : null;
    var label3 = this.props.view === 'work' ? (<label>^</label>) : null;
    return (
      <footer className="footer text-center">
          <div className="">


            <div className="col-xs-4">
              <button onClick={this.toggleHomeView} className="custom-btn" >
                <Typist startDelay={6700} avgTypingDelay={120} cursor={{ show: false, hideWhenDone: true, blink: true }}> /usr</Typist>
              </button>
              {label}
              </div>
              <div className="col-xs-4">
              <button onClick={this.togglePriceView} className="custom-btn">
                <Typist startDelay={7700} avgTypingDelay={120} cursor={{  show: false, hideWhenDone: true, blink: true }}>  /utils</Typist>
              </button>
              {label2}
            </div>
            <div className="col-xs-4">
              <button onClick={this.toggleWorkView} className="custom-btn">
              <Typist startDelay={8700} avgTypingDelay={120} cursor={{  show: false, hideWhenDone: true, showCursor: false }}>  /cron</Typist>
              </button>
            {label3}
          </div>

          </div>
      </footer>
    )
  }
})


export default Footer;
