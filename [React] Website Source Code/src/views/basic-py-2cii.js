import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-2cii.css'

const BasicPy2cii = (props) => {
  return (
    <div className="basic-py2cii-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py2cii-banner">
        <div className="basic-py2cii-main-content">
          <h1 className="basic-py2cii-heading">EXPRESSIONS AND ASSIGNMENT</h1>
          <div className="basic-py2cii-container01">
            <Link to="/basic-py-2a" className="basic-py2cii-navlink button">
              Arithmetic Expressions
            </Link>
            <Link to="/basic-py-2b" className="basic-py2cii-navlink1 button">
              Functional Side Effects
            </Link>
            <Link to="/basic-py-2ci" className="basic-py2cii-navlink2 button">
              Overloaded Operators
            </Link>
            <Link to="/basic-py-2cii" className="basic-py2cii-navlink3 button">
              Type Conversions
            </Link>
          </div>
          <div className="basic-py2cii-container02">
            <Link to="/basic-py-2d" className="basic-py2cii-navlink4 button">
              Relational and Boolean Expressions
            </Link>
            <Link to="/basic-py-2e" className="basic-py2cii-navlink5 button">
              Short-Circuit Evaluation
            </Link>
            <Link to="/basic-py-2f" className="basic-py2cii-navlink6 button">
              Assignment Statements
            </Link>
            <Link to="/basic-py-2g" className="basic-py2cii-navlink7 button">
              Mixed-Mode Assignment
            </Link>
          </div>
          <div className="basic-py2cii-hapih">
            <h1 className="basic-py2cii-text">Type Conversions</h1>
            <span className="basic-py2cii-text01">
              There is two main ways type conversion occurs in Python, either
              you force Python to convert it to a specific datatype or Python
              itself does that during compilation. When it is forced, it is
              called Explicit Data Type Conversion otherwise it is called
              Implicit Data Type conversion.
            </span>
            <h1 className="basic-py2cii-text02">Implicit Type Conversion</h1>
            <div className="basic-py2cii-container03">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/2B67BBA4-C99B-42E3-8B62-AEBD9B71F56C.jpeg?raw=true"
                loading="eager"
                className="basic-py2cii-image"
              />
              <span className="basic-py2cii-text03">
                <span>
                  Example of Implicit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Data Type Conversion.</span>
                <br></br>
                <br></br>
                <span>
                  An effective feature of Python when integers a and b integers
                  are being divided
                </span>
                <br></br>
                <span>
                  {' '}
                  where Python compiler itself convert the result into a float
                  to prevent data loss.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
            <h1 className="basic-py2cii-text13">Explicit Type Conversion</h1>
            <div className="basic-py2cii-container04">
              <div className="basic-py2cii-container05">
                <div className="basic-py2cii-container06">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/79045C78-8811-41D7-A737-B489EC1ADCCC.jpeg?raw=true"
                    loading="eager"
                    className="basic-py2cii-image1"
                  />
                  <span className="basic-py2cii-text14">
                    <span>
                      Converting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2cii-text16">
                      Float to Integers
                    </span>
                    <br></br>
                    <span>The int() method converts floats to integers</span>
                    <br></br>
                  </span>
                </div>
                <div className="basic-py2cii-container07">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/C4D3809E-E34A-4C9D-9745-DB4E967E333D.jpeg?raw=true"
                    loading="eager"
                    className="basic-py2cii-image2"
                  />
                  <span className="basic-py2cii-text20">
                    <span>
                      Converting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2cii-text22">
                      Integers to Floats
                    </span>
                    <br></br>
                    <span>The float() method converts integers to floats</span>
                    <br></br>
                  </span>
                </div>
                <div className="basic-py2cii-container08">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/6FD3F89F-7646-47CA-AF71-958EFE622144.jpeg?raw=true"
                    loading="eager"
                    className="basic-py2cii-image3"
                  />
                  <span className="basic-py2cii-text26">
                    <span>
                      Converting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2cii-text28">
                      Numbers to Strings
                    </span>
                    <br></br>
                    <span>The str() method converts numbers to strings</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="basic-py2cii-container09">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/059D1768-5A68-414E-A0C7-9CADB20A35CD.jpeg?raw=true"
                  loading="eager"
                  className="basic-py2cii-image4"
                />
                <span className="basic-py2cii-text32">
                  <span>
                    Converting
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2cii-text34">
                    Strings to Numbers
                  </span>
                  <br></br>
                  <span>
                    The int() or float() method converts strings to number.
                  </span>
                  <br></br>
                  <span>
                    Do keep in mind that int() method won&apos;t convert a
                    string containing a decimal number in it, use float().
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="basic-py2cii-container10">
                <div className="basic-py2cii-container11">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/5F7824EB-564C-4367-A84F-5BFD61E025F0.jpeg?raw=true"
                    loading="eager"
                    className="basic-py2cii-image5"
                  />
                  <span className="basic-py2cii-text40">
                    <span>
                      Converting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2cii-text42">Tuples to Lists</span>
                    <br></br>
                    <span>The list() method converts tuples to lists.</span>
                    <br></br>
                    <span>
                      This will give you the ability to add, delete and update
                      elements.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="basic-py2cii-container12">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/0769FCF7-3411-40C0-B633-5CE40D58909E.jpeg?raw=true"
                    loading="eager"
                    className="basic-py2cii-image6"
                  />
                  <span className="basic-py2cii-text48">
                    <span>
                      Converting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py2cii-text50">Lists to Tuples</span>
                    <br></br>
                    <span>The tuple() method converts lists to tuples.</span>
                    <br></br>
                    <span>
                      Which can give a performance boost to your program.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="basic-py2cii-container13">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/A7ED468B-B6DB-4AEE-AE59-0EEE338704C2.jpeg?raw=true"
                  loading="eager"
                  className="basic-py2cii-image7"
                />
                <span className="basic-py2cii-text56">
                  <span>
                    Converting
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py2cii-text58">
                    Strings to Lists and Tuples
                  </span>
                  <br></br>
                  <span>
                    The list() and tuple() method converts strings to lists and
                    tuple.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <span className="basic-py2cii-text63">
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
          </div>
        </div>
      </div>
      <div className="basic-py2cii-reference">
        <h1 className="basic-py2cii-text66">References</h1>
        <span className="basic-py2cii-text67">
          <br className="basic-py2cii-text68"></br>
          <span className="basic-py2cii-text69">
            How To Convert Data Types in Python
          </span>
          <span className="basic-py2cii-text70">. (n.d.). Djangocentral.</span>
          <br className="basic-py2cii-text71"></br>
          <span className="basic-py2cii-text72">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://djangocentral.com/how-to-convert-data-types-in-python/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py2cii-link"
          >
            https://djangocentral.com/how-to-convert-data-types-in-python/
          </a>
        </span>
      </div>
      <footer className="basic-py2cii-footer">
        <div className="basic-py2cii-container14">
          <Link to="/strace" className="basic-py2cii-navlink8">
            STRACE
          </Link>
        </div>
        <span className="basic-py2cii-text73">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py2cii-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py2cii-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy2cii
