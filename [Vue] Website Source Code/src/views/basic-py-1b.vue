<template>
  <div class="basic-py1b-container">
    <div class="basic-py1b-banner">
      <div class="basic-py1b-main-content">
        <h1 class="basic-py1b-heading">NAMES AND BINDINGS</h1>
        <div class="basic-py1b-container1">
          <router-link to="/basic-py-1a" class="basic-py1b-navlink button">
            Name
          </router-link>
          <router-link to="/basic-py-1b" class="basic-py1b-navlink1 button">
            Address, Value and Type
          </router-link>
          <router-link to="/basic-py-1c" class="basic-py1b-navlink2 button">
            The Concept of Binding
          </router-link>
          <router-link to="/basic-py-1d" class="basic-py1b-navlink3 button">
            Scope and Lifetime
          </router-link>
          <router-link to="/basic-py-1e" class="basic-py1b-navlink4 button">
            Referencing Environments
          </router-link>
          <router-link to="/basic-py-1f" class="basic-py1b-navlink5 button">
            Named Constants
          </router-link>
        </div>
        <div class="basic-py1b-alia">
          <div class="basic-py1b-address">
            <div class="basic-py1b-container2">
              <h1 class="basic-py1b-text">Address</h1>
              <strong class="basic-py1b-text01">
                <span>
                  Every variable in Python is assigned a unique memory address
                  when it is created. This address represents the specific
                  location in the computer&apos;s memory where the variable&apos;s
                  value is stored. 
                </span>
                <span>
                  We cannot directly manipulate memory addresses in Python like we
                  might in some lower-level languages, we can retrieve the address
                  of a variable using the
                  <span v-html="raws567"></span>
                </span>
                <span class="basic-py1b-text04">id() function</span>
                <span>.</span>
              </strong>
            </div>
            <img
              alt="image"
              src="/external/screenshot%202023-12-21%20212503-300h-300h.png"
              class="basic-py1b-image"
            />
          </div>
          <div class="basic-py1b-value-type">
            <h1 class="basic-py1b-text06">Value + Type</h1>
            <div class="basic-py1b-container3">
              <div class="basic-py1b-container4">
                <span class="basic-py1b-text07">
                  <span>   </span>
                  <span class="basic-py1b-text09">Value</span>
                  <br />
                  <br />
                  <span>- The</span>
                  <span class="basic-py1b-text13">
                    actual data that the variable holds.
                  </span>
                  <br />
                  <br />
                  <span>
                    - A variable is created the moment we first assign a value to
                    it
                  </span>
                  <br />
                  <br class="basic-py1b-text18" />
                  <span class="basic-py1b-text19">
                    -
                    <span v-html="rawkjax"></span>
                  </span>
                  <span class="basic-py1b-text20">A string</span>
                  <span class="basic-py1b-text21">
                    can be declared by using single quotes or double
                  </span>
                  <br class="basic-py1b-text22" />
                  <span class="basic-py1b-text23">   quotes</span>
                  <span>
                    . Different from other languages where single quotes are
                  </span>
                  <br />
                  <span>   used for char data types.</span>
                  <br />
                  <br class="basic-py1b-text28" />
                  <span class="basic-py1b-text29">-</span>
                  <span class="basic-py1b-text30"> </span>
                  <span class="basic-py1b-text31">Boolean value</span>
                  <span class="basic-py1b-text32">
                     is case sensitive where we need to write in
                  </span>
                  <br class="basic-py1b-text33" />
                  <span class="basic-py1b-text34">
                       uppercase for ‘T’rue and ‘F’alse
                  </span>
                  <br />
                  <br />
                </span>
              </div>
              <div class="basic-py1b-container5">
                <span class="basic-py1b-text37">
                  <span>   </span>
                  <span class="basic-py1b-text39">Type</span>
                  <br />
                  <br />
                  <span>
                    - The
                    <span v-html="rawaxtz"></span>
                  </span>
                  <span class="basic-py1b-text43">
                    data type determines the kind of values a variable can store
                    and
                  </span>
                  <br class="basic-py1b-text44" />
                  <span class="basic-py1b-text45">
                        the range of values of variables.
                  </span>
                  <br />
                  <br />
                  <span>
                    - Python has built-in types by default like :         
                    <span v-html="rawgyzo"></span>
                  </span>
                  <br />
                  <span>     </span>
                  <span class="basic-py1b-text51">
                    &gt; Numeric types: int, float, complex           
                    <span v-html="rawr1cs"></span>
                  </span>
                  <br class="basic-py1b-text52" />
                  <span class="basic-py1b-text53">
                          &gt; Text type: str           
                    <span v-html="rawkb9j"></span>
                  </span>
                  <br class="basic-py1b-text54" />
                  <span class="basic-py1b-text55">
                          &gt; Boolean type: bool           
                    <span v-html="rawkrls"></span>
                  </span>
                  <br class="basic-py1b-text56" />
                  <span class="basic-py1b-text57">
                          &gt; Sequence types: list, tuple, range
                  </span>
                  <br />
                  <br />
                  <span>
                    - Python is
                    <span v-html="rawgbik"></span>
                  </span>
                  <span class="basic-py1b-text61">dynamically typed</span>
                  <span>, so we do not need to explicitly declare</span>
                  <br />
                  <span>   variable types.</span>
                  <br />
                  <span><span v-html="rawocbf"></span></span>
                  <br />
                  <span>- Use</span>
                  <span class="basic-py1b-text69">type(variable)</span>
                  <span>to check the type of a variable.</span>
                  <br />
                  <br />
                </span>
              </div>
            </div>
            <img
              alt="image"
              src="/external/screenshot%202023-12-21%20210159-300h-300h.png"
              class="basic-py1b-image1"
            />
          </div>
          <span class="basic-py1b-text73">
            <span>
              -
              <span v-html="raw9wtk"></span>
            </span>
            <span class="basic-py1b-text75">Noor Alia Alisa</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py1b-reference">
      <h1 class="basic-py1b-text76">References</h1>
      <span class="basic-py1b-text77">
        <br class="basic-py1b-text78" />
        <span class="basic-py1b-text79">
          Chris, K. (2022, February 16).
          <span v-html="rawyjhp"></span>
        </span>
        <span class="basic-py1b-text80">
          Python Print Type of Variable – How to Get Var Type
        </span>
        <span class="basic-py1b-text81">. freeCodeCamp.org.</span>
        <br class="basic-py1b-text82" />
        <span class="basic-py1b-text83">
                 
          <span v-html="rawrp74"></span>
        </span>
        <a
          href="https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1b-link"
        >
          https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/
        </a>
        <br class="basic-py1b-text84" />
        <br class="basic-py1b-text85" />
        <span class="basic-py1b-text86">
          Python Program to Find and Print Address of Variable
          <span v-html="rawf90z"></span>
        </span>
        <span class="basic-py1b-text87">(2021, August 28). GeeksforGeeks.</span>
        <br class="basic-py1b-text88" />
        <span class="basic-py1b-text89">
                 
          <span v-html="rawud3q"></span>
        </span>
        <a
          href="https://www.geeksforgeeks.org/python-program-to-find-and-print-address-of-variable/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1b-link1"
        >
          https://www.geeksforgeeks.org/python-program-to-find-and-print-address-of-variable/
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py1b-footer">
      <div class="basic-py1b-container6">
        <router-link to="/strace" class="basic-py1b-navlink6">STRACE</router-link>
      </div>
      <span class="basic-py1b-text91">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py1b-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py1b-icon">
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
  name: 'BasicPy1b',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      raws567: ' ',
      rawkjax: ' ',
      rawaxtz: ' ',
      rawgyzo: ' ',
      rawr1cs: ' ',
      rawkb9j: ' ',
      rawkrls: ' ',
      rawgbik: ' ',
      rawocbf: ' ',
      raw9wtk: ' ',
      rawyjhp: ' ',
      rawrp74: ' ',
      rawf90z: ' ',
      rawud3q: ' ',
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
.basic-py1b-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py1b-banner {
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

.basic-py1b-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py1b-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py1b-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py1b-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1b-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1b-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1b-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1b-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1b-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1b-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1b-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1b-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1b-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1b-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1b-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1b-alia {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1b-address {
  width: 1524px;
  height: 495px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  margin-left: 10px;
  flex-direction: column;
  justify-content: flex-start;
}
.basic-py1b-container2 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1b-text01 {
  color: var(--dl-color-gray-black);
  font-size: 20px;
  margin-top: 20px;
  margin-left: 10px;
}
.basic-py1b-image {
  width: 876px;
  height: 288px;
  margin-top: 10px;
  object-fit: cover;
}
.basic-py1b-value-type {
  width: 1536px;
  height: 730px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1b-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py1b-container4 {
  top: 38px;
  left: 15px;
  width: 749px;
  height: 224px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: left;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.basic-py1b-text07 {
  background-color: peach;
}
.basic-py1b-text19 {
  text-decoration: underline;
}
.basic-py1b-text20 {
  text-decoration: underline;
}
.basic-py1b-text29 {
  text-decoration: underline;
}
.basic-py1b-text30 {
  text-decoration: underline;
}
.basic-py1b-text31 {
  text-decoration: underline;
}
.basic-py1b-container5 {
  top: 37px;
  right: 0px;
  width: 738px;
  height: 227px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.basic-py1b-text37 {
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
}
.basic-py1b-image1 {
  width: 200px;
  object-fit: cover;
}
.basic-py1b-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py1b-footer {
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
.basic-py1b-container6 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py1b-navlink6 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py1b-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py1b-container {
    background-color: #f7f7f7;
  }
  .basic-py1b-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py1b-main-content {
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
  .basic-py1b-heading {
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
  .basic-py1b-container1 {
    width: 1050px;
    height: auto;
    align-self: center;
    align-items: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: space-between;
  }
  .basic-py1b-navlink {
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
  .basic-py1b-navlink1 {
    color: #A068FF;
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
  .basic-py1b-navlink2 {
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
  .basic-py1b-navlink3 {
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
  .basic-py1b-navlink4 {
    color: var(--dl-color-gray-black);
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
  .basic-py1b-navlink5 {
    color: var(--dl-color-gray-black);
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
  .basic-py1b-alia {
    width: 1200px;
    height: auto;
    align-self: flex-start;
    align-items: center;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py1b-address {
    width: 100%;
    height: auto;
    margin-top: 0px;
    align-items: flex-start;
    margin-left: 0px;
    margin-bottom: 25px;
    flex-direction: row;
  }
  .basic-py1b-container2 {
    width: 725px;
    padding-right: var(--dl-space-space-fourunits);
  }
  .basic-py1b-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .basic-py1b-text01 {
    color: var(--dl-color-gray-black);
    font-size: 16px;
    align-self: flex-start;
    font-style: normal;
    margin-top: 0px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-left: 0px;
  }
  .basic-py1b-text04 {
    text-decoration: underline;
  }
  .basic-py1b-image {
    width: 422px;
    height: 136px;
    align-self: flex-end;
    margin-top: 0px;
  }
  .basic-py1b-value-type {
    width: 100%;
    height: auto;
    margin-top: 25px;
  }
  .basic-py1b-text06 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .basic-py1b-container3 {
    width: 92%;
    align-self: center;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .basic-py1b-container4 {
    width: 505px;
    height: 300px;
    position: static;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    background-color: #efefef;
  }
  .basic-py1b-text07 {
    height: auto;
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1b-text09 {
    font-weight: 700;
  }
  .basic-py1b-text13 {
    font-weight: 700;
  }
  .basic-py1b-text18 {
    font-weight: 700;
    text-decoration: inherit;
  }
  .basic-py1b-text19 {
    font-weight: 700;
    text-decoration: inherit;
  }
  .basic-py1b-text20 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py1b-text21 {
    font-weight: 700;
  }
  .basic-py1b-text22 {
    font-weight: 700;
  }
  .basic-py1b-text23 {
    font-weight: 700;
  }
  .basic-py1b-text28 {
    font-weight: 700;
    text-decoration: inherit;
  }
  .basic-py1b-text29 {
    font-weight: 700;
    text-decoration: inherit;
  }
  .basic-py1b-text30 {
    font-weight: 700;
    text-decoration: inherit;
  }
  .basic-py1b-text31 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py1b-text32 {
    font-weight: 700;
  }
  .basic-py1b-text33 {
    font-weight: 700;
  }
  .basic-py1b-text34 {
    font-weight: 700;
  }
  .basic-py1b-container5 {
    right: 76px;
    width: auto;
    bottom: -75px;
    height: auto;
    position: static;
    padding-bottom: 0px;
    background-color: #efefef;
  }
  .basic-py1b-text37 {
    width: 560px;
    height: 300px;
    font-size: 16px;
    box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1b-text39 {
    font-weight: 700;
  }
  .basic-py1b-text43 {
    font-weight: 700;
  }
  .basic-py1b-text44 {
    font-weight: 700;
  }
  .basic-py1b-text45 {
    font-weight: 700;
  }
  .basic-py1b-text51 {
    font-weight: 700;
  }
  .basic-py1b-text52 {
    font-weight: 700;
  }
  .basic-py1b-text53 {
    font-weight: 700;
  }
  .basic-py1b-text54 {
    font-weight: 700;
  }
  .basic-py1b-text55 {
    font-weight: 700;
  }
  .basic-py1b-text56 {
    font-weight: 700;
  }
  .basic-py1b-text57 {
    font-weight: 700;
  }
  .basic-py1b-text61 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py1b-text69 {
    font-weight: 700;
  }
  .basic-py1b-image1 {
    width: 743px;
    height: 236px;
    align-self: center;
    margin-top: 10px;
  }
  .basic-py1b-text73 {
    font-size: 18px;
    align-self: flex-end;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py1b-text75 {
    font-style: italic;
  }
  .basic-py1b-reference {
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
  .basic-py1b-text76 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py1b-text77 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py1b-text78 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text79 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text80 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text81 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text82 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text83 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-link {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py1b-text84 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text85 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text86 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text87 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text88 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-text89 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1b-link1 {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py1b-footer {
    justify-content: space-between;
  }
  .basic-py1b-navlink6 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py1b-text91 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py1b-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py1b-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py1b-footer {
    align-self: center;
  }
  .basic-py1b-icon-group {
    display: none;
  }
}
</style>
