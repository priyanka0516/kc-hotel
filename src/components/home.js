import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import'./responsive.css';
import Checkform from "./checkform";
class Home extends Component {
    render() {
      const testimonials = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1
      };
      var settings = {
        dots: false,
        infinite: true,
        loop:true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <>     
        <div className='about-page'>
           <div className='container'>
           <div className="row">           
           <Checkform/>                   
            </div>  
           </div>         
        </div>
        <div className='about-section'>
            <div className='container'>     
            <div className='row'>
                <div className='col-md-6'>
                <img src={require('./../images/about.jpeg')} alt=""/>
                </div>
                <div className='col-md-6'>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Hotel</span></h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                </p>
                <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                </p>
                </div>
            </div>    
            </div>
        </div>
        <div className="top-service">
          <div className="container">
            <div className="row">
            
              <div className="col-sm-3">
                <div className="top-section">
              <h2>Top Values<br/>For You<img src={require('./../images/fire.png')} alt=""/></h2>
              <p>Try a variety of benefits when using our services.</p>
              </div>
            </div>
            <div className="col-sm-3">
            <div className="top-section">
            <img src={require('./../images/compare.png')} alt=""/>
              <h6>Lot Of Choices</h6>
              <p>Try a variety of benefits when using our services.</p>
              </div>
            </div>
            <div className="col-sm-3">          
            <div className="top-section">
            <img src={require('./../images/travel-bag1.png')} alt=""/>
            <h6>Best Tour Guide</h6>
            <p>Try a variety of benefits when using our services.</p>
            </div>
            </div>
            <div className="col-sm-3">
            <div className="top-section">
            <img src={require('./../images/ticket.png')} alt=""/>
            <h6>Easy Booking</h6>
            <p>Try a variety of benefits when using our services.</p>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="service-text">
                            <span className="color-text">ROOMS</span>
                            <h2>Stay Long !Save More<br/>In Villas & Restaurants</h2>
                            <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                            <button className="service-button">See All Services</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img src={require('./../images/service.jpg')} alt=""/>
                    <div className="box-set">
                    <div className="box box-4">
                      <p className="text-2">Safe Stay!</p>
                      <p className="text-3">Start from 599/- at night</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offers">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="spl-offers">
                  <h2>Prepare Yourself & Let's Explore<br/>The Beauty Of The World  <img src={require('./../images/earth.png')} className="offer-img" alt=""/></h2>
                  <p>We have many  Specially offers especially Only for you! </p>
                  <button className="offer-button">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <Slider {...testimonials}>
              <div className="testimonial-text">
                <span className="color-text">what they say</span>
                <h2>What Our Customer<br/>Say About Us<img src={require('./../images/happy.png')}alt=""/></h2>
                <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                <span>Theresan jordan</span>
                <img src={require('./../images/rating1.png')} alt=""/>
              </div>
              <div className="testimonial-text">
                <span className="color-text">what they say</span>
                <h2>What Our Customer<br/>Say About Us<img src={require('./../images/happy.png')}alt=""/></h2>
                <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                <span>Theresan jordan</span>
                <img src={require('./../images/rating1.png')} alt=""/>
              </div>
              <div className="testimonial-text">
                <span className="color-text">what they say</span>
                <h2>What Our Customer<br/>Say About Us<img src={require('./../images/happy.png')}alt=""/></h2>
                <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                <span>Theresan jordan</span>
                <img src={require('./../images/rating1.png')} alt=""/>
              </div>
              <div className="testimonial-text">
                <span className="color-text">what they say</span>
                <h2>What Our Customer<br/>Say About Us<img src={require('./../images/happy.png')}alt=""/></h2>
                <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                <span>Theresan jordan</span>
                <img src={require('./../images/rating1.png')} alt=""/>
              </div>
              <div className="testimonial-text">
                <span className="color-text">what they say</span>
                <h2>What Our Customer<br/>Say About Us<img src={require('./../images/happy.png')}alt=""/></h2>
                <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                <span>Theresan jordan</span>
                <img src={require('./../images/rating1.png')} alt=""/>
              </div>
              <div className="testimonial-text">
                <span className="color-text">what they say</span>
                <h2>What Our Customer<br/>Say About Us<img src={require('./../images/happy.png')}alt=""/></h2>
                <p>The Hotel is giving you all facilaties for better stay,entainment,activies.</p>
                <span>Theresan jordan</span>
                <img src={require('./../images/rating1.png')} alt=""/>
              </div>
        </Slider>
              </div>
              <div className="col-md-6">
              <img src={require('./../images/Ratings.png')} id="testimonial-img" alt=""/>
                </div>
            </div>
          </div>
        </div>
        <div className='gallery'>
            <div className="container">
                <div className="row">
                <h2 className="gallery-heading">Gallery</h2>
                <Slider {...settings}>
                <div className="banner-scroll">
                <img src={require('./../images/g-1.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-2.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-3.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-7.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-5.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-6.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-7.jpg')} alt=""/>
                </div>
                <div className="banner-scroll">
                <img src={require('./../images/g-8.jpg')} alt=""/>

                </div>
                </Slider>
                </div>
            </div>
      
        </div>
        </>       
  );
}
}
export default Home;