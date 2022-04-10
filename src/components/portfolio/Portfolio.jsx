import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.png'
// import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/tmarra122333/Blackjack-21_transfer" className='btn' target='_blank'>Github</a>
          <a href="https://pages.git.generalassemb.ly/tmarra122333/Blackjack-21/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/tmarra122333/closedOcean_transfer" className='btn' target='_blank'>Github</a>
          <a href="https://closed-ocean.herokuapp.com/home" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>travelr</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/tmarra122333/travelr" className='btn' target='_blank'>Github</a>
          <a href="https://pages.git.generalassemb.ly/tmarra122333/Blackjack-21/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/tmarra122333/Blackjack-21_transfer" className='btn' target='_blank'>Github</a>
          <a href="https://pages.git.generalassemb.ly/tmarra122333/Blackjack-21/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

     


      </div>
    </section>
  )
}

export default Portfolio