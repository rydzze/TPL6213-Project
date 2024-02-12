import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-1e.css'

const BasicPy1e = (props) => {
  return (
    <div className="basic-py1e-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py1e-banner">
        <div className="basic-py1e-main-content">
          <h1 className="basic-py1e-heading">NAMES AND BINDINGS</h1>
          <div className="basic-py1e-container1">
            <Link to="/basic-py-1a" className="basic-py1e-navlink button">
              Name
            </Link>
            <Link to="/basic-py-1b" className="basic-py1e-navlink1 button">
              Address, Value and Type
            </Link>
            <Link to="/basic-py-1c" className="basic-py1e-navlink2 button">
              The Concept of Binding
            </Link>
            <Link to="/basic-py-1d" className="basic-py1e-navlink3 button">
              Scope and Lifetime
            </Link>
            <Link to="/basic-py-1e" className="basic-py1e-navlink4 button">
              Referencing Environments
            </Link>
            <Link to="/basic-py-1f" className="basic-py1e-navlink5 button">
              Named Constants
            </Link>
          </div>
          <div className="basic-py1e-nabil">
            <div className="basic-py1e-row">
              <div className="basic-py1e-column">
                <div className="basic-py1e-container2">
                  <h1 className="basic-py1e-text">Referencing Environments</h1>
                  <span className="basic-py1e-text01">
                    <span className="basic-py1e-text02">
                      Python uses
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py1e-text03">static scoping</span>
                    <span className="basic-py1e-text04">
                      . This means the scope of a variable, where it can be
                      accessed, is
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="basic-py1e-text05">
                      determined at compile time
                    </span>
                    <span className="basic-py1e-text06">
                      {' '}
                      based on the structure of the code, not on the call stack
                      at runtime. So, the referencing environment in python is
                      the local variables plus all of the visible variables in
                      all of the enclosing scopes.
                    </span>
                    <br className="basic-py1e-text07"></br>
                    <br></br>
                  </span>
                  <span className="basic-py1e-text09">
                    <span>example:</span>
                    <br></br>
                    <span>
                                     1.main function:visible variables c and d
                    </span>
                    <br></br>
                    <span>
                                                               no hidden
                      variables
                    </span>
                    <br></br>
                    <span>
                                     2.sub 2             : b and c is visibles
                    </span>
                    <br></br>
                    <span>
                                                               a (sub 1) and d
                      (main) hidden
                    </span>
                    <br></br>
                    <span>
                                     3.sub 1             : a and b hidden
                    </span>
                    <br></br>
                    <span>
                                                               c (sub 2) and d
                      (main) visibles
                    </span>
                    <br></br>
                    <span>                                       </span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/1b%20Names%20and%20Bindings/outputReferencingEnv.jpg?raw=true"
                    loading="eager"
                    className="basic-py1e-image"
                  />
                </div>
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2b%20Expressions%20and%20Assignment/Screenshot%202024-01-04%20175136.png"
                  className="basic-py1e-image1"
                />
              </div>
            </div>
            <span className="basic-py1e-text30">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1e-text32">Muhammad Nabil Irfan</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py1e-reference">
        <h1 className="basic-py1e-text33">References</h1>
        <span className="basic-py1e-texts">
          <br className="basic-py1e-text34"></br>
          <span className="basic-py1e-text35">
            What are Python Variables, Python Constants and Literals? |
            Definition.
          </span>
          <span> (2021, June 29). Toppr-guides.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.toppr.com/guides/python/python-introduction/variables-constants-literals/python-variables-constants-and-literals/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1e-link"
          >
            https://www.toppr.com/guides/python/python-introduction/variables-constants-literals/python-variables-constants-and-literals/
          </a>
          <br></br>
          <br className="basic-py1e-text40"></br>
          <span className="basic-py1e-text41">Static and Dynamic Scoping</span>
          <span>. (2017, October 20). GeeksforGeeks.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.geeksforgeeks.org/static-and-dynamic-scoping/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1e-link1"
          >
            https://www.geeksforgeeks.org/static-and-dynamic-scoping/
          </a>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <footer className="basic-py1e-footer">
        <div className="basic-py1e-container3">
          <Link to="/strace" className="basic-py1e-navlink6">
            STRACE
          </Link>
        </div>
        <span className="basic-py1e-text46">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py1e-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py1e-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy1e
