<template>
  <div class="basic-py4bv-container">
    <div class="basic-py4bv-banner">
      <div class="basic-py4bv-main-content">
        <h1 class="basic-py4bv-heading">SUBPROGRAMS</h1>
        <div class="basic-py4bv-container1">
          <router-link to="/basic-py-4ai" class="basic-py4bv-navlink button">
            Fundamentals of Subprograms
          </router-link>
          <router-link to="/basic-py-4aii" class="basic-py4bv-navlink1 button">
            Local Referencing Environments
          </router-link>
          <router-link to="/basic-py-4bi" class="basic-py4bv-navlink2 button">
            Parameter-Passing Method
          </router-link>
          <router-link to="/basic-py-4bii" class="basic-py4bv-navlink3 button">
            Indirect Subprograms Calling
          </router-link>
        </div>
        <div class="basic-py4bv-container2">
          <router-link to="/basic-py-4biii" class="basic-py4bv-navlink4 button">
            Design Issues for Functions
          </router-link>
          <router-link to="/basic-py-4biv" class="basic-py4bv-navlink5 button">
            Overloaded and Generic Subprograms
          </router-link>
          <router-link to="/basic-py-4bv" class="basic-py4bv-navlink6 button">
            User-Defined Overloaded Operators
          </router-link>
        </div>
        <div class="basic-py4bv-content-here">
          <h1 class="basic-py4bv-text">
            <span>User-Defined Overloaded Operators</span>
            <br />
          </h1>
          <div class="basic-py4bv-column">
            <span class="basic-py4bv-text03">
              <span>
                In Python, we
                <span v-html="rawtthj"></span>
              </span>
              <span class="basic-py4bv-text05">can overload</span>
              <span>
                the default
                <span v-html="rawrw1u"></span>
              </span>
              <span class="basic-py4bv-text07">operators</span>
              <span>provided by defining our function.</span>
              <br />
              <br />
              <span>
                Referring to the example given, we want to get the total price for
                two items and display the price.
              </span>
              <br />
              <br />
              <span>
                When we
                <span v-html="raw2n4c"></span>
              </span>
              <span class="basic-py4bv-text15">adding item1 and item2</span>
              <span>
                using the
                <span v-html="rawl1eo"></span>
              </span>
              <span class="basic-py4bv-text17">operator &apos;+&apos;</span>
              <span>
                , it will use the function declared inside class Item and display 
              </span>
              <br />
              <br />
              <span>
                This is known as
                <span v-html="rawtye3"></span>
              </span>
              <span class="basic-py4bv-text22">magic methods</span>
              <span>
                and you may refer at
                <span v-html="rawpsmo"></span>
              </span>
              <router-link to="/basic-py-2ci" class="basic-py4bv-navlink7">
                Overloaded Operators
              </router-link>
              <span>
                 topic explained by Hafiz in Expressions and Assignment section
                for more information :D.
              </span>
              <br />
            </span>
            <img
              alt="image"
              src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/4b%20Subprogram_Ariff/OverloadedOperator.png?raw=true"
              loading="eager"
              class="basic-py4bv-image"
            />
          </div>
          <span class="basic-py4bv-text26">
            <span>
              -
              <span v-html="rawh1lq"></span>
            </span>
            <span class="basic-py4bv-text28">Muhammad Ariff Ridzlan</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py4bv-reference">
      <h1 class="basic-py4bv-text29">References</h1>
      <span class="basic-py4bv-text30">
        <br class="basic-py4bv-text31" />
        <span class="basic-py4bv-text32">
          Lath, R., &amp; Rankwar, A. (n.d.).
          <span v-html="rawpb5y"></span>
        </span>
        <span class="basic-py4bv-text33">Operator Overloading in Python</span>
        <span class="basic-py4bv-text34">. Wiingy.</span>
        <br class="basic-py4bv-text35" />
        <span class="basic-py4bv-text36">
                 
          <span v-html="rawf47b"></span>
        </span>
        <a
          href="https://wiingy.com/learn/python/operator-overloading-in-python/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py4bv-link"
        >
          https://wiingy.com/learn/python/operator-overloading-in-python/
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py4bv-footer">
      <div class="basic-py4bv-container3">
        <router-link to="/strace" class="basic-py4bv-navlink8">
          STRACE
        </router-link>
      </div>
      <span class="basic-py4bv-text38">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py4bv-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py4bv-icon">
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
  name: 'BasicPy4bv',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawtthj: ' ',
      rawrw1u: ' ',
      raw2n4c: ' ',
      rawl1eo: ' ',
      rawtye3: ' ',
      rawpsmo: ' ',
      rawh1lq: ' ',
      rawpb5y: ' ',
      rawf47b: ' ',
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
.basic-py4bv-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py4bv-banner {
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

.basic-py4bv-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py4bv-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py4bv-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py4bv-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py4bv-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-navlink6 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4bv-navlink6:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4bv-content-here {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py4bv-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.basic-py4bv-text03 {
  text-align: justify;
}
.basic-py4bv-image {
  width: 200px;
  object-fit: cover;
}
.basic-py4bv-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py4bv-footer {
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
.basic-py4bv-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py4bv-navlink8 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py4bv-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py4bv-container {
    background-color: #f7f7f7;
  }
  .basic-py4bv-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py4bv-main-content {
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
  .basic-py4bv-heading {
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
  .basic-py4bv-container1 {
    width: 950px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py4bv-navlink {
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
  .basic-py4bv-navlink1 {
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
  .basic-py4bv-navlink2 {
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
  .basic-py4bv-navlink3 {
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
  .basic-py4bv-container2 {
    width: 750px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py4bv-navlink4 {
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
  .basic-py4bv-navlink5 {
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
  .basic-py4bv-navlink6 {
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
  .basic-py4bv-content-here {
    width: 1200px;
    align-items: flex-start;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py4bv-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .basic-py4bv-column {
    flex: 1;
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
  }
  .basic-py4bv-text03 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    padding-right: var(--dl-space-space-fourunits);
  }
  .basic-py4bv-text05 {
    font-weight: 700;
  }
  .basic-py4bv-text07 {
    font-weight: 700;
  }
  .basic-py4bv-text15 {
    font-weight: 700;
  }
  .basic-py4bv-text17 {
    font-weight: 700;
  }
  .basic-py4bv-text22 {
    font-weight: 700;
  }
  .basic-py4bv-navlink7 {
    color: var(--dl-color-primary-500);
    text-decoration: underline;
  }
  .basic-py4bv-image {
    width: 500px;
    height: 260px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py4bv-text26 {
    font-size: 18px;
    align-self: flex-end;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 30px;
  }
  .basic-py4bv-text28 {
    font-style: italic;
  }
  .basic-py4bv-reference {
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
  .basic-py4bv-text29 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py4bv-text30 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py4bv-text31 {
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bv-text32 {
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bv-text33 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bv-text34 {
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bv-text35 {
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bv-text36 {
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py4bv-link {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py4bv-footer {
    justify-content: space-between;
  }
  .basic-py4bv-navlink8 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py4bv-text38 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py4bv-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py4bv-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py4bv-footer {
    align-self: center;
  }
  .basic-py4bv-icon-group {
    display: none;
  }
}
</style>
