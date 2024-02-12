import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-1c.css'

const BasicPy1c = (props) => {
  return (
    <div className="basic-py1c-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py1c-banner">
        <div className="basic-py1c-main-content">
          <h1 className="basic-py1c-heading">NAMES AND BINDINGS</h1>
          <div className="basic-py1c-container1">
            <Link to="/basic-py-1a" className="basic-py1c-navlink button">
              Name
            </Link>
            <Link to="/basic-py-1b" className="basic-py1c-navlink1 button">
              Address, Value and Type
            </Link>
            <Link to="/basic-py-1c" className="basic-py1c-navlink2 button">
              The Concept of Binding
            </Link>
            <Link to="/basic-py-1d" className="basic-py1c-navlink3 button">
              Scope and Lifetime
            </Link>
            <Link to="/basic-py-1e" className="basic-py1c-navlink4 button">
              Referencing Environments
            </Link>
            <Link to="/basic-py-1f" className="basic-py1c-navlink5 button">
              Named Constants
            </Link>
          </div>
          <div className="basic-py1c-hapih">
            <h1 className="basic-py1c-text">
              <span className="basic-py1c-text01">The Concept of Binding</span>
              <br></br>
            </h1>
            <span className="basic-py1c-text03">
              Python is a dynamically typed language, whereas Django use both
              dynamic and static binding depending on the context.
            </span>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/1b%20Names%20and%20Bindings/4A17020E-7FEE-41D3-9BF8-85095297A913.jpeg?raw=true"
              className="basic-py1c-image"
            />
            <span className="basic-py1c-text04">
              <br className="basic-py1c-text05"></br>
              <span className="basic-py1c-text06">
                Features of Dynamic Typing
              </span>
              <br className="basic-py1c-text07"></br>
              <br className="basic-py1c-text08"></br>
              <span className="basic-py1c-text09">- </span>
              <span className="basic-py1c-text10">Type Inference</span>
              <span className="basic-py1c-text11">
                : You don’t need to declare the type of a variable explicitly.
                The interpreter infers the type based on the value assigned to
                it. If you, for
              </span>
              <br className="basic-py1c-text12"></br>
              <span className="basic-py1c-text13">
                    instance, assign an integer to a variable, it becomes an
                integer type, and if you later assign a string to the same
                variable, it becomes a string type.
              </span>
              <br className="basic-py1c-text14"></br>
              <br className="basic-py1c-text15"></br>
              <span className="basic-py1c-text16">- </span>
              <span className="basic-py1c-text17">Runtime Type Checking</span>
              <span className="basic-py1c-text18">
                : Dynamic typing allows for runtime type checking where the type
                of a variable is checked during the execution of the program. If
                an 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="basic-py1c-text19"></br>
              <span className="basic-py1c-text20">
                   operation is performed on a variable that is not compatible
                with its current type, a runtime error will occur.
              </span>
              <br className="basic-py1c-text21"></br>
              <br className="basic-py1c-text22"></br>
              <span className="basic-py1c-text23">- </span>
              <span className="basic-py1c-text24">
                Flexibility and Expressiveness
              </span>
              <span className="basic-py1c-text25">
                : Dynamic typing offers greater flexibility and expressiveness
                in writing code. It allows you to easily change the type of a 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="basic-py1c-text26"></br>
              <span className="basic-py1c-text27">
                   variable or use the same variable to hold different types of
                data. 
              </span>
              <br className="basic-py1c-text28"></br>
              <br className="basic-py1c-text29"></br>
              <span className="basic-py1c-text30">- </span>
              <span className="basic-py1c-text31">
                Rapid Prototyping and Iterative Development
              </span>
              <span className="basic-py1c-text32">
                : Dynamic typing simplifies the process of rapid prototyping and
                iterative development. You can quickly write
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="basic-py1c-text33"></br>
              <span className="basic-py1c-text34">
                   and test code without the need for explicit type declarations
                hence easier to experiment and make changes on the fly.
              </span>
              <br className="basic-py1c-text35"></br>
              <br className="basic-py1c-text36"></br>
              <span className="basic-py1c-text37">
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1c-text38">Enhanced Productivity</span>
              <span className="basic-py1c-text39">
                : The dynamic nature of Python’s typing system often leads to
                enhanced productivity.
              </span>
              <br></br>
              <br></br>
            </span>
            <h1 className="basic-py1c-text42">
              <br className="basic-py1c-text43"></br>
              <span className="basic-py1c-text44">
                Dynamic and Static Binding
              </span>
              <br></br>
            </h1>
            <span className="basic-py1c-text46">
              <span className="basic-py1c-text47">
                Django’s template engine uses dynamic binding to render HTML
                pages with data from the view function or the model. The
                template syntax allows the use of variables, filters, tags, and
                expressions that are evaluated at run time and inserted into the
                static parts of the HTML.
              </span>
              <br></br>
              <br></br>
            </span>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/1b%20Names%20and%20Bindings/8E0370E2-C966-4374-8732-E977E10DA740.jpeg?raw=true"
              className="basic-py1c-image1"
            />
            <span className="basic-py1c-text50">
              <br></br>
              <span>
                In this code, the variables name and date are dynamically bound
                to the values passed from the view function or the model and
                rendered in the HTML page.
              </span>
            </span>
            <span className="basic-py1c-text53">
              <br></br>
              <span>
                Django’s static files management uses static binding to collect
                and serve the files that are not generated dynamically, such as
                CSS, JavaScript, and images3. The collectstatic command copies
                the static files from each app’s static directory into a single
                location specified by the STATIC_ROOT setting3. The static file
                server then serves the files from that location.
              </span>
            </span>
            <span className="basic-py1c-text56">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Muhammad Hafiz</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py1c-reference">
        <h1 className="basic-py1c-text59">References</h1>
        <span className="basic-py1c-text60">
          <br className="basic-py1c-text61"></br>
          <span className="basic-py1c-text62">
            Zubair, S. (n.d.).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1c-text63">
            Is Python a dynamically typed language?
          </span>
          <span className="basic-py1c-text64"> Educative.</span>
          <br className="basic-py1c-text65"></br>
          <span className="basic-py1c-text66">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.educative.io/answers/is-python-a-dynamically-typed-language"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1c-link"
          >
            https://www.educative.io/answers/is-python-a-dynamically-typed-language
          </a>
          <br className="basic-py1c-text67"></br>
          <br className="basic-py1c-text68"></br>
          <span className="basic-py1c-text69">
            Template - Django documentation
          </span>
          <span className="basic-py1c-text70">. (n.d.). Django.</span>
          <br className="basic-py1c-text71"></br>
          <span className="basic-py1c-text72">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://docs.djangoproject.com/en/5.0/topics/templates/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1c-link1"
          >
            https://docs.djangoproject.com/en/5.0/topics/templates/
          </a>
          <br className="basic-py1c-text73"></br>
          <br className="basic-py1c-text74"></br>
          <span className="basic-py1c-text75">
            Omondi, A. (2020, September 15).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1c-text76">
            Working with Django Templates &amp; Static Files
          </span>
          <span className="basic-py1c-text77">. DigitalOcean.</span>
          <br className="basic-py1c-text78"></br>
          <span className="basic-py1c-text79">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.digitalocean.com/community/tutorials/working-with-django-templates-static-files"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1c-link2"
          >
            https://www.digitalocean.com/community/tutorials/working-with-django-templates-static-files
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py1c-footer">
        <div className="basic-py1c-container2">
          <Link to="/strace" className="basic-py1c-navlink6">
            STRACE
          </Link>
        </div>
        <span className="basic-py1c-text81">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py1c-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py1c-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy1c
