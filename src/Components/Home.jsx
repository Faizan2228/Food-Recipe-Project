import React from 'react'
import Header from './Header'
import './Home.css'
import Recipes from './Recipes'

const Home = () => {
  return (
    <>
      <main className='home-continer'>
        <Header title={<p>Taste the World with <br /> FlavorVerse!</p>} />

        <section id='recipes' className='recipe-section'>
          <Recipes />
        </section>
      </main>
    </>
  )
}

export default Home