import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (

 

    <>

<div id="about" className="about">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 col-xs-12">
        <div className="content-image">
          <img src="https://i.ibb.co/t4nXhL7/about-img-1.png" alt />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xs-12">
        <div className="content">
          <h3>Why Choose Us?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquid expedita repellendus a officiis ullam quas, dignissimos iure! Molestiae, asperiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt debitis ullam temporibus laudantium, repellendus ipsum dicta velit autem tenetur non quisquam ad cum laboriosam vero, ab voluptatem fugiat! Culpa, quam!</p>
          <ul>
            <li><span className="circle-list" />Complete features</li>
            <li><span className="circle-list" />Lorem ipsum dolor sit</li>
            <li><span className="circle-list" />dolore architecto officiis</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



     

    </>
  );
};

export default AboutSection;
