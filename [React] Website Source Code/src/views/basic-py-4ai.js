import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-4ai.css'

const BasicPy4ai = (props) => {
  return (
    <div className="basic-py4ai-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py4ai-banner">
        <div className="basic-py4ai-main-content">
          <h1 className="basic-py4ai-heading">SUBPROGRAMS</h1>
          <div className="basic-py4ai-container1">
            <Link to="/basic-py-4ai" className="basic-py4ai-navlink button">
              Fundamentals of Subprograms
            </Link>
            <Link to="/basic-py-4aii" className="basic-py4ai-navlink1 button">
              Local Referencing Environments
            </Link>
            <Link to="/basic-py-4bi" className="basic-py4ai-navlink2 button">
              Parameter-Passing Method
            </Link>
            <Link to="/basic-py-4bii" className="basic-py4ai-navlink3 button">
              Indirect Subprograms Calling
            </Link>
          </div>
          <div className="basic-py4ai-container2">
            <Link to="/basic-py-4biii" className="basic-py4ai-navlink4 button">
              Design Issues for Functions
            </Link>
            <Link to="/basic-py-4biv" className="basic-py4ai-navlink5 button">
              Overloaded and Generic Subprograms
            </Link>
            <Link to="/basic-py-4bv" className="basic-py4ai-navlink6 button">
              User-Defined Overloaded Operators
            </Link>
          </div>
          <div className="basic-py4ai-content-here">
            <div className="basic-py4ai-column">
              <h1 className="basic-py4ai-text">
                <span>Fundamentals of Subprograms</span>
                <br></br>
              </h1>
              <div className="basic-py4ai-container3">
                <span className="basic-py4ai-text03">
                  <span className="basic-py4ai-text04">
                    Function in Python works just like any other programming
                    languages and it
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text05">
                    has the same properties
                  </span>
                  <span className="basic-py4ai-text06">
                    {' '}
                    but
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text07">
                    different in syntax
                  </span>
                  <span className="basic-py4ai-text08">
                    {' '}
                    or the way you declare the function.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We have to type
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text12">def</span>
                  <span className="basic-py4ai-text13"> keyword</span>
                  <span>
                    {' '}
                    (define) first when declaring a function/subprogram. After
                    that, we
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text15">give it a name</span>
                  <span>
                    {' '}
                    and also
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text17">arguments to pass</span>
                  <span>
                    . The
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text19">
                    function body has to be indented
                  </span>
                  <span>
                    {' '}
                    to show the compiler that its belong to the function.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Lasty, we can
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text24">return any values</span>
                  <span>
                    {' '}
                    from the function but it is an
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4ai-text26">optional</span>
                  <span>
                    {' '}
                    step. If the function did not have a return, it is a void
                    function.
                  </span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4a%20Subprogram_Nabil/Function1.png?raw=true"
                  loading="eager"
                  className="basic-py4ai-image"
                />
              </div>
              <div className="basic-py4ai-container4">
                <div className="basic-py4ai-container5">
                  <span className="basic-py4ai-text29">
                    Arbitrary Arguments (*args)
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4a%20Subprogram_Nabil/Function2.png?raw=true"
                    loading="eager"
                    className="basic-py4ai-image1"
                  />
                  <span className="basic-py4ai-text30">
                    <span>
                      We can
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py4ai-text32">
                      pass more than one argument
                    </span>
                    <span>
                      {' '}
                      into the function with only one formal parameter inside
                      the function header
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py4ai-text34">
                      by adding asterisk &apos;*&apos; infront
                    </span>
                    <span>
                      {' '}
                      of the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py4ai-text36">
                      formal parameter&apos;s name
                    </span>
                    <span>
                      {' '}
                      and the function will receives the value in tuple/list
                      type.
                    </span>
                  </span>
                </div>
                <div className="basic-py4ai-container6">
                  <span className="basic-py4ai-text38">
                    Arbitrary Keyword Arguments (**kwargs)
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4a%20Subprogram_Nabil/Function3.png?raw=true"
                    loading="eager"
                    className="basic-py4ai-image2"
                  />
                  <span className="basic-py4ai-text39">
                    <span>
                      Besides that, we also can
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py4ai-text41">
                      pass more than one argument
                    </span>
                    <span>
                      {' '}
                      into the function
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py4ai-text43">
                      by adding two asterisks &apos;**&apos;
                    </span>
                    <span>
                      {' '}
                      infront of the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py4ai-text45">
                      formal parameter&apos;s name
                    </span>
                    <span>
                      {' '}
                      and the function will receives the value in dictionary
                      type.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <span className="basic-py4ai-text47">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py4ai-text49">Muhammad Ariff Ridzlan</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py4ai-reference">
        <h1 className="basic-py4ai-text50">References</h1>
        <span className="basic-py4ai-text51">
          <br></br>
          <span className="basic-py4ai-text53">Python Functions</span>
          <span>. (n.d.). W3Schools Online Web Tutorials.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.w3schools.com/python/python_functions.asp"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py4ai-link"
          >
            https://www.w3schools.com/python/python_functions.asp
          </a>
        </span>
      </div>
      <footer className="basic-py4ai-footer">
        <div className="basic-py4ai-container7">
          <Link to="/strace" className="basic-py4ai-navlink7">
            STRACE
          </Link>
        </div>
        <span className="basic-py4ai-text57">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py4ai-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py4ai-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy4ai
