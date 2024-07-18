import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    
    <>
    <div id="home" className="home-intro">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="content">
          <h2><span className="color-highlight">Build</span> Your</h2>
          <h2>Agency <span className="color-highlight">with Us</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dicta impedit iste!</p>
          <ul>
            <li><a href className="button">Get Started</a></li>
            <li><a href className="button button-secondary">Free Trial</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="content-image">
          <img src="images/header-img.png" alt />
        </div>
      </div>
    </div>
  </div>
</div>


</>
  );
};

export default Banner;
