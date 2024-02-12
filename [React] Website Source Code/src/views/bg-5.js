import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './bg-5.css'

const Bg5 = (props) => {
  return (
    <div className="bg5-container">
      <Helmet>
        <title>Strace | Background</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="bg5-banner">
        <div className="bg5-main-content">
          <h1 className="bg5-heading">
            <span>IMPLEMENTATION OF</span>
            <br></br>
            <span>PYTHON IS HYBRID</span>
          </h1>
          <div className="bg5-num5">
            <div className="bg5-container1">
              <img
                alt="image"
                src="https://i.pinimg.com/564x/74/58/e2/7458e2f9ef2512a3220cf7937c743017.jpg"
                className="bg5-image"
              />
              <span className="bg5-text03">
                <span>
                  Many people said that the Python is a pure interpretation
                  language but this is actually not 100% true.
                </span>
                <br></br>
                <br></br>
                <span>
                  Before a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="bg5-text08">
                  Python script
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  can be run, it needs to be
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="bg5-text10">converted into bytecode</span>
                <span>
                  , an intermediate form. Increasing the execution speed is the
                  aim of this compilation phase. The bytecode is subsequently
                  executed by the Python Virtual Machine (PVM). This compilation
                  to bytecode process uses
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="bg5-text12">
                  Just-In-Time (JIT) compilation
                </span>
                <span>.</span>
                <br></br>
                <br></br>
                <span>
                  The Python interpreter typically executes each line of the
                  language. This increases the interactive nature of development
                  because you can test individual lines or blocks of code in an
                  interactive shell.
                </span>
                <br></br>
              </span>
              <div className="bg5-container2">
                <img
                  alt="image"
                  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*CZjfRXGXNphuUL67zbEDTw.png"
                  loading="eager"
                  className="bg5-image1"
                />
                <span className="bg5-text18">
                  <span>
                    Implementation of Python | Image Source:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://medium.com/swlh/understanding-python-implementations-53015a3698e5"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg5-link"
                  >
                    Medium
                  </a>
                </span>
              </div>
            </div>
            <span className="bg5-text20">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="bg5-text22">Muhammad Nabil Irfan</span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg5-reference">
        <h1 className="bg5-text23">References</h1>
        <span className="bg5-text24">
          <br></br>
          <span>
            Kochar, A. (2023, March 13).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg5-text27">
            Why Python is Interpreted Language?
          </span>
          <span> PrepBytes Blog.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.prepbytes.com/blog/python/why-python-is-interpreted-language/"
            target="_blank"
            rel="noreferrer noopener"
            className="bg5-link1"
          >
            https://www.prepbytes.com/blog/python/why-python-is-interpreted-language/
          </a>
          <a
            href="https://www.prepbytes.com/blog/python/why-python-is-interpreted-language/#:~:text=A5%3A%20Yes%2C%20Python%20code%20can,both%20interpreted%20and%20compiled%20characteristics. In-Text Citation: (2023)"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br className="bg5-text31"></br>
          </a>
          <a
            href="https://www.prepbytes.com/blog/python/why-python-is-interpreted-language/#:~:text=A5%3A%20Yes%2C%20Python%20code%20can,both%20interpreted%20and%20compiled%20characteristics. In-Text Citation: (2023)"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br className="bg5-text32"></br>
          </a>
          <span>
            Singh, S. (2020, July 21).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg5-text34">
            Understanding Python Implementations
          </span>
          <span>. Medium.</span>
          <br></br>
          <span>       </span>
          <span className="bg5-text38">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://Singh, S. (2020, July 21). Understanding Python Implementations. Medium. https://medium.com/swlh/understanding-python-implementations-53015a3698e5"
            target="_blank"
            rel="noreferrer noopener"
            className="bg5-link4"
          >
            https://medium.com/swlh/understanding-python-implementations-53015a3698e5
          </a>
          <br className="bg5-text39"></br>
          <br className="bg5-text40"></br>
          <span className="bg5-text41">
            Is Python interpreted, or compiled, or both?
          </span>
          <span> (2011, July 31). Stack Overflow.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://stackoverflow.com/questions/6889747/is-python-interpreted-or-compiled-or-both"
            target="_blank"
            rel="noreferrer noopener"
            className="bg5-link5"
          >
            https://stackoverflow.com/questions/6889747/is-python-interpreted-or-compiled-or-both
          </a>
          <a
            href="https://stackoverflow.com/questions/6889747/is-python-interpreted-or-compiled-or-both"
            target="_blank"
            rel="noreferrer noopener"
            className="bg5-link6"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </a>
          <br></br>
        </span>
      </div>
      <footer className="bg5-footer">
        <div className="bg5-container3">
          <Link to="/strace" className="bg5-navlink">
            STRACE
          </Link>
        </div>
        <span className="bg5-text46">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="bg5-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="bg5-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default Bg5
