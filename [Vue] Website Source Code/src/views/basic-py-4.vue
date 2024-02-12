<template>
  <div class="basic-py4-container">
    <div class="basic-py4-banner">
      <div class="basic-py4-main-content">
        <h1 class="basic-py4-heading">SUBPROGRAMS</h1>
        <div class="basic-py4-container1">
          <router-link to="/basic-py-4ai" class="basic-py4-navlink button">
            Fundamentals of Subprograms
          </router-link>
          <router-link to="/basic-py-4aii" class="basic-py4-navlink1 button">
            Local Referencing Environments
          </router-link>
          <router-link to="/basic-py-4bi" class="basic-py4-navlink2 button">
            Parameter-Passing Method
          </router-link>
          <router-link to="/basic-py-4bii" class="basic-py4-navlink3 button">
            Indirect Subprograms Calling
          </router-link>
        </div>
        <div class="basic-py4-container2">
          <router-link to="/basic-py-4biii" class="basic-py4-navlink4 button">
            Design Issues for Functions
          </router-link>
          <router-link to="/basic-py-4biv" class="basic-py4-navlink5 button">
            Overloaded and Generic Subprograms
          </router-link>
          <router-link to="/basic-py-4bv" class="basic-py4-navlink6 button">
            User-Defined Overloaded Operators
          </router-link>
        </div>
        <div class="basic-py4-introduction">
          <div class="basic-py4-container3">
            <img
              alt="image"
              src="https://i.pinimg.com/originals/bd/b3/3a/bdb33ac9eee68da995b99f24b88697fa.png"
              loading="eager"
              class="basic-py4-image"
            />
            <h1 class="basic-py4-text">
              <span>Overview of</span>
              <br />
              <span>the Topic</span>
            </h1>
          </div>
          <img
            alt="image"
            src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/Overview_Subprograms.png?raw=true"
            loading="eager"
            class="basic-py4-image1"
          />
        </div>
      </div>
    </div>
    <footer class="basic-py4-footer">
      <div class="basic-py4-container4">
        <router-link to="/strace" class="basic-py4-navlink7">STRACE</router-link>
      </div>
      <span class="basic-py4-text4">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py4-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py4-icon">
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
  name: 'BasicPy4',
  props: {},
  components: {
    AppHeader,
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
.basic-py4-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py4-banner {
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

.basic-py4-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py4-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py4-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py4-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py4-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-navlink6 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py4-navlink6:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py4-introduction {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py4-container3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py4-image {
  width: 200px;
  object-fit: cover;
}
.basic-py4-image1 {
  width: 831px;
  height: 465px;
  margin-top: 30px;
  object-fit: cover;
}
.basic-py4-footer {
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
.basic-py4-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py4-navlink7 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py4-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py4-container {
    background-color: #f7f7f7;
  }
  .basic-py4-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py4-main-content {
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
  .basic-py4-heading {
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
  .basic-py4-container1 {
    width: 950px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 20px;
    margin-right: 50px;
    padding-bottom: 10px;
    justify-content: center;
  }
  .basic-py4-navlink {
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
  .basic-py4-navlink1 {
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
  .basic-py4-navlink2 {
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
  .basic-py4-navlink3 {
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
  .basic-py4-container2 {
    width: 750px;
    height: auto;
    align-self: center;
    margin-left: 50px;
    padding-top: 10px;
    margin-right: 50px;
    padding-bottom: 20px;
    justify-content: center;
  }
  .basic-py4-navlink4 {
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
  .basic-py4-navlink5 {
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
  .basic-py4-navlink6 {
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
  .basic-py4-introduction {
    width: 1000px;
    align-self: center;
    align-items: center;
    margin-left: 50px;
    padding-top: 25px;
    margin-right: 50px;
    flex-direction: row;
    padding-bottom: 50px;
    justify-content: space-between;
  }
  .basic-py4-container3 {
    width: auto;
    height: auto;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .basic-py4-image {
    width: 200px;
    height: 200px;
  }
  .basic-py4-text {
    font-size: 42px;
    font-style: normal;
    text-align: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    padding-top: 30px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .basic-py4-image1 {
    width: 600px;
    height: 333px;
    align-self: center;
    margin-top: 0px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py4-footer {
    justify-content: space-between;
  }
  .basic-py4-navlink7 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py4-text4 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py4-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py4-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py4-footer {
    align-self: center;
  }
  .basic-py4-icon-group {
    display: none;
  }
}
</style>
