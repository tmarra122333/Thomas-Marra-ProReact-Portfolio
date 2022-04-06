import React from 'react'
import './about.css'
import ME from '../../assets/CosmoTom.PNG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
    <h5> Get to know </h5>
    <h2> About me</h2>

    <div className="container about_container">
      <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
         <div className="about__cards">

           <article className='about__card'>
             <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>General Assembly Software Engineer Graduate</small>
           </article>
           
           <article className='about__card'>
             <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 In the United States</small>
           </article>
           
           <article className='about__card'>
             <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>5 completed projects</small>
           </article>
             </div>
            
             <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquid odit perspiciatis facilis illo corrupti hic repellat illum amet ipsa doloribus est soluta. Corporis aliquam, neque totam ex incidunt eius.
            </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
  </div>

      

    
    </section>
  )
}

export default About