import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-3aii.css'

const BasicPy3aii = (props) => {
  return (
    <div className="basic-py3aii-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py3aii-banner">
        <div className="basic-py3aii-main-content">
          <h1 className="basic-py3aii-heading">CONTROL STRUCTURE</h1>
          <div className="basic-py3aii-container1">
            <Link to="/basic-py-3ai" className="basic-py3aii-navlink button">
              Selection Statement
            </Link>
            <Link to="/basic-py-3aii" className="basic-py3aii-navlink1 button">
              Two-way Selectors
            </Link>
            <Link to="/basic-py-3aiii" className="basic-py3aii-navlink2 button">
              Multiple-way Selectors
            </Link>
          </div>
          <div className="basic-py3aii-container2">
            <Link to="/basic-py-3bi" className="basic-py3aii-navlink3 button">
              Counter-Controlled Loops
            </Link>
            <Link to="/basic-py-3bii" className="basic-py3aii-navlink4 button">
              Logically-Controlled Loops
            </Link>
          </div>
          <div className="basic-py3aii-content-here">
            <div className="basic-py3aii-column">
              <h1 className="basic-py3aii-text">
                <span>a) Two-way selectors</span>
                <br></br>
              </h1>
              <div className="basic-py3aii-two-way-selectors">
                <div className="basic-py3aii-container3">
                  <div className="basic-py3aii-if">
                    <span className="basic-py3aii-text03">
                      <span className="basic-py3aii-text04">If statement</span>
                      <span>
                        : used to check the condition and then decide the
                        execution if the condition is True, the block of
                        statements is executed if False the block of statements
                        will be ignored. In short, if statements only check for
                        the True statements.
                      </span>
                    </span>
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if.png?raw=true"
                      loading="eager"
                      className="basic-py3aii-image"
                    />
                  </div>
                  <div className="basic-py3aii-if-else">
                    <span className="basic-py3aii-text06">
                      <span className="basic-py3aii-text07">
                        If-else statement
                      </span>
                      <span>
                        : used to test a condition and check the condition then
                        decide which block of statements to be executed.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        For example: if num = 7 % 2 = 0, the even statement will
                        be displayed otherwise odd statements will be displayed.
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if-else.png?raw=true"
                      loading="eager"
                      className="basic-py3aii-image1"
                    />
                  </div>
                </div>
                <div className="basic-py3aii-container4">
                  <div className="basic-py3aii-if-elif-else">
                    <span className="basic-py3aii-text14">
                      <span className="basic-py3aii-text15">if-elif-else</span>
                      <span>: used to test multiple conditions.</span>
                    </span>
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if-elif-else.png?raw=true"
                      loading="eager"
                      className="basic-py3aii-image2"
                    />
                  </div>
                  <div className="basic-py3aii-nested">
                    <span className="basic-py3aii-text17">
                      <span className="basic-py3aii-text18">Nested if</span>
                      <span>
                        : If the line else: were indented to begin in the same
                        column as the nested if, the else clause would be
                        matched with the inner if.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/nested_if.png?raw=true"
                      loading="eager"
                      className="basic-py3aii-image3"
                    />
                  </div>
                </div>
                <div className="basic-py3aii-clause-form">
                  <div className="basic-py3aii-container5">
                    <span className="basic-py3aii-text21">
                      <span className="basic-py3aii-text22">Clause Form</span>
                      <br></br>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="basic-py3aii-text26">
                      <br></br>
                      <span>
                        Python uses indentation to define clauses and the scope
                        in the code, unlike other programming languages that use
                        curly brackets ’&#123;&#125;’ to define the scope.
                        Indentation is important in Python to avoid errors
                        occurring while running the code especially when we use
                        if else, nested if, and if-elif else statements.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/indentation.png?raw=true"
                      loading="eager"
                      className="basic-py3aii-image4"
                    />
                  </div>
                  <div className="basic-py3aii-container6">
                    <span className="basic-py3aii-text30">OUTPUT:-</span>
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/output.png?raw=true"
                      loading="eager"
                      className="basic-py3aii-image5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="basic-py3aii-text31">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py3aii-text33">Noor Alia Alisa</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py3aii-reference">
        <h1 className="basic-py3aii-text34">References</h1>
        <span className="basic-py3aii-text35">
          <br className="basic-py3aii-text36"></br>
          <span className="basic-py3aii-text37">
            Switch Case in Python (Replacement)
          </span>
          <span className="basic-py3aii-text38">
            . (2017, October 29). GeeksforGeeks.
          </span>
          <br className="basic-py3aii-text39"></br>
          <span className="basic-py3aii-text40">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.geeksforgeeks.org/switch-case-in-python-replacement/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py3aii-link"
          >
            https://www.geeksforgeeks.org/switch-case-in-python-replacement/
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py3aii-footer">
        <div className="basic-py3aii-container7">
          <Link to="/strace" className="basic-py3aii-navlink5">
            STRACE
          </Link>
        </div>
        <span className="basic-py3aii-text42">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py3aii-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py3aii-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy3aii
