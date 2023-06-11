import React, { Component } from 'react';
import '../styles/Homepage.css';
import Navbar from '../components/Navbar';

class Homepage extends Component {

  testFunction(a: number, b: number) {
    return a + b;
  }

  render () {
    return (
      <div className="Homepage">
        	<h1>
            Home Page (Blank for Now)
          </h1>
          <Navbar />
      </div>
    )
   }
}

export default Homepage;
