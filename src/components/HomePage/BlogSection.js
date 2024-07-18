import React from 'react';

const BlogSection = () => {
    return (
        <>

<div id="news" className="news section-bottom-only">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div className="section-title section-title-left">
          <h5 className="title-top">News</h5>
          <h3>Latest Post</h3>
          <div className="title-desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellat nobis impedit, distinctio eius cupiditate doloribus labore sunt totam!</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href>
              <div className="content">
                <img src="images/news1.jpg" alt="news-image" />
                <h4>Graphic Design and Photography Workshop</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href>
              <div className="content">
                <img src="images/news2.jpg" alt="news-image" />
                <h4>10 Best Website Design for Inspiration</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            
        </>
    );
};

export default BlogSection;