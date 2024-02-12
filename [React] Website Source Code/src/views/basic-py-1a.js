import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-1a.css'

const BasicPy1a = (props) => {
  return (
    <div className="basic-py1a-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py1a-banner">
        <div className="basic-py1a-main-content">
          <h1 className="basic-py1a-heading">NAMES AND BINDINGS</h1>
          <div className="basic-py1a-container1">
            <Link to="/basic-py-1a" className="basic-py1a-navlink button">
              Name
            </Link>
            <Link to="/basic-py-1b" className="basic-py1a-navlink1 button">
              Address, Value and Type
            </Link>
            <Link to="/basic-py-1c" className="basic-py1a-navlink2 button">
              The Concept of Binding
            </Link>
            <Link to="/basic-py-1d" className="basic-py1a-navlink3 button">
              Scope and Lifetime
            </Link>
            <Link to="/basic-py-1e" className="basic-py1a-navlink4 button">
              Referencing Environments
            </Link>
            <Link to="/basic-py-1f" className="basic-py1a-navlink5 button">
              Named Constants
            </Link>
          </div>
          <div className="basic-py1a-alia">
            <div className="basic-py1a-name">
              <div className="basic-py1a-length">
                <h1 className="basic-py1a-text">Name</h1>
                <strong className="basic-py1a-text01">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1a-text03">Length</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    The length of a variable name for Python can be any length
                    which means it is unlimited. However, it is a good practice
                    to keep variable names reasonably short, meaningful, and
                    descriptive for the sake of code readability.
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
                </strong>
                <div className="basic-py1a-container2">
                  <img
                    alt="image"
                    src="/external/screenshot%202023-12-23%20105803-300h-200h.png"
                    className="basic-py1a-image"
                  />
                  <img
                    alt="image"
                    src="/external/screenshot%202023-12-23%20105822-500h-300h.png"
                    className="basic-py1a-image1"
                  />
                </div>
              </div>
              <div className="basic-py1a-invalid-case-sensitive">
                <strong className="basic-py1a-text10">
                  Valid variable name:
                </strong>
                <img
                  alt="image"
                  src="/external/picture1-800w-800w.png"
                  className="basic-py1a-image2"
                />
                <strong className="basic-py1a-text11">
                  Invalid variable name:
                </strong>
                <img
                  alt="image"
                  src="/external/picture2-200h-200h.png"
                  className="basic-py1a-image3"
                />
                <strong className="basic-py1a-text12">
                  <span className="basic-py1a-text13">Case sensitivity</span>
                  <br></br>
                  <br></br>
                  <span>
                    Case and underscore character is significant where lowercase
                    and uppercase letters are not the same meaning.
                  </span>
                  <br></br>
                  <br></br>
                </strong>
                <img
                  alt="image"
                  src="/external/picture5-400h-400h.png"
                  className="basic-py1a-image4"
                />
              </div>
            </div>
            <div className="basic-py1a-special-word">
              <strong className="basic-py1a-text19">
                <span className="basic-py1a-text20">Special Words</span>
                <br></br>
                <br></br>
                <span>
                  In Python,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py1a-text24">
                  reserved words
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  are words that
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="basic-py1a-text26">
                  have special meanings
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
                <span className="basic-py1a-text28">
                  cannot be used as identifiers
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  (such as variable names, function names, or class names)
                  because they are part of the Python language&apos;s syntax.
                  While keywords, a subset of reserved words, are specific
                  identifiers that have predefined meanings in the language.
                </span>
                <br></br>
                <br></br>
                <span>
                  Note that using reserved words as variable names or
                  identifiers will result in a syntax error.
                </span>
                <br></br>
                <br></br>
              </strong>
              <div className="basic-py1a-image5">
                <img
                  alt="image"
                  src="/external/picture3-300h-300h.png"
                  className="basic-py1a-image6"
                />
                <svg viewBox="0 0 1024 1024" className="basic-py1a-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
                <img
                  alt="image"
                  src="/external/picture4-300h-300h.png"
                  className="basic-py1a-image7"
                />
              </div>
            </div>
            <span className="basic-py1a-text35">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1a-text37">Noor Alia Alisa</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py1a-reference">
        <h1 className="basic-py1a-text38">References</h1>
        <span className="basic-py1a-text39">
          <br className="basic-py1a-text40"></br>
          <span className="basic-py1a-text41">
            Barger, R. (2023, March 22).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1a-text42">
            Python Variables – The Complete Beginner’s Guide
          </span>
          <span className="basic-py1a-text43">. freeCodeCamp.org.</span>
          <br className="basic-py1a-text44"></br>
          <span className="basic-py1a-text45">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.freecodecamp.org/news/python-variables/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1a-link"
          >
            https://www.freecodecamp.org/news/python-variables/
          </a>
          <br className="basic-py1a-text46"></br>
          <br className="basic-py1a-text47"></br>
          <span className="basic-py1a-text48">
            Python Reserved Words List - Your Complete Guide.
          </span>
          <span> (n.d.). Flexiple.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://flexiple.com/python/python-reserved-words"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1a-link1"
          >
            https://flexiple.com/python/python-reserved-words
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py1a-footer">
        <div className="basic-py1a-container3">
          <Link to="/strace" className="basic-py1a-navlink6">
            STRACE
          </Link>
        </div>
        <span className="basic-py1a-text53">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py1a-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py1a-icon2"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy1a
