import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-4aii.css'

const BasicPy4aii = (props) => {
  return (
    <div className="basic-py4aii-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py4aii-banner">
        <div className="basic-py4aii-main-content">
          <h1 className="basic-py4aii-heading">SUBPROGRAMS</h1>
          <div className="basic-py4aii-container1">
            <Link to="/basic-py-4ai" className="basic-py4aii-navlink button">
              Fundamentals of Subprograms
            </Link>
            <Link to="/basic-py-4aii" className="basic-py4aii-navlink1 button">
              Local Referencing Environments
            </Link>
            <Link to="/basic-py-4bi" className="basic-py4aii-navlink2 button">
              Parameter-Passing Method
            </Link>
            <Link to="/basic-py-4bii" className="basic-py4aii-navlink3 button">
              Indirect Subprograms Calling
            </Link>
          </div>
          <div className="basic-py4aii-container2">
            <Link to="/basic-py-4biii" className="basic-py4aii-navlink4 button">
              Design Issues for Functions
            </Link>
            <Link to="/basic-py-4biv" className="basic-py4aii-navlink5 button">
              Overloaded and Generic Subprograms
            </Link>
            <Link to="/basic-py-4bv" className="basic-py4aii-navlink6 button">
              User-Defined Overloaded Operators
            </Link>
          </div>
          <div className="basic-py4aii-content-here">
            <div className="basic-py4aii-column">
              <h1 className="basic-py4aii-text">
                <span>Local Referencing Environments</span>
                <br></br>
              </h1>
              <div className="basic-py4aii-container3">
                <span className="basic-py4aii-text03">
                  <span>
                    Python uses
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text05">stack-dynamic</span>
                  <span>
                    {' '}
                    to handle the local variable when
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text07">initiating</span>
                  <span>
                    {' '}
                    and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text09">exiting</span>
                  <span> the functions and subprograms.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Whenever a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text14">
                    function is called
                  </span>
                  <span>
                    , Python will
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text16">allocate</span>
                  <span>
                    {' '}
                    some memory for the function by pushing a frame onto the
                    memory stack, allowing it to store local variable within
                    that scope.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    When
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text21">
                    exiting the function
                  </span>
                  <span>
                    , the memory will be
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text23">
                    deallocate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    automatically by popping out the value from the memory
                    stack. Thus, the local variable is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py4aii-text25">destroyed</span>
                  <span>.</span>
                </span>
                <div className="basic-py4aii-container4">
                  <div className="basic-py4aii-container5">
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4a%20Subprogram_Nabil/StackDynamic1.png?raw=true"
                      loading="eager"
                      className="basic-py4aii-image"
                    />
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4a%20Subprogram_Nabil/StackDynamic2.png?raw=true"
                      loading="eager"
                      className="basic-py4aii-image1"
                    />
                  </div>
                  <span className="basic-py4aii-text27">
                    Source code and illustration by me :D
                  </span>
                </div>
              </div>
            </div>
            <span className="basic-py4aii-text28">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py4aii-text30">
                Muhammad Ariff Ridzlan
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py4aii-reference">
        <h1 className="basic-py4aii-text31">References</h1>
        <span className="basic-py4aii-text32">
          <br className="basic-py4aii-text33"></br>
          <span className="basic-py4aii-text34">
            Mazza, S. (2023, October 21).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py4aii-text35">
            Dynamic Memory Allocation and the Function Call Stack: Python, C,
            and Rust
          </span>
          <span className="basic-py4aii-text36">
            . Medium.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="basic-py4aii-text37"></br>
          <span className="basic-py4aii-text38">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://medium.com/@saverio3107/dynamic-memory-allocation-and-the-function-call-stack-python-c-and-rust-31b14c89fe42"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py4aii-link"
          >
            https://medium.com/@saverio3107/dynamic-memory-allocation-and-the-function-call-stack-python-c-and-rust-31b14c89fe42
          </a>
          <br className="basic-py4aii-text39"></br>
          <br className="basic-py4aii-text40"></br>
          <span className="basic-py4aii-text41">
            Subprogram and its Characteristics
          </span>
          <span className="basic-py4aii-text42">
            . (2019, January 28). GeeksforGeeks.
          </span>
          <br className="basic-py4aii-text43"></br>
          <span className="basic-py4aii-text44">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.geeksforgeeks.org/subprogram-and-its-characteristics/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py4aii-link1"
          >
            https://www.geeksforgeeks.org/subprogram-and-its-characteristics/
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py4aii-footer">
        <div className="basic-py4aii-container6">
          <Link to="/strace" className="basic-py4aii-navlink7">
            STRACE
          </Link>
        </div>
        <span className="basic-py4aii-text46">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py4aii-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py4aii-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy4aii
