import React from 'react';
import '../styles/App.css';
import Body from './Body.jsx';
import ReactTooltip from 'react-tooltip';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

let App = React.createClass({
  getInitialState: function(){
      return {
          theme: 'default',
          view: 'home'
      };
  },
  changeTheme: function(newTheme){
      this.setState({
        theme: newTheme
      });
    },

  changeView: function(newView){
    this.setState({
      view: newView
    })
  },

  render() {
		return (
				<div>
          <div className={this.state.theme}>
          <Header themeChanger={this.changeTheme} currentTheme={this.state.theme}/>
				  <Body view={this.state.view}/>
				  <Footer changeView={this.changeView} view={this.state.view}/>
          <ReactTooltip effect="solid"/>
          </div>
        </div>
		);
	}
});

export default App;
