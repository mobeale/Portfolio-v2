import React from 'react';

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
          <div className="container">
              <button onClick={this.toggleHomeView} className="custom-btn" data-tip="home">
                home
              </button>
              <button onClick={this.togglePriceView} className="custom-btn" data-tip="Bitcoin Price">
                  bitcoin
              </button>
              <button onClick={this.toggleWorkView} className="custom-btn" data-tip="Work">
                  Work
              </button>
          </div>
      </footer>
    )
  }
})


export default Footer;
