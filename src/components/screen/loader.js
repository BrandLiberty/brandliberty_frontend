import React, { Component } from "react";
import '../assets/css/includes/loader.css';
import loader from '../assets/images/loader.gif';

export class Loader extends Component {
  render() {
    return (
      <div>
      <div className="circular-loader-container">
        <div className="circular-loader">
        <img src={loader} alt="loading" className="static-image"/>
        </div>
      </div>
      </div>
    );
  }
}

export default Loader;
