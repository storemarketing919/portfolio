import React from "react";

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
          <div className="videocontainer">
            {/* <video
            id="video"
            className="responsive-video"
            controls
            poster="img/projects/ctrl8/ctrl8.png"
          >
            <source src="img/ctrl8.mp4" type="video/mp4" />
          </video> */}
          </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalHyperXContent;
