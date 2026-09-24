import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalThreeContent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Slider Project</h3>
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
              <span className="ft-wt-600 uppercase">Walmart</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Skills </span>:{" "}
              <span className="ft-wt-600 uppercase">Next.js, React.js, TypeScript, JavaScript, Node.js, PostgreSQL, BFF, SSR, Caching, Code Splitting, API Integration, Web Performance</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://www.lider.cl/inicio"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.lider.cl/inicio
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
          <div className="slide_item">
            <img src="img/projects/ider/ider.cl.PNG" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/ider/ider.cl1.PNG" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/ider/ider.cl2.PNG" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/ider/ider.cl3.PNG" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/ider/ider.cl4.PNG" alt="slide 1" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
