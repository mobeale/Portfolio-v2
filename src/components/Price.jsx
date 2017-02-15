
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');


class Price extends Component {
    constructor(){
        super();
        this.state = {
          GBPprice: 'XXX',
          USDprice: 'XXX',
          EURprice: 'XXX',
          GBP: 'GBP',
          USD: 'USD',
          EUR: 'EUR'
        }
    }

    retriveGbpPrice(){
      const GBPURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.GBP;
      this._interval = setInterval(() => {
          fetch(GBPURL)
              .then(result => result.json())
              .then(data => this.setState({GBPprice: data.data.amount}))
      }, 2000);
    }

    retriveUsdPrice(){
      const USDURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.USD;
      this._interval = setInterval(() => {
          fetch(USDURL)
              .then(result => result.json())
              .then(data => this.setState({USDprice: data.data.amount}))
      }, 2000);
    }

    retriveEurPrice(){
      const EURURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.EUR;
      this._interval = setInterval(() => {
          fetch(EURURL)
              .then(result => result.json())
              .then(data => this.setState({EURprice: data.data.amount}))
      }, 2000)
    }


    componentDidMount() {
        this.retriveGbpPrice();
        this.retriveUsdPrice();
        this.retriveEurPrice();
    }

    componentWillUnmount() {
        this._interval && clearInterval(this._interval);

    }





    render() {
        return (
            <div>
                <div className="container" style={{height: '100%'}}>
                  <div className="row">
                    <div className="center-box text-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 price">
                            <p className="">GBP Price: £{this.state.GBPprice}</p>
                            <p className="">USD Price: ${this.state.USDprice}</p>
                            <p className="">EUR Price: €{this.state.EURprice}</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Price;
