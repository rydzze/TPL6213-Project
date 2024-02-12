import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-3.css'

const BasicPy3 = (props) => {
  return (
    <div className="basic-py3-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py3-banner">
        <div className="basic-py3-main-content">
          <h1 className="basic-py3-heading">CONTROL STRUCTURE</h1>
          <div className="basic-py3-container1">
            <Link to="/basic-py-3ai" className="basic-py3-navlink button">
              Selection Statement
            </Link>
            <Link to="/basic-py-3aii" className="basic-py3-navlink1 button">
              Two-way Selectors
            </Link>
            <Link to="/basic-py-3aiii" className="basic-py3-navlink2 button">
              Multiple-way Selectors
            </Link>
          </div>
          <div className="basic-py3-container2">
            <Link to="/basic-py-3bi" className="basic-py3-navlink3 button">
              Counter-Controlled Loops
            </Link>
            <Link to="/basic-py-3bii" className="basic-py3-navlink4 button">
              Logically-Controlled Loops
            </Link>
          </div>
          <div className="basic-py3-introduction">
            <div className="basic-py3-container3">
              <img
                alt="image"
                src="https://i.pinimg.com/originals/bd/b3/3a/bdb33ac9eee68da995b99f24b88697fa.png"
                loading="eager"
                className="basic-py3-image"
              />
              <h1 className="basic-py3-text">
                <span>Overview of</span>
                <br></br>
                <span>the Topic</span>
              </h1>
            </div>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/Overview_ControlStructures.png?raw=true"
              loading="eager"
              className="basic-py3-image1"
            />
          </div>
        </div>
      </div>
      <footer className="basic-py3-footer">
        <div className="basic-py3-container4">
          <Link to="/strace" className="basic-py3-navlink5">
            STRACE
          </Link>
        </div>
        <span className="basic-py3-text4">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py3-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py3-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy3