<template>
  <div class="sample-app-suppliers-container">
    <div class="sample-app-suppliers-banner">
      <div class="sample-app-suppliers-main-content">
        <h1 class="sample-app-suppliers-heading">SAMPLE APPLICATION</h1>
        <div class="sample-app-suppliers-container01">
          <router-link
            to="/sample-app-intro"
            class="sample-app-suppliers-navlink button"
          >
            Introduction
          </router-link>
          <router-link
            to="/sample-app-inventory"
            class="sample-app-suppliers-navlink1 button"
          >
            Inventory
          </router-link>
          <router-link
            to="/sample-app-purchases"
            class="sample-app-suppliers-navlink2 button"
          >
            Purchases
          </router-link>
          <router-link
            to="/sample-app-sales"
            class="sample-app-suppliers-navlink3 button"
          >
            Sales
          </router-link>
          <router-link
            to="/sample-app-suppliers"
            class="sample-app-suppliers-navlink4 button"
          >
            Suppliers
          </router-link>
        </div>
        <div class="sample-app-suppliers-content-here">
          <div class="sample-app-suppliers-column">
            <h1 class="sample-app-suppliers-text">
              <span>Suppliers List</span>
              <br />
            </h1>
            <div class="sample-app-suppliers-list">
              <div class="sample-app-suppliers-container02">
                <span class="sample-app-suppliers-text03">
                  <span>
                    The suppliers list in the Inventory Management System list to
                    all suppliers. 
                  </span>
                  <br />
                  <span>
                    The suppliers list show the name of the suppliers, their
                    contact number, 
                  </span>
                  <span>GSTIN number. </span>
                  <br />
                  <br />
                  <span>
                    There are a number of key features in the Suppliers List
                    page. 
                  </span>
                  <br />
                  <span>
                    Here we can add new suppliers, view the details of suppliers, 
                  </span>
                  <span>
                    edit the details of
                    <span v-html="rawbgid"></span>
                  </span>
                  <br />
                  <span>suppliers and delete suppliers. </span>
                  <br />
                  <br />
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5_suppliers_List.png?raw=true"
                  loading="eager"
                  class="sample-app-suppliers-image"
                />
              </div>
              <div class="sample-app-suppliers-container03">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/Supplier%20List.png?raw=true"
                  loading="eager"
                  class="sample-app-suppliers-image01"
                />
                <span class="sample-app-suppliers-text18">
                  <span>Flowchart for Suppliers List</span>
                  <br />
                </span>
              </div>
            </div>
            <div class="sample-app-suppliers-add">
              <h1 class="sample-app-suppliers-text21">Adding Supplier</h1>
              <span class="sample-app-suppliers-text22">
                <span class="sample-app-suppliers-text23">
                  To add a new supplier, click on the Add New Supplier button. It
                  will prompt you into a new page.
                </span>
                <br />
                <br />
              </span>
              <div class="sample-app-suppliers-container04">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5a_suppliers_Add.png?raw=true"
                  loading="eager"
                  class="sample-app-suppliers-image02"
                />
                <span class="sample-app-suppliers-text26">
                  <span class="sample-app-suppliers-text27">
                    You will be presented with a number of fields. Name, Phone No,
                    Email ID, Address and GSTIN No.
                  </span>
                  <br class="sample-app-suppliers-text28" />
                  <br class="sample-app-suppliers-text29" />
                  <span class="sample-app-suppliers-text30">
                    All field must be filled in order to successfully add new
                    supplier. &quot;Please fill in this field&quot; message will
                    be present.
                  </span>
                  <br />
                  <br />
                  <span>
                    The name field only accepts alphabets and spaces otherwise
                    &quot;Please match the format requested. Alphabets and Spaces
                    only.&quot; will be print.
                  </span>
                  <br />
                  <br />
                  <span>
                    The phone number field accepts exactly 10 digits
                    only. &quot;Please match the format requested. Numbers
                    only.&quot; will come if it is not fullfiled.
                  </span>
                  <br />
                </span>
              </div>
              <span class="sample-app-suppliers-text38">
                <span class="sample-app-suppliers-text39">
                  The email ID field must contain &quot;@&quot;. &quot;Please
                  include an &apos;@&apos; in the email address. I
                </span>
                <span class="sample-app-suppliers-text40">
                  t is missing an &apos;@&apos;.&quot;. The position &quot;@&quot;
                  is very important, if it is in the frontmost, &quot;Please enter
                  a part following &apos;@&apos;. It is incomplete.&quot;. If
                  &quot;@&quot; is at the backmost, it will print &quot;Please
                  enter a part followed by &apos;@&apos;. It is incomplete.&quot;.
                  If &quot;.&quot; is directly after
                  &quot;@&quot;, &quot;&apos;.&apos; is used at a wrong
                  position.&quot; will be present.
                </span>
                <br />
                <br />
                <span>
                  The address accepts any input, as long there is an input, it is
                  fine.
                </span>
                <br />
                <br />
                <span>
                  The GSTIN number only accepts exactly 15 digit number.
                  Otherwise, &quot;Please match the format requested. GSTIN Format
                  Requested&quot;. will be asked.
                </span>
                <br />
                <br />
                <span>
                  Then you can successfully add a new supplier. To clear all
                  fields, just click the resent button.
                </span>
                <br />
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/New%20Supplier%20(1).png?raw=true"
                loading="eager"
                class="sample-app-suppliers-image03"
              />
              <span class="sample-app-suppliers-text51">
                <span>
                  Flowchart for Adding Suppliers
                  <span v-html="rawz6fz"></span>
                </span>
                <br />
              </span>
            </div>
            <div class="sample-app-suppliers-view">
              <h1 class="sample-app-suppliers-text54">
                Viewing Suppliers Detail
              </h1>
              <div class="sample-app-suppliers-container05">
                <div class="sample-app-suppliers-container06">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5b_suppliers_View.png?raw=true"
                    loading="eager"
                    class="sample-app-suppliers-image04"
                  />
                  <span class="sample-app-suppliers-text55">
                    <span class="sample-app-suppliers-text56">
                      To view each suppliers, you need to click on the suppliers
                      name you wish to view. The suppliers name act as hypertexts
                      that will direct you to a new viewing page.  
                    </span>
                    <br />
                    <br />
                    <span>
                      In this page you can see more detailed information about the
                      suppliers. 
                    </span>
                    <br />
                    <br />
                    <span>
                      Other than what you in the Supplier List page, you will get
                      to see the Address, Bill No, Stocks, Quantity, Total
                      Purchased Price, Purchase Date. You are also presented the
                      choice to view or delete the bill and edit the suppliers
                      contact, email ID, GSTIN number. It will direct you to edit
                      supplier page.
                    </span>
                    <br />
                  </span>
                </div>
                <div class="sample-app-suppliers-container07">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/View%20Supplier.png?raw=true"
                    loading="eager"
                    class="sample-app-suppliers-image05"
                  />
                  <span class="sample-app-suppliers-text64">
                    <span>Flowchart for Viewing Suppliers Detail</span>
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div class="sample-app-suppliers-edit">
              <h1 class="sample-app-suppliers-text67">
                <span>Editing Supplier Detail</span>
                <br />
              </h1>
              <span class="sample-app-suppliers-text70">
                <span>
                  Editing is exactly the same as adding new suppliers, the major
                  difference is editing suppliers
                  <span v-html="rawuh5j"></span>
                </span>
                <span>
                  are
                  <span v-html="raw3fc9"></span>
                </span>
                <span>only </span>
                <br />
                <span>
                  applicable to existing suppliers and you can directly delete the
                  suppliers from this page.
                </span>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5c_suppliers_Edit.png?raw=true"
                loading="eager"
                class="sample-app-suppliers-image06"
              />
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/Edit%20Supplier%20(1).png?raw=true"
                loading="eager"
                class="sample-app-suppliers-image07"
              />
              <span class="sample-app-suppliers-text76">
                <span>Flowchart for Editing Suppliers Detail</span>
                <br />
              </span>
            </div>
            <div class="sample-app-suppliers-delete">
              <h1 class="sample-app-suppliers-text79">Deleting Supplier</h1>
              <div class="sample-app-suppliers-container08">
                <div class="sample-app-suppliers-container09">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/5d_suppliers_Delete.png?raw=true"
                    loading="eager"
                    class="sample-app-suppliers-image08"
                  />
                  <span class="sample-app-suppliers-text80">
                    <span>
                      Upon clicking the delete button, it will direct you to this
                      page. If you continue to click &quot;Yes, Delete&quot;.
                    </span>
                    <br />
                    <span>
                      It will delete the sale bill and the supplier information
                      and display  &quot;Supplier has been deleted
                      successfully.&quot;.
                    </span>
                    <br />
                    <span>
                      If you click &quot;Cancel&quot;, it will redirect you to the
                      Supplier List page.
                    </span>
                    <br />
                  </span>
                </div>
                <div class="sample-app-suppliers-container10">
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/5%20-%20Suppliers/Delete%20Supplier.png?raw=true"
                    loading="eager"
                    class="sample-app-suppliers-image09"
                  />
                  <span class="sample-app-suppliers-text87">
                    <span>
                      Flowchart for Deleting Suppliers
                      <span v-html="rawy8zi"></span>
                    </span>
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span class="sample-app-suppliers-text90">
            <span>
              -
              <span v-html="rawt5je"></span>
            </span>
            <span class="sample-app-suppliers-text92">Muhammad Hafiz</span>
          </span>
        </div>
      </div>
    </div>
    <footer class="sample-app-suppliers-footer">
      <div class="sample-app-suppliers-container11">
        <router-link to="/strace" class="sample-app-suppliers-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="sample-app-suppliers-text93">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="sample-app-suppliers-icon-group">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          class="sample-app-suppliers-icon"
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
  name: 'SampleAppSuppliers',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawbgid: ' ',
      rawz6fz: ' ',
      rawuh5j: ' ',
      raw3fc9: ' ',
      rawy8zi: ' ',
      rawt5je: ' ',
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
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  },
}
</script>

