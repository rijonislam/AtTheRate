import React from 'react';
import { Navigate } from 'react-router-dom';

const ContactUs = () => {


  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-messages');
        alert('Message is Updated');
      });
  };
  return (
    <>
   <div id="contact" className="contact section-bottom-only">
  <div className="container">
    <div className="section-title">
      <h5 className="title-top"></h5>
      <h3>Our Address Map</h3>
    </div>
    <div className="box-content">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="content">
            <h5>Address</h5>
            <p>121 King Street, Melbourne Victoria 3000 Australia</p>
            <h5>Phone</h5>
            <p>+61 3 8376 6284</p>
            <h5>Email</h5>
            <p>support@example.com</p>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="content-right">
          <iframe src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" width="800" height="400"></iframe>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default ContactUs;