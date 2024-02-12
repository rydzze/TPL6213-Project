<template>
  <div class="basic-py1f-container">
    <div class="basic-py1f-banner">
      <div class="basic-py1f-main-content">
        <h1 class="basic-py1f-heading">NAMES AND BINDINGS</h1>
        <div class="basic-py1f-container1">
          <router-link to="/basic-py-1a" class="basic-py1f-navlink button">
            Name
          </router-link>
          <router-link to="/basic-py-1b" class="basic-py1f-navlink1 button">
            Address, Value and Type
          </router-link>
          <router-link to="/basic-py-1c" class="basic-py1f-navlink2 button">
            The Concept of Binding
          </router-link>
          <router-link to="/basic-py-1d" class="basic-py1f-navlink3 button">
            Scope and Lifetime
          </router-link>
          <router-link to="/basic-py-1e" class="basic-py1f-navlink4 button">
            Referencing Environments
          </router-link>
          <router-link to="/basic-py-1f" class="basic-py1f-navlink5 button">
            Named Constants
          </router-link>
        </div>
        <div class="basic-py1f-nabil">
          <div class="basic-py1f-container2">
            <h1 class="basic-py1f-text">Named Constants</h1>
            <div class="basic-py1f-container3">
              <span class="basic-py1f-text01">
                <span>
                  There is
                  <span v-html="rawfi3j"></span>
                </span>
                <span class="basic-py1f-text03">
                  no concept
                  <span v-html="rawvmde"></span>
                </span>
                <span>
                  of named constants. However, it allows us to make our own
                  constant.
                </span>
                <br />
                <br />
                <span class="basic-py1f-text07">
                  Rules
                  <span v-html="rawfp05"></span>
                </span>
                <span>for declaring a constant:</span>
                <br />
                <br />
                <span>
                  1. Python Constants and variable names should contain a
                  combination
                </span>
                <br />
                <span>
                     of lowercase (a-z) or capital (A-Z) characters, numbers
                  (0-9), or an
                </span>
                <br />
                <span>   underscore ().</span>
                <br />
                <span>
                  2. When using a Constant name, always use UPPERCASE, For
                  example,
                </span>
                <br />
                <span>     CONSTANT = 50.</span>
                <br />
                <span>3. The constant names should not begin with digits.</span>
                <br />
                <span>4. Only underscore is allow as special character.</span>
                <br />
              </span>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/rydzze/TPL6213-Project/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/2b%20Expressions%20and%20Assignment/Screenshot%202024-01-04%20193809.png"
                class="basic-py1f-image"
              />
            </div>
          </div>
          <span class="basic-py1f-text25">
            <span>
              -
              <span v-html="rawe6v7"></span>
            </span>
            <span class="basic-py1f-text27">Muhammad Nabil Irfan</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py1f-reference">
      <h1 class="basic-py1f-text28">References</h1>
      <span class="basic-py1f-texts">
        <br class="basic-py1f-text29" />
        <span class="basic-py1f-text30">
          What are Python Variables, Python Constants and Literals? | Definition.
        </span>
        <span>(2021, June 29). Toppr-guides.</span>
        <br />
        <span>
                 
          <span v-html="raw50pi"></span>
        </span>
        <a
          href="https://www.toppr.com/guides/python/python-introduction/variables-constants-literals/python-variables-constants-and-literals/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1f-link"
        >
          https://www.toppr.com/guides/python/python-introduction/variables-constants-literals/python-variables-constants-and-literals/
        </a>
        <br />
        <br class="basic-py1f-text35" />
        <span class="basic-py1f-text36">Static and Dynamic Scoping</span>
        <span>. (2017, October 20). GeeksforGeeks.</span>
        <br />
        <span>
                 
          <span v-html="rawoqhu"></span>
        </span>
        <a
          href="https://www.geeksforgeeks.org/static-and-dynamic-scoping/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1f-link1"
        >
          https://www.geeksforgeeks.org/static-and-dynamic-scoping/
        </a>
        <span><span v-html="rawc5n2"></span></span>
      </span>
    </div>
    <footer class="basic-py1f-footer">
      <div class="basic-py1f-container4">
        <router-link to="/strace" class="basic-py1f-navlink6">STRACE</router-link>
      </div>
      <span class="basic-py1f-text41">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py1f-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py1f-icon">
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
  name: 'BasicPy1f',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawfi3j: ' ',
      rawvmde: ' ',
      rawfp05: ' ',
      rawe6v7: ' ',
      raw50pi: ' ',
      rawoqhu: ' ',
      rawc5n2: ' ',
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
.basic-py1f-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py1f-banner {
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

.basic-py1f-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py1f-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py1f-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py1f-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1f-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1f-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1f-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1f-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1f-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1f-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1f-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1f-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1f-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1f-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1f-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1f-nabil {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1f-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.basic-py1f-container3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1f-image {
  width: 200px;
  object-fit: cover;
}
.basic-py1f-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py1f-footer {
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
.basic-py1f-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py1f-navlink6 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py1f-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py1f-container {
    background-color: #f7f7f7;
  }
  .basic-py1f-banner {
    width: 1600px;
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1600w.jpg");
  }
  .basic-py1f-main-content {
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
  .basic-py1f-heading {
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
  .basic-py1f-container1 {
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
  .basic-py1f-navlink {
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
  .basic-py1f-navlink1 {
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
  .basic-py1f-navlink2 {
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
  .basic-py1f-navlink3 {
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
  .basic-py1f-navlink4 {
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
  .basic-py1f-navlink5 {
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
  .basic-py1f-nabil {
    width: 1200px;
    height: auto;
    position: relative;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
    justify-content: flex-start;
  }
  .basic-py1f-container2 {
    width: 100%;
    height: auto;
    position: relative;
    font-size: 23px;
    flex-direction: column;
    padding-bottom: 25px;
  }
  .basic-py1f-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-bottom: 30px;
  }
  .basic-py1f-container3 {
    width: auto;
    flex-direction: row;
  }
  .basic-py1f-text01 {
    width: 100%;
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-right: var(--dl-space-space-fourunits);
  }
  .basic-py1f-text03 {
    font-weight: 700;
  }
  .basic-py1f-text07 {
    font-weight: 700;
  }
  .basic-py1f-image {
    width: 595px;
    height: 188px;
  }
  .basic-py1f-text25 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py1f-text27 {
    font-style: italic;
  }
  .basic-py1f-reference {
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
  .basic-py1f-text28 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py1f-texts {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py1f-text29 {
    font-style: italic;
  }
  .basic-py1f-text30 {
    font-style: italic;
  }
  .basic-py1f-link {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py1f-text35 {
    font-style: italic;
  }
  .basic-py1f-text36 {
    font-style: italic;
  }
  .basic-py1f-link1 {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py1f-footer {
    justify-content: space-between;
  }
  .basic-py1f-navlink6 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py1f-text41 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py1f-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py1f-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py1f-footer {
    align-self: center;
  }
  .basic-py1f-icon-group {
    display: none;
  }
}
</style>
