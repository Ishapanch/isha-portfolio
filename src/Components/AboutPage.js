import React from 'react'
import AboutImg from '../assets/isha-about.png'
import './AboutPage.css'
import Testimonial from '../Components/Testimonial';
import './Testimonial.css'
import { MdOutlineWebAsset } from "react-icons/md";

export default function AboutPage() {

  
  return (
    <div className="dark-bg about-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="about-heading text-center">
              <p>Get to know me</p>
              <h3>About Me</h3>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <img src={AboutImg} className="w-100" />
          </div>
          <div className="col-lg-7 col-12">
            <div className="padding-class">
              <div className="green-title">Who am i?</div>
              <h3 className="heading">
                I'm Isha Pancholi, a visual UX/UI Designer and Frontend Web
                Developer
              </h3>
              <p className="description">
                I am a Designer and have been building noteworthy UX/UI designs
                and websites for years, which comply with the latest design
                trends. I help convert a vision and an idea into meaningful and
                useful products. Having a sharp eye for product evolution helps
                me prioritize tasks, iterate fast and deliver faster.
              </p>
              <hr className="seperator-hr" />
              <ul className="no-list details-my">
                <li>
                  <span>Name:</span> Isha Pancholi
                </li>
                <li>
                  <span>Email:</span>
                  <a href="mailto: inp2202@gmail.com"> inp2202@gmail.com</a>
                </li>
                <li>
                  <span>Age:</span> 22
                </li>
                <li>
                  <span>From:</span> Vadodara, Gujarat, India
                </li>
              </ul>
              <div className="bottom-prt">
                <div className="btn-sec">
                  <a to="/" className="btn-green">
                    Download CV
                  </a>
                </div>
                <div className="social-media">
                  <ul className="no-list details-my">
                    <li>
                      <a to="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a to="/">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a to="/">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a to="/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-12">
            <div class="service-sec">
            <div class="grey-title">Services i offer to my clients</div>
            <h3 class="heading">My Services</h3>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="boxed-style">
                  <MdOutlineWebAsset  />
                    <h5 class="heading">Web Developer</h5>
                    <p class="description">
                      Text Here...Text Here...Text Here...Text Here...
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="boxed-style">
                  <MdOutlineWebAsset  />
                    <h5 class="heading">UI / UX Designing</h5>
                    <p class="description">
                      Text Here...Text Here...Text Here...Text Here...
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="boxed-style">
                  <MdOutlineWebAsset  />
                    <h5 class="heading">Customer Support</h5>
                    <p class="description">
                      Text Here...Text Here...Text Here...Text Here...
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="boxed-style">
                  <MdOutlineWebAsset  />
                    <h5 class="heading">Frontend Designing</h5>
                    <p class="description">
                      Text Here...Text Here...Text Here...Text Here...
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="boxed-style">
                  <MdOutlineWebAsset  />
                    <h5 class="heading">Fully Responsive</h5>
                    <p class="description">
                      Text Here...Text Here...Text Here...Text Here...
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="boxed-style">
                  <MdOutlineWebAsset  />
                    <h5 class="heading">Branding</h5>
                    <p class="description">
                      Text Here...Text Here...Text Here...Text Here...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial></Testimonial>
    </div>
  );
}
