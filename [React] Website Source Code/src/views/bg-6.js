import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './bg-6.css'

const Bg6 = (props) => {
  return (
    <div className="bg6-container">
      <Helmet>
        <title>Strace | Background</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="bg6-banner">
        <div className="bg6-main-content">
          <h1 className="bg6-heading">
            Programming Environment for Python and Django
          </h1>
          <div className="bg6-container1">
            <span className="bg6-text">
              <span>
                There are several Integrated Development Environments (IDEs) for
                Python, and the best one for you depends on your preferences and
                requirements.
              </span>
              <br></br>
              <span> </span>
              <br></br>
              <br></br>
            </span>
            <img
              alt="image"
              src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/stickthing/sticker_28.png?afb1beab15bc92190c4fa8ec58960f76&amp;d=200x200"
              loading="eager"
              className="bg6-image"
            />
          </div>
          <div className="bg6-container2">
            <div className="bg6-py-charm">
              <h1 className="bg6-text06">
                <span className="bg6-text07">1. PyCharm</span>
                <br></br>
              </h1>
              <img
                alt="pastedImage"
                src="https://storage.caktusgroup.com/media/blog-images/logo.png"
                className="bg6-pasted-image"
              />
              <span className="bg6-text09">
                <span>
                  Developed by JetBrains, PyCharm is a powerful and feature-rich
                  IDE for Python development.
                </span>
                <br></br>
                <br></br>
                <span>
                  It provides smart code completion, code analysis, a powerful
                  debugger, and integrated testing support.
                </span>
                <br></br>
                <br></br>
                <span>
                  PyCharm is available in both a free, open-source community
                  edition and a paid professional edition with additional
                  features.
                </span>
              </span>
            </div>
            <div className="bg6-idle">
              <h1 className="bg6-text17">2. IDLE</h1>
              <img
                alt="pastedImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                loading="eager"
                className="bg6-pasted-image1"
              />
              <span className="bg6-text18">
                <span>
                  TextKey Features: Simple and lightweight with an interactive
                  shell, basic code editor, debugger, and integrated help.
                  Particularly suitable for beginners and small projects.
                </span>
                <br></br>
                <br></br>
                <span>
                  Bundled with Python: IDLE comes bundled with the standard
                  Python distribution, making it readily available without the
                  need for additional installations.
                </span>
              </span>
            </div>
            <div className="bg6-idle1">
              <h1 className="bg6-text23">3. Visual Studio Code</h1>
              <img
                alt="pastedImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
                loading="eager"
                className="bg6-pasted-image2"
              />
              <span className="bg6-text24">
                <span className="bg6-text25">
                  Visual Studio Code also known as VS Code, is a text editor
                  developed by the Microsoft and it is available for Windows,
                  macOS, as well as Linux.
                </span>
                <br></br>
                <br></br>
                <span>
                  VS Code provide the programmers with interesting features such
                  as IntelliSense for faster coding experience, debugger, and
                  Git integration which can help the developers to collaborate
                  their web development project using Python and Django.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <span className="bg6-text30">
            <span className="bg6-text31">- Muhammad Nabil Irfan</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="bg6-reference">
        <h1 className="bg6-text33">References</h1>
        <span className="bg6-text34">
          <br className="bg6-text35"></br>
          <span className="bg6-text36">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg6-text37">
            Gupta, A. (2023, October 19).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bg6-text38">
            15+ Popular Python IDEs in 2023: Choosing The Best One
          </span>
          <span className="bg6-text39">. Simplilearn.com.</span>
          <br className="bg6-text40"></br>
          <span className="bg6-text41">             </span>
          <span className="bg6-text42">
            https://www.simplilearn.com/tutorials/python-tutorial/python-ide
          </span>
          <br></br>
        </span>
      </div>
      <footer className="bg6-footer">
        <div className="bg6-container3">
          <Link to="/strace" className="bg6-navlink">
            STRACE
          </Link>
        </div>
        <span className="bg6-text44">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="bg6-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="bg6-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default Bg6
