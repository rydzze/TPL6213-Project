import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-1b.css'

const BasicPy1b = (props) => {
  return (
    <div className="basic-py1b-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py1b-banner">
        <div className="basic-py1b-main-content">
          <h1 className="basic-py1b-heading">NAMES AND BINDINGS</h1>
          <div className="basic-py1b-container1">
            <Link to="/basic-py-1a" className="basic-py1b-navlink button">
              Name
            </Link>
            <Link to="/basic-py-1b" className="basic-py1b-navlink1 button">
              Address, Value and Type
            </Link>
            <Link to="/basic-py-1c" className="basic-py1b-navlink2 button">
              The Concept of Binding
            </Link>
            <Link to="/basic-py-1d" className="basic-py1b-navlink3 button">
              Scope and Lifetime
            </Link>
            <Link to="/basic-py-1e" className="basic-py1b-navlink4 button">
              Referencing Environments
            </Link>
            <Link to="/basic-py-1f" className="basic-py1b-navlink5 button">
              Named Constants
            </Link>
          </div>
          <div className="basic-py1b-alia">
            <div className="basic-py1b-address">
              <div className="basic-py1b-container2">
                <h1 className="basic-py1b-text">Address</h1>
                <strong className="basic-py1b-text01">
                  <span>
                    Every variable in Python is assigned a unique memory address
                    when it is created. This address represents the specific
                    location in the computer&apos;s memory where the
                    variable&apos;s value is stored. 
                  </span>
                  <span>
                    We cannot directly manipulate memory addresses in Python
                    like we might in some lower-level languages, we can retrieve
                    the address of a variable using the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1b-text04">id() function</span>
                  <span>.</span>
                </strong>
              </div>
              <img
                alt="image"
                src="/external/screenshot%202023-12-21%20212503-300h-300h.png"
                className="basic-py1b-image"
              />
            </div>
            <div className="basic-py1b-value-type">
              <h1 className="basic-py1b-text06">Value + Type</h1>
              <div className="basic-py1b-container3">
                <div className="basic-py1b-container4">
                  <span className="basic-py1b-text07">
                    <span>   </span>
                    <span className="basic-py1b-text09">Value</span>
                    <br></br>
                    <br></br>
                    <span>- The</span>
                    <span className="basic-py1b-text13">
                      {' '}
                      actual data that the variable holds.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      - A variable is created the moment we first assign a value
                      to it
                    </span>
                    <br></br>
                    <br className="basic-py1b-text18"></br>
                    <span className="basic-py1b-text19">
                      -
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py1b-text20">A string</span>
                    <span className="basic-py1b-text21">
                      {' '}
                      can be declared by using single quotes or double
                    </span>
                    <br className="basic-py1b-text22"></br>
                    <span className="basic-py1b-text23">   quotes</span>
                    <span>
                      . Different from other languages where single quotes are
                    </span>
                    <br></br>
                    <span>   used for char data types.</span>
                    <br></br>
                    <br className="basic-py1b-text28"></br>
                    <span className="basic-py1b-text29">-</span>
                    <span className="basic-py1b-text30"> </span>
                    <span className="basic-py1b-text31">Boolean value</span>
                    <span className="basic-py1b-text32">
                       is case sensitive where we need to write in
                    </span>
                    <br className="basic-py1b-text33"></br>
                    <span className="basic-py1b-text34">
                         uppercase for ‘T’rue and ‘F’alse
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="basic-py1b-container5">
                  <span className="basic-py1b-text37">
                    <span>   </span>
                    <span className="basic-py1b-text39">Type</span>
                    <br></br>
                    <br></br>
                    <span>
                      - The
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py1b-text43">
                      data type determines the kind of values a variable can
                      store and
                    </span>
                    <br className="basic-py1b-text44"></br>
                    <span className="basic-py1b-text45">
                          the range of values of variables.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      - Python has built-in types by default like :         
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>     </span>
                    <span className="basic-py1b-text51">
                      &gt; Numeric types: int, float, complex           
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="basic-py1b-text52"></br>
                    <span className="basic-py1b-text53">
                            &gt; Text type: str           
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="basic-py1b-text54"></br>
                    <span className="basic-py1b-text55">
                            &gt; Boolean type: bool           
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="basic-py1b-text56"></br>
                    <span className="basic-py1b-text57">
                            &gt; Sequence types: list, tuple, range
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      - Python is
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py1b-text61">dynamically typed</span>
                    <span>, so we do not need to explicitly declare</span>
                    <br></br>
                    <span>   variable types.</span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>- Use</span>
                    <span className="basic-py1b-text69"> type(variable)</span>
                    <span> to check the type of a variable.</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <img
                alt="image"
                src="/external/screenshot%202023-12-21%20210159-300h-300h.png"
                className="basic-py1b-image1"
              />
            </div>
            <span className="basic-py1b-text73">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1b-text75">Noor Alia Alisa</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py1b-reference">
        <h1 className="basic-py1b-text76">References</h1>
        <span className="basic-py1b-text77">
          <br className="basic-py1b-text78"></br>
          <span className="basic-py1b-text79">
            Chris, K. (2022, February 16).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1b-text80">
            Python Print Type of Variable – How to Get Var Type
          </span>
          <span className="basic-py1b-text81">. freeCodeCamp.org.</span>
          <br className="basic-py1b-text82"></br>
          <span className="basic-py1b-text83">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1b-link"
          >
            https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/
          </a>
          <br className="basic-py1b-text84"></br>
          <br className="basic-py1b-text85"></br>
          <span className="basic-py1b-text86">
            Python Program to Find and Print Address of Variable
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1b-text87">
            {' '}
            (2021, August 28). GeeksforGeeks.
          </span>
          <br className="basic-py1b-text88"></br>
          <span className="basic-py1b-text89">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.geeksforgeeks.org/python-program-to-find-and-print-address-of-variable/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1b-link1"
          >
            https://www.geeksforgeeks.org/python-program-to-find-and-print-address-of-variable/
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py1b-footer">
        <div className="basic-py1b-container6">
          <Link to="/strace" className="basic-py1b-navlink6">
            STRACE
          </Link>
        </div>
        <span className="basic-py1b-text91">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py1b-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py1b-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy1b
