import React from 'react';
import Clock from './Clock.jsx';
import ThemeBar from './ThemeBar.jsx';


let Header = React.createClass({
  render() {
    return (

    <div className="navbar-fixed">
      <Clock/>
      <ThemeBar changeTheme={this.props.themeChanger} theme={this.props.currentTheme} />
    </div>

   )}
});

export default Header;
