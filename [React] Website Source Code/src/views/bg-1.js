import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './bg-1.css'

const Bg1 = (props) => {
  return (
    <div className="bg1-container">
      <Helmet>
        <title>Strace | Background</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="bg1-banner">
        <div className="bg1-main-content">
          <h1 className="bg1-heading">ORIGIN OF PYTHON AND DJANGO</h1>
          <div className="bg1-num1-hafiz-punya">
            <div className="bg1-python">
              <div className="bg1-container1">
                <div className="bg1-container2">
                  <img
                    alt="image"
                    src="https://i.pinimg.com/564x/04/4f/72/044f7201f7b3c5fb1520c07ae3566988.jpg"
                    loading="eager"
                    className="bg1-image"
                  />
                  <span className="bg1-text">
                    <span className="bg1-text01">Python</span>
                    <span>
                      , whose name taken from BBC&apos;s Monty Python&apos;s
                      Flying Circus TV show started as a hobby project during
                      Christmas. It was created by
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="bg1-text03">
                      Guido van Rossum
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      at the Centrum Wiskunde &amp; Informatica (CWI) as a
                      successor to ABC with exception capabilities and
                      interfacing with the Amoeba OS which he help created.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Taking the syntax of ABC and some of its good features. He
                      created a good scripting language.
                    </span>
                  </span>
                </div>
              </div>
              <div className="bg1-container3">
                <img
                  alt="image"
                  src="https://aem.dropbox.com/cms/content/dam/dropbox/blog/files/2019/11/guido_hero.jpg"
                  loading="eager"
                  className="bg1-image1"
                />
                <span className="bg1-text08">
                  <span>The Creator of Pythom, Guido van Rossum, </span>
                  <span>Illustration</span>
                  <br></br>
                  <span>by </span>
                  <span>Fanny Luor | Image </span>
                  <span>
                    Source:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://blog.dropbox.com/topics/work-culture/-the-mind-at-work--guido-van-rossum-on-how-python-makes-thinking"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg1-link"
                  >
                    Dropbox Blog
                  </a>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="bg1-container4"></div>
            <div className="bg1-django">
              <div className="bg1-container5">
                <img
                  alt="image"
                  src="https://i.pinimg.com/564x/47/dd/d4/47ddd4f77693d99357d9bc2816d9b3cb.jpg"
                  loading="eager"
                  className="bg1-image2"
                />
                <span className="bg1-text16">
                  <span className="bg1-text17">
                    Django
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    stylised as Django is a free and open-source, high-level
                    Python-based web framework.
                  </span>
                  <br></br>
                  <br className="bg1-text20"></br>
                  <span>
                    Created in 2003 by
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg1-text22">
                    a group of web programmers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    responsible for creating and maintaining newspaper websites
                    at the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg1-text24">
                    Lawrence Journal-World
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>newspaper.</span>
                  <br></br>
                  <br className="bg1-text27"></br>
                  <span>
                    The web framework for perfectionists with deadlines. As the
                    Django&apos;s tagline suggests, the framework is built to be
                    more efficient so you can build your powerful websites
                    hassle-free.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="bg1-container6">
                <div className="bg1-container7">
                  <img
                    alt="image"
                    src="https://pbs.twimg.com/profile_images/643261843054555136/IK7URL7S_200x200.png"
                    loading="lazy"
                    className="bg1-image3"
                  />
                  <img
                    alt="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Simon_Willison_%282929211382%29_%28cropped%29.jpg"
                    loading="lazy"
                    className="bg1-image4"
                  />
                </div>
                <span className="bg1-text30">
                  <span>Adrian Holovaty and Simon Willison, </span>
                  <span>Django&apos;s</span>
                  <br></br>
                  <span>Creators </span>
                  <span>
                    | Image Source:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://twitter.com/adrianholovaty"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg1-link1"
                  >
                    X
                  </a>
                  <span>
                    {' '}
                    and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://en.wikipedia.org/wiki/Simon_Willison"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg1-link2"
                  >
                    Wikipedia
                  </a>
                </span>
              </div>
            </div>
            <span className="bg1-text37">
              Django was designed to encourage rapid development and clean,
              pragmatic design. Its primary goal is to ease the creation of
              complex, database-driven websites. The framework emphasizes
              reusability and &quot;pluggability&quot; of components, less code,
              low coupling, rapid development, and the principle of don&apos;t
              repeat yourself.
            </span>
            <span className="bg1-text38">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="bg1-text40">Muhammad Hafiz</span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg1-reference">
        <h1 className="bg1-text41">References</h1>
        <span className="bg1-text42">
          <br className="bg1-text43"></br>
          <span className="bg1-text44">
            Stieg, C. (2023, February 20).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg1-text45">
            When Was Python Created? History of Python Programming Language
          </span>
          <span className="bg1-text46">. Codecademy Blog.</span>
          <br className="bg1-text47"></br>
          <span className="bg1-text48">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://Stieg, C. (2023, February 20). When Was Python Created? History of Python Programming Language. Codecademy Blog. https://www.codecademy.com/resources/blog/history-of-python-coding-language/"
            target="_blank"
            rel="noreferrer noopener"
            className="bg1-link3"
          >
            https://www.codecademy.com/resources/blog/history-of-python-coding-language/
          </a>
          <br className="bg1-text49"></br>
          <br className="bg1-text50"></br>
          <span className="bg1-text51">
            Silva, P. A. (2023, June 8).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg1-text52">
            Understanding Django: A Journey Through Its History
          </span>
          <span className="bg1-text53">. Medium.</span>
          <br className="bg1-text54"></br>
          <span className="bg1-text55">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://Silva, P. A. (2023, June 8). Understanding Django: A Journey Through Its History. Medium. https://medium.com/@pedroanisio_80550/understanding-django-a-journey-through-its-history-23c8ce4350a3"
            target="_blank"
            rel="noreferrer noopener"
            className="bg1-link4"
          >
            https://medium.com/@pedroanisio_80550/understanding-django-a-journey-through-its-history-23c8ce4350a3
          </a>
          <br></br>
        </span>
      </div>
      <footer className="bg1-footer">
        <div className="bg1-container8">
          <Link to="/strace" className="bg1-navlink">
            STRACE
          </Link>
        </div>
        <span className="bg1-text57">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="bg1-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="bg1-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header rootClassName="header-root-class-name"></Header>
    </div>
  )
}

export default Bg1
