import React, { useEffect, useState } from "react";

const StepSection = () => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/steps`)
      .then((res) => res.json())
      .then((info) => setSteps(info));
  }, []);

  return (
    <>


<div id="process-work" className="process-work section">
  <div className="container">
    <div className="section-title">
      <h5 className="title-top">Process</h5>
      <h3>Process Our Work</h3>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="content">
          <i className="icon ion-ios-chatboxes" />
          <h5>Chat</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 align-self-end">
        <div className="content">
          <i className="icon ion-ios-cash" />
          <h5>Transaction</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="content">
          <i className="icon ion-ios-search" />
          <h5>Research</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 align-self-end">
        <div className="content">
          <i className="icon ion-ios-checkmark-circle" />
          <h5>Deal</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
        </div>
      </div>
    </div>
  </div>
</div>


      
    </>
  );
};

export default StepSection;
