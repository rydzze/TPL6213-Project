<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <router-link to="/strace" class="header-navlink">{{ text }}</router-link>
    <div class="header-container">
      <router-link to="/strace" class="header-navlink01">
        {{ text11 }}
      </router-link>
      <span class="header-next">{{ next }}</span>
      <div data-thq="thq-dropdown" class="header-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" class="header-dropdown-toggle">
          <span class="header-text">{{ text31 }}</span>
        </div>
        <ul data-thq="thq-dropdown-list" class="header-dropdown-list">
          <li data-thq="thq-dropdown" class="header-dropdown list-item">
            <router-link to="/background-1">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle01"
              >
                <span class="header-text01">{{ text5 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown01 list-item">
            <router-link to="/background-2">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle02"
              >
                <span class="header-text02">{{ text6 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown02 list-item">
            <router-link to="/background-3">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle03"
              >
                <span class="header-text03">{{ text3 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown03 list-item">
            <router-link to="/background-4">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle04"
              >
                <span class="header-text04">{{ text7 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown04 list-item">
            <router-link to="/background-5">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle05"
              >
                <span class="header-text05">{{ text8 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown05 list-item">
            <router-link to="/background-6">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle06"
              >
                <span class="header-text06">{{ text9 }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <span class="header-next1">{{ next1 }}</span>
      <div data-thq="thq-dropdown" class="header-thq-dropdown1 list-item">
        <div data-thq="thq-dropdown-toggle" class="header-dropdown-toggle07">
          <span class="header-text07">{{ text4 }}</span>
        </div>
        <ul data-thq="thq-dropdown-list" class="header-dropdown-list1">
          <li data-thq="thq-dropdown" class="header-dropdown06 list-item">
            <router-link to="/basic-py-1">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle08"
              >
                <span class="header-text08">{{ text10 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown07 list-item">
            <router-link to="/basic-py-2">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle09"
              >
                <span class="header-text09">{{ text111 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown08 list-item">
            <router-link to="/basic-py-3">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle10"
              >
                <span class="header-text10">{{ text1 }}</span>
              </div>
            </router-link>
          </li>
          <li data-thq="thq-dropdown" class="header-dropdown09 list-item">
            <router-link to="/basic-py-4">
              <div
                data-thq="thq-dropdown-toggle"
                class="header-dropdown-toggle11"
              >
                <span class="header-text11">{{ text12 }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <span class="header-next2">{{ next2 }}</span>
      <router-link to="/sample-app-intro" class="header-navlink12">
        {{ text2 }}
      </router-link>
      <span class="header-next3">{{ next3 }}</span>
      <router-link to="/training-video" class="header-navlink13">
        <span>Training Video</span>
        <br />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text1: {
      type: String,
      default: 'Control Structures',
    },
    text11: {
      type: String,
      default: 'Home',
    },
    text2: {
      type: String,
      default: 'Sample Application',
    },
    text: {
      type: String,
      default: 'STRACE',
    },
    next1: {
      type: String,
      default: '|',
    },
    next: {
      type: String,
      default: '|',
    },
    text4: {
      type: String,
      default: 'Basic Python',
    },
    next3: {
      type: String,
      default: '|',
    },
    text3: {
      type: String,
      default: 'Application of Python/Django',
    },
    text31: {
      type: String,
      default: 'Background',
    },
    text8: {
      type: String,
      default: 'Implementation Method',
    },
    text12: {
      type: String,
      default: 'Subprograms',
    },
    rootClassName: String,
    text7: {
      type: String,
      default: 'Popularity Statistic',
    },
    text5: {
      type: String,
      default: 'History of Python/Django',
    },
    next2: {
      type: String,
      default: '|',
    },
    text111: {
      type: String,
      default: 'Expressions and Assignment',
    },
    text9: {
      type: String,
      default: 'Programming Environment',
    },
    text6: {
      type: String,
      default: 'Programming Style',
    },
    text10: {
      type: String,
      default: 'Names and Bindings',
    },
  },
}
</script>

<style scoped>
.header-header {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
}
.header-navlink {
  align-self: center;
  text-align: left;
  font-family: "Inter";
  font-weight: 700;
  text-decoration: none;
}
.header-container {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-navlink01 {
  transition: 0.3s;
  text-decoration: none;
}
.header-navlink01:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
}
.header-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius2);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.header-text {
  font-size: 14px;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-weight: 500;
  margin-right: 4px;
  vertical-align: middle;
}
.header-text:hover {
  color: #a068ff;
}
.header-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.header-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle01 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle01:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text01 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown01 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle02 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle02:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text02 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown02 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle03 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle03:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text03 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown03 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle04 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle04:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text04 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown04 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle05 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle05:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text05 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown05 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle06 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle06:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text06 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-thq-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle07 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius2);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.header-text07 {
  font-size: 14px;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-weight: 500;
  margin-right: 4px;
  vertical-align: middle;
}
.header-text07:hover {
  color: #a068ff;
}
.header-dropdown-list1 {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.header-dropdown06 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle08 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle08:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text08 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown07 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle09 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle09:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text09 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown08 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle10 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle10:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text10 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-dropdown09 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.header-dropdown-toggle11 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-dropdown-toggle11:hover {
  fill: #fff;
  color: #c5a5ff;
  background-color: rgba(0, 0, 0, 0.75);
}
.header-text11 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.header-navlink12 {
  transition: 0.3s;
  text-decoration: none;
}
.header-navlink12:hover {
  color: #a068ff;
}
.header-navlink13 {
  transition: 0.3s;
  text-decoration: none;
}
.header-navlink13:hover {
  color: #a068ff;
}

@media(max-width: 1600px) {
  .header-header {
    height: 70px;
    z-index: 1;
    align-self: center;
    box-shadow: 0px 1px 15px 0px #ebebeb;
    padding-left: 100px;
    padding-right: 100px;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .header-navlink {
    color: #000000;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .header-container {
    flex: 1;
    width: auto;
    height: 28px;
    align-self: center;
    justify-content: flex-end;
  }
  .header-navlink01 {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .header-next {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 1.15;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-dropdown-toggle {
    padding-top: 0px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 0px;
    justify-content: center;
  }
  .header-text {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    margin-right: 0px;
  }
  .header-dropdown-list {
    top: 24px;
    left: -66px;
    width: 231px;
    display: none;
    background-color: #d7d9ea;
  }
  .header-dropdown-toggle01 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text01 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: center;
  }
  .header-dropdown-toggle02 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text02 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: center;
  }
  .header-dropdown-toggle03 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text03 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: center;
  }
  .header-dropdown-toggle04 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text04 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: center;
  }
  .header-dropdown-toggle05 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text05 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: center;
  }
  .header-dropdown-toggle06 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text06 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: center;
  }
  .header-next1 {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 1.15;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-dropdown-toggle07 {
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    justify-content: center;
  }
  .header-text07 {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    margin-right: 0px;
  }
  .header-dropdown-list1 {
    top: 21px;
    left: 2px;
    width: 240px;
    display: none;
    background-color: #d7d9ea;
  }
  .header-dropdown-toggle08 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text08 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: flex-start;
  }
  .header-dropdown-toggle09 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text09 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: flex-start;
  }
  .header-dropdown-toggle10 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text10 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: flex-start;
  }
  .header-dropdown-toggle11 {
    color: #000000;
    background-color: #ffffff;
  }
  .header-text11 {
    font-size: 14px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    justify-content: flex-start;
  }
  .header-next2 {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 1.15;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-navlink12 {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .header-next3 {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 1.15;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-navlink13 {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .header-root-class-name {
    background-color: #ffffff;
  }
}
</style>
