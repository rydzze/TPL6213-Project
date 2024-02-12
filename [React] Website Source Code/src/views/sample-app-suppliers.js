import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sample-app-suppliers.css'

const SampleAppSuppliers = (props) => {
  return (
    <div className="sample-app-suppliers-container">
      <Helmet>
        <title>Strace | Sample Application</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="sample-app-suppliers-banner">
        <div className="sample-app-suppliers-main-content">
          <h1 className="sample-app-suppliers-heading">SAMPLE APPLICATION</h1>
          <div className="sample-app-suppliers-container01">
            <Link
              to="/sample-app-intro"
              className="sample-app-suppliers-navlink button"
            >
              Introduction
            </Link>
            <Link
              to="/sample-app-inventory"
              className="sample-app-suppliers-navlink1 button"
            >
              Inventory
            </Link>
            <Link
              to="/sample-app-purchases"
              className="sample-app-suppliers-navlink2 button"
            >
              Purchases
            </Link>
            <Link
              to="/sample-app-sales"
              className="sample-app-suppliers-navlink3 button"
            >
              Sales
            </Link>
            <Link
              to="/sample-app-suppliers"
              className="sample-app-suppliers-navlink4 button"
            >
              Suppliers
            </Link>
          </div>
          <div className="sample-app-suppliers-content-here">
            <div className="sample-app-suppliers-column">
              <h1 className="sample-app-suppliers-text">
                <span>Suppliers List</span>
                <br></br>
              </h1>
              <div className="sample-app-suppliers-list">
                <div className="sample-app-suppliers-container02">
                  <span className="sample-app-suppliers-text03">
                    <span>
                      The suppliers list in the Inventory Management System list
                      to all suppliers. 
                    </span>
                    <br></br>
                    <span>
                      The suppliers list show the name of the suppliers, their
                      contact number, 
                    </span>
                    <span>GSTIN number. </span>
                    <br></br>
                    <br></br>
                    <span>
                      There are a number of key features in the Suppliers List
                      page. 
                    </span>
                    <br></br>
                    <span>
                      Here we can add new suppliers, view the details of
                      suppliers, 
                    </span>
                    <span>
                      edit the details of
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>suppliers and delete suppliers. </span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5_suppliers_List.png?raw=true"
                    loading="eager"
                    className="sample-app-suppliers-image"
                  />
                </div>
                <div className="sample-app-suppliers-container03">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/Supplier%20List.png?raw=true"
                    loading="eager"
                    className="sample-app-suppliers-image01"
                  />
                  <span className="sample-app-suppliers-text18">
                    <span>Flowchart for Suppliers List</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="sample-app-suppliers-add">
                <h1 className="sample-app-suppliers-text21">Adding Supplier</h1>
                <span className="sample-app-suppliers-text22">
                  <span className="sample-app-suppliers-text23">
                    To add a new supplier, click on the Add New Supplier button.
                    It will prompt you into a new page.
                  </span>
                  <br></br>
                  <br></br>
                </span>
                <div className="sample-app-suppliers-container04">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5a_suppliers_Add.png?raw=true"
                    loading="eager"
                    className="sample-app-suppliers-image02"
                  />
                  <span className="sample-app-suppliers-text26">
                    <span className="sample-app-suppliers-text27">
                      You will be presented with a number of fields. Name, Phone
                      No, Email ID, Address and GSTIN No.
                    </span>
                    <br className="sample-app-suppliers-text28"></br>
                    <br className="sample-app-suppliers-text29"></br>
                    <span className="sample-app-suppliers-text30">
                      All field must be filled in order to successfully add new
                      supplier. &quot;Please fill in this field&quot; message
                      will be present.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The name field only accepts alphabets and spaces otherwise
                      &quot;Please match the format requested. Alphabets and
                      Spaces only.&quot; will be print.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The phone number field accepts exactly 10 digits
                      only. &quot;Please match the format requested. Numbers
                      only.&quot; will come if it is not fullfiled.
                    </span>
                    <br></br>
                  </span>
                </div>
                <span className="sample-app-suppliers-text38">
                  <span className="sample-app-suppliers-text39">
                    The email ID field must contain &quot;@&quot;. &quot;Please
                    include an &apos;@&apos; in the email address. I
                  </span>
                  <span className="sample-app-suppliers-text40">
                    t is missing an &apos;@&apos;.&quot;. The position
                    &quot;@&quot; is very important, if it is in the
                    frontmost, &quot;Please enter a part following
                    &apos;@&apos;. It is incomplete.&quot;. If &quot;@&quot; is
                    at the backmost, it will print &quot;Please enter a part
                    followed by &apos;@&apos;. It is incomplete.&quot;. If
                    &quot;.&quot; is directly after
                    &quot;@&quot;, &quot;&apos;.&apos; is used at a wrong
                    position.&quot; will be present.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The address accepts any input, as long there is an input, it
                    is fine.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The GSTIN number only accepts exactly 15 digit number.
                    Otherwise, &quot;Please match the format requested. GSTIN
                    Format Requested&quot;. will be asked.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Then you can successfully add a new supplier. To clear all
                    fields, just click the resent button.
                  </span>
                  <br></br>
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/New%20Supplier%20(1).png?raw=true"
                  loading="eager"
                  className="sample-app-suppliers-image03"
                />
                <span className="sample-app-suppliers-text51">
                  <span>
                    Flowchart for Adding Suppliers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="sample-app-suppliers-view">
                <h1 className="sample-app-suppliers-text54">
                  Viewing Suppliers Detail
                </h1>
                <div className="sample-app-suppliers-container05">
                  <div className="sample-app-suppliers-container06">
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5b_suppliers_View.png?raw=true"
                      loading="eager"
                      className="sample-app-suppliers-image04"
                    />
                    <span className="sample-app-suppliers-text55">
                      <span className="sample-app-suppliers-text56">
                        To view each suppliers, you need to click on the
                        suppliers name you wish to view. The suppliers name act
                        as hypertexts that will direct you to a new viewing
                        page.  
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        In this page you can see more detailed information about
                        the suppliers. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Other than what you in the Supplier List page, you will
                        get to see the Address, Bill No, Stocks, Quantity, Total
                        Purchased Price, Purchase Date. You are also presented
                        the choice to view or delete the bill and edit the
                        suppliers contact, email ID, GSTIN number. It will
                        direct you to edit supplier page.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="sample-app-suppliers-container07">
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/View%20Supplier.png?raw=true"
                      loading="eager"
                      className="sample-app-suppliers-image05"
                    />
                    <span className="sample-app-suppliers-text64">
                      <span>Flowchart for Viewing Suppliers Detail</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="sample-app-suppliers-edit">
                <h1 className="sample-app-suppliers-text67">
                  <span>Editing Supplier Detail</span>
                  <br></br>
                </h1>
                <span className="sample-app-suppliers-text70">
                  <span>
                    Editing is exactly the same as adding new suppliers, the
                    major difference is editing suppliers
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    are
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>only </span>
                  <br></br>
                  <span>
                    applicable to existing suppliers and you can directly delete
                    the suppliers from this page.
                  </span>
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5c_suppliers_Edit.png?raw=true"
                  loading="eager"
                  className="sample-app-suppliers-image06"
                />
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/Edit%20Supplier%20(1).png?raw=true"
                  loading="eager"
                  className="sample-app-suppliers-image07"
                />
                <span className="sample-app-suppliers-text76">
                  <span>Flowchart for Editing Suppliers Detail</span>
                  <br></br>
                </span>
              </div>
              <div className="sample-app-suppliers-delete">
                <h1 className="sample-app-suppliers-text79">
                  Deleting Supplier
                </h1>
                <div className="sample-app-suppliers-container08">
                  <div className="sample-app-suppliers-container09">
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5d_suppliers_Delete.png?raw=true"
                      loading="eager"
                      className="sample-app-suppliers-image08"
                    />
                    <span className="sample-app-suppliers-text80">
                      <span>
                        Upon clicking the delete button, it will direct you to
                        this page. If you continue to click &quot;Yes,
                        Delete&quot;.
                      </span>
                      <br></br>
                      <span>
                        It will delete the sale bill and the supplier
                        information and display  &quot;Supplier has been deleted
                        successfully.&quot;.
                      </span>
                      <br></br>
                      <span>
                        If you click &quot;Cancel&quot;, it will redirect you to
                        the Supplier List page.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="sample-app-suppliers-container10">
                    <img
                      alt="image"
                      src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/Delete%20Supplier.png?raw=true"
                      loading="eager"
                      className="sample-app-suppliers-image09"
                    />
                    <span className="sample-app-suppliers-text87">
                      <span>
                        Flowchart for Deleting Suppliers
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="sample-app-suppliers-text90">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-suppliers-text92">
                Muhammad Hafiz
              </span>
            </span>
          </div>
        </div>
      </div>
      <footer className="sample-app-suppliers-footer">
        <div className="sample-app-suppliers-container11">
          <Link to="/strace" className="sample-app-suppliers-navlink5">
            STRACE
          </Link>
        </div>
        <span className="sample-app-suppliers-text93">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="sample-app-suppliers-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="sample-app-suppliers-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default SampleAppSuppliers
