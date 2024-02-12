import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-2g.css'

const BasicPy2g = (props) => {
  return (
    <div className="basic-py2g-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py2g-banner">
        <div className="basic-py2g-main-content">
          <h1 className="basic-py2g-heading">EXPRESSIONS AND ASSIGNMENT</h1>
          <div className="basic-py2g-container1">
            <Link to="/basic-py-2a" className="basic-py2g-navlink button">
              Arithmetic Expressions
            </Link>
            <Link to="/basic-py-2b" className="basic-py2g-navlink1 button">
              Functional Side Effects
            </Link>
            <Link to="/basic-py-2ci" className="basic-py2g-navlink2 button">
              Overloaded Operators
            </Link>
            <Link to="/basic-py-2cii" className="basic-py2g-navlink3 button">
              Type Conversions
            </Link>
          </div>
          <div className="basic-py2g-container2">
            <Link to="/basic-py-2d" className="basic-py2g-navlink4 button">
              Relational and Boolean Expressions
            </Link>
            <Link to="/basic-py-2e" className="basic-py2g-navlink5 button">
              Short-Circuit Evaluation
            </Link>
            <Link to="/basic-py-2f" className="basic-py2g-navlink6 button">
              Assignment Statements
            </Link>
            <Link to="/basic-py-2g" className="basic-py2g-navlink7 button">
              Mixed-Mode Assignment
            </Link>
          </div>
          <div className="basic-py2g-container3">
            <div className="basic-py2g-nabil">
              <div className="basic-py2g-container4">
                <span className="basic-py2g-text">
                  <span>Mixed-Mode Assignment</span>
                  <br></br>
                  <br></br>
                </span>
                <div className="basic-py2g-container5">
                  <span className="basic-py2g-text04">
                    <span className="basic-py2g-text05">
                      Python is a dynamically-typed language, and it supports
                      mixed-mode assignments.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      From the example given,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2g-text09">billitem.perprice</span>
                    <span> is a </span>
                    <span className="basic-py2g-text11">
                      float
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      and
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2g-text13">
                      billitem.quantity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      is an
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2g-text15">integer</span>
                    <span>
                      . When we do the multiply both variables and assign it
                      into
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2g-text17">
                      billitem.totalprice
                    </span>
                    <span>
                      , it will be a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2g-text19">
                      float
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>datatype.</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/external/screenshot%202023-12-28%20205424-200h-200h.png"
                    className="basic-py2g-image"
                  />
                </div>
              </div>
              <span className="basic-py2g-text22">
                <span className="basic-py2g-text23">
                  -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py2g-text24">Muhammad Nabil Irfan</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="basic-py2g-reference">
        <h1 className="basic-py2g-text25">References</h1>
        <span className="basic-py2g-text26">
          <br></br>
          <span className="basic-py2g-text28">
            Expressions and Statements: Assignment Statement Forms and FAQs.
          </span>
          <span> (2021, March 19). Toppr-guides.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py2g-text32">
            https://www.toppr.com/guides/computer-science/introduction-to-python/variables-expressions-and-statements/expressions-and-statements/
          </span>
          <br></br>
          <br></br>
          <span>
            Sturtz, J. (n.d.).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py2g-text36">
            Conditional Statements in Python
          </span>
          <span>. Real Python.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://realpython.com/python-conditional-statements/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2g-link"
          >
            https://realpython.com/python-conditional-statements/
          </a>
          <br></br>
          <br className="basic-py2g-text41"></br>
          <span className="basic-py2g-text42">
            Mixed mode arithmetic - Learn Python in 7 Days
          </span>
          <span>. (n.d.). O’Reilly Online Learning.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.oreilly.com/library/view/learn-python-in/9781787288386/d9f2bcb2-d502-4e84-8427-67c20cd3aad8.xhtml"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2g-link1"
          >
            https://www.oreilly.com/library/view/learn-python-in/9781787288386/d9f2bcb2-d502-4e84-8427-67c20cd3aad8.xhtml
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py2g-footer">
        <div className="basic-py2g-container6">
          <Link to="/strace" className="basic-py2g-navlink8">
            STRACE
          </Link>
        </div>
        <span className="basic-py2g-text47">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py2g-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py2g-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy2g
