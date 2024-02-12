import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './bg-4.css'

const Bg4 = (props) => {
  return (
    <div className="bg4-container">
      <Helmet>
        <title>Strace | Background</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="bg4-banner">
        <div className="bg4-main-content">
          <h1 className="bg4-heading">
            <span>POPULARITY OF PYTHON</span>
            <br></br>
            <span>AND DJANGO</span>
          </h1>
          <div className="bg4-num4">
            <div className="bg4-container1">
              <div className="bg4-container2">
                <span className="bg4-text03">
                  <span className="bg4-text04">Python</span>
                  <span>
                    {' '}
                    is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text06">
                    currently
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text08">
                    popular programming language
                  </span>
                  <span>
                    . It consistently ranks among the top 5 most popular
                    languages in various surveys and indexes. It is widely used
                    in various domains such as web development, data science,
                    artificial intelligence, machine learning, and scientific
                    computing. Apart from that,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text10">
                    Django
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    which is the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text12">
                    framework
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text13">for Python</span>
                  <span className="bg4-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    also
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text16">
                    popular
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    because it shows that they consistently ranked among the top
                    10 most popular web frameworks according to the Stack
                    Overflow survey. Here are some statistics that demonstrate
                    Python and Django popularity:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <img
                alt="image"
                src="https://sg-res.9appsdownloading.com/sg/res/jpg/43/85/17c35def601bb8e63b432b017e50-4yv.jpg?x-oss-process=style/mq200"
                className="bg4-image"
              />
            </div>
            <div className="bg4-python-stat">
              <div className="bg4-figure-11">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/alia_ieee-spectrum.png?raw=true"
                  loading="eager"
                  className="bg4-image1"
                />
                <a
                  href="https://spectrum.ieee.org/the-top-programming-languages-2023"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg4-link"
                >
                  <span>Top 10 Programming Languages |</span>
                  <br></br>
                  <span>
                    Image Source:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text21">IEEE Spectrum</span>
                </a>
                <span className="bg4-text22">
                  Figure 1.1 indicates the top 10 programming languages from the
                  IEEE Spectrum website where this ranking was created by
                  combining metrics from eight sources: CareerBuilder, GitHub,
                  Google, Hacker News, IEEE, Reddit, Stack Overflow, and
                  Twitter.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="bg4-figure-12">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/alia_pyplindex.png?raw=true"
                  loading="eager"
                  className="bg4-image2"
                />
                <span className="bg4-text23">
                  <span>Top 10 Programming Languages |</span>
                  <br></br>
                  <span>Image Source: </span>
                  <a
                    href="https://pypl.github.io/PYPL.html"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg4-link1"
                  >
                    PYPL index
                  </a>
                </span>
                <span className="bg4-text27">
                  Figure 1.2 indicates the top 10 programming languages from the
                  PYPL index website where this source is created by analyzing
                  how often language tutorials are searched on Google. The more
                  a language tutorial is searched, the more popular the language
                  is assumed to be. It is a leading indicator. The raw data
                  comes from Google Trends.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="bg4-figure-13">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/alia_python-stackoverflow.png?raw=true"
                  loading="eager"
                  className="bg4-image3"
                />
                <span className="bg4-text28">
                  <span>Top 10 Programming Languages | Image</span>
                  <br></br>
                  <span>Source: </span>
                  <span className="bg4-text32">
                    StackOverflow Developer Survey
                  </span>
                </span>
                <span className="bg4-text33">
                  Figure 1.3 indicates the top 10 programming languages from the
                  Stack Overflow Developer website where their ranking includes
                  programming, scripting, and markup languages. It makes Python
                  the top 3 under JavaScript and HTML/CSS.
                </span>
              </div>
            </div>
            <div className="bg4-figure-14">
              <div className="bg4-container3">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/alia_django-stackoverflow.png?raw=true"
                  loading="eager"
                  className="bg4-image4"
                />
                <span className="bg4-text34">
                  <span>Top 10 Web Frameworks | Image Source:</span>
                  <a
                    href="https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <br></br>
                  </a>
                  <a
                    href="https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg4-link3"
                  >
                    StackOverflow Developer Survey
                  </a>
                </span>
              </div>
              <div className="bg4-container4">
                <span className="bg4-text37">
                  <span>
                    Figure 1.4 indicates that Django is a popular Python web
                    framework.
                  </span>
                  <br></br>
                  <br></br>
                  <span className="bg4-text41">
                    Python&apos;s popularity
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    can be
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg4-text43">
                    attributed to its frameworks
                  </span>
                  <span>
                    . There are numerous Python frameworks available depending
                    on what we want to build. Two web development frameworks are
                    available: Django, which is more robust and designed with
                    microservices in mind, and Flask, which is very light and
                    perfect for simple applications.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <div className="bg4-container5">
                  <span className="bg4-text46">
                    <br></br>
                    <span>
                      Python&apos;s popularity is also incredibly strong because
                      of its use in web development. Although there&apos;s no
                      denying that JavaScript is the most widely used language
                      on the internet,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="bg4-text49">
                      Python is also a popular option because of frameworks
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      like Django and Flask for both frontend and backend
                      applications.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Python is
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="bg4-text54">
                      becoming more and more popular
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      due to its use in these software development fields, which
                      also makes it one of the most in-demand skills. Python is
                      also one of the highest-paid languages. As per a Stack
                      Overflow survey, Python developers earn an average salary
                      of US$120k annually in the US, making them the tenth
                      highest-paid group globally.
                    </span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i.pinimg.com/564x/8f/81/53/8f815329bd58bac86444de1b510cc3ff.jpg"
                    className="bg4-image5"
                  />
                </div>
              </div>
            </div>
            <span className="bg4-text57">
              However, don&apos;t be duped by Python and SQL&apos;s rankings:
              We&apos;re still a long way from having a monoculture in
              programming. In terms of combined popularity, Java and the various
              C-like languages outperform Python, particularly for
              high-performance or resource-sensitive tasks where Python&apos;s
              interpreter overhead is still too expensive (though there are
              several efforts to make Python more competitive on that front).
              Additionally, some software ecologies resist being incorporated
              into Python for different reasons.
            </span>
            <span className="bg4-text58">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Noor Alia Alisa</span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg4-reference">
        <h1 className="bg4-text61">References</h1>
        <span className="bg4-text62">
          <br></br>
          <span>
            Cass, S. (2023, August 29).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg4-text65">The Top Programming Languages 2023</span>
          <span>. IEEE Spectrum.</span>
          <br></br>
          <span>
                     
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://spectrum.ieee.org/the-top-programming-languages-2023"
            target="_blank"
            rel="noreferrer noopener"
            className="bg4-link4"
          >
            https://spectrum.ieee.org/the-top-programming-languages-2023
          </a>
          <br></br>
          <br></br>
          <span>
            Carbonnelle, P. (2023, December).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg4-text72">
            PYPL PopularitY of Programming Language index
          </span>
          <span>. GitHub Pages.</span>
          <br></br>
          <span>          </span>
          <a
            href="https://pypl.github.io/PYPL.html"
            target="_blank"
            rel="noreferrer noopener"
            className="bg4-link5"
          >
            https://pypl.github.io/PYPL.html
          </a>
          <br className="bg4-text76"></br>
          <br className="bg4-text77"></br>
          <span className="bg4-text78">
            Stack Overflow Developer Survey 2021
          </span>
          <span>. (2021). Stack Overflow.</span>
          <br></br>
          <span>          </span>
          <a
            href="https://insights.stackoverflow.com/survey/2021"
            target="_blank"
            rel="noreferrer noopener"
            className="bg4-link6"
          >
            https://insights.stackoverflow.com/survey/2021
          </a>
          <br></br>
        </span>
      </div>
      <footer className="bg4-footer">
        <div className="bg4-container6">
          <Link to="/strace" className="bg4-navlink">
            STRACE
          </Link>
        </div>
        <span className="bg4-text83">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="bg4-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="bg4-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default Bg4
