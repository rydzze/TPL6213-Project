import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-3bii.css'

const BasicPy3bii = (props) => {
  return (
    <div className="basic-py3bii-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py3bii-banner">
        <div className="basic-py3bii-main-content">
          <h1 className="basic-py3bii-heading">CONTROL STRUCTURE</h1>
          <div className="basic-py3bii-container1">
            <Link to="/basic-py-3ai" className="basic-py3bii-navlink button">
              Selection Statement
            </Link>
            <Link to="/basic-py-3aii" className="basic-py3bii-navlink1 button">
              Two-way Selectors
            </Link>
            <Link to="/basic-py-3aiii" className="basic-py3bii-navlink2 button">
              Multiple-way Selectors
            </Link>
          </div>
          <div className="basic-py3bii-container2">
            <Link to="/basic-py-3bi" className="basic-py3bii-navlink3 button">
              Counter-Controlled Loops
            </Link>
            <Link to="/basic-py-3bii" className="basic-py3bii-navlink4 button">
              Logically-Controlled Loops
            </Link>
          </div>
          <div className="basic-py3bii-content-here">
            <h1 className="basic-py3bii-text">
              <span>Logically-Controlled Loop</span>
              <br></br>
            </h1>
            <span className="basic-py3bii-text03">
              <span className="basic-py3bii-text04">
                While loop is a control flow statement that allows code to be
                executed repeatedly based on a given Boolean condition. It is a
                logically-controlled loop that repeats until a specific
                condition is met. The condition is usually expressed as a
                Boolean expression that is evaluated at the beginning of each
                iteration of the loop.
              </span>
              <br className="basic-py3bii-text05"></br>
              <span className="basic-py3bii-text06">
                Here is an example of a while loop in Python:
              </span>
              <br className="basic-py3bii-text07"></br>
              <br className="basic-py3bii-text08"></br>
            </span>
            <div className="basic-py3bii-container3">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3b%20Control%20Structure_Hapih/120EA66C-DEFC-40DA-9B87-D13BCDCC7220.jpeg?raw=true"
                className="basic-py3bii-image"
              />
              <div className="basic-py3bii-column">
                <span className="basic-py3bii-text09">
                  This code is a simple program that prompts the user to enter
                  their age and checks if the input is a valid number. A while
                  loop is used to repeatedly prompt the user to enter their age
                  until they enter a valid number. Inside the loop, the
                  isdigit() method is used to check if the user’s input is a
                  valid number. When the user enters a valid number, the loop is
                  exited and the user’s age is printed.
                </span>
                <span className="basic-py3bii-text10">
                  <span>
                    This code is a simple number guessing game that generates a
                    random number between 1 and 10 and prompts the user to guess
                    the number. The guess variable is initialized to 0 and a
                    while loop is used to repeatedly prompt the user to guess
                    the number until they guess correctly.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    Inside the loop, an if statement is used to check if the
                    user’s guess is too low or too high compared to the randomly
                    generated number. When the user guesses the correct number,
                    the loop is exited and a congratulatory message is printed. 
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <span className="basic-py3bii-text16">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py3bii-text18">Muhammad Hafiz</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py3bii-reference">
        <h1 className="basic-py3bii-text19">References</h1>
        <span className="basic-py3bii-text20">
          <br className="basic-py3bii-text21"></br>
          <span className="basic-py3bii-text22">
            Python while loop (With examples).
          </span>
          <span className="basic-py3bii-text23">
            {' '}
            (n.d.). Programiz: Learn to Code for Free.
          </span>
          <br className="basic-py3bii-text24"></br>
          <span className="basic-py3bii-text25">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.programiz.com/python-programming/while-loop"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py3bii-link"
          >
            https://www.programiz.com/python-programming/while-loop
          </a>
          <br className="basic-py3bii-text26"></br>
          <br className="basic-py3bii-text27"></br>
          <span className="basic-py3bii-text28">
            Bonthu, H. (2023, April 26).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py3bii-text29">
            Master control statements in Python with examples (Updated 2023).
          </span>
          <span className="basic-py3bii-text30"> Analytics Vidhya.</span>
          <br className="basic-py3bii-text31"></br>
          <span className="basic-py3bii-text32">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.analyticsvidhya.com/blog/2021/09/loops-and-control-statements-an-in-depth-python-tutorial/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py3bii-link1"
          >
            https://www.analyticsvidhya.com/blog/2021/09/loops-and-control-statements-an-in-depth-python-tutorial/
          </a>
          <br className="basic-py3bii-text33"></br>
          <br className="basic-py3bii-text34"></br>
          <span className="basic-py3bii-text35">
            Python iterative statements.
          </span>
          <span className="basic-py3bii-text36">
            {' '}
            (2018, December 15). Python Class Room Diary.
          </span>
          <br className="basic-py3bii-text37"></br>
          <span className="basic-py3bii-text38">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://pythonclassroomdiary.in/python-notes-printed/python-iterative-statements/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py3bii-link2"
          >
            https://pythonclassroomdiary.in/python-notes-printed/python-iterative-statements/
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py3bii-footer">
        <div className="basic-py3bii-container4">
          <Link to="/strace" className="basic-py3bii-navlink5">
            STRACE
          </Link>
        </div>
        <span className="basic-py3bii-text40">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py3bii-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="basic-py3bii-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy3bii
