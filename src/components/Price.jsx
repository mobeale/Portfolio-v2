
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');


class Price extends Component {
    constructor(){
        super();
        this.state = {
          GBPprice: '',
          USDprice: '',
          GBP: 'GBP',
          USD: 'USD'
        }
    }

    retrivePrices(){
      const GBPURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.GBP;
      this._interval = setInterval(() => {
          fetch(GBPURL)
              .then(result => result.json())
              .then(data => this.setState({GBPprice: data.data.amount}))
      }, 100);


      const USDURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.USD;
      this._interval = setInterval(() => {
          fetch(USDURL)
              .then(result => result.json())
              .then(data => this.setState({USDprice: data.data.amount}))
      }, 100);
    }


    componentDidMount() {
        this.retrivePrices();
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }



    render() {
        return (
            <div>
                <div className="container" style={{height: '100%'}}>
                    <div className="center-box text-center">
                        <div className="col-sm-12 price">
                            <h1 className="">£{this.state.GBPprice}</h1>
                        </div>
                        <div className="col-sm-12 price">
                            <h1 className="">${this.state.USDprice}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price;
