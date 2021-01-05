import React, { Component } from 'react'
import Navbar from './Navbar'

export default class LandingPage extends Component {
    render() {
        return (
<div>
                 
<Navbar/>
<header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h1 className="masthead-heading mb-0">One Power</h1>
        <h2 className="masthead-subheading mb-0">Just for you to serve your needs with volunteers</h2>
        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
      </div>
    </div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>
  </header>

  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1540140795903-f859547c3f31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbHVudGVlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">For those about to volunteer...   👏 </h2>
            <p>Show some love to the needy so that you also get someone to help you out one day!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  <section>
      
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1524496686051-f9b8e8cf9d1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsdXRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <h2 className="display-4">We salute you!</h2>
            <p>Thank you for coming to help others and putting smile on the face of the needy 😀</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Let there be rock!🤘</h2>
            <p>Let's get going to help each other.. Pick the first request and run with it. let you be the reason for the existence of humanity.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="py-5 bg-black">
    <div className="container">
      <p className="m-0 text-center text-white small">Copyright &copy; salma 2020</p>
    </div>
  
  </footer>
</div>
        )
    }
}
