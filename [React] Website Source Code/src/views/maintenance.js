import React from 'react'

import { Helmet } from 'react-helmet'

import './maintenance.css'

const Maintenance = (props) => {
  return (
    <div className="maintenance-container">
      <Helmet>
        <title>Strace | Flag</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace | Flag" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="maintenance-banner">
        <h1 className="maintenance-text">
          <span className="maintenance-text1">STRACE</span>
          <br></br>
        </h1>
        <span className="maintenance-text3">
          <span className="maintenance-text4">IN MAINTENANCE ...</span>
          <br></br>
        </span>
        <div className="maintenance-container1">
          <img
            alt="image"
            src="https://i.imgflip.com/wfenk.jpg?a473376"
            loading="eager"
            className="maintenance-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Maintenance
