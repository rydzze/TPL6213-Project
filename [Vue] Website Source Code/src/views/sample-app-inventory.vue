<template>
  <div class="sample-app-inventory-container">
    <div class="sample-app-inventory-banner">
      <div class="sample-app-inventory-main-content">
        <h1 class="sample-app-inventory-heading">SAMPLE APPLICATION</h1>
        <div class="sample-app-inventory-container01">
          <router-link
            to="/sample-app-intro"
            class="sample-app-inventory-navlink button"
          >
            Introduction
          </router-link>
          <router-link
            to="/sample-app-inventory"
            class="sample-app-inventory-navlink1 button"
          >
            Inventory
          </router-link>
          <router-link
            to="/sample-app-purchases"
            class="sample-app-inventory-navlink2 button"
          >
            Purchases
          </router-link>
          <router-link
            to="/sample-app-sales"
            class="sample-app-inventory-navlink3 button"
          >
            Sales
          </router-link>
          <router-link
            to="/sample-app-suppliers"
            class="sample-app-inventory-navlink4 button"
          >
            Suppliers
          </router-link>
        </div>
        <div class="sample-app-inventory-content-here">
          <div class="sample-app-inventory-column">
            <h1 class="sample-app-inventory-text">
              <span>Inventory List</span>
              <br />
            </h1>
            <div class="sample-app-inventory-container02">
              <div class="sample-app-inventory-container03">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2_inventory_List.png?raw=true"
                  loading="eager"
                  class="sample-app-inventory-image"
                />
                <span class="sample-app-inventory-text003">
                  <span>
                    The Inventory Management System provide the user with an
                    <span v-html="rawmjl4"></span>
                  </span>
                  <span class="sample-app-inventory-text005">inventory list</span>
                  <span>
                    , to
                    <span v-html="raww2qu"></span>
                  </span>
                  <span class="sample-app-inventory-text007">
                    display all items
                  </span>
                  <span>
                    with their name as well as quantity. The system will list out
                    10 stocks in a page and create another page for other stocks
                    remaining.
                  </span>
                  <br />
                  <br />
                  <span>
                    There are 3 features that the user can use which are
                    <span v-html="rawruwy"></span>
                  </span>
                  <span class="sample-app-inventory-text012">Add New Stock</span>
                  <span>
                    ,
                    <span v-html="raw6zwr"></span>
                  </span>
                  <span class="sample-app-inventory-text014">
                    Edit Details
                    <span v-html="raw9kx1"></span>
                  </span>
                  <span>
                    for the stock, and
                    <span v-html="rawbrzv"></span>
                  </span>
                  <span class="sample-app-inventory-text016">Delete Stock</span>
                  <span>. </span>
                  <span>
                    When
                    <span v-html="raw1tuh"></span>
                  </span>
                  <span class="sample-app-inventory-text019">Add New Stock</span>
                  <span>
                    button is clicked by the user, the system will redirect the
                    user to the Add Stock page.
                  </span>
                  <br />
                  <br />
                  <span>
                    Clicking
                    <span v-html="rawpaeu"></span>
                  </span>
                  <span class="sample-app-inventory-text024">Edit Details</span>
                  <span>
                    button will redirect the user to the Edit Stock page to change
                    the name and also the quantity of the stock.
                  </span>
                  <br />
                  <br />
                  <span>
                    To delete a stock, the user have to click on the
                    <span v-html="rawsv0e"></span>
                  </span>
                  <span class="sample-app-inventory-text029">Delete Stock</span>
                  <span>button.</span>
                  <br />
                  <br />
                  <span>
                    Besides that, the user also can
                    <span v-html="rawx90u"></span>
                  </span>
                  <span class="sample-app-inventory-text034">
                    search for an item
                  </span>
                  <span>
                    by giving an input in the search bar and the system will
                    display out the item that matched with the input given.
                  </span>
                  <br />
                </span>
              </div>
              <div class="sample-app-inventory-container04">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartList.png?raw=true"
                  loading="eager"
                  class="sample-app-inventory-image1"
                />
              </div>
            </div>
          </div>
          <div class="sample-app-inventory-column1">
            <h1 class="sample-app-inventory-text037">
              <span>Adding Stock</span>
              <br />
            </h1>
            <div class="sample-app-inventory-container05">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2a_inventory_AddStock.png?raw=true"
                loading="eager"
                class="sample-app-inventory-image2"
              />
              <span class="sample-app-inventory-text040">
                <span>
                  The user can
                  <span v-html="rawat6p"></span>
                </span>
                <span class="sample-app-inventory-text042">add new stock</span>
                <span>
                  in this page by providing the form with the name and quantity of
                  the item.
                </span>
                <br />
                <br />
                <span>
                  After giving inputs in both fields, the user can click on the
                  &quot;
                </span>
                <span class="sample-app-inventory-text047">Add to Inventory</span>
                <span>
                  &quot; button and the system will add the stock into the
                  database.
                </span>
                <br />
                <br />
                <span>
                  The user can reset the value given in both fields by clicking on
                  the &quot;
                </span>
                <span class="sample-app-inventory-text052">Reset</span>
                <span>&quot; button.</span>
              </span>
            </div>
            <div class="sample-app-inventory-container06">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartAdd.png?raw=true"
                loading="eager"
                class="sample-app-inventory-image3"
              />
              <span class="sample-app-inventory-text054">
                <span class="sample-app-inventory-text055">
                  At the starting point, the system will
                  <span v-html="raw38rv"></span>
                </span>
                <span class="sample-app-inventory-text056">
                  display the interface first
                  <span v-html="rawnxkx"></span>
                </span>
                <span class="sample-app-inventory-text057">
                  and the
                  <span v-html="raw3mno"></span>
                </span>
                <span class="sample-app-inventory-text058">
                  user have to give an input
                </span>
                <span class="sample-app-inventory-text059">
                  in order to add new stock into the database.
                </span>
                <br />
                <br />
                <span>
                  Let say the
                  <span v-html="rawk9v1"></span>
                </span>
                <span class="sample-app-inventory-text063">
                  user already filled in both fields
                </span>
                <span>
                  and pressed the &quot;Add to Inventory&quot; button, the
                  <span v-html="rawubgx"></span>
                </span>
                <span class="sample-app-inventory-text065">
                  system will validate the input given
                </span>
                <span>
                  to ensure it meet the criteria before adding it into the
                  database.
                </span>
                <br />
                <br />
                <span>
                  By any chance the user
                  <span v-html="rawnjqe"></span>
                </span>
                <span class="sample-app-inventory-text070">
                  did not fill in either one of the field
                </span>
                <span>, an error message, &quot;</span>
                <span class="sample-app-inventory-text072">
                  Please fill in this field
                </span>
                <span>
                  &quot; will pop up to indicate that the field is
                  <span v-html="raw5fl2"></span>
                </span>
                <span class="sample-app-inventory-text074">mandatory</span>
                <span>.</span>
                <br />
                <br />
                <span>
                  The user actually
                  <span v-html="rawgvgr"></span>
                </span>
                <span class="sample-app-inventory-text079">
                  filled in the fields
                </span>
                <span>
                  but the
                  <span v-html="rawrcuu"></span>
                </span>
                <span class="sample-app-inventory-text081">
                  input given in the quantity&apos;s field is not a number
                </span>
                <span>
                  . If that is the case, then the system will alert the user,
                  displaying &quot;
                </span>
                <span class="sample-app-inventory-text083">
                  Please enter a number
                </span>
                <span>
                  &quot; which mean the field
                  <span v-html="rawkt41"></span>
                </span>
                <span class="sample-app-inventory-text085">
                  only accept number
                  <span v-html="rawzb5g"></span>
                </span>
                <span>
                  and the number has to be an
                  <span v-html="raww2f3"></span>
                </span>
                <span class="sample-app-inventory-text087">integer</span>
                <span>.</span>
                <br />
                <br />
                <span>
                  If the number given by the user is
                  <span v-html="raw3liz"></span>
                </span>
                <span class="sample-app-inventory-text092">less than zero</span>
                <span>, an error message, &quot;</span>
                <span class="sample-app-inventory-text094">
                  Value must be greater than or equal to 0
                </span>
                <span>
                  &quot; is displayed because the
                  <span v-html="rawjhp8"></span>
                </span>
                <span class="sample-app-inventory-text096">
                  number has to be positive
                  <span v-html="rawad8o"></span>
                </span>
                <span>since the stock exist, can be counted and seen.</span>
                <br />
                <br />
                <span>
                  When
                  <span v-html="rawao7c"></span>
                </span>
                <span class="sample-app-inventory-text101">
                  everything is okay
                </span>
                <span>
                  , the system will
                  <span v-html="rawa18a"></span>
                </span>
                <span class="sample-app-inventory-text103">
                  assign a unique ID
                </span>
                <span>to the stock and it will display &quot;</span>
                <span class="sample-app-inventory-text105">
                  Stock has been created successfully
                </span>
                <span>&quot; then redirect back to the list page.</span>
                <br />
              </span>
            </div>
          </div>
          <div class="sample-app-inventory-column2">
            <h1 class="sample-app-inventory-text108">
              <span>Editing Stock</span>
              <br />
            </h1>
            <div class="sample-app-inventory-container07">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2b_inventory_EditStock.png?raw=true"
                loading="eager"
                class="sample-app-inventory-image4"
              />
              <span class="sample-app-inventory-text111">
                <span>
                  The user can
                  <span v-html="raww8ck"></span>
                </span>
                <span class="sample-app-inventory-text113">
                  edit an existing stock
                </span>
                <span>
                  in this page by providing the form with the new name and new
                  quantity of the item.
                </span>
                <br />
                <br />
                <span>
                  After giving inputs in both fields, the user can click on the
                  &quot;
                </span>
                <span class="sample-app-inventory-text118">Update Stock</span>
                <span>
                  &quot; button and the system will update the stock in the
                  database with newest information.
                </span>
                <br />
                <br />
                <span>
                  The user can delete the stock by clicking on the &quot;
                </span>
                <span class="sample-app-inventory-text123">Delete Stock</span>
                <span>
                  &quot; button and will be directed to the delete page.
                </span>
              </span>
            </div>
            <div class="sample-app-inventory-container08">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartEdit.png?raw=true"
                loading="eager"
                class="sample-app-inventory-image5"
              />
              <span class="sample-app-inventory-text125">
                <span class="sample-app-inventory-text126">
                  The
                  <span v-html="rawhloo"></span>
                </span>
                <span class="sample-app-inventory-text127">
                  flow
                  <span v-html="rawkayb"></span>
                </span>
                <span class="sample-app-inventory-text128">
                  of the process is quite
                  <span v-html="rawqoyp"></span>
                </span>
                <span class="sample-app-inventory-text129">
                  similar to
                  <span v-html="rawbaiw"></span>
                </span>
                <span class="sample-app-inventory-text130">
                  the
                  <span v-html="raw5x7p"></span>
                </span>
                <span class="sample-app-inventory-text131">adding stock</span>
                <span class="sample-app-inventory-text132">. </span>
                <span class="sample-app-inventory-text133">
                  At first, the system will display the interface and the user
                  have to
                  <span v-html="raw73z3"></span>
                </span>
                <span class="sample-app-inventory-text134">
                  give the new input data
                </span>
                <span class="sample-app-inventory-text135">
                  to edit the stock in the database.
                </span>
                <br class="sample-app-inventory-text136" />
                <br class="sample-app-inventory-text137" />
                <span class="sample-app-inventory-text138">
                  Let say the
                  <span v-html="rawechc"></span>
                </span>
                <span class="sample-app-inventory-text139">
                  user already filled in both fields
                </span>
                <span class="sample-app-inventory-text140">
                  and pressed the &quot;
                </span>
                <span class="sample-app-inventory-text141">Update Stock</span>
                <span class="sample-app-inventory-text142">
                  &quot; button, the
                  <span v-html="raw55lu"></span>
                </span>
                <span class="sample-app-inventory-text143">
                  system will validate the input given
                  <span v-html="raw7q9d"></span>
                </span>
                <span class="sample-app-inventory-text144">
                  to ensure it meet the criteria before adding it into the
                  database.
                </span>
                <br class="sample-app-inventory-text145" />
                <br class="sample-app-inventory-text146" />
                <span class="sample-app-inventory-text147">
                  By any chance the user
                  <span v-html="raweq2k"></span>
                </span>
                <span class="sample-app-inventory-text148">
                  did not fill in either one of the field
                </span>
                <span class="sample-app-inventory-text149">
                  , an error message, &quot;
                </span>
                <span class="sample-app-inventory-text150">
                  Please fill in this field
                </span>
                <span class="sample-app-inventory-text151">
                  &quot; will pop up to indicate that the field is
                  <span v-html="rawpuvn"></span>
                </span>
                <span class="sample-app-inventory-text152">mandatory</span>
                <span class="sample-app-inventory-text153">.</span>
                <br class="sample-app-inventory-text154" />
                <br class="sample-app-inventory-text155" />
                <span class="sample-app-inventory-text156">
                  The user actually
                  <span v-html="rawt0qx"></span>
                </span>
                <span class="sample-app-inventory-text157">
                  filled in the fields
                  <span v-html="rawc4lc"></span>
                </span>
                <span class="sample-app-inventory-text158">
                  but the
                  <span v-html="raws35u"></span>
                </span>
                <span class="sample-app-inventory-text159">
                  input given in the quantity&apos;s field is not a number
                </span>
                <span class="sample-app-inventory-text160">
                  . If that is the case, then the system will alert the user,
                  displaying &quot;
                </span>
                <span class="sample-app-inventory-text161">
                  Please enter a number
                </span>
                <span class="sample-app-inventory-text162">
                  &quot; which mean the field
                  <span v-html="raww221"></span>
                </span>
                <span class="sample-app-inventory-text163">
                  only accept number
                </span>
                <span class="sample-app-inventory-text164">
                  and the number has to be an
                  <span v-html="raw2koh"></span>
                </span>
                <span class="sample-app-inventory-text165">integer</span>
                <span class="sample-app-inventory-text166">.</span>
                <br class="sample-app-inventory-text167" />
                <br class="sample-app-inventory-text168" />
                <span class="sample-app-inventory-text169">
                  If the number given by the user is
                  <span v-html="rawkabk"></span>
                </span>
                <span class="sample-app-inventory-text170">less than zero</span>
                <span class="sample-app-inventory-text171">
                  , an error message, &quot;
                </span>
                <span class="sample-app-inventory-text172">
                  Value must be greater than or equal to 0
                </span>
                <span class="sample-app-inventory-text173">
                  &quot; is displayed because the
                  <span v-html="rawf2i2"></span>
                </span>
                <span class="sample-app-inventory-text174">
                  number has to be positive
                </span>
                <span class="sample-app-inventory-text175">
                  since the stock exist, can be counted and seen.
                </span>
                <br class="sample-app-inventory-text176" />
                <br class="sample-app-inventory-text177" />
                <span class="sample-app-inventory-text178">
                  When everything is
                  <span v-html="rawnn1x"></span>
                </span>
                <span class="sample-app-inventory-text179">good</span>
                <span class="sample-app-inventory-text180">
                  , the system will
                  <span v-html="rawlbge"></span>
                </span>
                <span class="sample-app-inventory-text181">
                  update it with the newest data
                </span>
                <span class="sample-app-inventory-text182">
                  given by the user, 
                </span>
                <span class="sample-app-inventory-text183">display &quot;</span>
                <span class="sample-app-inventory-text184">
                  Stock has been updated successfully
                </span>
                <span class="sample-app-inventory-text185">&quot;</span>
                <span class="sample-app-inventory-text186">
                  and redirect back to list page
                </span>
                <span class="sample-app-inventory-text187">.</span>
                <br class="sample-app-inventory-text188" />
              </span>
            </div>
          </div>
          <div class="sample-app-inventory-column3">
            <h1 class="sample-app-inventory-text189">
              <span>Deleting Stock</span>
              <br />
            </h1>
            <div class="sample-app-inventory-container09">
              <div class="sample-app-inventory-container10">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/2c_inventory_DeleteStock.png?raw=true"
                  loading="eager"
                  class="sample-app-inventory-image6"
                />
                <span class="sample-app-inventory-text192">
                  <span class="sample-app-inventory-text193">
                    Lastly, the user can
                    <span v-html="raw5eoi"></span>
                  </span>
                  <span class="sample-app-inventory-text194">
                    delete an existing stock
                  </span>
                  <span class="sample-app-inventory-text195">
                    from the database using this feature.
                  </span>
                  <br />
                  <br />
                  <span>
                    This page
                    <span v-html="rawh7zu"></span>
                  </span>
                  <span class="sample-app-inventory-text199">
                    can be accessed
                  </span>
                  <span>
                    from the
                    <span v-html="raw78x2"></span>
                  </span>
                  <span class="sample-app-inventory-text201">Inventory List</span>
                  <span>
                    page as well as
                    <span v-html="raw7ep1"></span>
                  </span>
                  <span class="sample-app-inventory-text203">Edit Details</span>
                  <span>page.</span>
                  <br />
                  <br />
                  <span>
                    From start, the system will display the interface first and
                    then
                    <span v-html="raw34br"></span>
                  </span>
                  <span class="sample-app-inventory-text208">
                    ask for confirmation
                    <span v-html="raww9eu"></span>
                  </span>
                  <span>
                    from the the user if they really want to delete the stock item
                    from the database.
                  </span>
                  <br />
                  <br />
                  <span>If &quot;</span>
                  <span class="sample-app-inventory-text213">Yes, Delete</span>
                  <span>
                    &quot; button is clicked, then the system will
                    <span v-html="raw4i83"></span>
                  </span>
                  <span class="sample-app-inventory-text215">
                    delete the data regarding that stock
                    <span v-html="rawt4u6"></span>
                  </span>
                  <span>from the database and display a message &quot;</span>
                  <span class="sample-app-inventory-text217">
                    Stock has been deleted successfully
                  </span>
                  <span>
                    &quot;. After that, the user will be directed to the list
                    page.
                  </span>
                  <br />
                  <br />
                  <span>If &quot;</span>
                  <span class="sample-app-inventory-text222">Cancel</span>
                  <span>
                    &quot; button is clicked, then the system will
                    <span v-html="rawv8vw"></span>
                  </span>
                  <span class="sample-app-inventory-text224">
                    abort the delete request
                    <span v-html="raws123"></span>
                  </span>
                  <span>
                    and redirect back to the list page hence
                    <span v-html="rawjpcg"></span>
                  </span>
                  <span class="sample-app-inventory-text226">
                    no deletion occur
                  </span>
                  <span>.</span>
                  <br />
                </span>
              </div>
              <div class="sample-app-inventory-container11">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/2%20-%20Inventory/flowchartDelete.png?raw=true"
                  loading="eager"
                  class="sample-app-inventory-image7"
                />
              </div>
            </div>
          </div>
          <span class="sample-app-inventory-text229">
            <span>
              -
              <span v-html="rawa8ds"></span>
            </span>
            <span class="sample-app-inventory-text231">
              Muhammad Ariff Ridzlan
            </span>
          </span>
        </div>
      </div>
    </div>
    <footer class="sample-app-inventory-footer">
      <div class="sample-app-inventory-container12">
        <router-link to="/strace" class="sample-app-inventory-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="sample-app-inventory-text232">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="sample-app-inventory-icon-group">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          class="sample-app-inventory-icon"
        >
          <path
            d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"
          ></path>
        </svg>
      </div>
    </footer>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from '../components/header'

