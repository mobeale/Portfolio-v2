
import React, { Component } from 'react';

import App from './App.jsx'
require('es6-promise').polyfill();
require('isomorphic-fetch');


class Price extends Component {
    constructor(){
        super();
        this.state = {price: '', currency: 'GBP'}

    }

    componentDidMount() {
        const URL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.currency;
        this._interval = setInterval(() => {
            fetch(URL)
                .then(result => result.json())
                .then(data => this.setState({price: data.data.amount}))
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }



    render() {
        return (
            <div>
                <div className="container" style={{height: '100%'}}>
                    <div className="center-box text-center">
                        <div className="col-sm-12 price margin-top">
                            <i className="fa fa-bitcoin price"></i>
                            <h1 className="">£{this.state.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price;
