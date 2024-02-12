<template>
  <div class="basic-py2cii-container">
    <div class="basic-py2cii-banner">
      <div class="basic-py2cii-main-content">
        <h1 class="basic-py2cii-heading">EXPRESSIONS AND ASSIGNMENT</h1>
        <div class="basic-py2cii-container01">
          <router-link to="/basic-py-2a" class="basic-py2cii-navlink button">
            Arithmetic Expressions
          </router-link>
          <router-link to="/basic-py-2b" class="basic-py2cii-navlink1 button">
            Functional Side Effects
          </router-link>
          <router-link to="/basic-py-2ci" class="basic-py2cii-navlink2 button">
            Overloaded Operators
          </router-link>
          <router-link to="/basic-py-2cii" class="basic-py2cii-navlink3 button">
            Type Conversions
          </router-link>
        </div>
        <div class="basic-py2cii-container02">
          <router-link to="/basic-py-2d" class="basic-py2cii-navlink4 button">
            Relational and Boolean Expressions
          </router-link>
          <router-link to="/basic-py-2e" class="basic-py2cii-navlink5 button">
            Short-Circuit Evaluation
          </router-link>
          <router-link to="/basic-py-2f" class="basic-py2cii-navlink6 button">
            Assignment Statements
          </router-link>
          <router-link to="/basic-py-2g" class="basic-py2cii-navlink7 button">
            Mixed-Mode Assignment
          </router-link>
        </div>
        <div class="basic-py2cii-hapih">
          <h1 class="basic-py2cii-text">Type Conversions</h1>
          <span class="basic-py2cii-text01">
            There is two main ways type conversion occurs in Python, either you
            force Python to convert it to a specific datatype or Python itself
            does that during compilation. When it is forced, it is called Explicit
            Data Type Conversion otherwise it is called Implicit Data Type
            conversion.
          </span>
          <h1 class="basic-py2cii-text02">Implicit Type Conversion</h1>
          <div class="basic-py2cii-container03">
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/2B67BBA4-C99B-42E3-8B62-AEBD9B71F56C.jpeg?raw=true"
              loading="eager"
              class="basic-py2cii-image"
            />
            <span class="basic-py2cii-text03">
              <span>
                Example of Implicit
                <span v-html="rawzd59"></span>
              </span>
              <span>Data Type Conversion.</span>
              <br />
              <br />
              <span>
                An effective feature of Python when integers a and b integers are
                being divided
              </span>
              <br />
              <span>
                where Python compiler itself convert the result into a float to
                prevent data loss.
              </span>
              <br />
              <br />
            </span>
          </div>
          <h1 class="basic-py2cii-text13">Explicit Type Conversion</h1>
          <div class="basic-py2cii-container04">
            <div class="basic-py2cii-container05">
              <div class="basic-py2cii-container06">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/79045C78-8811-41D7-A737-B489EC1ADCCC.jpeg?raw=true"
                  loading="eager"
                  class="basic-py2cii-image1"
                />
                <span class="basic-py2cii-text14">
                  <span>
                    Converting
                    <span v-html="rawlb52"></span>
                  </span>
                  <span class="basic-py2cii-text16">Float to Integers</span>
                  <br />
                  <span>The int() method converts floats to integers</span>
                  <br />
                </span>
              </div>
              <div class="basic-py2cii-container07">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/C4D3809E-E34A-4C9D-9745-DB4E967E333D.jpeg?raw=true"
                  loading="eager"
                  class="basic-py2cii-image2"
                />
                <span class="basic-py2cii-text20">
                  <span>
                    Converting
                    <span v-html="raw0ms0"></span>
                  </span>
                  <span class="basic-py2cii-text22">Integers to Floats</span>
                  <br />
                  <span>The float() method converts integers to floats</span>
                  <br />
                </span>
              </div>
              <div class="basic-py2cii-container08">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/6FD3F89F-7646-47CA-AF71-958EFE622144.jpeg?raw=true"
                  loading="eager"
                  class="basic-py2cii-image3"
                />
                <span class="basic-py2cii-text26">
                  <span>
                    Converting
                    <span v-html="rawkmko"></span>
                  </span>
                  <span class="basic-py2cii-text28">Numbers to Strings</span>
                  <br />
                  <span>The str() method converts numbers to strings</span>
                  <br />
                </span>
              </div>
            </div>
            <div class="basic-py2cii-container09">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/059D1768-5A68-414E-A0C7-9CADB20A35CD.jpeg?raw=true"
                loading="eager"
                class="basic-py2cii-image4"
              />
              <span class="basic-py2cii-text32">
                <span>
                  Converting
                  <span v-html="raw0bgm"></span>
                </span>
                <span class="basic-py2cii-text34">Strings to Numbers</span>
                <br />
                <span>
                  The int() or float() method converts strings to number.
                </span>
                <br />
                <span>
                  Do keep in mind that int() method won&apos;t convert a string
                  containing a decimal number in it, use float().
                </span>
                <br />
              </span>
            </div>
            <div class="basic-py2cii-container10">
              <div class="basic-py2cii-container11">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/5F7824EB-564C-4367-A84F-5BFD61E025F0.jpeg?raw=true"
                  loading="eager"
                  class="basic-py2cii-image5"
                />
                <span class="basic-py2cii-text40">
                  <span>
                    Converting
                    <span v-html="rawk55h"></span>
                  </span>
                  <span class="basic-py2cii-text42">Tuples to Lists</span>
                  <br />
                  <span>The list() method converts tuples to lists.</span>
                  <br />
                  <span>
                    This will give you the ability to add, delete and update
                    elements.
                  </span>
                  <br />
                </span>
              </div>
              <div class="basic-py2cii-container12">
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/0769FCF7-3411-40C0-B633-5CE40D58909E.jpeg?raw=true"
                  loading="eager"
                  class="basic-py2cii-image6"
                />
                <span class="basic-py2cii-text48">
                  <span>
                    Converting
                    <span v-html="rawvu4l"></span>
                  </span>
                  <span class="basic-py2cii-text50">Lists to Tuples</span>
                  <br />
                  <span>The tuple() method converts lists to tuples.</span>
                  <br />
                  <span>Which can give a performance boost to your program.</span>
                  <br />
                </span>
              </div>
            </div>
            <div class="basic-py2cii-container13">
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2a%20Expressions%20and%20Assignment/A7ED468B-B6DB-4AEE-AE59-0EEE338704C2.jpeg?raw=true"
                loading="eager"
                class="basic-py2cii-image7"
              />
              <span class="basic-py2cii-text56">
                <span>
                  Converting
                  <span v-html="rawi4rs"></span>
                </span>
                <span class="basic-py2cii-text58">
                  Strings to Lists and Tuples
                </span>
                <br />
                <span>
                  The list() and tuple() method converts strings to lists and
                  tuple.
                </span>
                <br />
                <br />
              </span>
            </div>
          </div>
          <span class="basic-py2cii-text63">
            <span>
              -
              <span v-html="rawv2rl"></span>
            </span>
            <span>Muhammad Hafiz</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py2cii-reference">
      <h1 class="basic-py2cii-text66">References</h1>
      <span class="basic-py2cii-text67">
        <br class="basic-py2cii-text68" />
        <span class="basic-py2cii-text69">
          How To Convert Data Types in Python
        </span>
        <span class="basic-py2cii-text70">. (n.d.). Djangocentral.</span>
        <br class="basic-py2cii-text71" />
        <span class="basic-py2cii-text72">
                 
          <span v-html="rawe5b8"></span>
        </span>
        <a
          href="https://djangocentral.com/how-to-convert-data-types-in-python/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py2cii-link"
        >
          https://djangocentral.com/how-to-convert-data-types-in-python/
        </a>
      </span>
    </div>
    <footer class="basic-py2cii-footer">
      <div class="basic-py2cii-container14">
        <router-link to="/strace" class="basic-py2cii-navlink8">
          STRACE
        </router-link>
      </div>
      <span class="basic-py2cii-text73">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py2cii-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py2cii-icon">
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
  name: 'BasicPy2cii',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawzd59: ' ',
      rawlb52: ' ',
      raw0ms0: ' ',
      rawkmko: ' ',
      raw0bgm: ' ',
      rawk55h: ' ',
      rawvu4l: ' ',
      rawi4rs: ' ',
      rawv2rl: ' ',
      rawe5b8: ' ',
    }
  },
  metaInfo: {
    title: 'Strace | Basic Python',
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
.basic-py2cii-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py2cii-banner {
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

.basic-py2cii-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py2cii-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py2cii-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-navlink6 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink6:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-navlink7 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2cii-navlink7:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2cii-hapih {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2cii-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-image {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-container06 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2cii-image1 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container07 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2cii-image2 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container08 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2cii-image3 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-image4 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container10 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-container11 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2cii-image5 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container12 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2cii-image6 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-container13 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2cii-image7 {
  width: 200px;
  object-fit: cover;
}
.basic-py2cii-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py2cii-footer {
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
.basic-py2cii-container14 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py2cii-navlink8 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py2cii-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py2cii-container {
    background-color: #f7f7f7;
  }
  .basic-py2cii-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py2cii-main-content {
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
  .basic-py2cii-heading {
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
    background-size: auto;
    background-image: url("/external/bglandscape-1200w.jpg");
  }
  .basic-py2cii-container01 {
    width: 700px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py2cii-navlink {
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    border-width: 1px;
    margin-right: 25px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-navlink1 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 25px;
    border-width: 1px;
    margin-right: 25px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-navlink2 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 25px;
    border-width: 1px;
    margin-right: 25px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-navlink3 {
    color: #A068FF;
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 25px;
    border-width: 1px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-container02 {
    width: 800px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py2cii-navlink4 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    border-width: 1px;
    margin-right: 25px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-navlink5 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 25px;
    border-width: 1px;
    margin-right: 25px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-navlink6 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 25px;
    border-width: 1px;
    margin-right: 25px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-navlink7 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    margin-left: 25px;
    border-width: 1px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
  }
  .basic-py2cii-hapih {
    width: 1200px;
    height: auto;
    position: relative;
    align-self: stretch;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py2cii-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .basic-py2cii-text01 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .basic-py2cii-text02 {
    font-size: 30px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .basic-py2cii-container03 {
    align-items: center;
    margin-bottom: 40px;
  }
  .basic-py2cii-image {
    width: 150px;
    height: 168px;
  }
  .basic-py2cii-text03 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-left: 50px;
  }
  .basic-py2cii-text13 {
    font-size: 30px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .basic-py2cii-container04 {
    flex-direction: column;
  }
  .basic-py2cii-container05 {
    margin-bottom: 35px;
    justify-content: space-between;
  }
  .basic-py2cii-container06 {
    align-items: center;
  }
  .basic-py2cii-image1 {
    width: 149px;
    height: 135px;
    margin-bottom: 10px;
  }
  .basic-py2cii-text14 {
    font-size: 16px;
    align-self: center;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2cii-text16 {
    font-weight: 700;
  }
  .basic-py2cii-container07 {
    align-items: center;
  }
  .basic-py2cii-image2 {
    width: 144px;
    height: 127px;
    margin-bottom: 10px;
  }
  .basic-py2cii-text20 {
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2cii-text22 {
    font-weight: 700;
  }
  .basic-py2cii-container08 {
    align-items: center;
  }
  .basic-py2cii-image3 {
    width: 246px;
    height: 134px;
    margin-bottom: 10px;
  }
  .basic-py2cii-text26 {
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2cii-text28 {
    font-weight: 700;
  }
  .basic-py2cii-container09 {
    align-items: center;
    margin-bottom: 35px;
  }
  .basic-py2cii-image4 {
    width: 252px;
    height: 141px;
  }
  .basic-py2cii-text32 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-left: 50px;
  }
  .basic-py2cii-text34 {
    font-weight: 700;
  }
  .basic-py2cii-container10 {
    margin-bottom: 35px;
    justify-content: center;
  }
  .basic-py2cii-container11 {
    align-items: center;
    margin-right: 50px;
  }
  .basic-py2cii-image5 {
    width: 284px;
    height: 89px;
    margin-bottom: 10px;
  }
  .basic-py2cii-text40 {
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2cii-text42 {
    font-weight: 700;
  }
  .basic-py2cii-container12 {
    align-items: center;
    margin-left: 50px;
  }
  .basic-py2cii-image6 {
    width: 292px;
    height: 88px;
    margin-bottom: 10px;
  }
  .basic-py2cii-text48 {
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2cii-text50 {
    font-weight: 700;
  }
  .basic-py2cii-container13 {
    align-items: center;
  }
  .basic-py2cii-image7 {
    width: 286px;
    height: 179px;
  }
  .basic-py2cii-text56 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-left: 50px;
  }
  .basic-py2cii-text58 {
    font-weight: 700;
  }
  .basic-py2cii-text63 {
    font-size: 18px;
    align-self: flex-end;
    font-style: italic;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py2cii-reference {
    width: 1600px;
    height: auto;
    align-self: center;
    box-shadow: 0px -1px 15px 0px #ebebeb;
    align-items: flex-start;
    padding-top: 50px;
    padding-left: 200px;
    padding-right: 200px;
    flex-direction: column;
    padding-bottom: 50px;
    justify-content: flex-start;
  }
  .basic-py2cii-text66 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py2cii-text67 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py2cii-text68 {
    font-style: normal;
  }
  .basic-py2cii-text69 {
    font-style: italic;
  }
  .basic-py2cii-text70 {
    font-style: normal;
  }
  .basic-py2cii-text71 {
    font-style: normal;
  }
  .basic-py2cii-text72 {
    font-style: normal;
  }
  .basic-py2cii-link {
    color: var(--dl-color-primary-300);
    font-style: normal;
    text-decoration: underline;
  }
  .basic-py2cii-footer {
    justify-content: space-between;
  }
  .basic-py2cii-navlink8 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py2cii-text73 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py2cii-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py2cii-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py2cii-footer {
    align-self: center;
  }
  .basic-py2cii-icon-group {
    display: none;
  }
}
</style>
