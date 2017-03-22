
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class Price extends Component {
    constructor(){
        super();
        this.state = {
          BTCGBPprice: 'LOADING...',
          BTCUSDprice: 'LOADING...',
          BTCEURprice: 'LOADING...',
          ETHGBPprice: 'LOADING...',
          ETHUSDprice: 'LOADING...',
          ETHEURprice: 'LOADING...'
        }
    }

    // Bitcoin calls
    retriveBtcGbpPrice(){
      const GBPURL = 'https://api.coinbase.com/v2/prices/BTC-GBP/spot';
      let GBPInterval = this._interval1 = setInterval(() => {
          fetch(GBPURL)
              .then(result => result.json())
              .then(data => this.setState({BTCGBPprice: data.data.amount}))
      }, 1000);
    }

    retriveBtcUsdPrice(){
      const USDURL = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';
      let USDInterval = this._interval2 = setInterval(() => {
          fetch(USDURL)
              .then(result => result.json())
              .then(data => this.setState({BTCUSDprice: data.data.amount}))
      }, 1000);
    }

    retriveBtcEurPrice(){
      const EURURL = 'https://api.coinbase.com/v2/prices/BTC-EUR/spot';
      let EURinterval = this._interval3 = setInterval(() => {
          fetch(EURURL)
              .then(result => result.json())
              .then(data => this.setState({BTCEURprice: data.data.amount}))
      }, 1000)
    }

    // Ethereum calls
    retriveEthGbpPrice(){
      const GBPURL = 'https://api.coinbase.com/v2/prices/ETH-GBP/spot';
      let GBPInterval = this._interval4 = setInterval(() => {
          fetch(GBPURL)
              .then(result => result.json())
              .then(data => this.setState({ETHGBPprice: data.data.amount}))
      }, 1000);
    }

    retriveEthUsdPrice(){
      const USDURL = 'https://api.coinbase.com/v2/prices/ETH-USD/spot';
      let USDInterval = this._interval5 = setInterval(() => {
          fetch(USDURL)
              .then(result => result.json())
              .then(data => this.setState({ETHUSDprice: data.data.amount}))
      }, 1000);
    }

    retriveEthEurPrice(){
      const EURURL = 'https://api.coinbase.com/v2/prices/ETH-EUR/spot';
      let EURinterval = this._interval6 = setInterval(() => {
          fetch(EURURL)
              .then(result => result.json())
              .then(data => this.setState({ETHEURprice: data.data.amount}))
      }, 1000)
    }


    componentDidMount() {
        // this.generateChart();
        this.retriveBtcGbpPrice();
        this.retriveBtcUsdPrice();
        this.retriveBtcEurPrice();
        this.retriveEthGbpPrice();
        this.retriveEthUsdPrice();
        this.retriveEthEurPrice();
        this.getCharts();

    }

    componentWillUnmount() {
        clearInterval(this._interval1);
        clearInterval(this._interval2);
        clearInterval(this._interval3);
        clearInterval(this._interval4);
        clearInterval(this._interval5);
        clearInterval(this._interval6);

    }


    render() {
        return (
            <div>
                <div className="container" style={{height: '100%'}}>
                  <div className="row">
                    <div className="center-box text-center">
                      <div style={{marginTop: '15vh'}}></div>
                        <div className="col-xs-12 col-sm-6 price">
                          <h1>BTC:</h1>
                            <p className="">GBP: £{this.state.BTCGBPprice}</p>
                            <p className="">USD: ${this.state.BTCUSDprice}</p>
                            <p className="">EUR: €{this.state.BTCEURprice}</p>
                            <br />
                        </div>
                        <div className="col-xs-12 col-sm-6 price">
                          <h1>ETH:</h1>
                            <p className="">GBP: £{this.state.ETHGBPprice}</p>
                            <p className="">USD: ${this.state.ETHUSDprice}</p>
                            <p className="">EUR: €{this.state.ETHEURprice}</p>
                            <br />
                        </div>
                    </div>
                  </div>
                </div>
            </div>

        );
    }
}

export default Price;