export default {
  name: 'SampleAppInventory',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawmjl4: ' ',
      raww2qu: ' ',
      rawruwy: ' ',
      raw6zwr: ' ',
      raw9kx1: ' ',
      rawbrzv: ' ',
      raw1tuh: ' ',
      rawpaeu: ' ',
      rawsv0e: ' ',
      rawx90u: ' ',
      rawat6p: ' ',
      raw38rv: ' ',
      rawnxkx: ' ',
      raw3mno: ' ',
      rawk9v1: ' ',
      rawubgx: ' ',
      rawnjqe: ' ',
      raw5fl2: ' ',
      rawgvgr: ' ',
      rawrcuu: ' ',
      rawkt41: ' ',
      rawzb5g: ' ',
      raww2f3: ' ',
      raw3liz: ' ',
      rawjhp8: ' ',
      rawad8o: ' ',
      rawao7c: ' ',
      rawa18a: ' ',
      raww8ck: ' ',
      rawhloo: ' ',
      rawkayb: ' ',
      rawqoyp: ' ',
      rawbaiw: ' ',
      raw5x7p: ' ',
      raw73z3: ' ',
      rawechc: ' ',
      raw55lu: ' ',
      raw7q9d: ' ',
      raweq2k: ' ',
      rawpuvn: ' ',
      rawt0qx: ' ',
      rawc4lc: ' ',
      raws35u: ' ',
      raww221: ' ',
      raw2koh: ' ',
      rawkabk: ' ',
      rawf2i2: ' ',
      rawnn1x: ' ',
      rawlbge: ' ',
      raw5eoi: ' ',
      rawh7zu: ' ',
      raw78x2: ' ',
      raw7ep1: ' ',
      raw34br: ' ',
      raww9eu: ' ',
      raw4i83: ' ',
      rawt4u6: ' ',
      rawv8vw: ' ',
      raws123: ' ',
      rawjpcg: ' ',
      rawa8ds: ' ',
    }
  },
  metaInfo: {
    title: 'Strace | Sample Application',
    meta: [
      {
        name: 'description',
        content: 'TPL6213 Project',
      },
      {
        property: 'og:title',
        content: 'Strace',
      },
      {
        property: 'og:description',
        content: 'TPL6213 Project',
      },
    ],
  },
}
</script>

