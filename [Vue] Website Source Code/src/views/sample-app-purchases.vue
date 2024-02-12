<template>
  <div class="sample-app-purchases-container">
    <div class="sample-app-purchases-banner">
      <div class="sample-app-purchases-main-content">
        <h1 class="sample-app-purchases-heading">SAMPLE APPLICATION</h1>
        <div class="sample-app-purchases-container01">
          <router-link
            to="/sample-app-intro"
            class="sample-app-purchases-navlink button"
          >
            Introduction
          </router-link>
          <router-link
            to="/sample-app-inventory"
            class="sample-app-purchases-navlink1 button"
          >
            Inventory
          </router-link>
          <router-link
            to="/sample-app-purchases"
            class="sample-app-purchases-navlink2 button"
          >
            Purchases
          </router-link>
          <router-link
            to="/sample-app-sales"
            class="sample-app-purchases-navlink3 button"
          >
            Sales
          </router-link>
          <router-link
            to="/sample-app-suppliers"
            class="sample-app-purchases-navlink4 button"
          >
            Suppliers
          </router-link>
        </div>
        <div class="sample-app-purchases-content-here">
          <div class="sample-app-purchases-column">
            <h1 class="sample-app-purchases-text">
              <span>Purchases List</span>
              <br />
            </h1>
            <span class="sample-app-purchases-text03">
              <span>
                A purchases list in inventory management refers to a detailed
                record of all goods or materials acquired by a business within a
                specified period. This list typically includes information such as
                the date of purchase, supplier details, stocks purchased,
                quantities, and total price. This data is crucial for businesses
                to make informed decisions about restocking, pricing, and supplier
                relationships.
              </span>
              <br />
              <br />
              <span>
                The figure below is the interface of the Purchases List from the
                applications:-
                <span v-html="rawnfr3"></span>
              </span>
            </span>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3_purchase_List.png?raw=true"
              loading="eager"
              class="sample-app-purchases-image"
            />
          </div>
          <div class="sample-app-purchases-column1">
            <h1 class="sample-app-purchases-text08">
              <span>Adding Purchase</span>
              <br />
            </h1>
            <div class="sample-app-purchases-container02">
              <div class="sample-app-purchases-container03">
                <span class="sample-app-purchases-text11">
                  Interface for add stock/item page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3a_purchase_AddPurchase1.png?raw=true"
                  loading="eager"
                  class="sample-app-purchases-image1"
                />
                <span class="sample-app-purchases-text12">
                  Display supplier details:
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3a_purchase_AddPurchase2.png?raw=true"
                  loading="eager"
                  class="sample-app-purchases-image2"
                />
                <span class="sample-app-purchases-text13">
                  <span>
                    On the adding purchase page. If the user wants to
                    <span v-html="raw5jou"></span>
                  </span>
                  <span class="sample-app-purchases-text15">add stock/item</span>
                  <span>
                    , first it will display the interface that requires the user
                    to
                    <span v-html="rawri25"></span>
                  </span>
                  <span class="sample-app-purchases-text17">
                    choose the supplier
                  </span>
                  <span>
                    based on the stock/item that the user wants to purchase,
                    <span v-html="rawy6e2"></span>
                  </span>
                  <span class="sample-app-purchases-text19">
                    or else it will go into purchases lists
                  </span>
                  <span>
                    .
                    <span v-html="rawx97s"></span>
                  </span>
                  <br />
                  <br />
                  <span>
                    After the user clicks on the
                    <span v-html="rawzun1"></span>
                  </span>
                  <span class="sample-app-purchases-text24">“next”</span>
                  <span>
                    button to continue adding, the apps will
                    <span v-html="raw2ahr"></span>
                  </span>
                  <span class="sample-app-purchases-text26">
                    display the supplier details
                  </span>
                  <span>
                    interface for the user&apos;s references, and at the same
                    interface, the user is required to
                    <span v-html="rawpzx6"></span>
                  </span>
                  <span class="sample-app-purchases-text28">
                    choose the stock/item
                  </span>
                  <span>
                    that the user wants to add followed by the
                    <span v-html="rawpc7y"></span>
                  </span>
                  <span class="sample-app-purchases-text30">
                    price per item and the quantity
                  </span>
                  <span>
                    .
                    <span v-html="rawkn46"></span>
                  </span>
                  <br />
                </span>
              </div>
              <div class="sample-app-purchases-container04">
                <span class="sample-app-purchases-text33">
                  Flowchart for add stock/item page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/Add_view1.png?raw=true"
                  loading="eager"
                  class="sample-app-purchases-image3"
                />
              </div>
            </div>
          </div>
          <span class="sample-app-purchases-text34">
            <span class="sample-app-purchases-text35">
              There are several conditions to fill in the quantity and price
            </span>
            <span>
              , firstly the system will
              <span v-html="raw9k1v"></span>
            </span>
            <span class="sample-app-purchases-text37">
              check if the price and quantity are NULL
            </span>
            <span>
              , if yes message error
              <span v-html="raw0f58"></span>
            </span>
            <span class="sample-app-purchases-text39">
              “Please fill in this field”
            </span>
            <span>
              will displayed otherwise the system will
              <span v-html="rawb6bb"></span>
            </span>
            <span class="sample-app-purchases-text41">
              check is the quantity and price that user enter is a number or not
            </span>
            <span>
              . If no then a message error
              <span v-html="raw5inp"></span>
            </span>
            <span class="sample-app-purchases-text43">
              “Please enter a number”
            </span>
            <span>
              will pop up otherwise the system will
              <span v-html="rawr650"></span>
            </span>
            <span class="sample-app-purchases-text45">
              check is the quantity and price entered is more than 0 or not
            </span>
            <span>
              , if not a message
              <span v-html="rawxdik"></span>
            </span>
            <span class="sample-app-purchases-text47">
              “Value must be greater than or equal to 0”
            </span>
            <span>
              will be displayed.
              <span v-html="rawit6m"></span>
            </span>
            <span class="sample-app-purchases-text49">
              The user must fulfill all the conditions in order to proceed with
              adding purchases.
            </span>
            <span><span v-html="raw3om3"></span></span>
            <br />
            <br />
            <span>
              After the user successfully fills in all the input correctly, the
              user can
            </span>
            <span class="sample-app-purchases-text54">
              press the add to purchase button.
            </span>
            <span><span v-html="rawjdvy"></span></span>
            <span class="sample-app-purchases-text56">
              “Purchased item has been registered successfully”
            </span>
            <span>
              is a message that the user will receive after the user presses the
              button and the system will redirect to the view bill page.
            </span>
            <br />
            <br />
          </span>
          <div class="sample-app-purchases-column2">
            <h1 class="sample-app-purchases-text60">
              <span>Viewing Purchase Bill</span>
              <br />
            </h1>
            <span class="sample-app-purchases-text63">
              <span>
                On the view bill page, the user may
                <span v-html="rawgf52"></span>
              </span>
              <span class="sample-app-purchases-text65">
                choose to save or print the bill
              </span>
              <span>
                . If yes, the purchase bill will be save or printed or else the
                system will go back to the purchase list.
              </span>
            </span>
            <div class="sample-app-purchases-container05">
              <div class="sample-app-purchases-container06">
                <span class="sample-app-purchases-text67">
                  Interface for view bill page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3b_purchase_ViewBill.png?raw=true"
                  loading="eager"
                  class="sample-app-purchases-image4"
                />
              </div>
              <div class="sample-app-purchases-container07">
                <span class="sample-app-purchases-text68">
                  Flowchart for view bill page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/View2.png?raw=true"
                  loading="eager"
                  class="sample-app-purchases-image5"
                />
              </div>
            </div>
          </div>
          <div class="sample-app-purchases-column3">
            <h1 class="sample-app-purchases-text69">
              <span>Deleting Purchase Bill</span>
              <br />
            </h1>
            <span class="sample-app-purchases-text72">
              <span>
                On the purchase lists page there is an
                <span v-html="rawn075"></span>
              </span>
              <span class="sample-app-purchases-text74">
                option to delete the purchase bill
              </span>
              <span>
                . If the user want to delete it, the user just click to the
                <span v-html="rawpr30"></span>
              </span>
              <span class="sample-app-purchases-text76">
                &quot;yes, delete&quot;
              </span>
              <span>
                button otherwise system will go back to the purchase list.
              </span>
            </span>
            <div class="sample-app-purchases-container08">
              <div class="sample-app-purchases-container09">
                <span class="sample-app-purchases-text78">
                  Interface for delete bill page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/3c_purchase_DeleteBill.png?raw=true"
                  loading="eager"
                  class="sample-app-purchases-image6"
                />
              </div>
              <div class="sample-app-purchases-container10">
                <span class="sample-app-purchases-text79">
                  Flowchart for delete bill page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/3%20-%20Purchases/Delete.png?raw=true"
                  class="sample-app-purchases-image7"
                />
              </div>
            </div>
          </div>
          <span class="sample-app-purchases-text80">
            <span>
              -
              <span v-html="rawo3al"></span>
            </span>
            <span class="sample-app-purchases-text82">Noor Alia Alisa</span>
          </span>
        </div>
      </div>
    </div>
    <footer class="sample-app-purchases-footer">
      <div class="sample-app-purchases-container11">
        <router-link to="/strace" class="sample-app-purchases-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="sample-app-purchases-text83">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="sample-app-purchases-icon-group">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          class="sample-app-purchases-icon"
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
  name: 'SampleAppPurchases',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawnfr3: ' ',
      raw5jou: ' ',
      rawri25: ' ',
      rawy6e2: ' ',
      rawx97s: ' ',
      rawzun1: ' ',
      raw2ahr: ' ',
      rawpzx6: ' ',
      rawpc7y: ' ',
      rawkn46: ' ',
      raw9k1v: ' ',
      raw0f58: ' ',
      rawb6bb: ' ',
      raw5inp: ' ',
      rawr650: ' ',
      rawxdik: ' ',
      rawit6m: ' ',
      raw3om3: ' ',
      rawjdvy: ' ',
      rawgf52: ' ',
      rawn075: ' ',
      rawpr30: ' ',
      rawo3al: ' ',
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
.sample-app-purchases-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.sample-app-purchases-banner {
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

.sample-app-purchases-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.sample-app-purchases-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.sample-app-purchases-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.sample-app-purchases-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-purchases-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-purchases-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-purchases-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-purchases-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-purchases-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-purchases-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-purchases-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-purchases-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-purchases-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-purchases-content-here {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-purchases-image {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-column1 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-purchases-container02 {
  flex: 0 0 auto;
  width: auto;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.sample-app-purchases-container03 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-image1 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-image2 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-container04 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-image3 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-column2 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-purchases-container05 {
  flex: 0 0 auto;
  width: auto;
  height: 466px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.sample-app-purchases-container06 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-image4 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-container07 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-image5 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-column3 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-purchases-container08 {
  flex: 0 0 auto;
  width: auto;
  height: 460px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.sample-app-purchases-container09 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-image6 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-container10 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-purchases-image7 {
  width: 200px;
  object-fit: cover;
}
.sample-app-purchases-footer {
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
.sample-app-purchases-container11 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.sample-app-purchases-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.sample-app-purchases-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .sample-app-purchases-container {
    background-color: #f7f7f7;
  }
  .sample-app-purchases-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .sample-app-purchases-main-content {
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
  .sample-app-purchases-heading {
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
  .sample-app-purchases-container01 {
    width: auto;
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 20px;
    justify-content: space-between;
  }
  .sample-app-purchases-navlink {
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
  .sample-app-purchases-navlink1 {
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
  .sample-app-purchases-navlink2 {
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
  .sample-app-purchases-navlink3 {
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
  .sample-app-purchases-navlink4 {
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
  .sample-app-purchases-content-here {
    width: 1200px;
    height: auto;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .sample-app-purchases-column {
    flex: 1;
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding-bottom: 25px;
  }
  .sample-app-purchases-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-purchases-text03 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 30px;
  }
  .sample-app-purchases-image {
    width: 70%;
    height: auto;
    align-self: center;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-purchases-column1 {
    flex: 1;
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding-top: 35px;
    padding-bottom: 20px;
  }
  .sample-app-purchases-text08 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-purchases-container02 {
    width: 651px;
    height: auto;
  }
  .sample-app-purchases-container03 {
    width: 100%;
    height: auto;
  }
  .sample-app-purchases-text11 {
    font-size: 16px;
    align-self: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image1 {
    width: 583px;
    height: auto;
    align-self: flex-start;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-purchases-text12 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image2 {
    width: 90%;
    height: auto;
    align-self: flex-start;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-purchases-text13 {
    font-size: 16px;
    font-style: normal;
    margin-top: 35px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-right: var(--dl-space-space-fourunits);
  }
  .sample-app-purchases-text15 {
    font-weight: 700;
  }
  .sample-app-purchases-text17 {
    font-weight: 700;
  }
  .sample-app-purchases-text19 {
    text-decoration: underline;
  }
  .sample-app-purchases-text24 {
    font-weight: 700;
  }
  .sample-app-purchases-text26 {
    text-decoration: underline;
  }
  .sample-app-purchases-text28 {
    font-weight: 700;
  }
  .sample-app-purchases-text30 {
    font-weight: 700;
  }
  .sample-app-purchases-container04 {
    width: 550px;
    height: auto;
  }
  .sample-app-purchases-text33 {
    font-size: 16px;
    align-self: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image3 {
    width: 100%;
    height: auto;
    align-self: center;
  }
  .sample-app-purchases-text34 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-bottom: 25px;
  }
  .sample-app-purchases-text35 {
    text-decoration: underline;
  }
  .sample-app-purchases-text37 {
    font-weight: 700;
  }
  .sample-app-purchases-text39 {
    font-weight: 700;
  }
  .sample-app-purchases-text41 {
    font-weight: 700;
  }
  .sample-app-purchases-text43 {
    font-weight: 700;
  }
  .sample-app-purchases-text45 {
    font-weight: 700;
  }
  .sample-app-purchases-text47 {
    font-weight: 700;
  }
  .sample-app-purchases-text49 {
    font-weight: 700;
    text-decoration: underline;
  }
  .sample-app-purchases-text54 {
    font-weight: 700;
  }
  .sample-app-purchases-text56 {
    font-weight: 700;
  }
  .sample-app-purchases-column2 {
    flex: 1;
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-purchases-text60 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-purchases-text63 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .sample-app-purchases-text65 {
    font-weight: 700;
  }
  .sample-app-purchases-container06 {
    width: 657px;
    height: 466px;
    padding-top: 20px;
  }
  .sample-app-purchases-text67 {
    font-size: 16px;
    align-self: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image4 {
    width: 100%;
    height: auto;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-purchases-container07 {
    width: auto;
    height: 100%;
    margin-top: 0px;
    padding-top: 20px;
  }
  .sample-app-purchases-text68 {
    font-size: 16px;
    align-self: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image5 {
    width: 65%;
    height: auto;
    align-self: center;
  }
  .sample-app-purchases-column3 {
    flex: 1;
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-purchases-text69 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-purchases-text72 {
    margin-bottom: 20px;
  }
  .sample-app-purchases-text74 {
    font-weight: 700;
  }
  .sample-app-purchases-text76 {
    font-weight: 700;
  }
  .sample-app-purchases-container08 {
    height: auto;
    align-items: flex-start;
  }
  .sample-app-purchases-container09 {
    width: 657px;
    height: auto;
  }
  .sample-app-purchases-text78 {
    align-self: center;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image6 {
    width: 100%;
    height: auto;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-purchases-container10 {
    width: 523px;
    height: auto;
  }
  .sample-app-purchases-text79 {
    align-self: center;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .sample-app-purchases-image7 {
    width: 60%;
    height: auto;
    align-self: center;
  }
  .sample-app-purchases-text80 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .sample-app-purchases-text82 {
    font-style: italic;
  }
  .sample-app-purchases-footer {
    justify-content: space-between;
  }
  .sample-app-purchases-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .sample-app-purchases-text83 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .sample-app-purchases-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .sample-app-purchases-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .sample-app-purchases-footer {
    align-self: center;
  }
  .sample-app-purchases-icon-group {
    display: none;
  }
}
</style>
