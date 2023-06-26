import React from "react";
import "../assets/css/style.css";

function ServicesSection() {
  return (
    <div id="services">
  <div className="container">
    <div className="services-slider swiper" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="services-block">
            <i className="bi bi-briefcase" />
            <span>DESIGN</span>
            <p className="separator">can do a simple design</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="services-block">
            <i className="bi bi-card-checklist" />
            <span>IDENTITY</span>
            <p className="separator">i'm semester 5 now</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="services-block">
            <i className="bi bi-bar-chart" />
            <span>WEB DESIGN</span>
            <p className="separator">can do a simple web design</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="services-block">
            <i className="bi bi-binoculars" />
            <span>MOBILE APPS</span>
            <p className="separator">likes mobile apps</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="services-block">
            <i className="bi bi-brightness-high" />
            <span>Analytics</span>
            <p className="separator">love Analytics</p>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</div>

  );
}

export default ServicesSection;
