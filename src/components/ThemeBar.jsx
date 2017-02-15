import React from 'react';

var ThemeBar = React.createClass({

    toggleFireTheme: function() {
        var theme = this.props.theme;
        var changeTheme = this.props.changeTheme;

        if (theme === 'default') {
            changeTheme('volcano')
        } else if (theme === 'volcano') {
            changeTheme('default')
        } else {
            changeTheme('volcano')
        }
    },

    toggleWaterTheme: function() {
        var theme = this.props.theme;
        var changeTheme = this.props.changeTheme;

        if (theme === 'default') {
            changeTheme('ocean')
        } else if (theme === 'ocean') {
            changeTheme('default')
        } else {
            changeTheme('ocean')
        }
    },

    toggleEarthTheme: function() {
        var theme = this.props.theme;
        var changeTheme = this.props.changeTheme;

        if (theme === 'default') {
            changeTheme('jungle')
        } else if (theme === 'jungle') {
            changeTheme('default')
        } else {
            changeTheme('jungle')
        }
    },

    render() {
        return (
            <div></div>
        );
    }
});

export default ThemeBar;
