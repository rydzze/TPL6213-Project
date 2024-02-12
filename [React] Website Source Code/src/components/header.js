import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/strace" className="header-navlink">
        {props.text}
      </Link>
      <div className="header-container">
        <Link to="/strace" className="header-navlink01">
          {props.text11}
        </Link>
        <span className="header-next">{props.next}</span>
        <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle"
          >
            <span className="header-text">{props.text31}</span>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
            <li data-thq="thq-dropdown" className="header-dropdown list-item">
              <Link to="/background-1" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle01"
                >
                  <span className="header-text01">{props.text5}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown01 list-item">
              <Link to="/background-2" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle02"
                >
                  <span className="header-text02">{props.text6}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown02 list-item">
              <Link to="/background-3" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle03"
                >
                  <span className="header-text03">{props.text3}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown03 list-item">
              <Link to="/background-4" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle04"
                >
                  <span className="header-text04">{props.text7}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown04 list-item">
              <Link to="/background-5" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle05"
                >
                  <span className="header-text05">{props.text8}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown05 list-item">
              <Link to="/background-6" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle06"
                >
                  <span className="header-text06">{props.text9}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <span className="header-next1">{props.next1}</span>
        <div data-thq="thq-dropdown" className="header-thq-dropdown1 list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle07"
          >
            <span className="header-text07">{props.text4}</span>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list1">
            <li data-thq="thq-dropdown" className="header-dropdown06 list-item">
              <Link to="/basic-py-1" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle08"
                >
                  <span className="header-text08">{props.text10}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown07 list-item">
              <Link to="/basic-py-2" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle09"
                >
                  <span className="header-text09">{props.text111}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown08 list-item">
              <Link to="/basic-py-3" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle10"
                >
                  <span className="header-text10">{props.text1}</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown09 list-item">
              <Link to="/basic-py-4" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle11"
                >
                  <span className="header-text11">{props.text12}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <span className="header-next2">{props.next2}</span>
        <Link to="/sample-app-intro" className="header-navlink12">
          {props.text2}
        </Link>
        <span className="header-next3">{props.next3}</span>
        <Link to="/training-video" className="header-navlink13">
          <span className="">Training Video</span>
          <br className=""></br>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text1: 'Control Structures',
  text11: 'Home',
  text2: 'Sample Application',
  text: 'STRACE',
  next1: '|',
  next: '|',
  text4: 'Basic Python',
  next3: '|',
  text3: 'Application of Python/Django',
  text31: 'Background',
  text8: 'Implementation Method',
  text12: 'Subprograms',
  rootClassName: '',
  text7: 'Popularity Statistic',
  text5: 'History of Python/Django',
  next2: '|',
  text111: 'Expressions and Assignment',
  text9: 'Programming Environment',
  text6: 'Programming Style',
  text10: 'Names and Bindings',
}

Header.propTypes = {
  text1: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  next1: PropTypes.string,
  next: PropTypes.string,
  text4: PropTypes.string,
  next3: PropTypes.string,
  text3: PropTypes.string,
  text31: PropTypes.string,
  text8: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  next2: PropTypes.string,
  text111: PropTypes.string,
  text9: PropTypes.string,
  text6: PropTypes.string,
  text10: PropTypes.string,
}

export default Header