<style scoped>
.sample-app-inventory-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.sample-app-inventory-banner {
  width: 100%;
  height: 275px;
  display: flex;
  transition: 0.3s;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg');
}

.sample-app-inventory-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.sample-app-inventory-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.sample-app-inventory-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-inventory-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-inventory-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-inventory-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-inventory-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-inventory-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-inventory-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-inventory-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-inventory-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-inventory-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-inventory-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-inventory-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-inventory-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-container03 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-inventory-image {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-text003 {
  text-align: justify;
}
.sample-app-inventory-container04 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-inventory-image1 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-column1 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-inventory-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-image2 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-container06 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-image3 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-text054 {
  text-align: justify;
}
.sample-app-inventory-column2 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-inventory-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-image4 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-text111 {
  text-align: justify;
}
.sample-app-inventory-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-image5 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-column3 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-inventory-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.sample-app-inventory-container10 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-inventory-image6 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-text192 {
  text-align: justify;
}
.sample-app-inventory-text193 {
  text-align: justify;
}
.sample-app-inventory-text194 {
  text-align: justify;
}
.sample-app-inventory-text195 {
  text-align: justify;
}
.sample-app-inventory-container11 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-inventory-image7 {
  width: 200px;
  object-fit: cover;
}
.sample-app-inventory-footer {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.sample-app-inventory-container12 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.sample-app-inventory-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.sample-app-inventory-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .sample-app-inventory-container {
    background-color: #f7f7f7;
  }
  .sample-app-inventory-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .sample-app-inventory-main-content {
    flex: 1;
    width: 1300px;
    height: auto;
    box-shadow: 0px 0px 10px 0px #d3d2d6;
    align-items: flex-start;
    padding-top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .sample-app-inventory-heading {
    color: rgb(255, 255, 255);
    width: 1200px;
    height: auto;
    font-size: 64px;
    font-style: normal;
    margin-top: 40px;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 1.15;
    padding-top: 40px;
    border-radius: var(--dl-radius-radius-radius4);
    margin-bottom: 20px;
    padding-bottom: 40px;
    background-size: cover;
    background-image: url("/external/bglandscape-1200w.jpg");
    background-position: bottom left;
  }
  .sample-app-inventory-container01 {
    width: auto;
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 20px;
    justify-content: space-between;
  }
  .sample-app-inventory-navlink {
    color: var(--dl-color-gray-black);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    border-width: 1px;
    margin-right: 30px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .sample-app-inventory-navlink1 {
    color: #A068FF;
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 30px;
    border-width: 1px;
    margin-right: 30px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .sample-app-inventory-navlink2 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 30px;
    border-width: 1px;
    margin-right: 30px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .sample-app-inventory-navlink3 {
    color: var(--dl-color-gray-black);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 30px;
    border-width: 1px;
    margin-right: 30px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .sample-app-inventory-navlink4 {
    color: var(--dl-color-gray-black);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 30px;
    border-width: 1px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .sample-app-inventory-content-here {
    width: 1200px;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .sample-app-inventory-column {
    flex: 1;
    width: 100%;
    align-items: flex-start;
    padding-bottom: 25px;
  }
  .sample-app-inventory-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-inventory-container02 {
    align-self: flex-start;
    margin-top: 20px;
    justify-content: space-between;
  }
  .sample-app-inventory-container03 {
    width: 54%;
  }
  .sample-app-inventory-image {
    width: 100%;
    height: auto;
    align-self: flex-start;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-inventory-text003 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-top: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .sample-app-inventory-text005 {
    font-weight: 700;
  }
  .sample-app-inventory-text007 {
    font-weight: 700;
  }
  .sample-app-inventory-text012 {
    font-weight: 700;
  }
  .sample-app-inventory-text014 {
    font-weight: 700;
  }
  .sample-app-inventory-text016 {
    font-weight: 700;
  }
  .sample-app-inventory-text019 {
    font-weight: 700;
  }
  .sample-app-inventory-text024 {
    font-weight: 700;
  }
  .sample-app-inventory-text029 {
    font-weight: 700;
  }
  .sample-app-inventory-text034 {
    font-weight: 700;
  }
  .sample-app-inventory-image1 {
    width: 545px;
    height: 680px;
  }
  .sample-app-inventory-column1 {
    flex: 1;
    width: 100%;
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-inventory-text037 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-inventory-container05 {
    align-items: center;
  }
  .sample-app-inventory-image2 {
    width: 668px;
    height: 187px;
    align-self: flex-start;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-inventory-text040 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
  }
  .sample-app-inventory-text042 {
    font-weight: 700;
  }
  .sample-app-inventory-text047 {
    font-style: italic;
  }
  .sample-app-inventory-text052 {
    font-style: italic;
  }
  .sample-app-inventory-container06 {
    margin-top: 20px;
  }
  .sample-app-inventory-image3 {
    width: 662px;
    height: 515px;
    align-self: flex-start;
  }
  .sample-app-inventory-text054 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-fourunits);
  }
  .sample-app-inventory-text055 {
    text-transform: inherit;
  }
  .sample-app-inventory-text056 {
    font-weight: 700;
    text-transform: inherit;
  }
  .sample-app-inventory-text057 {
    text-transform: inherit;
  }
  .sample-app-inventory-text058 {
    font-weight: 700;
    text-transform: inherit;
  }
  .sample-app-inventory-text059 {
    text-transform: inherit;
  }
  .sample-app-inventory-text063 {
    font-weight: 700;
  }
  .sample-app-inventory-text065 {
    font-weight: 700;
  }
  .sample-app-inventory-text070 {
    font-weight: 700;
  }
  .sample-app-inventory-text072 {
    font-style: italic;
  }
  .sample-app-inventory-text074 {
    font-weight: 700;
  }
  .sample-app-inventory-text079 {
    font-weight: 700;
  }
  .sample-app-inventory-text081 {
    font-weight: 700;
  }
  .sample-app-inventory-text083 {
    font-style: italic;
  }
  .sample-app-inventory-text085 {
    font-weight: 700;
  }
  .sample-app-inventory-text087 {
    font-weight: 700;
  }
  .sample-app-inventory-text092 {
    font-weight: 700;
  }
  .sample-app-inventory-text094 {
    font-style: italic;
  }
  .sample-app-inventory-text096 {
    font-weight: 700;
  }
  .sample-app-inventory-text101 {
    font-weight: 700;
  }
  .sample-app-inventory-text103 {
    font-weight: 700;
  }
  .sample-app-inventory-text105 {
    font-style: italic;
  }
  .sample-app-inventory-column2 {
    flex: 1;
    width: 100%;
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-inventory-text108 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-inventory-image4 {
    width: 668px;
    height: 187px;
    align-self: flex-start;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-inventory-text111 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
  }
  .sample-app-inventory-text113 {
    font-weight: 700;
  }
  .sample-app-inventory-text118 {
    font-style: italic;
  }
  .sample-app-inventory-text123 {
    font-style: italic;
  }
  .sample-app-inventory-container08 {
    margin-top: 20px;
  }
  .sample-app-inventory-image5 {
    width: 653px;
    height: 529px;
    align-self: flex-start;
  }
  .sample-app-inventory-text125 {
    font-size: 16px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-fourunits);
  }
  .sample-app-inventory-text126 {
    font-style: normal;
  }
  .sample-app-inventory-text127 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text128 {
    font-style: normal;
  }
  .sample-app-inventory-text129 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text130 {
    font-style: normal;
  }
  .sample-app-inventory-text131 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text132 {
    font-style: normal;
  }
  .sample-app-inventory-text133 {
    font-style: normal;
  }
  .sample-app-inventory-text134 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text135 {
    font-style: normal;
  }
  .sample-app-inventory-text136 {
    font-style: normal;
  }
  .sample-app-inventory-text137 {
    font-style: normal;
  }
  .sample-app-inventory-text138 {
    font-style: normal;
  }
  .sample-app-inventory-text139 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text140 {
    font-style: normal;
  }
  .sample-app-inventory-text141 {
    font-style: italic;
  }
  .sample-app-inventory-text142 {
    font-style: normal;
  }
  .sample-app-inventory-text143 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text144 {
    font-style: normal;
  }
  .sample-app-inventory-text145 {
    font-style: normal;
  }
  .sample-app-inventory-text146 {
    font-style: normal;
  }
  .sample-app-inventory-text147 {
    font-style: normal;
  }
  .sample-app-inventory-text148 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text149 {
    font-style: normal;
  }
  .sample-app-inventory-text150 {
    font-style: italic;
  }
  .sample-app-inventory-text151 {
    font-style: normal;
  }
  .sample-app-inventory-text152 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text153 {
    font-style: normal;
  }
  .sample-app-inventory-text154 {
    font-style: normal;
  }
  .sample-app-inventory-text155 {
    font-style: normal;
  }
  .sample-app-inventory-text156 {
    font-style: normal;
  }
  .sample-app-inventory-text157 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text158 {
    font-style: normal;
  }
  .sample-app-inventory-text159 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text160 {
    font-style: normal;
  }
  .sample-app-inventory-text161 {
    font-style: italic;
  }
  .sample-app-inventory-text162 {
    font-style: normal;
  }
  .sample-app-inventory-text163 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text164 {
    font-style: normal;
  }
  .sample-app-inventory-text165 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text166 {
    font-style: normal;
  }
  .sample-app-inventory-text167 {
    font-style: normal;
  }
  .sample-app-inventory-text168 {
    font-style: normal;
  }
  .sample-app-inventory-text169 {
    font-style: normal;
  }
  .sample-app-inventory-text170 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text171 {
    font-style: normal;
  }
  .sample-app-inventory-text172 {
    font-style: italic;
  }
  .sample-app-inventory-text173 {
    font-style: normal;
  }
  .sample-app-inventory-text174 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text175 {
    font-style: normal;
  }
  .sample-app-inventory-text176 {
    font-style: normal;
  }
  .sample-app-inventory-text177 {
    font-style: normal;
  }
  .sample-app-inventory-text178 {
    font-style: normal;
  }
  .sample-app-inventory-text179 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text180 {
    font-style: normal;
  }
  .sample-app-inventory-text181 {
    font-style: normal;
    font-weight: 700;
  }
  .sample-app-inventory-text182 {
    font-style: normal;
  }
  .sample-app-inventory-text183 {
    font-style: normal;
    font-weight: 400;
  }
  .sample-app-inventory-text184 {
    font-style: italic;
    font-weight: 400;
  }
  .sample-app-inventory-text185 {
    font-style: normal;
    font-weight: 400;
  }
  .sample-app-inventory-text186 {
    font-style: inherit;
    font-weight: 400;
  }
  .sample-app-inventory-text187 {
    font-style: normal;
    font-weight: bold;
  }
  .sample-app-inventory-text188 {
    font-style: normal;
  }
  .sample-app-inventory-column3 {
    flex: 1;
    width: 100%;
    align-items: flex-start;
    padding-top: 25px;
  }
  .sample-app-inventory-text189 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-inventory-container09 {
    height: auto;
  }
  .sample-app-inventory-container10 {
    width: 56%;
  }
  .sample-app-inventory-image6 {
    width: 668px;
    height: 184px;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-inventory-text192 {
    font-size: 16px;
    font-style: normal;
    margin-top: 30px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-inventory-text193 {
    margin-top: 30px;
    text-align: justify;
  }
  .sample-app-inventory-text194 {
    margin-top: 30px;
    text-align: justify;
    font-weight: 700;
  }
  .sample-app-inventory-text195 {
    margin-top: 30px;
    text-align: justify;
  }
  .sample-app-inventory-text199 {
    font-weight: 700;
  }
  .sample-app-inventory-text201 {
    font-weight: 700;
  }
  .sample-app-inventory-text203 {
    font-weight: 700;
  }
  .sample-app-inventory-text208 {
    font-weight: 700;
  }
  .sample-app-inventory-text213 {
    font-style: italic;
  }
  .sample-app-inventory-text215 {
    font-weight: 700;
  }
  .sample-app-inventory-text217 {
    font-style: italic;
  }
  .sample-app-inventory-text222 {
    font-style: italic;
  }
  .sample-app-inventory-text224 {
    font-weight: 700;
  }
  .sample-app-inventory-text226 {
    font-weight: 700;
  }
  .sample-app-inventory-container11 {
    margin-left: var(--dl-space-space-fourunits);
  }
  .sample-app-inventory-image7 {
    width: 450px;
    height: 643px;
  }
  .sample-app-inventory-text229 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .sample-app-inventory-text231 {
    font-style: italic;
  }
  .sample-app-inventory-footer {
    justify-content: space-between;
  }
  .sample-app-inventory-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .sample-app-inventory-text232 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .sample-app-inventory-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .sample-app-inventory-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .sample-app-inventory-footer {
    align-self: center;
  }
  .sample-app-inventory-icon-group {
    display: none;
  }
}
</style>
