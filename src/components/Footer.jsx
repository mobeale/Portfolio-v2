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


  render(){
    return (
      <footer className="footer text-center">
          <div className="">
          <Typist startDelay={6000} avgTypingDelay={120} cursor={{ hideWhenDone: true, blink: true }}>
            <div className="col-xs-4">
              <button onClick={this.toggleHomeView} className="custom-btn" >
                  /usr
              </button>
              </div>
              <div className="col-xs-4">
              <button onClick={this.togglePriceView} className="custom-btn">
                  /utils
              </button>
            </div>
            <div className="col-xs-4">
              <button onClick={this.toggleWorkView} className="custom-btn">
                  /cron
              </button>
          </div>
          </Typist>
          </div>
      </footer>
    )
  }
})


export default Footer;
