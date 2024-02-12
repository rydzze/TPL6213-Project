import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sample-app-purchases.css'

const SampleAppPurchases = (props) => {
  return (
    <div className="sample-app-purchases-container">
      <Helmet>
        <title>Strace | Sample Application</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="sample-app-purchases-banner">
        <div className="sample-app-purchases-main-content">
          <h1 className="sample-app-purchases-heading">SAMPLE APPLICATION</h1>
          <div className="sample-app-purchases-container01">
            <Link
              to="/sample-app-intro"
              className="sample-app-purchases-navlink button"
            >
              Introduction
            </Link>
            <Link
              to="/sample-app-inventory"
              className="sample-app-purchases-navlink1 button"
            >
              Inventory
            </Link>
            <Link
              to="/sample-app-purchases"
              className="sample-app-purchases-navlink2 button"
            >
              Purchases
            </Link>
            <Link
              to="/sample-app-sales"
              className="sample-app-purchases-navlink3 button"
            >
              Sales
            </Link>
            <Link
              to="/sample-app-suppliers"
              className="sample-app-purchases-navlink4 button"
            >
              Suppliers
            </Link>
          </div>
          <div className="sample-app-purchases-content-here">
            <div className="sample-app-purchases-column">
              <h1 className="sample-app-purchases-text">
                <span>Purchases List</span>
                <br></br>
              </h1>
              <span className="sample-app-purchases-text03">
                <span>
                  A purchases list in inventory management refers to a detailed
                  record of all goods or materials acquired by a business within
                  a specified period. This list typically includes information
                  such as the date of purchase, supplier details, stocks
                  purchased, quantities, and total price. This data is crucial
                  for businesses to make informed decisions about restocking,
                  pricing, and supplier relationships.
                </span>
                <br></br>
                <br></br>
                <span>
                  The figure below is the interface of the Purchases List from
                  the applications:-
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3_purchase_List.png?raw=true"
                loading="eager"
                className="sample-app-purchases-image"
              />
            </div>
            <div className="sample-app-purchases-column1">
              <h1 className="sample-app-purchases-text08">
                <span>Adding Purchase</span>
                <br></br>
              </h1>
              <div className="sample-app-purchases-container02">
                <div className="sample-app-purchases-container03">
                  <span className="sample-app-purchases-text11">
                    Interface for add stock/item page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3a_purchase_AddPurchase1.png?raw=true"
                    loading="eager"
                    className="sample-app-purchases-image1"
                  />
                  <span className="sample-app-purchases-text12">
                    Display supplier details:
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3a_purchase_AddPurchase2.png?raw=true"
                    loading="eager"
                    className="sample-app-purchases-image2"
                  />
                  <span className="sample-app-purchases-text13">
                    <span>
                      On the adding purchase page. If the user wants to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text15">
                      add stock/item
                    </span>
                    <span>
                      , first it will display the interface that requires the
                      user to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text17">
                      choose the supplier
                    </span>
                    <span>
                      {' '}
                      based on the stock/item that the user wants to purchase,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text19">
                      or else it will go into purchases lists
                    </span>
                    <span>
                      .
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      After the user clicks on the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text24">“next”</span>
                    <span>
                      {' '}
                      button to continue adding, the apps will
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text26">
                      display the supplier details
                    </span>
                    <span>
                      {' '}
                      interface for the user&apos;s references, and at the same
                      interface, the user is required to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text28">
                      choose the stock/item
                    </span>
                    <span>
                      {' '}
                      that the user wants to add followed by the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-purchases-text30">
                      price per item and the quantity
                    </span>
                    <span>
                      .
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="sample-app-purchases-container04">
                  <span className="sample-app-purchases-text33">
                    Flowchart for add stock/item page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/Add_view1.png?raw=true"
                    loading="eager"
                    className="sample-app-purchases-image3"
                  />
                </div>
              </div>
            </div>
            <span className="sample-app-purchases-text34">
              <span className="sample-app-purchases-text35">
                There are several conditions to fill in the quantity and price
              </span>
              <span>
                , firstly the system will
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text37">
                check if the price and quantity are NULL
              </span>
              <span>
                , if yes message error
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text39">
                “Please fill in this field”
              </span>
              <span>
                {' '}
                will displayed otherwise the system will
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text41">
                check is the quantity and price that user enter is a number or
                not
              </span>
              <span>
                . If no then a message error
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text43">
                “Please enter a number”
              </span>
              <span>
                {' '}
                will pop up otherwise the system will
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text45">
                check is the quantity and price entered is more than 0 or not
              </span>
              <span>
                , if not a message
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text47">
                “Value must be greater than or equal to 0”
              </span>
              <span>
                {' '}
                will be displayed.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text49">
                The user must fulfill all the conditions in order to proceed
                with adding purchases.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                After the user successfully fills in all the input correctly,
                the user can
              </span>
              <span className="sample-app-purchases-text54">
                {' '}
                press the add to purchase button.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text56">
                “Purchased item has been registered successfully”
              </span>
              <span>
                {' '}
                is a message that the user will receive after the user presses
                the button and the system will redirect to the view bill page.
              </span>
              <br></br>
              <br></br>
            </span>
            <div className="sample-app-purchases-column2">
              <h1 className="sample-app-purchases-text60">
                <span>Viewing Purchase Bill</span>
                <br></br>
              </h1>
              <span className="sample-app-purchases-text63">
                <span>
                  On the view bill page, the user may
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sample-app-purchases-text65">
                  choose to save or print the bill
                </span>
                <span>
                  . If yes, the purchase bill will be save or printed or else
                  the system will go back to the purchase list.
                </span>
              </span>
              <div className="sample-app-purchases-container05">
                <div className="sample-app-purchases-container06">
                  <span className="sample-app-purchases-text67">
                    Interface for view bill page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3b_purchase_ViewBill.png?raw=true"
                    loading="eager"
                    className="sample-app-purchases-image4"
                  />
                </div>
                <div className="sample-app-purchases-container07">
                  <span className="sample-app-purchases-text68">
                    Flowchart for view bill page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/View2.png?raw=true"
                    loading="eager"
                    className="sample-app-purchases-image5"
                  />
                </div>
              </div>
            </div>
            <div className="sample-app-purchases-column3">
              <h1 className="sample-app-purchases-text69">
                <span>Deleting Purchase Bill</span>
                <br></br>
              </h1>
              <span className="sample-app-purchases-text72">
                <span>
                  On the purchase lists page there is an
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sample-app-purchases-text74">
                  option to delete the purchase bill
                </span>
                <span>
                  . If the user want to delete it, the user just click to the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sample-app-purchases-text76">
                  &quot;yes, delete&quot;
                </span>
                <span>
                  {' '}
                  button otherwise system will go back to the purchase list.
                </span>
              </span>
              <div className="sample-app-purchases-container08">
                <div className="sample-app-purchases-container09">
                  <span className="sample-app-purchases-text78">
                    Interface for delete bill page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3c_purchase_DeleteBill.png?raw=true"
                    loading="eager"
                    className="sample-app-purchases-image6"
                  />
                </div>
                <div className="sample-app-purchases-container10">
                  <span className="sample-app-purchases-text79">
                    Flowchart for delete bill page
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/Delete.png?raw=true"
                    className="sample-app-purchases-image7"
                  />
                </div>
              </div>
            </div>
            <span className="sample-app-purchases-text80">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-purchases-text82">
                Noor Alia Alisa
              </span>
            </span>
          </div>
        </div>
      </div>
      <footer className="sample-app-purchases-footer">
        <div className="sample-app-purchases-container11">
          <Link to="/strace" className="sample-app-purchases-navlink5">
            STRACE
          </Link>
        </div>
        <span className="sample-app-purchases-text83">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="sample-app-purchases-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="sample-app-purchases-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default SampleAppPurchases
