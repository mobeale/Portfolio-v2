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

  render(){
    return (
      <footer className="footer text-center">
        <div className="container">
        </div>
      </footer>
    )
  }
})


export default Footer;
