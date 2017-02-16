import React, { Component } from 'react';
import Typist from 'react-typist';

class Name extends Component {
  constructor(){
      super();
      this.state = {}
  }

  componentDidMount(){
  }


  render(){
    return (
      <div className="container center-box text-center">
        <div className="row">
        <div className="col-sm-12 margin-top">
        <Typist avgTypingDelay={120} startDelay={1500} hideWhenDone={true} cursor={{
  show: true,
  blink: true,
}} className='typed-name'>
        Mathew Beale <br />
         Software Developer
           </Typist>
        </div>
        </div>
      </div>
    )
  }

}

export default Name;
