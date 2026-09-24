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
  draggable: false,
};
const ModalFourContent = () => {
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
              <span className="ft-wt-600 uppercase">Video</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Videohive</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Software </span>:{" "}
              <span className="ft-wt-600 uppercase">Adobe After Effects</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://videohive.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.videohive.net
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
              id="video"
              className="responsive-video"
              controls
              // poster="img/projects/hyperx.webp"
            >
              <source src="img/projects/hyperx.mp4" type="video/mp4" />
            </video>
            <video
              id="video"
              className="responsive-video"
              controls
              // poster="img/projects/hyperx1.webp"
            >
              <source src="img/projects/hyperx1.mp4" type="video/mp4" />
            </video>
            <video
              id="video"
              className="responsive-video"
              controls
              // poster="img/projects/hyperx2.webp"
            >
              <source src="img/projects/hyperx2.mp4" type="video/mp4" />
            </video>
            <video
              id="video"
              className="responsive-video"
              controls
              // poster="img/projects/hyperx3.webp"
            >
              <source src="img/projects/hyperx3.mp4" type="video/mp4" />
            </video>
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
