import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sample-app-inventory.css'

const SampleAppInventory = (props) => {
  return (
    <div className="sample-app-inventory-container">
      <Helmet>
        <title>Strace | Sample Application</title>
        <meta name="description" content="TPL6213 Project" />
        <meta property="og:title" content="Strace" />
        <meta property="og:description" content="TPL6213 Project" />
      </Helmet>
      <div className="sample-app-inventory-banner">
        <div className="sample-app-inventory-main-content">
          <h1 className="sample-app-inventory-heading">SAMPLE APPLICATION</h1>
          <div className="sample-app-inventory-container01">
            <Link
              to="/sample-app-intro"
              className="sample-app-inventory-navlink button"
            >
              Introduction
            </Link>
            <Link
              to="/sample-app-inventory"
              className="sample-app-inventory-navlink1 button"
            >
              Inventory
            </Link>
            <Link
              to="/sample-app-purchases"
              className="sample-app-inventory-navlink2 button"
            >
              Purchases
            </Link>
            <Link
              to="/sample-app-sales"
              className="sample-app-inventory-navlink3 button"
            >
              Sales
            </Link>
            <Link
              to="/sample-app-suppliers"
              className="sample-app-inventory-navlink4 button"
            >
              Suppliers
            </Link>
          </div>
          <div className="sample-app-inventory-content-here">
            <div className="sample-app-inventory-column">
              <h1 className="sample-app-inventory-text">
                <span>Inventory List</span>
                <br></br>
              </h1>
              <div className="sample-app-inventory-container02">
                <div className="sample-app-inventory-container03">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2_inventory_List.png?raw=true"
                    loading="eager"
                    className="sample-app-inventory-image"
                  />
                  <span className="sample-app-inventory-text003">
                    <span>
                      The Inventory Management System provide the user with an
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text005">
                      inventory list
                    </span>
                    <span>
                      , to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text007">
                      display all items
                    </span>
                    <span>
                      {' '}
                      with their name as well as quantity. The system will list
                      out 10 stocks in a page and create another page for other
                      stocks remaining.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      There are 3 features that the user can use which are
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text012">
                      Add New Stock
                    </span>
                    <span>
                      ,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text014">
                      Edit Details
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      for the stock, and
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text016">
                      Delete Stock
                    </span>
                    <span>. </span>
                    <span>
                      When
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text019">
                      Add New Stock
                    </span>
                    <span>
                      {' '}
                      button is clicked by the user, the system will redirect
                      the user to the Add Stock page.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Clicking
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text024">
                      Edit Details
                    </span>
                    <span>
                      {' '}
                      button will redirect the user to the Edit Stock page to
                      change the name and also the quantity of the stock.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      To delete a stock, the user have to click on the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text029">
                      Delete Stock
                    </span>
                    <span> button.</span>
                    <br></br>
                    <br></br>
                    <span>
                      Besides that, the user also can
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text034">
                      search for an item
                    </span>
                    <span>
                      {' '}
                      by giving an input in the search bar and the system will
                      display out the item that matched with the input given.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="sample-app-inventory-container04">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartList.png?raw=true"
                    loading="eager"
                    className="sample-app-inventory-image1"
                  />
                </div>
              </div>
            </div>
            <div className="sample-app-inventory-column1">
              <h1 className="sample-app-inventory-text037">
                <span>Adding Stock</span>
                <br></br>
              </h1>
              <div className="sample-app-inventory-container05">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2a_inventory_AddStock.png?raw=true"
                  loading="eager"
                  className="sample-app-inventory-image2"
                />
                <span className="sample-app-inventory-text040">
                  <span>
                    The user can
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text042">
                    add new stock
                  </span>
                  <span>
                    {' '}
                    in this page by providing the form with the name and
                    quantity of the item.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    After giving inputs in both fields, the user can click on
                    the &quot;
                  </span>
                  <span className="sample-app-inventory-text047">
                    Add to Inventory
                  </span>
                  <span>
                    &quot; button and the system will add the stock into the
                    database.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The user can reset the value given in both fields by
                    clicking on the &quot;
                  </span>
                  <span className="sample-app-inventory-text052">Reset</span>
                  <span>&quot; button.</span>
                </span>
              </div>
              <div className="sample-app-inventory-container06">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartAdd.png?raw=true"
                  loading="eager"
                  className="sample-app-inventory-image3"
                />
                <span className="sample-app-inventory-text054">
                  <span className="sample-app-inventory-text055">
                    At the starting point, the system will
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text056">
                    display the interface first
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text057">
                    and the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text058">
                    user have to give an input
                  </span>
                  <span className="sample-app-inventory-text059">
                    {' '}
                    in order to add new stock into the database.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Let say the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text063">
                    user already filled in both fields
                  </span>
                  <span>
                    {' '}
                    and pressed the &quot;Add to Inventory&quot; button, the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text065">
                    system will validate the input given
                  </span>
                  <span>
                    {' '}
                    to ensure it meet the criteria before adding it into the
                    database.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    By any chance the user
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text070">
                    did not fill in either one of the field
                  </span>
                  <span>, an error message, &quot;</span>
                  <span className="sample-app-inventory-text072">
                    Please fill in this field
                  </span>
                  <span>
                    &quot; will pop up to indicate that the field is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text074">
                    mandatory
                  </span>
                  <span>.</span>
                  <br></br>
                  <br></br>
                  <span>
                    The user actually
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text079">
                    filled in the fields
                  </span>
                  <span>
                    {' '}
                    but the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text081">
                    input given in the quantity&apos;s field is not a number
                  </span>
                  <span>
                    . If that is the case, then the system will alert the user,
                    displaying &quot;
                  </span>
                  <span className="sample-app-inventory-text083">
                    Please enter a number
                  </span>
                  <span>
                    &quot; which mean the field
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text085">
                    only accept number
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    and the number has to be an
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text087">integer</span>
                  <span>.</span>
                  <br></br>
                  <br></br>
                  <span>
                    If the number given by the user is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text092">
                    less than zero
                  </span>
                  <span>, an error message, &quot;</span>
                  <span className="sample-app-inventory-text094">
                    Value must be greater than or equal to 0
                  </span>
                  <span>
                    &quot; is displayed because the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text096">
                    number has to be positive
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>since the stock exist, can be counted and seen.</span>
                  <br></br>
                  <br></br>
                  <span>
                    When
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text101">
                    everything is okay
                  </span>
                  <span>
                    , the system will
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text103">
                    assign a unique ID
                  </span>
                  <span> to the stock and it will display &quot;</span>
                  <span className="sample-app-inventory-text105">
                    Stock has been created successfully
                  </span>
                  <span>&quot; then redirect back to the list page.</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="sample-app-inventory-column2">
              <h1 className="sample-app-inventory-text108">
                <span>Editing Stock</span>
                <br></br>
              </h1>
              <div className="sample-app-inventory-container07">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2b_inventory_EditStock.png?raw=true"
                  loading="eager"
                  className="sample-app-inventory-image4"
                />
                <span className="sample-app-inventory-text111">
                  <span>
                    The user can
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text113">
                    edit an existing stock
                  </span>
                  <span>
                    {' '}
                    in this page by providing the form with the new name and new
                    quantity of the item.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    After giving inputs in both fields, the user can click on
                    the &quot;
                  </span>
                  <span className="sample-app-inventory-text118">
                    Update Stock
                  </span>
                  <span>
                    &quot; button and the system will update the stock in the
                    database with newest information.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    The user can delete the stock by clicking on the &quot;
                  </span>
                  <span className="sample-app-inventory-text123">
                    Delete Stock
                  </span>
                  <span>
                    &quot; button and will be directed to the delete page.
                  </span>
                </span>
              </div>
              <div className="sample-app-inventory-container08">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartEdit.png?raw=true"
                  loading="eager"
                  className="sample-app-inventory-image5"
                />
                <span className="sample-app-inventory-text125">
                  <span className="sample-app-inventory-text126">
                    The
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text127">
                    flow
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text128">
                    of the process is quite
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text129">
                    similar to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text130">
                    the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text131">
                    adding stock
                  </span>
                  <span className="sample-app-inventory-text132">. </span>
                  <span className="sample-app-inventory-text133">
                    At first, the system will display the interface and the user
                    have to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text134">
                    give the new input data
                  </span>
                  <span className="sample-app-inventory-text135">
                    {' '}
                    to edit the stock in the database.
                  </span>
                  <br className="sample-app-inventory-text136"></br>
                  <br className="sample-app-inventory-text137"></br>
                  <span className="sample-app-inventory-text138">
                    Let say the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text139">
                    user already filled in both fields
                  </span>
                  <span className="sample-app-inventory-text140">
                    {' '}
                    and pressed the &quot;
                  </span>
                  <span className="sample-app-inventory-text141">
                    Update Stock
                  </span>
                  <span className="sample-app-inventory-text142">
                    &quot; button, the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text143">
                    system will validate the input given
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text144">
                    to ensure it meet the criteria before adding it into the
                    database.
                  </span>
                  <br className="sample-app-inventory-text145"></br>
                  <br className="sample-app-inventory-text146"></br>
                  <span className="sample-app-inventory-text147">
                    By any chance the user
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text148">
                    did not fill in either one of the field
                  </span>
                  <span className="sample-app-inventory-text149">
                    , an error message, &quot;
                  </span>
                  <span className="sample-app-inventory-text150">
                    Please fill in this field
                  </span>
                  <span className="sample-app-inventory-text151">
                    &quot; will pop up to indicate that the field is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text152">
                    mandatory
                  </span>
                  <span className="sample-app-inventory-text153">.</span>
                  <br className="sample-app-inventory-text154"></br>
                  <br className="sample-app-inventory-text155"></br>
                  <span className="sample-app-inventory-text156">
                    The user actually
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text157">
                    filled in the fields
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text158">
                    but the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text159">
                    input given in the quantity&apos;s field is not a number
                  </span>
                  <span className="sample-app-inventory-text160">
                    . If that is the case, then the system will alert the user,
                    displaying &quot;
                  </span>
                  <span className="sample-app-inventory-text161">
                    Please enter a number
                  </span>
                  <span className="sample-app-inventory-text162">
                    &quot; which mean the field
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text163">
                    only accept number
                  </span>
                  <span className="sample-app-inventory-text164">
                    {' '}
                    and the number has to be an
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text165">integer</span>
                  <span className="sample-app-inventory-text166">.</span>
                  <br className="sample-app-inventory-text167"></br>
                  <br className="sample-app-inventory-text168"></br>
                  <span className="sample-app-inventory-text169">
                    If the number given by the user is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text170">
                    less than zero
                  </span>
                  <span className="sample-app-inventory-text171">
                    , an error message, &quot;
                  </span>
                  <span className="sample-app-inventory-text172">
                    Value must be greater than or equal to 0
                  </span>
                  <span className="sample-app-inventory-text173">
                    &quot; is displayed because the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text174">
                    number has to be positive
                  </span>
                  <span className="sample-app-inventory-text175">
                    {' '}
                    since the stock exist, can be counted and seen.
                  </span>
                  <br className="sample-app-inventory-text176"></br>
                  <br className="sample-app-inventory-text177"></br>
                  <span className="sample-app-inventory-text178">
                    When everything is
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text179">good</span>
                  <span className="sample-app-inventory-text180">
                    , the system will
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="sample-app-inventory-text181">
                    update it with the newest data
                  </span>
                  <span className="sample-app-inventory-text182">
                    {' '}
                    given by the user, 
                  </span>
                  <span className="sample-app-inventory-text183">
                    display &quot;
                  </span>
                  <span className="sample-app-inventory-text184">
                    Stock has been updated successfully
                  </span>
                  <span className="sample-app-inventory-text185">&quot;</span>
                  <span className="sample-app-inventory-text186">
                    {' '}
                    and redirect back to list page
                  </span>
                  <span className="sample-app-inventory-text187">.</span>
                  <br className="sample-app-inventory-text188"></br>
                </span>
              </div>
            </div>
            <div className="sample-app-inventory-column3">
              <h1 className="sample-app-inventory-text189">
                <span>Deleting Stock</span>
                <br></br>
              </h1>
              <div className="sample-app-inventory-container09">
                <div className="sample-app-inventory-container10">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2c_inventory_DeleteStock.png?raw=true"
                    loading="eager"
                    className="sample-app-inventory-image6"
                  />
                  <span className="sample-app-inventory-text192">
                    <span className="sample-app-inventory-text193">
                      Lastly, the user can
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text194">
                      delete an existing stock
                    </span>
                    <span className="sample-app-inventory-text195">
                      {' '}
                      from the database using this feature.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      This page
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text199">
                      can be accessed
                    </span>
                    <span>
                      {' '}
                      from the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text201">
                      Inventory List
                    </span>
                    <span>
                      {' '}
                      page as well as
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text203">
                      Edit Details
                    </span>
                    <span> page.</span>
                    <br></br>
                    <br></br>
                    <span>
                      From start, the system will display the interface first
                      and then
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text208">
                      ask for confirmation
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      from the the user if they really want to delete the stock
                      item from the database.
                    </span>
                    <br></br>
                    <br></br>
                    <span>If &quot;</span>
                    <span className="sample-app-inventory-text213">
                      Yes, Delete
                    </span>
                    <span>
                      &quot; button is clicked, then the system will
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text215">
                      delete the data regarding that stock
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>from the database and display a message &quot;</span>
                    <span className="sample-app-inventory-text217">
                      Stock has been deleted successfully
                    </span>
                    <span>
                      &quot;. After that, the user will be directed to the list
                      page.
                    </span>
                    <br></br>
                    <br></br>
                    <span>If &quot;</span>
                    <span className="sample-app-inventory-text222">Cancel</span>
                    <span>
                      &quot; button is clicked, then the system will
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text224">
                      abort the delete request
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      and redirect back to the list page hence
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sample-app-inventory-text226">
                      no deletion occur
                    </span>
                    <span>.</span>
                    <br></br>
                  </span>
                </div>
                <div className="sample-app-inventory-container11">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartDelete.png?raw=true"
                    loading="eager"
                    className="sample-app-inventory-image7"
                  />
                </div>
              </div>
            </div>
            <span className="sample-app-inventory-text229">
              <span>
                -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sample-app-inventory-text231">
                Muhammad Ariff Ridzlan
              </span>
            </span>
          </div>
        </div>
      </div>
      <footer className="sample-app-inventory-footer">
        <div className="sample-app-inventory-container12">
          <Link to="/strace" className="sample-app-inventory-navlink5">
            STRACE
          </Link>
        </div>
        <span className="sample-app-inventory-text232">
          &quot;Making System Calls Cool Again&quot;
        </span>
        <div className="sample-app-inventory-icon-group">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="sample-app-inventory-icon"
          >
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </footer>
      <Header></Header>
    </div>
  )
}

export default SampleAppInventory
