import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-4bi.css'

const BasicPy4bi = (props) => {
  return (
    <div className="basic-py4bi-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py4bi-banner">
        <div className="basic-py4bi-main-content">
          <h1 className="basic-py4bi-heading">SUBPROGRAMS</h1>
          <div className="basic-py4bi-container1">
            <Link to="/basic-py-4ai" className="basic-py4bi-navlink button">
              Fundamentals of Subprograms
            </Link>
            <Link to="/basic-py-4aii" className="basic-py4bi-navlink1 button">
              Local Referencing Environments
            </Link>
            <Link to="/basic-py-4bi" className="basic-py4bi-navlink2 button">
              Parameter-Passing Method
            </Link>
            <Link to="/basic-py-4bii" className="basic-py4bi-navlink3 button">
              Indirect Subprograms Calling
            </Link>
          </div>
          <div className="basic-py4bi-container2">
            <Link to="/basic-py-4biii" className="basic-py4bi-navlink4 button">
              Design Issues for Functions
            </Link>
            <Link to="/basic-py-4biv" className="basic-py4bi-navlink5 button">
              Overloaded and Generic Subprograms
            </Link>
            <Link to="/basic-py-4bv" className="basic-py4bi-navlink6 button">
              User-Defined Overloaded Operators
            </Link>
          </div>
          <div className="basic-py4bi-content-here">
            <div className="basic-py4bi-column">
              <h1 className="basic-py4bi-text">
                <span>Parameter-Passing Methods</span>
                <br></br>
              </h1>
              <div className="basic-py4bi-container3">
                <span className="basic-py4bi-text03">
                  <span>
                    Believe it or not, Python use a method called
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text05">
                    call-by-object-reference
                  </span>
                  <span>
                    {' '}
                    or
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text07">call-by-assignment</span>
                  <span>
                    {' '}
                    to pass the parameter into the function. The way it works is
                    quite similar to the pass-by-value and pass-by-reference,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text09">kind of</span>
                  <span>.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Based on the source code given, we
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text14">
                    pass
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    the actual parameter, x and y into the func1 function. Then,
                    the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text16">
                    value
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    of formal parameter
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text18">x</span>
                  <span>
                    {' '}
                    is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text20">incremented</span>
                  <span>
                    {' '}
                    by 1.2 and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text22">y</span>
                  <span>
                    &apos;s list is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text24">
                    appended
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>by adding another item.</span>
                  <br></br>
                  <br></br>
                  <span>
                    When we display the value of x and y after func1 executed,
                    we found that
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text29">
                    value of x is not changed
                  </span>
                  <span>
                    {' '}
                    while
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text31">value of y changed</span>
                  <span>. </span>
                  <span>
                    The reason is we
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text34">
                    declare a new object for x
                  </span>
                  <span> during the increment (</span>
                  <span className="basic-py4bi-text36">
                    i += 1.2 / i = i + 1.2
                  </span>
                  <span>
                    ). However, this is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4bi-text38">not applied to y</span>
                  <span>
                    {' '}
                    because we are appending the list to the reference of the
                    object.
                  </span>
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4b%20Subprogram_Ariff/ParameterPassingMethod.png?raw=true"
                  loading="eager"
                  className="basic-py4bi-image"
                />
              </div>
              <span className="basic-py4bi-text40">
                <span>
                  Additionally, we can see that the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text42">
                  unique identifier of x is different
                </span>
                <span>
                  {' '}
                  while
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text44">
                  unique identifier of y remain the same
                </span>
                <span>
                  . This implies that when func1 is created, Python use
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text46">stack-dynamic</span>
                <span>
                  {' '}
                  to allocate some memory to be used for that scope. When we
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text48">
                  assign the variable x
                </span>
                <span>
                  {' '}
                  with addition of 1.2,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text50">
                  new memory was allocated
                </span>
                <span>
                  {' '}
                  inside runtime-stack and this memory
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text52">will deallocated</span>
                <span>
                  {' '}
                  when exiting func1. For
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text54">variable y</span>
                <span>
                  , the memory only
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py4bi-text56">
                  hold the reference to the object
                </span>
                <span>
                  , which is the original variable declared outside of func1.   
                </span>
              </span>
            </div>
            <span className="basic-py4bi-text58">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py4bi-text60">Muhammad Ariff Ridzlan</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py4bi-reference">
        <h1 className="basic-py4bi-text61">References</h1>
        <span className="basic-py4bi-text62">
          <br className="basic-py4bi-text63"></br>
          <span className="basic-py4bi-text64">
            Dave, P. (2022, April 22).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py4bi-text65">
            Pass By Object Reference in Python
          </span>
          <span className="basic-py4bi-text66">. Medium.</span>
          <br className="basic-py4bi-text67"></br>
          <span className="basic-py4bi-text68">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://python.plainenglish.io/pass-by-object-reference-in-python-79a8d92dc493"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py4bi-link"
          >
            https://python.plainenglish.io/pass-by-object-reference-in-python-79a8d92dc493
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py4bi-footer">
        <div className="basic-py4bi-container4">
          <Link to="/strace" className="basic-py4bi-navlink7">
            STRACE
          </Link>
        </div>
        <span className="basic-py4bi-text70">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py4bi-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py4bi-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy4bi
