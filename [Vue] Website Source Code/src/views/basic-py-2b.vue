<template>
  <div class="basic-py2b-container">
    <div class="basic-py2b-banner">
      <div class="basic-py2b-main-content">
        <h1 class="basic-py2b-heading">EXPRESSIONS AND ASSIGNMENT</h1>
        <div class="basic-py2b-container1">
          <router-link to="/basic-py-2a" class="basic-py2b-navlink button">
            Arithmetic Expressions
          </router-link>
          <router-link to="/basic-py-2b" class="basic-py2b-navlink1 button">
            Functional Side Effects
          </router-link>
          <router-link to="/basic-py-2ci" class="basic-py2b-navlink2 button">
            Overloaded Operators
          </router-link>
          <router-link to="/basic-py-2cii" class="basic-py2b-navlink3 button">
            Type Conversions
          </router-link>
        </div>
        <div class="basic-py2b-container2">
          <router-link to="/basic-py-2d" class="basic-py2b-navlink4 button">
            Relational and Boolean Expressions
          </router-link>
          <router-link to="/basic-py-2e" class="basic-py2b-navlink5 button">
            Short-Circuit Evaluation
          </router-link>
          <router-link to="/basic-py-2f" class="basic-py2b-navlink6 button">
            Assignment Statements
          </router-link>
          <router-link to="/basic-py-2g" class="basic-py2b-navlink7 button">
            Mixed-Mode Assignment
          </router-link>
        </div>
        <div class="basic-py2b-alia">
          <div class="basic-py2b-func-side-effect">
            <div class="basic-py2b-definition">
              <span class="basic-py2b-text">
                <span class="basic-py2b-text01">Functional Side Effects</span>
                <br />
                <span><span v-html="rawtd3e"></span></span>
                <span><span v-html="rawjymx"></span></span>
                <span><span v-html="rawl8oj"></span></span>
                <span><span v-html="rawvjl5"></span></span>
              </span>
              <span class="basic-py2b-text07">
                <span>
                  Functional side effects occur when a function modifies a
                  variable outside its local scope 
                </span>
                <span>
                  or has an observable impact on the program&apos;s state beyond
                  its returned value.
                </span>
                <span><span v-html="rawwhhh"></span></span>
                <span><span v-html="raw1kt8"></span></span>
                <span><span v-html="rawvspb"></span></span>
                <span><span v-html="rawplz9"></span></span>
              </span>
            </div>
            <div class="basic-py2b-container3">
              <div class="basic-py2b-problem">
                <span class="basic-py2b-text14">
                  <span class="basic-py2b-text15">
                    Problem of Functional Side Effects
                  </span>
                  <br />
                  <span><span v-html="raw0cwr"></span></span>
                  <span><span v-html="rawy3gp"></span></span>
                  <span><span v-html="rawyhff"></span></span>
                  <span><span v-html="raw2ule"></span></span>
                </span>
                <img
                  alt="image"
                  src="/external/screenshot%202023-12-29%20135259-500h-500h.png"
                  class="basic-py2b-image"
                />
                <span class="basic-py2b-text21">
                  <span>
                    The
                    <span v-html="raw28av"></span>
                  </span>
                  <span class="basic-py2b-text23">func1</span>
                  <span>
                    function modifies the global variable
                    <span v-html="rawn55w"></span>
                  </span>
                  <span class="basic-py2b-text25">
                    a
                    <span v-html="raw4de5"></span>
                  </span>
                  <span>
                    by assigning it the value 2. When the program calls
                    <span v-html="raw287h"></span>
                  </span>
                  <span class="basic-py2b-text27">func1</span>
                  <span>the second time</span>
                  <span class="basic-py2b-text29">(func1())</span>
                  <span>
                    , it
                    <span v-html="raw3vb5"></span>
                  </span>
                  <span class="basic-py2b-text31">modifies a again,</span>
                  <span>
                    and this change is observable in the final print statement.
                  </span>
                </span>
              </div>
              <img
                alt="image"
                src="https://sticker-collection.com/stickers/plain/UST_by_fStikBot/512/fc24fb67-51b4-41a1-9b10-0a68180ec456file_2844840.webp"
                class="basic-py2b-image1"
              />
              <div class="basic-py2b-solution">
                <span class="basic-py2b-text33">
                  <span class="basic-py2b-text34">Solution:</span>
                  <br />
                </span>
                <img
                  alt="image"
                  src="/external/screenshot%202023-12-29%20153811-500h-500h.png"
                  class="basic-py2b-image2"
                />
                <span class="basic-py2b-text36">
                  <span>
                    The
                    <span v-html="rawbyxz"></span>
                  </span>
                  <span class="basic-py2b-text38">
                    a inside the func1 function is a local variable, and it does
                    not affect the global variable a.
                  </span>
                  <span>
                    When
                    <span v-html="rawswls"></span>
                  </span>
                  <span class="basic-py2b-text40">func1</span>
                  <span>
                    is called without assigning its return value to a,
                    <span v-html="rawnu9r"></span>
                  </span>
                  <span class="basic-py2b-text42">
                    it doesn&apos;t modify the global variable a
                  </span>
                  <span>. Therefore, the value of</span>
                  <span class="basic-py2b-text44">a</span>
                  <span>
                    remains 5 throughout the code, and there is no functional side
                    effect.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <span class="basic-py2b-text46">- Noor Alia Alisa</span>
        </div>
      </div>
    </div>
    <div class="basic-py2b-reference">
      <h1 class="basic-py2b-text47">References</h1>
      <span class="basic-py2b-text48">
        <br />
        <span>
          Srinivas, R. (2022, January 4).
          <span v-html="rawhvqj"></span>
        </span>
        <span class="basic-py2b-text51">Side-effects in Python</span>
        <span>. Medium.</span>
        <br />
        <span>
                 
          <span v-html="raw713o"></span>
        </span>
        <a
          href="https://python.plainenglish.io/side-effects-in-python-a50caad1169"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py2b-link"
        >
          https://python.plainenglish.io/side-effects-in-python-a50caad1169
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py2b-footer">
      <div class="basic-py2b-container4">
        <router-link to="/strace" class="basic-py2b-navlink8">STRACE</router-link>
      </div>
      <span class="basic-py2b-text56">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py2b-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py2b-icon">
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
  name: 'BasicPy2b',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawtd3e: ' ',
      rawjymx: ' ',
      rawl8oj: ' ',
      rawvjl5: ' ',
      rawwhhh: ' ',
      raw1kt8: ' ',
      rawvspb: ' ',
      rawplz9: ' ',
      raw0cwr: ' ',
      rawy3gp: ' ',
      rawyhff: ' ',
      raw2ule: ' ',
      raw28av: ' ',
      rawn55w: ' ',
      raw4de5: ' ',
      raw287h: ' ',
      raw3vb5: ' ',
      rawbyxz: ' ',
      rawswls: ' ',
      rawnu9r: ' ',
      rawhvqj: ' ',
      raw713o: ' ',
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
.basic-py2b-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py2b-banner {
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

.basic-py2b-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py2b-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py2b-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py2b-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py2b-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-navlink6 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink6:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-navlink7 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py2b-navlink7:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py2b-alia {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2b-func-side-effect {
  width: 1314px;
  height: 698px;
  display: flex;
  align-items: flex-start;
}
.basic-py2b-definition {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py2b-text {
  margin-top: 10px;
}
.basic-py2b-text07 {
  margin-top: 10px;
}
.basic-py2b-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py2b-problem {
  flex: 0 0 auto;
  width: 683px;
  height: auto;
  display: flex;
  flex-direction: column;
}
.basic-py2b-text14 {
  margin-top: 10px;
}
.basic-py2b-image {
  width: 477px;
  height: 433px;
  object-fit: cover;
}
.basic-py2b-text21 {
  text-align: justify;
  margin-right: 20px;
}
.basic-py2b-image1 {
  width: 200px;
  object-fit: cover;
}
.basic-py2b-solution {
  flex: 0 0 auto;
  width: 642px;
  height: 579px;
  display: flex;
  margin-top: 90px;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py2b-text33 {
  margin-top: 10px;
  text-align: justify;
}
.basic-py2b-image2 {
  width: 200px;
  object-fit: cover;
}
.basic-py2b-text36 {
  margin-top: 15px;
  text-align: justify;
}
.basic-py2b-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py2b-footer {
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
.basic-py2b-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py2b-navlink8 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py2b-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py2b-container {
    background-color: #f7f7f7;
  }
  .basic-py2b-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py2b-main-content {
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
  .basic-py2b-heading {
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
  .basic-py2b-container1 {
    width: 700px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py2b-navlink {
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
  .basic-py2b-navlink1 {
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
  .basic-py2b-navlink2 {
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
  .basic-py2b-navlink3 {
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
  .basic-py2b-container2 {
    width: 800px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py2b-navlink4 {
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
  .basic-py2b-navlink5 {
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
  .basic-py2b-navlink6 {
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
  .basic-py2b-navlink7 {
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
  .basic-py2b-alia {
    width: 1200px;
    height: auto;
    position: relative;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py2b-func-side-effect {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding-bottom: 10px;
  }
  .basic-py2b-definition {
    height: auto;
    padding-bottom: 40px;
  }
  .basic-py2b-text {
    width: 750px;
    font-size: 36px;
    font-style: normal;
    margin-top: 0px;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2b-text01 {
    font-weight: 700;
  }
  .basic-py2b-text07 {
    font-size: 16px;
    font-style: normal;
    margin-top: 0px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py2b-container3 {
    height: auto;
    position: relative;
    align-items: center;
  }
  .basic-py2b-problem {
    width: 500px;
    height: 545px;
  }
  .basic-py2b-text14 {
    width: auto;
    font-size: 18px;
    font-style: normal;
    margin-top: 0px;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-bottom: 15px;
  }
  .basic-py2b-text15 {
    font-weight: 700;
  }
  .basic-py2b-image {
    width: 450px;
    height: 406px;
    margin-bottom: 15px;
  }
  .basic-py2b-text21 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    margin-right: 0px;
    padding-right: 52px;
  }
  .basic-py2b-text23 {
    font-weight: 700;
  }
  .basic-py2b-text25 {
    font-weight: 700;
  }
  .basic-py2b-text27 {
    font-weight: 700;
  }
  .basic-py2b-text29 {
    font-weight: 700;
  }
  .basic-py2b-text31 {
    font-weight: 700;
  }
  .basic-py2b-image1 {
    align-self: center;
  }
  .basic-py2b-solution {
    width: 500px;
    height: auto;
    align-self: flex-end;
    margin-top: 0px;
    align-items: flex-end;
  }
  .basic-py2b-text33 {
    font-size: 18px;
    align-self: flex-start;
    font-style: normal;
    margin-top: 0px;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-left: 45px;
    padding-bottom: 15px;
  }
  .basic-py2b-text34 {
    font-weight: bold;
  }
  .basic-py2b-image2 {
    width: 457px;
    height: 406px;
    margin-bottom: 15px;
  }
  .basic-py2b-text36 {
    font-size: 16px;
    font-style: normal;
    margin-top: 0px;
    font-family: Inter;
    font-weight: 400;
    padding-left: 45px;
  }
  .basic-py2b-text38 {
    font-weight: 700;
  }
  .basic-py2b-text40 {
    font-weight: 700;
  }
  .basic-py2b-text42 {
    font-weight: 700;
  }
  .basic-py2b-text44 {
    font-weight: 700;
  }
  .basic-py2b-text46 {
    font-size: 18px;
    align-self: flex-end;
    font-style: italic;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py2b-reference {
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
  .basic-py2b-text47 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py2b-text48 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py2b-text51 {
    font-style: italic;
  }
  .basic-py2b-link {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py2b-footer {
    justify-content: space-between;
  }
  .basic-py2b-navlink8 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py2b-text56 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py2b-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py2b-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py2b-footer {
    align-self: center;
  }
  .basic-py2b-icon-group {
    display: none;
  }
}
</style>
