import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  draggable: false,
};
const ModalHyperXContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>LOCAL VIDEO PROJECT</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">E-commerce Platform</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Company </span>:{" "}
              <span className="ft-wt-600 uppercase">Hari Trading Pvt Ltd</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Skills </span>:{" "}
              <span className="ft-wt-600 uppercase">Shopify, Liquid, JavaScript, HTML5, CSS3, Responsive Design, UI/UX, REST/GraphQL APIs, SEO, Git/GitHub</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://ctrl8.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.ctrl8.in
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/ctrl8.webp"
            >
              <source src="img/projects/ctrl8/ctrl81.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/ctrl81.webp"
            >
              <source src="img/projects/ctrl8/ctrl82.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/ctrl82.webp"
            >
              <source src="img/projects/ctrl8/ctrl83.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/ctrl83.webp"
            >
              <source src="img/projects/ctrl8/ctrl84.mp4" type="video/mp4" />
            </video>
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalHyperXContent;
