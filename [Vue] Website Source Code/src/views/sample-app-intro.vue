<template>
  <div class="sample-app-intro-container">
    <div class="sample-app-intro-banner">
      <div class="sample-app-intro-main-content">
        <h1 class="sample-app-intro-heading">SAMPLE APPLICATION</h1>
        <div class="sample-app-intro-container1">
          <router-link
            to="/sample-app-intro"
            class="sample-app-intro-navlink button"
          >
            Introduction
          </router-link>
          <router-link
            to="/sample-app-inventory"
            class="sample-app-intro-navlink1 button"
          >
            Inventory
          </router-link>
          <router-link
            to="/sample-app-purchases"
            class="sample-app-intro-navlink2 button"
          >
            Purchases
          </router-link>
          <router-link
            to="/sample-app-sales"
            class="sample-app-intro-navlink3 button"
          >
            Sales
          </router-link>
          <router-link
            to="/sample-app-suppliers"
            class="sample-app-intro-navlink4 button"
          >
            Suppliers
          </router-link>
        </div>
        <div class="sample-app-intro-content-here">
          <div class="sample-app-intro-ims">
            <h1 class="sample-app-intro-text">
              <span>Inventory Management System</span>
              <br />
            </h1>
            <span class="sample-app-intro-text03">
              <span>
                An inventory management system (IMS) constitutes a comprehensive
                blend of hardware and software technologies designed to
                meticulously monitor and oversee product inventory, sales, and
                other critical production processes within a business.
              </span>
              <br />
              <br />
              <span>
                This sample application software component is created for the
                requirements of a company. It can keep track of incoming and
                outgoing stock with a dynamically rendered bill. Each supplier is
                provided with a profile where they can see the history of their
                transactions with the company.
              </span>
              <br />
              <br />
              <span>
                The figure below provides the
                <span v-html="rawi9y6"></span>
              </span>
              <span class="sample-app-intro-text11">list of features</span>
              <span>that are used in the sample IMS applications:-</span>
            </span>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/1_about.png?raw=true"
              loading="eager"
              class="sample-app-intro-image"
            />
          </div>
          <div class="sample-app-intro-login">
            <h1 class="sample-app-intro-text13">
              <span>Login</span>
              <br />
            </h1>
            <div class="sample-app-intro-container2">
              <div class="sample-app-intro-container3">
                <span class="sample-app-intro-text16">
                  Interface for login page
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/0_adminLogin.png?raw=true"
                  loading="eager"
                  class="sample-app-intro-image1"
                />
                <span class="sample-app-intro-text17">
                  <span>
                    On the login page, users can see the field to fill in the
                    username and password to continue using the apps. The user
                    <span v-html="rawbwzb"></span>
                  </span>
                  <span class="sample-app-intro-text19">
                    must fulfill two conditions
                  </span>
                  <span>
                    in order to successfully login into the apps.
                    <span v-html="rawe5tt"></span>
                  </span>
                  <br />
                  <br />
                  <span>
                    The
                    <span v-html="raw1xox"></span>
                  </span>
                  <span class="sample-app-intro-text24">first condition</span>
                  <span>
                    is the user
                    <span v-html="raw7kzs"></span>
                  </span>
                  <span class="sample-app-intro-text26">
                    must fill in both fields
                  </span>
                  <span>
                    to avoid a message error like the
                    <span v-html="rawexi9"></span>
                  </span>
                  <span class="sample-app-intro-text28">
                    “Please fill in the field”
                  </span>
                  <span>
                    display on their screen. After the user passes the first
                    condition, the
                    <span v-html="raw571c"></span>
                  </span>
                  <span class="sample-app-intro-text30">second condition</span>
                  <span>
                    is that the user
                    <span v-html="rawaruq"></span>
                  </span>
                  <span class="sample-app-intro-text32">
                    must fill in the username and password with the “admin” word
                  </span>
                  <span>
                    since the system already set the word as constant.
                    <span v-html="rawix1t"></span>
                  </span>
                  <span class="sample-app-intro-text34">
                    If the user enters other than that the app will pop up an
                    error stating &quot;Please enter a correct username and
                    password. Note that both fields may be case-sensitive.&quot;
                  </span>
                  <br class="sample-app-intro-text35" />
                  <br />
                  <span class="sample-app-intro-text37">
                    If the user cannot pass the two conditions mentioned above,
                    the apps will remain in the login page until the user enters
                    the correct username and password. Or else the apps will go to
                    the home page.
                  </span>
                  <br />
                  <br />
                </span>
              </div>
              <div class="sample-app-intro-container4">
                <span class="sample-app-intro-text40">
                  <span class="sample-app-intro-text41">
                    Flowchart for login page
                  </span>
                  <span> </span>
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/Intro.png?raw=true"
                  loading="eager"
                  class="sample-app-intro-image2"
                />
              </div>
            </div>
          </div>
          <div class="sample-app-intro-column">
            <h1 class="sample-app-intro-text43">
              <span>Home</span>
              <br />
            </h1>
            <span class="sample-app-intro-text46">
              <span>
                The figure below is the interface for the home page, which will be
                <span v-html="rawtrp5"></span>
              </span>
              <span class="sample-app-intro-text48">
                displayed after the user successfully login the apps
              </span>
              <span>
                . On the home page, it will show
                <span v-html="rawkrza"></span>
              </span>
              <span class="sample-app-intro-text50">
                statistics of the stock in inventory and also the details of
                recent incoming and outgoing stock.
              </span>
            </span>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/3%20-%20Sample%20Application/_Intro/1_home.png?raw=true"
              loading="eager"
              class="sample-app-intro-image3"
            />
          </div>
          <span class="sample-app-intro-text51">
            <span>
              -
              <span v-html="rawvk3b"></span>
            </span>
            <span class="sample-app-intro-text53">Noor Alia Alisa</span>
          </span>
        </div>
      </div>
    </div>
    <footer class="sample-app-intro-footer">
      <div class="sample-app-intro-container5">
        <router-link to="/strace" class="sample-app-intro-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="sample-app-intro-text54">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="sample-app-intro-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="sample-app-intro-icon">
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
  name: 'SampleAppIntro',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawi9y6: ' ',
      rawbwzb: ' ',
      rawe5tt: ' ',
      raw1xox: ' ',
      raw7kzs: ' ',
      rawexi9: ' ',
      raw571c: ' ',
      rawaruq: ' ',
      rawix1t: ' ',
      rawtrp5: ' ',
      rawkrza: ' ',
      rawvk3b: ' ',
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
.sample-app-intro-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.sample-app-intro-banner {
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

.sample-app-intro-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.sample-app-intro-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.sample-app-intro-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.sample-app-intro-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-intro-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-intro-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-intro-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-intro-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-intro-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-intro-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-intro-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-intro-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.sample-app-intro-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.sample-app-intro-content-here {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-intro-ims {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-intro-image {
  width: 200px;
  object-fit: cover;
}
.sample-app-intro-login {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-intro-container2 {
  flex: 0 0 auto;
  width: auto;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.sample-app-intro-container3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-intro-image1 {
  width: 200px;
  object-fit: cover;
}
.sample-app-intro-container4 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-app-intro-image2 {
  width: 200px;
  object-fit: cover;
}
.sample-app-intro-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.sample-app-intro-image3 {
  width: 200px;
  object-fit: cover;
}
.sample-app-intro-footer {
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
.sample-app-intro-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.sample-app-intro-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.sample-app-intro-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .sample-app-intro-container {
    background-color: #f7f7f7;
  }
  .sample-app-intro-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .sample-app-intro-main-content {
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
  .sample-app-intro-heading {
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
  .sample-app-intro-container1 {
    width: auto;
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 20px;
    justify-content: space-between;
  }
  .sample-app-intro-navlink {
    color: #A068FF;
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
  .sample-app-intro-navlink1 {
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
  .sample-app-intro-navlink2 {
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
  .sample-app-intro-navlink3 {
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
  .sample-app-intro-navlink4 {
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
  .sample-app-intro-content-here {
    width: 1200px;
    height: auto;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .sample-app-intro-ims {
    flex: 1;
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding-bottom: 25px;
  }
  .sample-app-intro-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-intro-text03 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 30px;
  }
  .sample-app-intro-text11 {
    font-weight: 700;
  }
  .sample-app-intro-image {
    width: 70%;
    height: auto;
    align-self: center;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-intro-login {
    flex: 1;
    width: 100%;
    height: 833px;
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-intro-text13 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-intro-container2 {
    width: 1177px;
    height: auto;
    padding-bottom: 0px;
  }
  .sample-app-intro-container3 {
    width: 600px;
    height: 591px;
  }
  .sample-app-intro-text16 {
    font-size: 16px;
    align-self: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .sample-app-intro-image1 {
    width: 100%;
    height: 100%;
    align-self: center;
  }
  .sample-app-intro-text17 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
  }
  .sample-app-intro-text19 {
    font-weight: 700;
  }
  .sample-app-intro-text24 {
    text-decoration: underline;
  }
  .sample-app-intro-text26 {
    font-weight: 700;
  }
  .sample-app-intro-text28 {
    font-weight: 700;
  }
  .sample-app-intro-text30 {
    text-decoration: underline;
  }
  .sample-app-intro-text32 {
    font-weight: 700;
  }
  .sample-app-intro-text34 {
    font-weight: 700;
  }
  .sample-app-intro-text35 {
    font-weight: 700;
  }
  .sample-app-intro-text37 {
    font-weight: 700;
  }
  .sample-app-intro-container4 {
    width: 557px;
    height: auto;
  }
  .sample-app-intro-text40 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .sample-app-intro-text41 {
    font-weight: 700;
  }
  .sample-app-intro-image2 {
    width: 456px;
    height: 705px;
    align-self: center;
  }
  .sample-app-intro-column {
    flex: 1;
    width: 100%;
    height: 404px;
    align-items: flex-start;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .sample-app-intro-text43 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .sample-app-intro-text46 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
    margin-bottom: 30px;
    padding-right: var(--dl-space-space-fourunits);
  }
  .sample-app-intro-text48 {
    font-weight: 700;
  }
  .sample-app-intro-text50 {
    text-decoration: underline;
  }
  .sample-app-intro-image3 {
    width: 70%;
    height: auto;
    align-self: center;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .sample-app-intro-text51 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .sample-app-intro-text53 {
    font-style: italic;
  }
  .sample-app-intro-footer {
    justify-content: space-between;
  }
  .sample-app-intro-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .sample-app-intro-text54 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .sample-app-intro-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .sample-app-intro-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .sample-app-intro-footer {
    align-self: center;
  }
  .sample-app-intro-icon-group {
    display: none;
  }
}
</style>
