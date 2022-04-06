import React from 'react'
import './about.css'
import ME from '../../assets/CosmoTom.PNG'

const About = () => {
  return (
    <section id='about'>
    <h5> Get to know </h5>
    <h2> About me</h2>

    <div className="container about_container">
      <div className="about_me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Laborum adipisci consequatur rem 
             officia ex laboriosam illum? Facilis earum placeat 
             ducimus maiores cumque eligendi voluptates aliquid 
             doloremque, non ea cum repudiandae.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

    
    </section>
  )
}

export default About