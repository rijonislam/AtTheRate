import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



    <>
<div id="services" className="services section-bottom-only">
  <div className="section-title">
    <h5 className="title-top">Services</h5>
    <h3>Our The Best Services</h3>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="content">
          <div className="serv-icon">
            <i className="icon ion-logo-html5" />
            <span className="clone-icon"><i className="icon ion-logo-html5" /></span>
          </div>
          <h5>HTML 5</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="content">
          <div className="serv-icon">
            <i className="icon ion-ios-phone-portrait" />
            <span className="clone-icon"><i className="icon ion-ios-phone-portrait" /></span>
          </div>
          <h5>Mobile Apps</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="content">
          <div className="serv-icon">
            <i className="icon ion-ios-desktop" />
            <span className="clone-icon"><i className="icon ion-ios-desktop" /></span>
          </div>
          <h5>Web Development</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="content">
          <div className="serv-icon">
            <i className="icon ion-ios-bulb" />
            <span className="clone-icon"><i className="icon ion-ios-bulb" /></span>
          </div>
          <h5>Brand Strategy</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="content">
          <div className="serv-icon">
            <i className="icon ion-ios-paper" />
            <span className="clone-icon"><i className="icon ion-ios-paper" /></span>
          </div>
          <h5>Branding</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="content">
          <div className="serv-icon">
            <i className="icon ion-logo-wordpress" />
            <span className="clone-icon"><i className="icon ion-logo-wordpress" /></span>
          </div>
          <h5>Wordpress</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>


  );
};

export default ServicesSection;
