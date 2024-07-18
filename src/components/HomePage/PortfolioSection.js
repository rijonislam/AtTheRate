import React from 'react';

const PortfolioSection = () => {
    return (
        <>
       <div id="portfolio" className="portfolio section-bottom-only">
  <div className="container">
    <div className="section-title">
      <h5 className="title-top">Work</h5>
      <h3>Our Work Portfolio</h3>
    </div>
    <div className="portfolio-filter-menu">
      <ul>
        <li data-filter="all" className="active">
          <span>All</span>
        </li>
        <li data-filter={1}>
          <span>Web Design</span>
        </li>
        <li data-filter={2}>
          <span>Marketing</span>
        </li>
        <li data-filter={3}>
          <span>Branding</span>
        </li>
      </ul>
    </div>
    <div className="row no-gutters filter-container">
      <div className="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category={3}>
        <div className="content-image">
          <a href="images/portfolio1.jpg" className="portfolio-popup">
            <img src="images/portfolio1.jpg" alt="portfolio-image" />
            <div className="image-overlay" />
            <div className="image-caption">
              <h4>Color Wall</h4>
              <span>Branding</span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category={1}>
        <div className="content-image">
          <a href="images/portfolio2.jpg" className="portfolio-popup">
            <img src="images/portfolio2.jpg" alt="portfolio-image" />
            <div className="image-overlay" />
            <div className="image-caption">
              <h4>Smooth Flower</h4>
              <span>Branding</span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category={2}>
        <div className="content-image">
          <a href="images/portfolio3.jpg" className="portfolio-popup">
            <img src="images/portfolio3.jpg" alt="portfolio-image" />
            <div className="image-overlay" />
            <div className="image-caption">
              <h4>Vintage Building</h4>
              <span>Branding</span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category={3}>
        <div className="content-image">
          <a href="images/portfolio4.jpg" className="portfolio-popup">
            <img src="images/portfolio4.jpg" alt="portfolio-image" />
            <div className="image-overlay" />
            <div className="image-caption">
              <h4>Theo Digital</h4>
              <span>Branding</span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category={2}>
        <div className="content-image">
          <a href="images/portfolio5.jpg" className="portfolio-popup">
            <img src="images/portfolio5.jpg" alt="portfolio-image" />
            <div className="image-overlay" />
            <div className="image-caption">
              <h4>Painted Wall</h4>
              <span>Branding</span>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 filtr-item" data-category={1}>
        <div className="content-image">
          <a href="images/portfolio6.jpg" className="portfolio-popup">
            <img src="images/portfolio6.jpg" alt="portfolio-image" />
            <div className="image-overlay" />
            <div className="image-caption">
              <h4>Blue Lolipop</h4>
              <span>Branding</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

            
        </>
    );
};

export default PortfolioSection;