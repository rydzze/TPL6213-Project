import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './basic-py-1d.css'

const BasicPy1d = (props) => {
  return (
    <div className="basic-py1d-container">
      <Helmet>
        <title>Strace | Basic Python</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="basic-py1d-banner">
        <div className="basic-py1d-main-content">
          <h1 className="basic-py1d-heading">NAMES AND BINDINGS</h1>
          <div className="basic-py1d-container1">
            <Link to="/basic-py-1a" className="basic-py1d-navlink button">
              Name
            </Link>
            <Link to="/basic-py-1b" className="basic-py1d-navlink1 button">
              Address, Value and Type
            </Link>
            <Link to="/basic-py-1c" className="basic-py1d-navlink2 button">
              The Concept of Binding
            </Link>
            <Link to="/basic-py-1d" className="basic-py1d-navlink3 button">
              Scope and Lifetime
            </Link>
            <Link to="/basic-py-1e" className="basic-py1d-navlink4 button">
              Referencing Environments
            </Link>
            <Link to="/basic-py-1f" className="basic-py1d-navlink5 button">
              Named Constants
            </Link>
          </div>
          <div className="basic-py1d-scope">
            <h1 className="basic-py1d-text">
              <span>Scope of Variable</span>
              <br></br>
            </h1>
            <h2 className="basic-py1d-text003">
              <span>Determing the Code Section</span>
              <br></br>
            </h2>
            <span className="basic-py1d-text006">
              <span>
                Unlike the other programming languages,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1d-text008">
                Python use indentation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1d-text010">
                identify the scope
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                of the code section. For example, two source code lines with
                same level of identation indicates that both lines is part of
                the same section. If the level of identation of the line is
                higher than previous line, then it is a nested section. This
                situation can be found in if-else statement, looping like
                for-loop, while loop, and do-while loop, and function
                definition.
              </span>
              <br></br>
            </span>
            <div className="basic-py1d-container2">
              <div className="basic-py1d-container3">
                <h2 className="basic-py1d-text013">
                  <span>Local Scope</span>
                  <br></br>
                </h2>
                <span className="basic-py1d-text016">
                  <span className="basic-py1d-text017">
                    Any variable within the local scope only can be seen by
                    other code lines with the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text018">
                    same level of scoping
                  </span>
                  <span className="basic-py1d-text019">. For example, </span>
                  <span className="basic-py1d-text020">formset</span>
                  <span className="basic-py1d-text021">
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text022">supplierobj</span>
                  <span className="basic-py1d-text023">
                    , and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text024">
                    context
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text025">
                    variables is declared inside
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text026">
                    get
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    function and only visible in that specific scope. Thus, the
                    variables cannot be used outside.
                  </span>
                  <br className="basic-py1d-text028"></br>
                </span>
                <h2 className="basic-py1d-text029">
                  <span>Nonlocal Scope</span>
                  <br></br>
                </h2>
                <span className="basic-py1d-text032">
                  <span>
                    Any variable declared
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text034">outside of a scope</span>
                  <span>
                    {' '}
                    can be considered as non-local variable. Referring to the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text036">for-loop</span>
                  <span>
                    {' '}
                    inside
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text038">post</span>
                  <span>
                    {' '}
                    function, the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text040">billitem.billno</span>
                  <span>
                    {' '}
                    variable was assigned with the value of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text042">billobj</span>
                  <span>
                    , another variable that was defined outside of it.
                  </span>
                  <br></br>
                </span>
                <h2 className="basic-py1d-text045">
                  <span>Global Scope</span>
                  <br></br>
                </h2>
                <span className="basic-py1d-text048">
                  <span>
                    Any variable declared at the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text050">
                    Python&apos;s main body 
                  </span>
                  <span>(</span>
                  <span className="basic-py1d-text052">no identation</span>
                  <span>
                    ) is a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text054">global variable</span>
                  <span>
                    . During the assignment of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text056">
                    supplierobj
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    variable in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text058">
                    post
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    function,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text060">
                    Supplier
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    class is retrieved from a different file, through import
                    statement.
                  </span>
                  <br></br>
                </span>
                <h2 className="basic-py1d-text063">
                  <span>Static Scope</span>
                  <br></br>
                </h2>
                <span className="basic-py1d-text066">
                  <span>
                    Python use static scoping (also known as lexical scoping).
                    If the declaration of a variable is not found in a scope, it
                    will
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text068">
                    search
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    for the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text070">declaration</span>
                  <span>
                    {' '}
                    in the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text072">
                    static parent of the scope
                  </span>
                  <span>.</span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/external/nab-scope-600h.png"
                className="basic-py1d-pasted-image"
              />
            </div>
          </div>
          <div className="basic-py1d-lifetime">
            <div className="basic-py1d-row">
              <div className="basic-py1d-column">
                <h1 className="basic-py1d-text075">
                  <span>Lifetime of Variable</span>
                  <br></br>
                </h1>
                <span className="basic-py1d-text078">
                  <span>
                    Due to the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text080">
                    nature of dynamic variable binding
                  </span>
                  <span>
                    , the memory management of Python support
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text082">stack-dynamic</span>
                  <span>
                    , as well as
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text084">
                    implicit heap-dynamic
                  </span>
                  <span>
                    . The interpreter allocates a specific amount of memory on
                    the computer, known as the private heap space. Memory is
                    dynamically allocated by the interpreter when necessary, and
                    a garbage collector takes over deallocation automatically.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="basic-py1d-container4">
              <div className="basic-py1d-container5">
                <h2 className="basic-py1d-text087">Stack-Dynamic</h2>
                <span className="basic-py1d-text088">
                  <span>
                    Python will allocates the memory when the declaration
                    statements occurs, which mean that its
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text090">
                    only happen during the execution
                  </span>
                  <span> of the programme.</span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="/external/nab-lifetime1-600w.png"
                  className="basic-py1d-image"
                />
                <span className="basic-py1d-text093">
                  <span>
                    Based on the source code, memory will be allocated for all
                    variables inside
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text095">
                    class SaleView
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    only when an instance is created for the class during
                    runtime.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="basic-py1d-container6">
                <h2 className="basic-py1d-text098">Implicit Heap-Dynamic</h2>
                <span className="basic-py1d-text099">
                  <span>
                    Assignment statements can causes the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text101">
                    allocation and deallocation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    of the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text103">
                    memory inside
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text105">heap</span>
                  <span>, that can increase or decrease in size.</span>
                  <br></br>
                </span>
                <img
                  alt="pastedImage"
                  src="/external/nab-lifetime2-600w.png"
                  className="basic-py1d-pasted-image1"
                />
                <span className="basic-py1d-text108">
                  <span>
                    From the given sample code, memory can be allocated inside
                    variable
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="basic-py1d-text110">
                    form
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
                  <span className="basic-py1d-text112">formset</span>
                  <span>
                    . If there is none, the memory space would be minimal or
                    lesser.
                  </span>
                </span>
              </div>
            </div>
            <span className="basic-py1d-text114">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="basic-py1d-text116">Muhammad Ariff Ridzlan</span>
            </span>
          </div>
        </div>
      </div>
      <div className="basic-py1d-reference">
        <h1 className="basic-py1d-text117">References</h1>
        <span className="basic-py1d-text118">
          <br></br>
          <span>
            Lunga, N. (2023, November 8).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1d-text121">
            How to Manage Memory with Python
          </span>
          <span>. Squash.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.squash.io/how-to-manage-memory-with-python/"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1d-link"
          >
            https://www.squash.io/how-to-manage-memory-with-python/
          </a>
          <br></br>
          <br></br>
          <span>
            Ugochukwu, U. (2020, June 22).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1d-text128">
            Understanding Python scope and indentation
          </span>
          <span>. Hashnode.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://Ugochukwu, U. (2020, June 22). Understanding Python scope and indentation - Hashnode. Hashnode. Retrieved December 24, 2023, from https://hashnode.com/post/understanding-python-scope-and-indentation-ckbpbc3m501usjps1fe27ti0n"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1d-link1"
          >
            https://hashnode.com/post/understanding-python-scope-and-indentation-ckb
          </a>
          <span className="basic-py1d-text132">pbc3m501usjps1fe27ti0n</span>
          <br></br>
          <br></br>
          <span>
            Mcwaves, D. (2017, December 16).
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="basic-py1d-text136">
            A Python Tutorial To Understanding Scopes and Closures
          </span>
          <span>. Medium.</span>
          <br></br>
          <span>
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://medium.com/@dannymcwaves/a-python-tutorial-to-understanding-scopes-and-closures-c6a3d3ba0937"
            target="_blank"
            rel="noreferrer noopener"
            className="basic-py1d-link2"
          >
            https://medium.com/@dannymcwaves/a-python-tutorial-to-understanding-scopes-and-closures-c6a3d3ba0937
          </a>
          <br></br>
        </span>
      </div>
      <footer className="basic-py1d-footer">
        <div className="basic-py1d-container7">
          <Link to="/strace" className="basic-py1d-navlink6">
            STRACE
          </Link>
        </div>
        <span className="basic-py1d-text141">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="basic-py1d-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="basic-py1d-icon">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default BasicPy1d
