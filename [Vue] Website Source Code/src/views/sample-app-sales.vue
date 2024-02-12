<template>
  <div class="sample-app-sales-container">
    <div class="sample-app-sales-banner">
      <div class="sample-app-sales-main-content">
        <h1 class="sample-app-sales-heading">SAMPLE APPLICATION</h1>
        <div class="sample-app-sales-container1">
          <router-link
            to="/sample-app-intro"
            class="sample-app-sales-navlink button"
          >
            Introduction
          </router-link>
          <router-link
            to="/sample-app-inventory"
            class="sample-app-sales-navlink1 button"
          >
            Inventory
          </router-link>
          <router-link
            to="/sample-app-purchases"
            class="sample-app-sales-navlink2 button"
          >
            Purchases
          </router-link>
          <router-link
            to="/sample-app-sales"
            class="sample-app-sales-navlink3 button"
          >
            Sales
          </router-link>
          <router-link
            to="/sample-app-suppliers"
            class="sample-app-sales-navlink4 button"
          >
            Suppliers
          </router-link>
        </div>
        <div class="sample-app-sales-content-here">
          <h1 class="sample-app-sales-text">
            <span>Sales List</span>
            <br />
          </h1>
          <div class="sample-app-sales-list">
            <div class="sample-app-sales-container2">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4_sales_List.png"
                class="sample-app-sales-image"
              />
              <span class="sample-app-sales-text03">
                <span>
                  The Sales List system provide user with list of sales that
                  display number of sales, customers, stocks sold, quantity sold,
                  total sold price and date. This data can help the user to
                  organize sales efficiently.
                </span>
                <br />
                <br />
                <span>
                  This system have other features such as Add Sales, View and
                  Delete bill. By clicking the button, it will redirect the user
                  to the page that the user want to.
                </span>
                <br />
                <span>  </span>
              </span>
            </div>
            <img
              alt="image"
              src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/sales%20list%20(1).png"
              class="sample-app-sales-image1"
            />
          </div>
          <div class="sample-app-sales-add">
            <h1 class="sample-app-sales-text10">
              <span>Add Sales</span>
              <br />
            </h1>
            <div class="sample-app-sales-container3">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4a_sales_AddSale.png"
                class="sample-app-sales-image2"
              />
              <span class="sample-app-sales-text13">
                <span>
                  Users add item data and buyer information for a sale in this
                  process. The programme looks for blank fields and directs users
                  to complete any that are left blank. It makes that phone numbers
                  are ten digits, emails adhere to the @ format, and names are
                  just letters and spaces.
                </span>
                <br />
                <br />
                <span>
                  Users enter amounts for items, and the system determines if
                  those values are higher than or equal to zero. In the event that
                  any entry is wrong, users are notified clearly.
                </span>
                <br />
                <br />
                <span>
                  The user adds things to the sale after validation. Stock amounts
                  are updated and the sale bill number rises. Users receive a
                  confirmation message confirming successful item registration.
                </span>
                <br />
                <br />
                <span>
                  The procedure is finally finished when the system generates a
                  sales bill. This simple technique assists users in entering
                  precise and verified information.
                </span>
                <br />
              </span>
            </div>
            <img
              alt="image"
              src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/add%20sales.drawio.png"
              class="sample-app-sales-image3"
            />
          </div>
          <div class="sample-app-sales-view">
            <h1 class="sample-app-sales-text25">View Bill</h1>
            <span class="sample-app-sales-text26">
              Now, users can view their generated bill with the option to print or
              save it as a PDF. If they wish to go back, the system redirects them
              to the previous page or list. This straightforward enhancement makes
              it easy for users to access and manage their transaction details.
            </span>
            <div class="sample-app-sales-container4">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4b_sales_ViewBill.png"
                class="sample-app-sales-image4"
              />
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/sales%20list%20(2).png"
                class="sample-app-sales-image5"
              />
            </div>
          </div>
          <div class="sample-app-sales-delete">
            <h1 class="sample-app-sales-text27">Delete Bill</h1>
            <div class="sample-app-sales-container5">
              <div class="sample-app-sales-container6">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/4c_sales_DeleteBill.png"
                  class="sample-app-sales-image6"
                />
                <span class="sample-app-sales-text28">
                  On delete bill page users can easily delete a chosen sale bill.
                  When they confirm by selecting &quot;Yes,&quot; the chosen bill
                  is removed from the list without disrupting the sequential
                  numbering. A confirmation message confirms the successful
                  deletion. Choosing &quot;Cancel&quot; redirects users to the
                  bill list, streamlining the process of managing sales records.
                </span>
              </div>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/4%20-%20Sales/sales%20list%20(3).png"
                class="sample-app-sales-image7"
              />
            </div>
          </div>
          <span class="sample-app-sales-text29">-Muhammad Nabil Irfan</span>
        </div>
      </div>
    </div>
    <footer class="sample-app-sales-footer">
      <div class="sample-app-sales-container7">
        <router-link to="/strace" class="sample-app-sales-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="sample-app-sales-text30">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="sample-app-sales-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="sample-app-sales-icon">
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
  name: 'SampleAppSales',
  props: {},
  components: {
    AppHeader,
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
.sample-app-sales-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.sample-app-sales-banner {
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

.sample-app-sales-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.sample-app-sales-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.sample-app-sales-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.sample-app-sales-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-sales-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-sales-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-sales-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-sales-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-sales-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-sales-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-sales-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-sales-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-sales-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-sales-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-list {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-container2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-image {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-image1 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-add {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-container3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-image2 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-image3 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-view {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-sales-image4 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-image5 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-delete {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-container5 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.sample-app-sales-container6 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-sales-image6 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-image7 {
  width: 200px;
  object-fit: cover;
}
.sample-app-sales-footer {
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
.sample-app-sales-container7 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.sample-app-sales-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.sample-app-sales-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .sample-app-sales-container {
    background-color: #f7f7f7;
  }
  .sample-app-sales-banner {
    height: auto;
    position: relative;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .sample-app-sales-main-content {
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
  .sample-app-sales-heading {
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
  .sample-app-sales-container1 {
    width: auto;
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 20px;
    justify-content: space-between;
  }
  .sample-app-sales-navlink {
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
  .sample-app-sales-navlink1 {
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
  .sample-app-sales-navlink2 {
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
  .sample-app-sales-navlink3 {
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
  .sample-app-sales-navlink4 {
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
  .sample-app-sales-content-here {
    width: 1200px;
    position: relative;
    align-self: flex-start;
    align-items: flex-start;
    margin-left: 50px;
    padding-top: var(--dl-space-space-fiveunits);
    margin-right: 50px;
    padding-bottom: var(--dl-space-space-threeunits);
    justify-content: flex-start;
  }
  .sample-app-sales-text {
    font-size: 36px;
    align-self: flex-start;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .sample-app-sales-list {
    width: 100%;
    align-self: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
  .sample-app-sales-container2 {
    width: 70%;
    align-self: center;
  }
  .sample-app-sales-image {
    width: 100%;
    height: auto;
    padding-bottom: 0px;
  }
  .sample-app-sales-text03 {
    font-size: 16px;
    font-style: normal;
    margin-top: var(--dl-space-space-fourunits);
    text-align: left;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-top: 0px;
  }
  .sample-app-sales-image1 {
    width: 306px;
    height: 466px;
    padding-left: 0px;
  }
  .sample-app-sales-add {
    align-self: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-sales-text10 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-sales-container3 {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 25px;
    flex-direction: row;
  }
  .sample-app-sales-image2 {
    width: 663px;
    height: 322px;
    align-self: center;
  }
  .sample-app-sales-text13 {
    font-size: 16px;
    align-self: flex-start;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
  }
  .sample-app-sales-image3 {
    width: 855px;
    height: 737px;
    align-self: center;
  }
  .sample-app-sales-view {
    width: 100%;
    align-self: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-sales-text25 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-bottom: 30px;
  }
  .sample-app-sales-text26 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    padding-bottom: 25px;
  }
  .sample-app-sales-container4 {
    justify-content: space-between;
  }
  .sample-app-sales-image4 {
    width: 729px;
    height: 455px;
    align-self: center;
  }
  .sample-app-sales-image5 {
    width: 474px;
    height: 461px;
    align-self: center;
    margin-bottom: 0px;
  }
  .sample-app-sales-delete {
    width: 100%;
    height: auto;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-sales-text27 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .sample-app-sales-container5 {
    align-items: center;
    justify-content: space-between;
  }
  .sample-app-sales-container6 {
    width: 60%;
  }
  .sample-app-sales-image6 {
    width: 720px;
    height: 196px;
  }
  .sample-app-sales-text28 {
    font-size: 16px;
    font-style: normal;
    margin-top: 30px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-sales-image7 {
    width: 497px;
    height: 387px;
  }
  .sample-app-sales-text29 {
    font-size: 18px;
    align-self: flex-end;
    font-style: italic;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .sample-app-sales-footer {
    width: 100%;
    height: auto;
    justify-content: space-between;
  }
  .sample-app-sales-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .sample-app-sales-text30 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .sample-app-sales-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .sample-app-sales-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .sample-app-sales-footer {
    align-self: center;
  }
  .sample-app-sales-icon-group {
    display: none;
  }
}
</style>
