<template>
  <div class="basic-py3aiii-container">
    <div class="basic-py3aiii-banner">
      <div class="basic-py3aiii-main-content">
        <h1 class="basic-py3aiii-heading">CONTROL STRUCTURE</h1>
        <div class="basic-py3aiii-container1">
          <router-link to="/basic-py-3ai" class="basic-py3aiii-navlink button">
            Selection Statement
          </router-link>
          <router-link to="/basic-py-3aii" class="basic-py3aiii-navlink1 button">
            Two-way Selectors
          </router-link>
          <router-link to="/basic-py-3aiii" class="basic-py3aiii-navlink2 button">
            Multiple-way Selectors
          </router-link>
        </div>
        <div class="basic-py3aiii-container2">
          <router-link to="/basic-py-3bi" class="basic-py3aiii-navlink3 button">
            Counter-Controlled Loops
          </router-link>
          <router-link to="/basic-py-3bii" class="basic-py3aiii-navlink4 button">
            Logically-Controlled Loops
          </router-link>
        </div>
        <div class="basic-py3aiii-content-here">
          <h1 class="basic-py3aiii-text">b) Multiple-way selectors</h1>
          <span class="basic-py3aiii-text01">
            <span class="basic-py3aiii-text02">
              The main things that must be remember is that Python does not have a
              switch case statement. There is two cases in multiple way selectors
              which are by nested if and by SWITCH structure. 
            </span>
            <br />
            <br />
          </span>
          <div class="basic-py3aiii-container3">
            <div class="basic-py3aiii-switch-1">
              <span class="basic-py3aiii-text05">
                Multiple-way selection by SWITCH structure.
              </span>
              <span class="basic-py3aiii-text06">
                <span>
                  There is other method to replace the SWITCH CASE statements
                  which are:
                </span>
                <br />
              </span>
              <div class="basic-py3aiii-method1">
                <span class="basic-py3aiii-text09">
                  <span>1 - Implement SWITCH CASE using Dictionary mapping</span>
                  <span>      </span>
                </span>
                <img
                  alt="image"
                  src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/dictionary.png?raw=true"
                  class="basic-py3aiii-image"
                />
                <span class="basic-py3aiii-text12">
                  <span>The function definition &quot;</span>
                  <span class="basic-py3aiii-text14">dayOfWeek</span>
                  <span>
                    &quot; converts a numeric day number into the corresponding
                    day name using a dictionary called &quot;
                  </span>
                  <span class="basic-py3aiii-text16">switch</span>
                  <span>&quot;(</span>
                  <span class="basic-py3aiii-text18">
                    Note that the dictionary name can be any name
                  </span>
                  <span>). The function takes a &quot;</span>
                  <span class="basic-py3aiii-text20">day_number</span>
                  <span>
                    &quot; as input and returns the day name for the given &quot;
                  </span>
                  <span class="basic-py3aiii-text22">day_number&quot;</span>
                  <span>
                    using the dictionary. If the day number is not found, it
                    returns &quot;Invalid day number&quot;. In the example, it
                    prints the result for day number 5 (Friday)
                  </span>
                </span>
              </div>
            </div>
            <div class="basic-py3aiii-nested-if">
              <span class="basic-py3aiii-text24">
                <span></span>
                <span class="basic-py3aiii-text26">
                  Multiple-way selection by nested IF structure.
                </span>
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if_structure.png?raw=true"
                class="basic-py3aiii-image1"
              />
            </div>
          </div>
          <div class="basic-py3aiii-container4">
            <div class="basic-py3aiii-switch-2">
              <span class="basic-py3aiii-text27">
                2 - Implement SWITCH CASE using class
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/class.png?raw=true"
                class="basic-py3aiii-image2"
              />
              <span class="basic-py3aiii-text28">
                <span>The class definition &quot;</span>
                <span class="basic-py3aiii-text30">Python_Switch&quot;</span>
                <span> has a method named &quot;</span>
                <span class="basic-py3aiii-text32">day&quot;</span>
                <span>that takes a parameter &quot;</span>
                <span class="basic-py3aiii-text34">week&quot;</span>
                <span>. &quot;</span>
                <span class="basic-py3aiii-text36">getattr</span>
                <span>&quot; function</span>
                <span>
                   is used to dynamically get an attribute/method of an object by
                  name and
                </span>
                <span>
                   searches for a method named case_ + week within the class
                  instance (
                </span>
                <span class="basic-py3aiii-text40">self</span>
                <span>). </span>
                <span>
                  If not found, it returns a lambda function that returns the
                  default value. 
                </span>
                <span>
                  <span>
                    An instance of the class
                    <span v-html="raweydx"></span>
                  </span>
                  <span><span v-html="rawrtpc"></span></span>
                </span>
                <span class="basic-py3aiii-text46">Python_Switch</span>
                <span>is created which is &quot;</span>
                <span class="basic-py3aiii-text48">my_switch</span>
                <span>&quot;</span>
                <br />
                <span>
                  <span>
                    The
                    <span v-html="rawhw35"></span>
                  </span>
                  <span><span v-html="raw2a19"></span></span>
                </span>
                <span class="basic-py3aiii-text54">day</span>
                <span>
                  <span>
                    method is called on the instance with the
                    <span v-html="rawvhi9"></span>
                  </span>
                  <span><span v-html="rawb1kk"></span></span>
                </span>
                <span class="basic-py3aiii-text58">argument 4</span>
                <span>
                  <span><span v-html="raw329j"></span></span>
                  <span><span v-html="rawrnnc"></span></span>
                </span>
                <span>
                  <span>
                    It dynamically looks for the
                    <span v-html="raweebh"></span>
                  </span>
                  <span><span v-html="raw2j6i"></span></span>
                </span>
                <span class="basic-py3aiii-text65">
                  method case_4 and calls it
                </span>
                <span>.</span>
              </span>
            </div>
            <div class="basic-py3aiii-change-order">
              <span class="basic-py3aiii-text67">
                Change the order of case number
              </span>
              <img
                alt="image"
                src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/change_order.png?raw=true"
                class="basic-py3aiii-image3"
              />
              <span class="basic-py3aiii-text68">
                <span>
                  From the example above, when we change the case number, it will
                  affect the output. Supposedly 
                </span>
                <span>argument 4 would be displayed on </span>
                <span class="basic-py3aiii-text71">Thursday</span>
                <span>but now it has changed to</span>
                <span class="basic-py3aiii-text73">Wednesday</span>
                <span>because of the changes in case number.</span>
                <br />
              </span>
            </div>
          </div>
          <span class="basic-py3aiii-text76">- Noor Alia Alisa</span>
        </div>
      </div>
    </div>
    <div class="basic-py3aiii-reference">
      <h1 class="basic-py3aiii-text77">References</h1>
      <span class="basic-py3aiii-text78">
        <br class="basic-py3aiii-text79" />
        <span class="basic-py3aiii-text80">
          Switch Case in Python (Replacement)
        </span>
        <span class="basic-py3aiii-text81">
          . (2017, October 29). GeeksforGeeks.
        </span>
        <br class="basic-py3aiii-text82" />
        <span class="basic-py3aiii-text83">
                 
          <span v-html="rawlyz1"></span>
        </span>
        <a
          href="https://www.geeksforgeeks.org/switch-case-in-python-replacement/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py3aiii-link"
        >
          https://www.geeksforgeeks.org/switch-case-in-python-replacement/
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py3aiii-footer">
      <div class="basic-py3aiii-container5">
        <router-link to="/strace" class="basic-py3aiii-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="basic-py3aiii-text85">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py3aiii-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py3aiii-icon">
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
  name: 'BasicPy3aiii',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      raweydx: ' ',
      rawrtpc: ' ',
      rawhw35: ' ',
      raw2a19: ' ',
      rawvhi9: ' ',
      rawb1kk: ' ',
      raw329j: ' ',
      rawrnnc: ' ',
      raweebh: ' ',
      raw2j6i: ' ',
      rawlyz1: ' ',
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
.basic-py3aiii-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py3aiii-banner {
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

.basic-py3aiii-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py3aiii-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py3aiii-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py3aiii-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aiii-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aiii-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aiii-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aiii-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aiii-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aiii-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py3aiii-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aiii-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aiii-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aiii-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aiii-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aiii-text01 {
  margin-top: 5px;
}
.basic-py3aiii-text02 {
  margin-top: 5px;
}
.basic-py3aiii-container3 {
  width: auto;
  height: 368px;
  display: flex;
  align-items: flex-start;
}
.basic-py3aiii-switch-1 {
  width: 1211px;
  height: 387px;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
}
.basic-py3aiii-text05 {
  text-align: center;
  text-decoration: underline;
}
.basic-py3aiii-text06 {
  margin-top: 5px;
}
.basic-py3aiii-method1 {
  flex: 0 0 auto;
  width: 50%;
  height: 556px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.basic-py3aiii-text09 {
  margin-top: 5px;
  margin-bottom: 5px;
}
.basic-py3aiii-image {
  width: 457px;
  height: 350px;
  margin-top: 0px;
  object-fit: cover;
}
.basic-py3aiii-text12 {
  margin-top: 5px;
  text-align: justify;
}
.basic-py3aiii-text14 {
  font-weight: 700;
}
.basic-py3aiii-text16 {
  font-weight: 700;
}
.basic-py3aiii-text18 {
  text-decoration: underline;
}
.basic-py3aiii-text20 {
  font-weight: 700;
}
.basic-py3aiii-text22 {
  font-weight: 700;
}
.basic-py3aiii-nested-if {
  flex: 0 0 auto;
  width: 407px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aiii-text24 {
  text-align: justify;
  padding-right: 20px;
}
.basic-py3aiii-text26 {
  text-decoration: underline;
}
.basic-py3aiii-image1 {
  width: 378px;
  height: 551px;
  margin-top: 10px;
  object-fit: cover;
}
.basic-py3aiii-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py3aiii-switch-2 {
  flex: 0 0 auto;
  width: 440px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aiii-text27 {
  margin-top: 5px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 5px;
}
.basic-py3aiii-image2 {
  width: 416px;
  height: 351px;
  margin-top: 0px;
  object-fit: cover;
  margin-left: 10px;
}
.basic-py3aiii-text28 {
  margin-top: 5px;
  text-align: justify;
  margin-left: 10px;
}
.basic-py3aiii-text30 {
  font-weight: 700;
}
.basic-py3aiii-text32 {
  font-weight: 700;
}
.basic-py3aiii-text34 {
  font-weight: 700;
}
.basic-py3aiii-text36 {
  font-weight: 700;
}
.basic-py3aiii-text40 {
  font-weight: 700;
}
.basic-py3aiii-text46 {
  font-weight: 700;
}
.basic-py3aiii-text48 {
  font-weight: 700;
}
.basic-py3aiii-text54 {
  font-weight: 700;
}
.basic-py3aiii-text58 {
  font-weight: 700;
}
.basic-py3aiii-text65 {
  font-weight: 700;
}
.basic-py3aiii-change-order {
  flex: 0 0 auto;
  width: 629px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aiii-text67 {
  align-self: center;
  font-weight: 700;
  margin-bottom: 5px;
}
.basic-py3aiii-image3 {
  width: 506px;
  height: 430px;
  align-self: center;
  object-fit: cover;
}
.basic-py3aiii-text68 {
  align-self: center;
  margin-top: 5px;
  font-weight: 700;
}
.basic-py3aiii-text71 {
  text-decoration: underline;
}
.basic-py3aiii-text73 {
  text-decoration: underline;
}
.basic-py3aiii-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py3aiii-footer {
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
.basic-py3aiii-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py3aiii-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py3aiii-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py3aiii-container {
    background-color: #f7f7f7;
  }
  .basic-py3aiii-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py3aiii-main-content {
    flex: 1;
    width: 1300px;
    height: 2067px;
    box-shadow: 0px 0px 10px 0px #d3d2d6;
    align-items: flex-start;
    padding-top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .basic-py3aiii-heading {
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
    background-position: right;
  }
  .basic-py3aiii-container1 {
    width: 700px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py3aiii-navlink {
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
  .basic-py3aiii-navlink1 {
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
  .basic-py3aiii-navlink2 {
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
  .basic-py3aiii-container2 {
    width: 800px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py3aiii-navlink3 {
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
  .basic-py3aiii-navlink4 {
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
  .basic-py3aiii-content-here {
    width: 1200px;
    height: auto;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py3aiii-text {
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
  .basic-py3aiii-text01 {
    font-size: 16px;
    font-style: normal;
    margin-top: 0px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-right: var(--dl-space-space-fiveunits);
  }
  .basic-py3aiii-text02 {
    margin-top: 0px;
  }
  .basic-py3aiii-container3 {
    width: 100%;
    height: auto;
  }
  .basic-py3aiii-switch-1 {
    width: 50%;
    height: auto;
    margin-top: 0px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .basic-py3aiii-text05 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aiii-text06 {
    font-size: 16px;
    font-style: normal;
    margin-top: 15px;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aiii-method1 {
    width: auto;
    height: auto;
    margin-top: 15px;
    padding-left: var(--dl-space-space-twounits);
  }
  .basic-py3aiii-text09 {
    font-size: 16px;
    align-self: flex-start;
    font-style: normal;
    margin-top: 0px;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .basic-py3aiii-image {
    width: 100%;
    height: auto;
    margin-top: 0px;
    border-radius: var(--dl-radius-radius-radius4);
    margin-bottom: 0px;
  }
  .basic-py3aiii-text12 {
    font-size: 16px;
    margin-top: 15px;
    font-family: Inter;
    line-height: 1.15;
  }
  .basic-py3aiii-nested-if {
    width: 50%;
  }
  .basic-py3aiii-text24 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: var(--dl-space-space-fourunits);
  }
  .basic-py3aiii-text26 {
    text-decoration: underline;
  }
  .basic-py3aiii-image1 {
    width: 380px;
    height: 554px;
    align-self: flex-start;
    margin-top: 20px;
    margin-left: var(--dl-space-space-fiveunits);
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aiii-container4 {
    height: auto;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .basic-py3aiii-switch-2 {
    width: 50%;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .basic-py3aiii-text27 {
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 20px;
  }
  .basic-py3aiii-image2 {
    width: 504px;
    height: 434px;
    margin-left: 0px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aiii-text28 {
    font-size: 16px;
    margin-top: 20px;
    font-family: Inter;
    line-height: 1.15;
    margin-left: 0px;
  }
  .basic-py3aiii-change-order {
    width: 50%;
    height: auto;
    align-self: flex-start;
    padding-left: var(--dl-space-space-fiveunits);
  }
  .basic-py3aiii-text67 {
    font-size: 24px;
    align-self: flex-start;
    font-family: Inter;
    line-height: 1.15;
    margin-left: var(--dl-space-space-oneandhalfunits);
    margin-bottom: 10px;
  }
  .basic-py3aiii-image3 {
    width: 512px;
    height: 435px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aiii-text68 {
    font-size: 16px;
    margin-top: 15px;
    text-align: justify;
    font-family: Inter;
    line-height: 1.15;
  }
  .basic-py3aiii-text76 {
    font-size: 18px;
    font-style: italic;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.15;
    padding-top: 25px;
  }
  .basic-py3aiii-reference {
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
  .basic-py3aiii-text77 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py3aiii-text78 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py3aiii-text79 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aiii-text80 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aiii-text81 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aiii-text82 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aiii-text83 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aiii-link {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py3aiii-footer {
    justify-content: space-between;
  }
  .basic-py3aiii-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py3aiii-text85 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py3aiii-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py3aiii-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py3aiii-footer {
    align-self: center;
  }
  .basic-py3aiii-icon-group {
    display: none;
  }
}
</style>
