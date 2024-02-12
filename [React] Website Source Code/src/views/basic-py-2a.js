import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-2a.css'

const BasicPy2a = (props) => {
  return (
    <div className="basic-py2a-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py2a-banner">
        <div className="basic-py2a-main-content">
          <h1 className="basic-py2a-heading">EXPRESSIONS AND ASSIGNMENT</h1>
          <div className="basic-py2a-container1">
            <Link to="/basic-py-2a" className="basic-py2a-navlink button">
              Arithmetic Expressions
            </Link>
            <Link to="/basic-py-2b" className="basic-py2a-navlink1 button">
              Functional Side Effects
            </Link>
            <Link to="/basic-py-2ci" className="basic-py2a-navlink2 button">
              Overloaded Operators
            </Link>
            <Link to="/basic-py-2cii" className="basic-py2a-navlink3 button">
              Type Conversions
            </Link>
          </div>
          <div className="basic-py2a-container2">
            <Link to="/basic-py-2d" className="basic-py2a-navlink4 button">
              Relational and Boolean Expressions
            </Link>
            <Link to="/basic-py-2e" className="basic-py2a-navlink5 button">
              Short-Circuit Evaluation
            </Link>
            <Link to="/basic-py-2f" className="basic-py2a-navlink6 button">
              Assignment Statements
            </Link>
            <Link to="/basic-py-2g" className="basic-py2a-navlink7 button">
              Mixed-Mode Assignment
            </Link>
          </div>
          <div className="basic-py2a-alia">
            <div className="basic-py2a-arithmetic">
              <h1 className="basic-py2a-text">
                <span>Arithmetic Expressions</span>
                <br></br>
              </h1>
              <div className="basic-py2a-container3">
                <div className="basic-py2a-container4">
                  <span className="basic-py2a-text03">
                    <span className="basic-py2a-text04">
                      Precedence
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
                    <span className="basic-py2a-text06">
                      associativity rule
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>for Python.</span>
                  </span>
                  <img
                    alt="image"
                    src="/external/screenshot%202023-12-29%20142936-900h-900h.png"
                    className="basic-py2a-image"
                  />
                </div>
                <div className="basic-py2a-conditional-exp">
                  <img
                    alt="image"
                    src="/external/screenshot%202023-12-28%20205424-200h-200h.png"
                    className="basic-py2a-image1"
                  />
                  <span className="basic-py2a-text08">
                    Given example is the arithmetic operator multiplication (*)
                    that is being used by the program to find totalprice.
                  </span>
                  <span className="basic-py2a-text09">
                    Conditional Expression
                  </span>
                  <div className="basic-py2a-container5">
                    <span className="basic-py2a-text10">
                      <span>
                        Like in C++ languages, Python also have the conditional
                        expression that can be written in one line. They have
                        ternary operators but instead of using ‘?’ and ‘:’,
                        python use ‘if’ and ‘else’ keyword.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        The code above means that if expression_1 is true, so
                        the output will be expression_2, otherwise, it is go to
                        expression_3.
                      </span>
                    </span>
                    <img
                      alt="image"
                      src="/external/screenshot%202023-12-29%20104022-600w-600w.png"
                      className="basic-py2a-image2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="basic-py2a-text15">- Noor Alia Alisa</span>
          </div>
        </div>
      </div>
      <div className="basic-py2a-reference">
        <h1 className="basic-py2a-text16">References</h1>
        <span className="basic-py2a-text17">
          <br className="basic-py2a-text18"></br>
          <span className="basic-py2a-text19">
            Singh, A. (2023, August 3).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py2a-text20">
            This article will teach you about operator precedence and
            associativity in Python
          </span>
          <span className="basic-py2a-text21">. Medium.</span>
          <br className="basic-py2a-text22"></br>
          <span className="basic-py2a-text23">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://medium.com/@rishu__2701/this-article-will-teach-you-about-operator-precedence-and-associativity-in-python-ee455c7fbfee"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2a-link"
          >
            https://medium.com/@rishu__2701/this-article-will-teach-you-about-operator-precedence-and-associativity-in-python-ee455c7fbfee
          </a>
          <br className="basic-py2a-text24"></br>
          <br className="basic-py2a-text25"></br>
          <span className="basic-py2a-text26">
            Conditional expression (ternary operator) in Python
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py2a-text27">
            (2023, August 18). note.nkmk.me.
          </span>
          <br className="basic-py2a-text28"></br>
          <span className="basic-py2a-text29">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://note.nkmk.me/en/python-if-conditional-expressions/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2a-link1"
          >
            https://note.nkmk.me/en/python-if-conditional-expressions/
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py2a-footer">
        <div className="basic-py2a-container6">
          <Link to="/strace" className="basic-py2a-navlink8">
            STRACE
          </Link>
        </div>
        <span className="basic-py2a-text31">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py2a-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py2a-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy2a
