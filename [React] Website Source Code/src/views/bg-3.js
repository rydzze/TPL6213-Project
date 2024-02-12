import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './bg-3.css'

const Bg3 = (props) => {
  return (
    <div className="bg3-container">
      <Helmet>
        <title>Strace | Background</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="bg3-banner">
        <div className="bg3-main-content">
          <h1 className="bg3-heading">PYTHON AND DJANGO CAN BE EVERYWHERE</h1>
          <div className="bg3-num3-piz-punya">
            <div className="bg3-container01">
              <div className="bg3-container02">
                <h1 className="bg3-text">
                  <span className="bg3-text01">
                    Believe it or not,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text02">Python</span>
                  <span className="bg3-text03"> (</span>
                  <span className="bg3-text04">especially</span>
                  <span className="bg3-text05">
                    ) and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text06">
                    Django
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text07">
                    are used in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text08">many programming domains.</span>
                  <br className="bg3-text09"></br>
                </h1>
                <span className="bg3-text10">
                  <span>
                    Python and Django framework is very reliable as it was the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text12">
                    backbone
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    for some of the most used applications out there. You might
                    be suprised! Some of the applications created using Python
                    and Django could be something that you used daily.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Let&apos;s take a look at some of the example of the
                    programming domains first.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="https://i.pinimg.com/564x/19/cb/58/19cb586efd110d935c935d1fe3dd3448.jpg"
                className="bg3-image"
              />
            </div>
            <div className="bg3-container03">
              <div className="bg3-container04">
                <span className="bg3-text18">Data Science</span>
                <span className="bg3-text19">
                  <span>
                    Python can help the data scientist to do some
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text21">
                    scientific calculations
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    with third-party packages such as Sci-Kit, NumPy, and SciPi.
                    With these packages, it enhances the performance to analyse
                    big dataset and shorten the time.
                  </span>
                </span>
              </div>
              <div className="bg3-container05">
                <span className="bg3-text23">AI &amp; ML</span>
                <span className="bg3-text24">
                  <span>
                    Since Python can be used for scientific calculations, it
                    also can handle the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text26">
                    development of AI and Machine Learning
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    using its pre-built library. For example, pyDatalog,
                    SimpleAI, and EasyAI.  
                  </span>
                </span>
              </div>
              <div className="bg3-container06">
                <span className="bg3-text28">Web Development</span>
                <span className="bg3-text29">
                  <span>
                    The integration of Python and Django able to create a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text31">
                    website application
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    for public uses. The framework, Django, simplified the
                    typical backend logic thus reducing the developers&apos;
                    workload.
                  </span>
                </span>
              </div>
              <div className="bg3-container07">
                <span className="bg3-text33">Audio/Video Apps</span>
                <span className="bg3-text34">
                  <span>
                    Yes, you heard me right. Python and Django also can create a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="bg3-text36">
                    media streaming application
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    since the Python&apos;s libraries supported it with the
                    functionality of high-level.
                  </span>
                </span>
              </div>
            </div>
            <div className="bg3-container08">
              <span className="bg3-text38">
                <span>
                  To name a few, Instagram created in 2010 by American computer
                  programmer
                </span>
                <br></br>
                <span>
                  Kevin Systrom and Mike Krieger, and Spotify created in 2006 by
                  Swedish
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>entrepreuner Daniel Ek and Martin Lorentzon.</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/med_IGLogo.png?raw=true"
                loading="eager"
                className="bg3-image1"
              />
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/med_SpotifyLogo.png?raw=true"
                loading="eager"
                className="bg3-image2"
              />
            </div>
            <div className="bg3-container09">
              <span className="bg3-text45">
                <span>
                  Now we&apos;ll go to the final bosses. Leading streaming
                  platform,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  Youtube believe it or not created using Python Django.
                </span>
                <br></br>
                <span>Created by Steve Chen, Chad Hurley, and Jawed Karim</span>
                <br></br>
                <span>
                  in 2005 later acquired by Google in 2006 is the leading
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>streaming platform, second after Google Search</span>
                <br></br>
                <span> on most visited website in the world.</span>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/med_YouTube_Logo.webp"
                loading="eager"
                className="bg3-image3"
              />
            </div>
            <div className="bg3-container10">
              <span className="bg3-text57">
                <span>
                  The most visited website in the world, Google Search is a
                  search engine provided and operated by Google. Handling more
                  than 3.5 billion searches per day, it has a 92% share of the
                  global search engine market is also created using Python
                  Django.
                </span>
                <br></br>
              </span>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/1%20-%20Background%20of%20Language%20and%20Framework/med_Google_logo.png"
                loading="eager"
                className="bg3-image4"
              />
            </div>
            <span className="bg3-text60">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="bg3-text62">Muhammad Hafiz</span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg3-reference">
        <h1 className="bg3-text63">References</h1>
        <span className="bg3-text64">
          <br className="bg3-text65"></br>
          <span className="bg3-text66">
            Oberoi, A. (2020, February 26).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg3-text67">
            7 Application Areas of Python Programming Language
          </span>
          <span className="bg3-text68">. daffodil.</span>
          <br className="bg3-text69"></br>
          <span className="bg3-text70">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://insights.daffodilsw.com/blog/7-application-areas-of-python-programming-language"
            target="_blank"
            rel="noreferrer noopener"
            className="bg3-link"
          >
            https://insights.daffodilsw.com/blog/7-application-areas-of-python-programming-language
          </a>
          <br></br>
        </span>
      </div>
      <footer className="bg3-footer">
        <div className="bg3-container11">
          <Link to="/strace" className="bg3-navlink">
            STRACE
          </Link>
        </div>
        <span className="bg3-text72">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="bg3-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="bg3-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default Bg3
