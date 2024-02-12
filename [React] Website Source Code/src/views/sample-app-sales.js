import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sample-app-sales.css'

const SampleAppSales = (props) => {
  return (
    <div className="sample-app-sales-container">
      <Helmet>
        <title>Strace | Sample Application</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="sample-app-sales-banner">
        <div className="sample-app-sales-main-content">
          <h1 className="sample-app-sales-heading">SAMPLE APPLICATION</h1>
          <div className="sample-app-sales-container1">
            <Link
              to="/sample-app-intro"
              className="sample-app-sales-navlink button"
            >
              Introduction
            </Link>
            <Link
              to="/sample-app-inventory"
              className="sample-app-sales-navlink1 button"
            >
              Inventory
            </Link>
            <Link
              to="/sample-app-purchases"
              className="sample-app-sales-navlink2 button"
            >
              Purchases
            </Link>
            <Link
              to="/sample-app-sales"
              className="sample-app-sales-navlink3 button"
            >
              Sales
            </Link>
            <Link
              to="/sample-app-suppliers"
              className="sample-app-sales-navlink4 button"
            >
              Suppliers
            </Link>
          </div>
          <div className="sample-app-sales-content-here">
            <h1 className="sample-app-sales-text">
              <span>Sales List</span>
              <br></br>
            </h1>
            <div className="sample-app-sales-list">
              <div className="sample-app-sales-container2">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4_sales_List.png"
                  className="sample-app-sales-image"
                />
                <span className="sample-app-sales-text03">
                  <span>
                    The Sales List system provide user with list of sales that
                    display number of sales, customers, stocks sold, quantity
                    sold, total sold price and date. This data can help the user
                    to organize sales efficiently.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    This system have other features such as Add Sales, View and
                    Delete bill. By clicking the button, it will redirect the
                    user to the page that the user want to.
                  </span>
                  <br></br>
                  <span>  </span>
                </span>
              </div>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/sales%20list%20(1).png"
                className="sample-app-sales-image1"
              />
            </div>
            <div className="sample-app-sales-add">
              <h1 className="sample-app-sales-text10">
                <span>Add Sales</span>
                <br></br>
              </h1>
              <div className="sample-app-sales-container3">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4a_sales_AddSale.png"
                  className="sample-app-sales-image2"
                />
                <span className="sample-app-sales-text13">
                  <span>
                    Users add item data and buyer information for a sale in this
                    process. The programme looks for blank fields and directs
                    users to complete any that are left blank. It makes that
                    phone numbers are ten digits, emails adhere to the @ format,
                    and names are just letters and spaces.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Users enter amounts for items, and the system determines if
                    those values are higher than or equal to zero. In the event
                    that any entry is wrong, users are notified clearly.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The user adds things to the sale after validation. Stock
                    amounts are updated and the sale bill number rises. Users
                    receive a confirmation message confirming successful item
                    registration.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The procedure is finally finished when the system generates
                    a sales bill. This simple technique assists users in
                    entering precise and verified information.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/add%20sales.drawio.png"
                className="sample-app-sales-image3"
              />
            </div>
            <div className="sample-app-sales-view">
              <h1 className="sample-app-sales-text25">View Bill</h1>
              <span className="sample-app-sales-text26">
                Now, users can view their generated bill with the option to
                print or save it as a PDF. If they wish to go back, the system
                redirects them to the previous page or list. This
                straightforward enhancement makes it easy for users to access
                and manage their transaction details.
              </span>
              <div className="sample-app-sales-container4">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4b_sales_ViewBill.png"
                  className="sample-app-sales-image4"
                />
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/sales%20list%20(2).png"
                  className="sample-app-sales-image5"
                />
              </div>
            </div>
            <div className="sample-app-sales-delete">
              <h1 className="sample-app-sales-text27">Delete Bill</h1>
              <div className="sample-app-sales-container5">
                <div className="sample-app-sales-container6">
                  <img
                    alt="image"
                    src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4c_sales_DeleteBill.png"
                    className="sample-app-sales-image6"
                  />
                  <span className="sample-app-sales-text28">
                    On delete bill page users can easily delete a chosen sale
                    bill. When they confirm by selecting &quot;Yes,&quot; the
                    chosen bill is removed from the list without disrupting the
                    sequential numbering. A confirmation message confirms the
                    successful deletion. Choosing &quot;Cancel&quot; redirects
                    users to the bill list, streamlining the process of managing
                    sales records.
                  </span>
                </div>
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/sales%20list%20(3).png"
                  className="sample-app-sales-image7"
                />
              </div>
            </div>
            <span className="sample-app-sales-text29">
              -Muhammad Nabil Irfan
            </span>
          </div>
        </div>
      </div>
      <footer className="sample-app-sales-footer">
        <div className="sample-app-sales-container7">
          <Link to="/strace" className="sample-app-sales-navlink5">
            STRACE
          </Link>
        </div>
        <span className="sample-app-sales-text30">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="sample-app-sales-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="sample-app-sales-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default SampleAppSales
