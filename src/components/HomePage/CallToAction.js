import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);



  

  return (
    

    <>

<div className="words-section section-bottom-only">
  <div className="container">
    <div className="content">
      <div className="row">
        <div className="col-md-8 col-sm-12 align-self-center">
          <div className="words-wrap">
            <h4>Let's work together on your</h4>
            <h4>best project</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 align-self-center">
          <div className="button-wrap">
            <button className="button">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default CallToAction;