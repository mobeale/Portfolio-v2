
import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
import Typist from 'react-typist';


class Price extends Component {
    constructor(){
        super();
        this.state = {
          GBP: 'GBP',
          USD: 'USD',
          EUR: 'EUR'
        }
    }

    retriveGbpPrice(){
      const GBPURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.GBP;
      this._interval1 = setInterval(() => {
          fetch(GBPURL)
              .then(result => result.json())
              .then(data => this.setState({GBPprice: data.data.amount}))
      }, 1000);
    }

    retriveUsdPrice(){
      const USDURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.USD;
      this._interval2 = setInterval(() => {
          fetch(USDURL)
              .then(result => result.json())
              .then(data => this.setState({USDprice: data.data.amount}))
      }, 1000);
    }

    retriveEurPrice(){
      const EURURL = '//api.coinbase.com/v2/prices/spot?currency=' + this.state.EUR;
      this._interval3 = setInterval(() => {
          fetch(EURURL)
              .then(result => result.json())
              .then(data => this.setState({EURprice: data.data.amount}))
      }, 1000)
    }

    generateChart(){


Highcharts.chart('container', {
colors:['#00FF00'],


chart: {
    type: 'line',
    backgroundColor: '#000000',

},
title: {
    text: 'bitcoin test price'
},
subtitle: {
    text: 'Test chart'
},
xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
yAxis: {
    title: {
        text: '£'
    }
},
plotOptions: {
    line: {
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: false
    }
},
series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
}]
});
    }


    componentDidMount() {
        // this.generateChart();
        this.retriveGbpPrice();
        this.retriveUsdPrice();
        this.retriveEurPrice();
    }

    componentWillUnmount() {
        clearInterval(this._interval1);
        clearInterval(this._interval2);
        clearInterval(this._interval3);
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
                      <div id="container" style={{width: '100%', height:'300px'}}></div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Price;
