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
              <span className="ft-wt-600 uppercase">HP Inc.</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Skills </span>:{" "}
              <span className="ft-wt-600 uppercase">Shopify, Liquid, JavaScript, HTML5, CSS3, Shopify CLI, REST/GraphQL APIs, Git/GitHub, Responsive Design, SEO, Performance</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://hyperx.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.hyperx.com
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
              poster="img/projects/hyperx/microph.webp"
            >
              <source src="https://hyperx.com/cdn/shop/videos/c/vp/4f0d50f94a0f4d6abc05dc2a74065456/4f0d50f94a0f4d6abc05dc2a74065456.HD-1080p-7.2Mbps-92028506.mp4?v=0" type="video/mp4" />
            </video>
          </div>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/hyperx1.webp"
            >
              <source src="https://hyperx.com/cdn/shop/videos/c/vp/1d9870d99bfb4944936c5bd5f635436f/1d9870d99bfb4944936c5bd5f635436f.HD-1080p-7.2Mbps-92029958.mp4?v=0" type="video/mp4" />
            </video>
          </div>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/hyperx2.webp"
            >
              <source src="https://hyperx.com/cdn/shop/videos/c/vp/7011f888193c4691af737120394e4bf6/7011f888193c4691af737120394e4bf6.HD-1080p-7.2Mbps-38900647.mp4?v=0" type="video/mp4" />
            </video>
          </div>
          <div className="videocontainer">
            <video
              className="responsive-video"
              controls
              // poster="img/projects/hyperx3.webp"
            >
              <source src="https://hyperx.com/cdn/shop/videos/c/vp/50264799ccfa4b778366328c50ada4cb/50264799ccfa4b778366328c50ada4cb.HD-1080p-7.2Mbps-57588407.mp4?v=0" type="video/mp4" />
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
