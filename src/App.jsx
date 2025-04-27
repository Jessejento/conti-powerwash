import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ServiceArea from './components/Locations'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="app">
        <main>
          <section id="service-area">
            <ServiceArea />
          </section>
          <section id="services">
            <Services />
          </section>
          {/* <section id="work">
            <h2 className="section-title">Our Work</h2>
            <Gallery />
          </section> */}
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Conti Powerwash. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
