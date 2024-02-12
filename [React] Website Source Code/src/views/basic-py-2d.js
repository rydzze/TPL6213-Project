import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-2d.css'

const BasicPy2d = (props) => {
  return (
    <div className="basic-py2d-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py2d-banner">
        <div className="basic-py2d-main-content">
          <h1 className="basic-py2d-heading">EXPRESSIONS AND ASSIGNMENT</h1>
          <div className="basic-py2d-container1">
            <Link to="/basic-py-2a" className="basic-py2d-navlink button">
              Arithmetic Expressions
            </Link>
            <Link to="/basic-py-2b" className="basic-py2d-navlink1 button">
              Functional Side Effects
            </Link>
            <Link to="/basic-py-2ci" className="basic-py2d-navlink2 button">
              Overloaded Operators
            </Link>
            <Link to="/basic-py-2cii" className="basic-py2d-navlink3 button">
              Type Conversions
            </Link>
          </div>
          <div className="basic-py2d-container2">
            <Link to="/basic-py-2d" className="basic-py2d-navlink4 button">
              Relational and Boolean Expressions
            </Link>
            <Link to="/basic-py-2e" className="basic-py2d-navlink5 button">
              Short-Circuit Evaluation
            </Link>
            <Link to="/basic-py-2f" className="basic-py2d-navlink6 button">
              Assignment Statements
            </Link>
            <Link to="/basic-py-2g" className="basic-py2d-navlink7 button">
              Mixed-Mode Assignment
            </Link>
          </div>
          <div className="basic-py2d-relational-bool-expr">
            <div className="basic-py2d-row">
              <div className="basic-py2d-column">
                <h1 className="basic-py2d-text">
                  <span>Relational and Boolean Expressions</span>
                  <br></br>
                </h1>
                <span className="basic-py2d-text03">
                  <span>
                    As any other programming languages, Python uses the same
                    relational and boolean operator for the expressions. Since
                    Python is a C-based languages, it applies the same rules for
                    precedence of the arithmetic, relational, and Boolean
                    operator.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="basic-py2d-example">
              <div className="basic-py2d-container3">
                <h2 className="basic-py2d-text06">Relational</h2>
                <span className="basic-py2d-text07">
                  <span>
                    There are
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text09">
                    six relational operators
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>in Python:</span>
                  <br></br>
                  <span>
                    1.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text13">
                    ==
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>(equal to)</span>
                  <br></br>
                  <span>
                    2.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text17">!= </span>
                  <span> (not equal to)</span>
                  <br></br>
                  <span>
                    3.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text21">&lt;</span>
                  <span>   (less than)</span>
                  <br></br>
                  <span>
                    4.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text25">&gt;</span>
                  <span>   (greater than)</span>
                  <br></br>
                  <span>
                    5.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text29">&lt;=</span>
                  <span> (less than or equal to)</span>
                  <br></br>
                  <span>
                    6.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text33">&gt;=</span>
                  <span> (greater than or equal to)</span>
                  <br></br>
                </span>
                <img
                  alt="pastedImage"
                  src="/external/expr-bool1-200h.png"
                  className="basic-py2d-pasted-image"
                />
                <span className="basic-py2d-text36">
                  <span>
                    Based on the source code above, we can see that a relational
                    operator is used for conditional statement to satisfy the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text38">
                    if
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>statement.</span>
                </span>
              </div>
              <div className="basic-py2d-container4">
                <h2 className="basic-py2d-text40">Boolean</h2>
                <span className="basic-py2d-text41">
                  <span>
                    There are
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text43">
                    three Boolean operators
                  </span>
                  <span> in Python:</span>
                  <br></br>
                  <br></br>
                  <span className="basic-py2d-text47">AND</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text49">OR</span>
                  <span>
                    , as well as
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2d-text51">
                    NOT
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>(negation)</span>
                  <br></br>
                  <br></br>
                  <span>It used </span>
                  <span className="basic-py2d-text56">
                    English word
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    to indicate the operator instead of using symbol character
                    like other programming languages.
                  </span>
                  <br></br>
                </span>
                <img
                  alt="pastedImage"
                  src="/external/expr-bool2-200h.png"
                  className="basic-py2d-pasted-image1"
                />
                <span className="basic-py2d-text59">
                  From the example given, Boolean operator can be used in lot of
                  ways to satisfy multiple conditional statements.
                </span>
              </div>
            </div>
            <span className="basic-py2d-text60">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py2d-text62">Muhammad Ariff Ridzlan</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py2d-reference">
        <h1 className="basic-py2d-text63">References</h1>
        <span className="basic-py2d-text64">
          <br></br>
          <span>
            Prabhu, T. N. (2020, June 5).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py2d-text67">
            Python Operators from Scratch!!! — A Beginner’s Guide
          </span>
          <span>. Medium.</span>
          <br></br>
          <span>
                     
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://Prabhu, T. N. (2020, June 5). Python Operators from Scratch!!! — A Beginner’s Guide. Medium. https://towardsdatascience.com/python-operators-from-scratch-a-beginners-guide-8471306f4278"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2d-link"
          >
            https://towardsdatascience.com/python-operators-from-scratch-a-beginners-guide-8471306f4278
          </a>
          <br></br>
          <br></br>
          <span>
            Datta, S. (2022, March 22).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py2d-text74">
            Python Operator – Logical Operators in Python
          </span>
          <span>. freeCodeCamp.org.</span>
          <br></br>
          <span>
                     
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://Datta, S. (2022, March 22). Python Operator – Logical Operators in Python. freeCodeCamp.org. Retrieved December 24, 2023, from https://www.freecodecamp.org/news/operators-in-python-how-to-use-logical-operators-in-python/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2d-link1"
          >
            https://www.freecodecamp.org/news/operators-in-python-how-to-use-logical-operators-in-python/
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py2d-footer">
        <div className="basic-py2d-container5">
          <Link to="/strace" className="basic-py2d-navlink8">
            STRACE
          </Link>
        </div>
        <span className="basic-py2d-text79">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py2d-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py2d-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy2d
