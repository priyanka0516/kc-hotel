import React from 'react';
function About(){
    return(
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
    )
}
export default About;