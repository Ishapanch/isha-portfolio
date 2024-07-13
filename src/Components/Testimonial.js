import React, { Component } from 'react'
import { Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import test1 from '../assets/dummy.jpg'

export default class Testimonial extends Component {
  render() {
    return (
        <section className='testimonial'>
            <div className="container">
            <div className='row'>
            <div className="col-lg-12 col-12 text-center">
            <div class="grey-title">Services i offer to my clients</div>
            <h3 class="heading">My Services</h3>
            </div>
            <div className="col-lg-12">
            <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={test1}  />
          <div className="myCarousel">
            <h3>Niraj Pancholi</h3>
            <h4>Designer</h4>
            <p>
            Isha did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.
            </p>
          </div>
        </div>

        <div>
          <img src={test1} />
          <div className="myCarousel">
            <h3>Dhara Pancholi</h3>
            <h4>Designer</h4>
            <p>
            Isha did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.
            </p>
          </div>
        </div>

        <div>
          <img src={test1}  />
          <div className="myCarousel">
            <h3>Nehal Pancholi</h3>
            <h4>Designer</h4>
            <p>
            Isha did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.
            </p>
          </div>
        </div>
      </Carousel>
            </div>
        </div>
        </div>
        </section>
    )
  }
}
