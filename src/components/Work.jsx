import React from 'react';
import Typist from 'react-typist';


const Work = React.createClass({
    render() {
        return (
            <div>
                <div className="container">
                    <div className="center-box text-center work">
                      <Typist>
                        <div className="row">
                          <div className="col-sm-12">
                            <h3>Skills:</h3>
                            <li>Javascript</li>
                            <li>React & Redux</li>
                            <li>Java</li>
                          </div>
                        </div>
                        <div className="row" style={{marginTop: "20px"}}>
                          <div className="col-sm-12">
                            <h3>Employment:</h3>
                            <li>TalentSee - Front end Developer 2015 > 2016</li>
                            <li>Exonar - Jr Software Engineer 2016 > present</li>
                          </div>
                        </div>
                        <div className="row" style={{marginTop: "20px"}}>
                          <div className="col-sm-12">
                            <h3>Education:</h3>
                            <li>Quantity Surveying 2:1 - Portsmouth University</li>
                          </div>
                        </div>
                        </Typist>
                    </div>
                </div>
            </div>
        )
    }
})

export default Work;
