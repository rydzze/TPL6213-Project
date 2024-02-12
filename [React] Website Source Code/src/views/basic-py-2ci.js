import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-2ci.css'

const BasicPy2ci = (props) => {
  return (
    <div className="basic-py2ci-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py2ci-banner">
        <div className="basic-py2ci-main-content">
          <h1 className="basic-py2ci-heading">EXPRESSIONS AND ASSIGNMENT</h1>
          <div className="basic-py2ci-container1">
            <Link to="/basic-py-2a" className="basic-py2ci-navlink button">
              Arithmetic Expressions
            </Link>
            <Link to="/basic-py-2b" className="basic-py2ci-navlink1 button">
              Functional Side Effects
            </Link>
            <Link to="/basic-py-2ci" className="basic-py2ci-navlink2 button">
              Overloaded Operators
            </Link>
            <Link to="/basic-py-2cii" className="basic-py2ci-navlink3 button">
              Type Conversions
            </Link>
          </div>
          <div className="basic-py2ci-container2">
            <Link to="/basic-py-2d" className="basic-py2ci-navlink4 button">
              Relational and Boolean Expressions
            </Link>
            <Link to="/basic-py-2e" className="basic-py2ci-navlink5 button">
              Short-Circuit Evaluation
            </Link>
            <Link to="/basic-py-2f" className="basic-py2ci-navlink6 button">
              Assignment Statements
            </Link>
            <Link to="/basic-py-2g" className="basic-py2ci-navlink7 button">
              Mixed-Mode Assignment
            </Link>
          </div>
          <div className="basic-py2ci-hapih">
            <h1 className="basic-py2ci-text">
              <span className="basic-py2ci-text01">Overloaded Operators</span>
              <br></br>
            </h1>
            <span className="basic-py2ci-text03">
              <span className="basic-py2ci-text04">
                Operator Overloading means giving extended meaning beyond their
                predefined operational meaning. For example operator + is used
                to add two integers as well as join two strings and merge two
                lists. It is achievable because ‘+’ operator is overloaded by
                int class and str class. You might have noticed that the same
              </span>
              <br className="basic-py2ci-text05"></br>
              <span className="basic-py2ci-text06">
                {' '}
                built-in operator or function shows different behavior for
                objects of different classes, this is called Operator
                Overloading.
              </span>
              <br></br>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="basic-py2ci-text10">
              <span className="basic-py2ci-text11">
                Python has a special function, often known as a magic function,
                that is automatically called when it is associated with a
                specific operator in order to conduct operator overloading. For
                instance, the magic method __add__, which defines the action for
                the + operator, is automatically called when we use the +
                operator.
              </span>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <span className="basic-py2ci-text15">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Muhammad Hafiz</span>
            </span>
            <form className="basic-py2ci-form"></form>
            <img
              alt="image"
              src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/binary%20table.png"
              className="basic-py2ci-image"
            />
            <img
              alt="image"
              src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/assignment%20table.png"
              className="basic-py2ci-image1"
            />
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/Comparison%20table.png?raw=true"
              className="basic-py2ci-image2"
            />
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/unary%20table.png?raw=true"
              className="basic-py2ci-image3"
            />
            <span className="basic-py2ci-text18">Binary Operator</span>
            <span className="basic-py2ci-text19">Assignment Operator</span>
            <span className="basic-py2ci-text20">Comparison Operator</span>
            <span className="basic-py2ci-text21">Unary Operator</span>
          </div>
        </div>
      </div>
      <div className="basic-py2ci-reference">
        <h1 className="basic-py2ci-text22">References</h1>
        <span className="basic-py2ci-text23">
          <br className="basic-py2ci-text24"></br>
          <span className="basic-py2ci-text25">
            Operator Overloading in Python
          </span>
          <span className="basic-py2ci-text26">
            . (2018, December 10). GeeksforGeeks.
          </span>
          <br className="basic-py2ci-text27"></br>
          <span className="basic-py2ci-text28">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.geeksforgeeks.org/operator-overloading-in-python/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2ci-link"
          >
            https://www.geeksforgeeks.org/operator-overloading-in-python/
          </a>
        </span>
      </div>
      <footer className="basic-py2ci-footer">
        <div className="basic-py2ci-container3">
          <Link to="/strace" className="basic-py2ci-navlink8">
            STRACE
          </Link>
        </div>
        <span className="basic-py2ci-text29">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py2ci-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py2ci-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy2ci
