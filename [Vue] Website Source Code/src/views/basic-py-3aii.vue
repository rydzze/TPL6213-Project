<template>
  <div class="basic-py3aii-container">
    <div class="basic-py3aii-banner">
      <div class="basic-py3aii-main-content">
        <h1 class="basic-py3aii-heading">CONTROL STRUCTURE</h1>
        <div class="basic-py3aii-container1">
          <router-link to="/basic-py-3ai" class="basic-py3aii-navlink button">
            Selection Statement
          </router-link>
          <router-link to="/basic-py-3aii" class="basic-py3aii-navlink1 button">
            Two-way Selectors
          </router-link>
          <router-link to="/basic-py-3aiii" class="basic-py3aii-navlink2 button">
            Multiple-way Selectors
          </router-link>
        </div>
        <div class="basic-py3aii-container2">
          <router-link to="/basic-py-3bi" class="basic-py3aii-navlink3 button">
            Counter-Controlled Loops
          </router-link>
          <router-link to="/basic-py-3bii" class="basic-py3aii-navlink4 button">
            Logically-Controlled Loops
          </router-link>
        </div>
        <div class="basic-py3aii-content-here">
          <div class="basic-py3aii-column">
            <h1 class="basic-py3aii-text">
              <span>a) Two-way selectors</span>
              <br />
            </h1>
            <div class="basic-py3aii-two-way-selectors">
              <div class="basic-py3aii-container3">
                <div class="basic-py3aii-if">
                  <span class="basic-py3aii-text03">
                    <span class="basic-py3aii-text04">If statement</span>
                    <span>
                      : used to check the condition and then decide the execution
                      if the condition is True, the block of statements is
                      executed if False the block of statements will be ignored.
                      In short, if statements only check for the True statements.
                    </span>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if.png?raw=true"
                    loading="eager"
                    class="basic-py3aii-image"
                  />
                </div>
                <div class="basic-py3aii-if-else">
                  <span class="basic-py3aii-text06">
                    <span class="basic-py3aii-text07">If-else statement</span>
                    <span>
                      : used to test a condition and check the condition then
                      decide which block of statements to be executed.
                    </span>
                    <br />
                    <br />
                    <span>
                      For example: if num = 7 % 2 = 0, the even statement will be
                      displayed otherwise odd statements will be displayed.
                    </span>
                    <br />
                    <br />
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if-else.png?raw=true"
                    loading="eager"
                    class="basic-py3aii-image1"
                  />
                </div>
              </div>
              <div class="basic-py3aii-container4">
                <div class="basic-py3aii-if-elif-else">
                  <span class="basic-py3aii-text14">
                    <span class="basic-py3aii-text15">if-elif-else</span>
                    <span>: used to test multiple conditions.</span>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/if-elif-else.png?raw=true"
                    loading="eager"
                    class="basic-py3aii-image2"
                  />
                </div>
                <div class="basic-py3aii-nested">
                  <span class="basic-py3aii-text17">
                    <span class="basic-py3aii-text18">Nested if</span>
                    <span>
                      : If the line else: were indented to begin in the same
                      column as the nested if, the else clause would be matched
                      with the inner if.
                      <span v-html="rawefuu"></span>
                    </span>
                    <span><span v-html="raw5mi2"></span></span>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/nested_if.png?raw=true"
                    loading="eager"
                    class="basic-py3aii-image3"
                  />
                </div>
              </div>
              <div class="basic-py3aii-clause-form">
                <div class="basic-py3aii-container5">
                  <span class="basic-py3aii-text21">
                    <span class="basic-py3aii-text22">Clause Form</span>
                    <br />
                    <span><span v-html="raw9ara"></span></span>
                    <span><span v-html="rawjc83"></span></span>
                  </span>
                  <span class="basic-py3aii-text26">
                    <br />
                    <span>
                      Python uses indentation to define clauses and the scope in
                      the code, unlike other programming languages that use curly
                      brackets ’&#123;&#125;’ to define the scope. Indentation is
                      important in Python to avoid errors occurring while running
                      the code especially when we use if else, nested if, and
                      if-elif else statements.
                      <span v-html="raw9txa"></span>
                    </span>
                    <span><span v-html="rawlnxh"></span></span>
                  </span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/indentation.png?raw=true"
                    loading="eager"
                    class="basic-py3aii-image4"
                  />
                </div>
                <div class="basic-py3aii-container6">
                  <span class="basic-py3aii-text30">OUTPUT:-</span>
                  <img
                    alt="image"
                    src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/3a%20Control%20Structure_Alia/output.png?raw=true"
                    loading="eager"
                    class="basic-py3aii-image5"
                  />
                </div>
              </div>
            </div>
          </div>
          <span class="basic-py3aii-text31">
            <span>
              -
              <span v-html="raw6lad"></span>
            </span>
            <span class="basic-py3aii-text33">Noor Alia Alisa</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py3aii-reference">
      <h1 class="basic-py3aii-text34">References</h1>
      <span class="basic-py3aii-text35">
        <br class="basic-py3aii-text36" />
        <span class="basic-py3aii-text37">
          Switch Case in Python (Replacement)
        </span>
        <span class="basic-py3aii-text38">
          . (2017, October 29). GeeksforGeeks.
        </span>
        <br class="basic-py3aii-text39" />
        <span class="basic-py3aii-text40">
                 
          <span v-html="raw3810"></span>
        </span>
        <a
          href="https://www.geeksforgeeks.org/switch-case-in-python-replacement/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py3aii-link"
        >
          https://www.geeksforgeeks.org/switch-case-in-python-replacement/
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py3aii-footer">
      <div class="basic-py3aii-container7">
        <router-link to="/strace" class="basic-py3aii-navlink5">
          STRACE
        </router-link>
      </div>
      <span class="basic-py3aii-text42">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py3aii-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py3aii-icon">
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
  name: 'BasicPy3aii',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawefuu: ' ',
      raw5mi2: ' ',
      raw9ara: ' ',
      rawjc83: ' ',
      raw9txa: ' ',
      rawlnxh: ' ',
      raw6lad: ' ',
      raw3810: ' ',
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
.basic-py3aii-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py3aii-banner {
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

.basic-py3aii-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py3aii-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py3aii-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py3aii-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aii-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aii-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aii-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aii-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aii-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aii-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py3aii-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aii-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aii-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py3aii-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py3aii-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.basic-py3aii-two-way-selectors {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  flex-direction: column;
}
.basic-py3aii-container3 {
  width: 1211px;
  height: 460px;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
}
.basic-py3aii-if {
  flex: 0 0 auto;
  width: 451px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-text03 {
  text-align: justify;
  padding-right: 20px;
}
.basic-py3aii-text04 {
  text-decoration: underline;
}
.basic-py3aii-image {
  width: 360px;
  height: 261px;
  align-self: flex-start;
  margin-top: 55px;
  object-fit: cover;
}
.basic-py3aii-if-else {
  flex: 0 0 auto;
  width: 412px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-text06 {
  text-align: justify;
  padding-right: 20px;
}
.basic-py3aii-text07 {
  text-decoration: underline;
}
.basic-py3aii-image1 {
  width: 310px;
  height: 261px;
  align-self: flex-start;
  object-fit: cover;
}
.basic-py3aii-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py3aii-if-elif-else {
  width: 400px;
  height: 281px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-text15 {
  text-decoration: underline;
}
.basic-py3aii-image2 {
  width: 357px;
  height: 219px;
  margin-top: 10px;
  object-fit: cover;
}
.basic-py3aii-nested {
  flex: 0 0 auto;
  width: 430px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-text17 {
  text-align: justify;
}
.basic-py3aii-text18 {
  text-decoration: underline;
}
.basic-py3aii-image3 {
  width: 431px;
  height: 262px;
  margin-top: 90px;
  object-fit: cover;
}
.basic-py3aii-clause-form {
  width: 1298px;
  height: 795px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.basic-py3aii-container5 {
  width: 740px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-text21 {
  text-align: justify;
}
.basic-py3aii-text26 {
  text-align: justify;
}
.basic-py3aii-image4 {
  width: 633px;
  height: 351px;
  object-fit: cover;
}
.basic-py3aii-container6 {
  flex: 0 0 auto;
  width: 552px;
  height: 282px;
  display: flex;
  margin-top: 110px;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py3aii-image5 {
  width: 467px;
  height: 123px;
  margin-top: 10px;
  object-fit: cover;
}
.basic-py3aii-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py3aii-footer {
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
.basic-py3aii-container7 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py3aii-navlink5 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py3aii-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py3aii-container {
    background-color: #f7f7f7;
  }
  .basic-py3aii-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py3aii-main-content {
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
  .basic-py3aii-heading {
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
  .basic-py3aii-container1 {
    width: 700px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py3aii-navlink {
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
  .basic-py3aii-navlink1 {
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
  .basic-py3aii-navlink2 {
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
  .basic-py3aii-container2 {
    width: 800px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py3aii-navlink3 {
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
  .basic-py3aii-navlink4 {
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
  .basic-py3aii-content-here {
    width: 1200px;
    height: auto;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py3aii-column {
    flex: 1;
    width: 100%;
    align-items: flex-start;
  }
  .basic-py3aii-text {
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
  .basic-py3aii-two-way-selectors {
    width: 1200px;
    padding-top: 0px;
  }
  .basic-py3aii-container3 {
    width: auto;
    height: auto;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  .basic-py3aii-if {
    width: 50%;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-fourunits);
  }
  .basic-py3aii-text03 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aii-text04 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py3aii-image {
    margin-top: 37px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aii-if-else {
    width: 50%;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .basic-py3aii-text06 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aii-text07 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py3aii-image1 {
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aii-container4 {
    margin-bottom: 50px;
  }
  .basic-py3aii-if-elif-else {
    width: 50%;
    height: auto;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-fourunits);
  }
  .basic-py3aii-text14 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aii-text15 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py3aii-image2 {
    margin-top: 55px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aii-nested {
    width: 50%;
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .basic-py3aii-text17 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aii-text18 {
    font-weight: 700;
    text-decoration: underline;
  }
  .basic-py3aii-image3 {
    width: 402px;
    height: 230px;
    margin-top: 25px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aii-clause-form {
    width: 100%;
    height: auto;
    flex-direction: row;
  }
  .basic-py3aii-container5 {
    width: 60%;
    height: auto;
  }
  .basic-py3aii-text21 {
    font-size: 28px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
  }
  .basic-py3aii-text22 {
    font-weight: 700;
  }
  .basic-py3aii-text26 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-right: 87px;
    padding-bottom: 30px;
  }
  .basic-py3aii-image4 {
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aii-container6 {
    width: auto;
    height: auto;
    margin-top: 120px;
  }
  .basic-py3aii-text30 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py3aii-image5 {
    width: 421px;
    height: 111px;
    margin-top: 25px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py3aii-text31 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py3aii-text33 {
    font-style: italic;
  }
  .basic-py3aii-reference {
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
  .basic-py3aii-text34 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py3aii-text35 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py3aii-text36 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aii-text37 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aii-text38 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aii-text39 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aii-text40 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py3aii-link {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py3aii-footer {
    justify-content: space-between;
  }
  .basic-py3aii-navlink5 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py3aii-text42 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py3aii-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py3aii-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py3aii-footer {
    align-self: center;
  }
  .basic-py3aii-icon-group {
    display: none;
  }
}
</style>
