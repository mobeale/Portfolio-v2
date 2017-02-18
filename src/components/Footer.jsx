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

            <div className="col-xs-4">
              <button onClick={this.toggleHomeView} className="custom-btn" >
                  <Typist startDelay={7500} avgTypingDelay={120} cursor={{ show:false, hideWhenDone: true, blink: true }}>/usr</Typist>
              </button>
              </div>
              <div className="col-xs-4">
              <button onClick={this.togglePriceView} className="custom-btn">
                <Typist startDelay={8000} avgTypingDelay={120} cursor={{ show:false, hideWhenDone: true, blink: true }}>  /utils </Typist>
              </button>
            </div>
            <div className="col-xs-4">
              <button onClick={this.toggleWorkView} className="custom-btn">
                <Typist startDelay={9500} avgTypingDelay={120} cursor={{ show:false, hideWhenDone: true, blink: true }}> /cron </Typist>
              </button>
          </div>

          </div>
      </footer>
    )
  }
})


export default Footer;
