import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Blackjack 21',
    github: 'https://github.com/tmarra122333/Blackjack-21_transfer',
    demo: 'https://pages.git.generalassemb.ly/tmarra122333/Blackjack-21/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Closed-Ocean: An Nft Marketplace!',
    github: 'https://github.com/tmarra122333/closedOcean_transfer',
    demo: 'https://closed-ocean.herokuapp.com/home'
  },
  {
    id: 3,
    image: IMG3,
    title: 'travelr: review your favorite cities traveled!',
    github: 'https://github.com/tmarra122333/travelr',
    demo: 'https://pages.git.generalassemb.ly/tmarra122333/Blackjack-21/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Cosmic Titan Music Studios',
    github: 'https://github.com/tmarra122333/Capstone_FrontEnd',
    demo: 'https://pages.git.generalassemb.ly/tmarra122333/Blackjack-21/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
          return (
            <article key= {id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio