import React from "react";
import "../../assets/css/style.css";
import pic3 from "../assets/img/3.jpg";

function AboutSection() {
  return (
   <div id="about" className="paddsection">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-4">
        <div className="div-img-bg">
          <div className="about-img">
            <img src="assets/img/PROFILERIO.jpg" className="img-responsive" alt="me" />
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="about-descr">
          <p className="p-heading">
            I am an organized, creative, and flexible student at Universitas Klabat. With my organizational skills, I can effectively manage my time and tasks. I have a tendency to think creatively and seek innovative solutions when faced with challenges. Additionally, I am ready to adapt to changes and easily interact with diverse individuals. This combination allows me to be an effective 
            student and contribute positively within the university environment.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default AboutSection;
