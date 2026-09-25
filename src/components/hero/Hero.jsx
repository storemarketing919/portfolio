import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../../components/about/index";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div className="col-12 home-details text-start">
          <div>
          <div className="hero-kicker">IDEAS <span>→</span> CODE <span>→</span> REAL IMPACT</div>
          <h1 className="hero-brand">NovaGear</h1>
          <h2 className="hero-title">
            Full-Stack &amp;
            <span>AI Developer</span>
          </h2>
          <p className="hero-description">
            I build modern, scalable web applications, AI-powered solutions,
            and high-conversion e-commerce experiences that help businesses
            grow in the digital world.
          </p>
          <div className="hero-services">
            <div className="hero-service">
              <span className="hero-service-icon fa fa-code"></span>
              <div>
                <strong>Web Development</strong>
                <small>Modern Web Apps</small>
              </div>
            </div>
            <div className="hero-service">
              <span className="hero-service-icon ai-icon">
                <img src="/img/ai-brain.svg" alt="AI brain" />
              </span>
              <div>
                <strong>AI Development</strong>
                <small>Smart Solutions</small>
              </div>
            </div>
            <div className="hero-service">
              <span className="hero-service-icon shopify-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" role="img">
                  <path className="shopify-bag" d="M13 15.5h22l2.5 27H10.5l2.5-27Z" />
                  <path className="shopify-handle" d="M18.5 16v-3.5a5.5 5.5 0 0 1 11 0V16" />
                  <path
                    className="shopify-icon-letter"
                    d="M25.1 21.4c-2.9 0-4.8 1.7-4.8 3.9 0 2.4 2 3.2 3.7 3.9 1.2.5 1.9.9 1.9 1.7 0 .7-.7 1.2-1.7 1.2-1.2 0-2.4-.5-3.4-1.2l-1.1 3.1c1.1.8 2.7 1.3 4.6 1.3 3.1 0 5.3-1.8 5.3-4.4 0-2.3-1.7-3.3-3.7-4.1-1.2-.5-1.9-.9-1.9-1.5 0-.6.6-1 1.5-1 1 0 2 .4 2.8.9l1-3c-1-.6-2.3-.8-4.2-.8Z"
                  />
                </svg>
              </span>
              <div>
                <strong>Shopify Development</strong>
                <small>E-commerce Growth</small>
              </div>
            </div>
          </div>
          <button className="button hero-about-button" onClick={() => setIsOpen(true)}>
            <span className="button-text">More About Me</span>
            <span className="button-icon fa fa-arrow-right"></span>
          </button>
        </div>
      </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="About me"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <img src="/img/cancel.svg" alt="Close" />
          </button>
          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              <Index />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
