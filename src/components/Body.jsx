import React from 'react';
import Name from './Name.jsx';
import Price from './Price.jsx';
import Work from './Work.jsx';


let Body = React.createClass({

	render() {
    let view = this.props.view;
		if (view === 'home') {
			return (<Name/>)}
      else if (view === 'price') {
			return (<Price/>)}
    }
});

export default Body;