<style scoped>
.sample-app-suppliers-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.sample-app-suppliers-banner {
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

.sample-app-suppliers-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.sample-app-suppliers-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.sample-app-suppliers-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.sample-app-suppliers-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-suppliers-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-suppliers-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-suppliers-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-suppliers-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-suppliers-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-suppliers-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-suppliers-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-suppliers-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-suppliers-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-suppliers-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-suppliers-list {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-suppliers-container02 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-text03 {
  text-align: justify;
}
.sample-app-suppliers-image {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-container03 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-image01 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text18 {
  text-align: justify;
}
.sample-app-suppliers-add {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-suppliers-text22 {
  text-align: justify;
}
.sample-app-suppliers-text23 {
  text-align: justify;
}
.sample-app-suppliers-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-suppliers-image02 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text26 {
  text-align: justify;
}
.sample-app-suppliers-text27 {
  text-align: justify;
}
.sample-app-suppliers-text30 {
  text-align: justify;
}
.sample-app-suppliers-text38 {
  text-align: justify;
}
.sample-app-suppliers-text39 {
  text-align: justify;
}
.sample-app-suppliers-text40 {
  text-align: justify;
}
.sample-app-suppliers-image03 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text51 {
  text-align: justify;
}
.sample-app-suppliers-view {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-suppliers-container06 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-image04 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text55 {
  text-align: justify;
}
.sample-app-suppliers-text56 {
  text-align: justify;
}
.sample-app-suppliers-container07 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-image05 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text64 {
  text-align: justify;
}
.sample-app-suppliers-edit {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-suppliers-text70 {
  text-align: justify;
}
.sample-app-suppliers-image06 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-image07 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text76 {
  text-align: justify;
}
.sample-app-suppliers-delete {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-container08 {
  flex: 0 0 auto;
  width: auto;
  height: 436px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.sample-app-suppliers-container09 {
  flex: 0 0 auto;
  width: auto;
  height: 436px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.sample-app-suppliers-image08 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text80 {
  text-align: justify;
}
.sample-app-suppliers-container10 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-suppliers-image09 {
  width: 200px;
  object-fit: cover;
}
.sample-app-suppliers-text87 {
  text-align: justify;
}
.sample-app-suppliers-footer {
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
.sample-app-suppliers-container11 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.sample-app-suppliers-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.sample-app-suppliers-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .sample-app-suppliers-container {
    background-color: #f7f7f7;
  }
  .sample-app-suppliers-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .sample-app-suppliers-main-content {
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
  .sample-app-suppliers-heading {
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
  .sample-app-suppliers-container01 {
    width: auto;
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 20px;
    justify-content: space-between;
  }
  .sample-app-suppliers-navlink {
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
  .sample-app-suppliers-navlink1 {
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
  .sample-app-suppliers-navlink2 {
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
  .sample-app-suppliers-navlink3 {
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
  .sample-app-suppliers-navlink4 {
    color: #A068FF;
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
  .sample-app-suppliers-content-here {
    width: 1200px;
    height: auto;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .sample-app-suppliers-column {
    flex: 1;
    width: 100%;
    height: auto;
    position: relative;
    align-items: flex-start;
    border-color: rgba(0, 0, 0, 0);
    border-width: 1px;
  }
  .sample-app-suppliers-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-list {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 25px;
    justify-content: space-between;
  }
  .sample-app-suppliers-text03 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-image {
    width: 642px;
    height: 307px;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .sample-app-suppliers-image01 {
    width: 368px;
    height: 409px;
    padding-bottom: 0px;
  }
  .sample-app-suppliers-text18 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-add {
    align-self: center;
    padding-top: 30px;
    flex-direction: column;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-text21 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-text22 {
    font-size: 16px;
    align-self: flex-start;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    text-transform: inherit;
  }
  .sample-app-suppliers-text23 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-container04 {
    align-items: center;
  }
  .sample-app-suppliers-image02 {
    width: 724px;
    height: 303px;
    align-self: flex-start;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .sample-app-suppliers-text26 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
    text-transform: inherit;
  }
  .sample-app-suppliers-text27 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-text28 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-text29 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-text30 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-text38 {
    font-size: 16px;
    align-self: flex-start;
    font-style: normal;
    margin-top: 25px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 25px;
    text-transform: inherit;
  }
  .sample-app-suppliers-text39 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-text40 {
    align-self: flex-start;
    text-align: justify;
  }
  .sample-app-suppliers-image03 {
    width: 100%;
    height: 428px;
    align-self: center;
  }
  .sample-app-suppliers-text51 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-view {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-text54 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-container05 {
    align-items: center;
    justify-content: space-between;
  }
  .sample-app-suppliers-container06 {
    width: 55%;
  }
  .sample-app-suppliers-image04 {
    width: 100%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .sample-app-suppliers-text55 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-top: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-fourunits);
    text-transform: inherit;
  }
  .sample-app-suppliers-text56 {
    text-align: justify;
  }
  .sample-app-suppliers-container07 {
    margin-right: var(--dl-space-space-fourunits);
  }
  .sample-app-suppliers-image05 {
    width: 418px;
    height: 438px;
  }
  .sample-app-suppliers-text64 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-edit {
    padding-top: 30px;
    flex-direction: column;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-text67 {
    font-size: 36px;
    align-self: flex-start;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-text70 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fiveunits);
    margin-bottom: 15px;
    text-transform: inherit;
  }
  .sample-app-suppliers-image06 {
    width: 764px;
    height: 304px;
    align-self: flex-start;
    box-shadow: -10px 5px 10px 0px #d4d4d4;
    margin-left: var(--dl-space-space-fiveunits);
  }
  .sample-app-suppliers-image07 {
    width: 100%;
    height: 441px;
    align-self: flex-start;
    margin-top: 15px;
  }
  .sample-app-suppliers-text76 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    margin-top: 15px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-delete {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-suppliers-text79 {
    font-size: 36px;
    padding-bottom: 30px;
  }
  .sample-app-suppliers-container08 {
    height: auto;
    justify-content: space-between;
  }
  .sample-app-suppliers-container09 {
    width: 60%;
    height: auto;
    align-self: center;
    flex-direction: column;
  }
  .sample-app-suppliers-image08 {
    width: 100%;
    height: 170px;
    box-shadow: -5px 5px 10px 0px #d4d4d4;
  }
  .sample-app-suppliers-text80 {
    font-size: 16px;
    align-self: flex-start;
    font-style: normal;
    margin-top: var(--dl-space-space-fourunits);
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-container10 {
    align-items: center;
    margin-right: var(--dl-space-space-threeunits);
  }
  .sample-app-suppliers-image09 {
    width: 379px;
    height: 436px;
  }
  .sample-app-suppliers-text87 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-suppliers-text90 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .sample-app-suppliers-text92 {
    font-style: italic;
  }
  .sample-app-suppliers-footer {
    justify-content: space-between;
  }
  .sample-app-suppliers-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .sample-app-suppliers-text93 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .sample-app-suppliers-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .sample-app-suppliers-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .sample-app-suppliers-footer {
    align-self: center;
  }
  .sample-app-suppliers-icon-group {
    display: none;
  }
}
</style>
