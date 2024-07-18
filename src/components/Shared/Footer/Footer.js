import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-subscriber');
        alert('Subscribers is Updated');
      });


  }










  return (


    <>
 <div>
  {/* footer */}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="content">
            <div className="brand"><img src="images/logo.png" alt /></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, accusamus.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="content">
            <h5>About</h5>
            <ul>
              <li><a href><i className="icon ion-ios-contact" /> About us</a></li>
              <li><a href><i className="icon ion-ios-chatboxes" /> Contact</a></li>
              <li><a href><i className="icon ion-ios-list" /> Portfolio</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="content">
            <h5>Support</h5>
            <ul>
              <li><a href><i className="icon ion-ios-headset" /> support@example.com</a></li>
              <li><a href><i className="icon ion-ios-call" /> +61 3 8376 6284
                </a></li>
              <li><a href><i className="icon ion-ios-settings" /> Services</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="content">
            <h5>Follow us</h5>
            <ul className="social">
              <li><a href><i className="icon ion-logo-facebook" /> Facebook</a></li>
              <li><a href><i className="icon ion-logo-twitter" /> Twitter</a></li>
              <li><a href><i className="icon ion-logo-instagram" /> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
  {/* footer bottom */}
  <div className="footer-bottom">
    <span>Copyright © All Right Reserved</span>
  </div>
  {/* end footer bottom */}
</div>


    </>
  );
};

export default Footer;
