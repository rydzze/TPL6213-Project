import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sample-app-intro.css'

const SampleAppIntro = (props) => {
  return (
    <div className="sample-app-intro-container">
      <Helmet>
        <title>Strace | Sample Application</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="sample-app-intro-banner">
        <div className="sample-app-intro-main-content">
          <h1 className="sample-app-intro-heading">SAMPLE APPLICATION</h1>
          <div className="sample-app-intro-container1">
            <Link
              to="/sample-app-intro"
              className="sample-app-intro-navlink button"
            >
              Introduction
            </Link>
            <Link
              to="/sample-app-inventory"
              className="sample-app-intro-navlink1 button"
            >
              Inventory
            </Link>
            <Link
              to="/sample-app-purchases"
              className="sample-app-intro-navlink2 button"
            >
              Purchases
            </Link>
            <Link
              to="/sample-app-sales"
              className="sample-app-intro-navlink3 button"
            >
              Sales
            </Link>
            <Link
              to="/sample-app-suppliers"
              className="sample-app-intro-navlink4 button"
            >
              Suppliers
            </Link>
          </div>
          <div className="sample-app-intro-content-here">
            <div className="sample-app-intro-ims">
              <h1 className="sample-app-intro-text">
                <span>Inventory Management System</span>
                <br></br>
              </h1>
              <span className="sample-app-intro-text03">
                <span>
                  An inventory management system (IMS) constitutes a
                  comprehensive blend of hardware and software technologies
                  designed to meticulously monitor and oversee product
                  inventory, sales, and other critical production processes
                  within a business.
                </span>
                <br></br>
                <br></br>
                <span>
                  This sample application software component is created for the
                  requirements of a company. It can keep track of incoming and
                  outgoing stock with a dynamically rendered bill. Each supplier
                  is provided with a profile where they can see the history of
                  their transactions with the company.
                </span>
                <br></br>
                <br></br>
                <span>
                  The figure below provides the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sample-app-intro-text11">
                  list of features
                </span>
                <span> that are used in the sample IMS applications:-</span>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/1_about.png?raw=true"
                loading="eager"
                className="sample-app-intro-image"
              />
            </div>
            <div className="sample-app-intro-login">
              <h1 className="sample-app-intro-text13">
                <span>Login</span>
                <br></br>
              </h1>
              <div className="sample-app-intro-container2">
                <div className="sample-app-intro-container3">
                  <span className="sample-app-intro-text16">
                    Interface for login page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/0_adminLogin.png?raw=true"
                    loading="eager"
                    className="sample-app-intro-image1"
                  />
                  <span className="sample-app-intro-text17">
                    <span>
                      On the login page, users can see the field to fill in the
                      username and password to continue using the apps. The user
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text19">
                      must fulfill two conditions
                    </span>
                    <span>
                      {' '}
                      in order to successfully login into the apps.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text24">
                      first condition
                    </span>
                    <span>
                      {' '}
                      is the user
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text26">
                      must fill in both fields
                    </span>
                    <span>
                      {' '}
                      to avoid a message error like the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text28">
                      “Please fill in the field”
                    </span>
                    <span>
                      {' '}
                      display on their screen. After the user passes the first
                      condition, the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text30">
                      second condition
                    </span>
                    <span>
                      {' '}
                      is that the user
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text32">
                      must fill in the username and password with the “admin”
                      word
                    </span>
                    <span>
                      {' '}
                      since the system already set the word as constant.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-intro-text34">
                      If the user enters other than that the app will pop up an
                      error stating &quot;Please enter a correct username and
                      password. Note that both fields may be
                      case-sensitive.&quot;
                    </span>
                    <br className="sample-app-intro-text35"></br>
                    <br></br>
                    <span className="sample-app-intro-text37">
                      If the user cannot pass the two conditions mentioned
                      above, the apps will remain in the login page until the
                      user enters the correct username and password. Or else the
                      apps will go to the home page.
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div className="sample-app-intro-container4">
                  <span className="sample-app-intro-text40">
                    <span className="sample-app-intro-text41">
                      Flowchart for login page
                    </span>
                    <span> </span>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/Intro.png?raw=true"
                    loading="eager"
                    className="sample-app-intro-image2"
                  />
                </div>
              </div>
            </div>
            <div className="sample-app-intro-column">
              <h1 className="sample-app-intro-text43">
                <span>Home</span>
                <br></br>
              </h1>
              <span className="sample-app-intro-text46">
                <span>
                  The figure below is the interface for the home page, which
                  will be
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sample-app-intro-text48">
                  displayed after the user successfully login the apps
                </span>
                <span>
                  . On the home page, it will show
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sample-app-intro-text50">
                  statistics of the stock in inventory and also the details of
                  recent incoming and outgoing stock.
                </span>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/1_home.png?raw=true"
                loading="eager"
                className="sample-app-intro-image3"
              />
            </div>
            <span className="sample-app-intro-text51">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-intro-text53">Noor Alia Alisa</span>
            </span>
          </div>
        </div>
      </div>
      <footer className="sample-app-intro-footer">
        <div className="sample-app-intro-container5">
          <Link to="/strace" className="sample-app-intro-navlink5">
            STRACE
          </Link>
        </div>
        <span className="sample-app-intro-text54">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="sample-app-intro-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="sample-app-intro-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default SampleAppIntro
