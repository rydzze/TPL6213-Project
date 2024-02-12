<template>
  <div class="basic-py4bi-container">
    <div class="basic-py4bi-banner">
      <div class="basic-py4bi-main-content">
        <h1 class="basic-py4bi-heading">SUBPROGRAMS</h1>
        <div class="basic-py4bi-container1">
          <router-link to="/basic-py-4ai" class="basic-py4bi-navlink button">
            Fundamentals of Subprograms
          </router-link>
          <router-link to="/basic-py-4aii" class="basic-py4bi-navlink1 button">
            Local Referencing Environments
          </router-link>
          <router-link to="/basic-py-4bi" class="basic-py4bi-navlink2 button">
            Parameter-Passing Method
          </router-link>
          <router-link to="/basic-py-4bii" class="basic-py4bi-navlink3 button">
            Indirect Subprograms Calling
          </router-link>
        </div>
        <div class="basic-py4bi-container2">
          <router-link to="/basic-py-4biii" class="basic-py4bi-navlink4 button">
            Design Issues for Functions
          </router-link>
          <router-link to="/basic-py-4biv" class="basic-py4bi-navlink5 button">
            Overloaded and Generic Subprograms
          </router-link>
          <router-link to="/basic-py-4bv" class="basic-py4bi-navlink6 button">
            User-Defined Overloaded Operators
          </router-link>
        </div>
        <div class="basic-py4bi-content-here">
          <div class="basic-py4bi-column">
            <h1 class="basic-py4bi-text">
              <span>Parameter-Passing Methods</span>
              <br />
            </h1>
            <div class="basic-py4bi-container3">
              <span class="basic-py4bi-text03">
                <span>
                  Believe it or not, Python use a method called
                  <span v-html="rawl5pl"></span>
                </span>
                <span class="basic-py4bi-text05">call-by-object-reference</span>
                <span>
                  or
                  <span v-html="rawbeaf"></span>
                </span>
                <span class="basic-py4bi-text07">call-by-assignment</span>
                <span>
                  to pass the parameter into the function. The way it works is
                  quite similar to the pass-by-value and pass-by-reference,
                  <span v-html="rawiuyl"></span>
                </span>
                <span class="basic-py4bi-text09">kind of</span>
                <span>.</span>
                <br />
                <br />
                <span>
                  Based on the source code given, we
                  <span v-html="rawms2j"></span>
                </span>
                <span class="basic-py4bi-text14">
                  pass
                  <span v-html="rawhtr5"></span>
                </span>
                <span>
                  the actual parameter, x and y into the func1 function. Then, the
                  <span v-html="rawiztw"></span>
                </span>
                <span class="basic-py4bi-text16">
                  value
                  <span v-html="rawmtdc"></span>
                </span>
                <span>
                  of formal parameter
                  <span v-html="rawtzh4"></span>
                </span>
                <span class="basic-py4bi-text18">x</span>
                <span>
                  is
                  <span v-html="rawidww"></span>
                </span>
                <span class="basic-py4bi-text20">incremented</span>
                <span>
                  by 1.2 and
                  <span v-html="raw8hzs"></span>
                </span>
                <span class="basic-py4bi-text22">y</span>
                <span>
                  &apos;s list is
                  <span v-html="rawpzed"></span>
                </span>
                <span class="basic-py4bi-text24">
                  appended
                  <span v-html="rawce8e"></span>
                </span>
                <span>by adding another item.</span>
                <br />
                <br />
                <span>
                  When we display the value of x and y after func1 executed, we
                  found that
                  <span v-html="rawyodr"></span>
                </span>
                <span class="basic-py4bi-text29">value of x is not changed</span>
                <span>
                  while
                  <span v-html="rawlls2"></span>
                </span>
                <span class="basic-py4bi-text31">value of y changed</span>
                <span>. </span>
                <span>
                  The reason is we
                  <span v-html="raw3rpl"></span>
                </span>
                <span class="basic-py4bi-text34">declare a new object for x</span>
                <span>during the increment (</span>
                <span class="basic-py4bi-text36">i += 1.2 / i = i + 1.2</span>
                <span>
                  ). However, this is
                  <span v-html="rawuejz"></span>
                </span>
                <span class="basic-py4bi-text38">not applied to y</span>
                <span>
                  because we are appending the list to the reference of the
                  object.
                </span>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4b%20Subprogram_Ariff/ParameterPassingMethod.png?raw=true"
                loading="eager"
                class="basic-py4bi-image"
              />
            </div>
            <span class="basic-py4bi-text40">
              <span>
                Additionally, we can see that the
                <span v-html="raw3r6r"></span>
              </span>
              <span class="basic-py4bi-text42">
                unique identifier of x is different
              </span>
              <span>
                while
                <span v-html="rawnz21"></span>
              </span>
              <span class="basic-py4bi-text44">
                unique identifier of y remain the same
              </span>
              <span>
                . This implies that when func1 is created, Python use
                <span v-html="raw5eea"></span>
              </span>
              <span class="basic-py4bi-text46">stack-dynamic</span>
              <span>
                to allocate some memory to be used for that scope. When we
                <span v-html="raww62u"></span>
              </span>
              <span class="basic-py4bi-text48">assign the variable x</span>
              <span>
                with addition of 1.2,
                <span v-html="rawykok"></span>
              </span>
              <span class="basic-py4bi-text50">new memory was allocated</span>
              <span>
                inside runtime-stack and this memory
                <span v-html="rawx1ns"></span>
              </span>
              <span class="basic-py4bi-text52">will deallocated</span>
              <span>
                when exiting func1. For
                <span v-html="rawat9n"></span>
              </span>
              <span class="basic-py4bi-text54">variable y</span>
              <span>
                , the memory only
                <span v-html="raw87zk"></span>
              </span>
              <span class="basic-py4bi-text56">
                hold the reference to the object
              </span>
              <span>
                , which is the original variable declared outside of func1.   
              </span>
            </span>
          </div>
          <span class="basic-py4bi-text58">
            <span>
              -
              <span v-html="rawv6yh"></span>
            </span>
            <span class="basic-py4bi-text60">Muhammad Ariff Ridzlan</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py4bi-reference">
      <h1 class="basic-py4bi-text61">References</h1>
      <span class="basic-py4bi-text62">
        <br class="basic-py4bi-text63" />
        <span class="basic-py4bi-text64">
          Dave, P. (2022, April 22).
          <span v-html="rawao5k"></span>
        </span>
        <span class="basic-py4bi-text65">Pass By Object Reference in Python</span>
        <span class="basic-py4bi-text66">. Medium.</span>
        <br class="basic-py4bi-text67" />
        <span class="basic-py4bi-text68">
                 
          <span v-html="rawbf7h"></span>
        </span>
        <a
          href="https://python.plainenglish.io/pass-by-object-reference-in-python-79a8d92dc493"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py4bi-link"
        >
          https://python.plainenglish.io/pass-by-object-reference-in-python-79a8d92dc493
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py4bi-footer">
      <div class="basic-py4bi-container4">
        <router-link to="/strace" class="basic-py4bi-navlink7">
          STRACE
        </router-link>
      </div>
      <span class="basic-py4bi-text70">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py4bi-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py4bi-icon">
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
  name: 'BasicPy4bi',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawl5pl: ' ',
      rawbeaf: ' ',
      rawiuyl: ' ',
      rawms2j: ' ',
      rawhtr5: ' ',
      rawiztw: ' ',
      rawmtdc: ' ',
      rawtzh4: ' ',
      rawidww: ' ',
      raw8hzs: ' ',
      rawpzed: ' ',
      rawce8e: ' ',
      rawyodr: ' ',
      rawlls2: ' ',
      raw3rpl: ' ',
      rawuejz: ' ',
      raw3r6r: ' ',
      rawnz21: ' ',
      raw5eea: ' ',
      raww62u: ' ',
      rawykok: ' ',
      rawx1ns: ' ',
      rawat9n: ' ',
      raw87zk: ' ',
      rawv6yh: ' ',
      rawao5k: ' ',
      rawbf7h: ' ',
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
.basic-py4bi-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py4bi-banner {
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

.basic-py4bi-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py4bi-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py4bi-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py4bi-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py4bi-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-navlink6 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bi-navlink6:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bi-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py4bi-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.basic-py4bi-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py4bi-image {
  width: 200px;
  object-fit: cover;
}
.basic-py4bi-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py4bi-footer {
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
.basic-py4bi-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py4bi-navlink7 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py4bi-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py4bi-container {
    background-color: #f7f7f7;
  }
  .basic-py4bi-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py4bi-main-content {
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
  .basic-py4bi-heading {
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
    background-position: top left;
  }
  .basic-py4bi-container1 {
    width: 950px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py4bi-navlink {
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    border-width: 1px;
    margin-right: 25px;
    background-color: rgb(255, 255, 255);
  }
  .basic-py4bi-navlink1 {
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
  .basic-py4bi-navlink2 {
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
  .basic-py4bi-navlink3 {
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
  .basic-py4bi-container2 {
    width: 750px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py4bi-navlink4 {
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
  .basic-py4bi-navlink5 {
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
  .basic-py4bi-navlink6 {
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
  .basic-py4bi-content-here {
    width: 1200px;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py4bi-column {
    flex: 1;
    width: 100%;
    align-items: flex-start;
    padding-bottom: 25px;
  }
  .basic-py4bi-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .basic-py4bi-container3 {
    align-items: center;
    padding-bottom: 35px;
  }
  .basic-py4bi-text03 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-right: var(--dl-space-space-threeunits);
  }
  .basic-py4bi-text05 {
    font-weight: 700;
  }
  .basic-py4bi-text07 {
    font-weight: 700;
  }
  .basic-py4bi-text09 {
    font-style: italic;
  }
  .basic-py4bi-text14 {
    font-weight: 700;
  }
  .basic-py4bi-text16 {
    font-weight: 700;
  }
  .basic-py4bi-text18 {
    font-weight: 700;
  }
  .basic-py4bi-text20 {
    font-weight: 700;
  }
  .basic-py4bi-text22 {
    font-weight: 700;
  }
  .basic-py4bi-text24 {
    font-weight: 700;
  }
  .basic-py4bi-text29 {
    font-weight: 700;
  }
  .basic-py4bi-text31 {
    font-weight: 700;
  }
  .basic-py4bi-text34 {
    font-weight: 700;
  }
  .basic-py4bi-text36 {
    font-style: italic;
  }
  .basic-py4bi-text38 {
    font-weight: 700;
  }
  .basic-py4bi-image {
    width: 550px;
    height: 242px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py4bi-text40 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py4bi-text42 {
    font-weight: 700;
  }
  .basic-py4bi-text44 {
    font-weight: 700;
  }
  .basic-py4bi-text46 {
    font-weight: 700;
  }
  .basic-py4bi-text48 {
    font-weight: 700;
  }
  .basic-py4bi-text50 {
    font-weight: 700;
  }
  .basic-py4bi-text52 {
    font-weight: 700;
  }
  .basic-py4bi-text54 {
    font-weight: 700;
  }
  .basic-py4bi-text56 {
    font-weight: 700;
  }
  .basic-py4bi-text58 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py4bi-text60 {
    font-style: italic;
  }
  .basic-py4bi-reference {
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
  .basic-py4bi-text61 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py4bi-text62 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py4bi-text63 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bi-text64 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bi-text65 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bi-text66 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bi-text67 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bi-text68 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bi-link {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py4bi-footer {
    justify-content: space-between;
  }
  .basic-py4bi-navlink7 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py4bi-text70 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py4bi-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py4bi-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py4bi-footer {
    align-self: center;
  }
  .basic-py4bi-icon-group {
    display: none;
  }
}
</style>
