<template>
  <div class="basic-py1c-container">
    <div class="basic-py1c-banner">
      <div class="basic-py1c-main-content">
        <h1 class="basic-py1c-heading">NAMES AND BINDINGS</h1>
        <div class="basic-py1c-container1">
          <router-link to="/basic-py-1a" class="basic-py1c-navlink button">
            Name
          </router-link>
          <router-link to="/basic-py-1b" class="basic-py1c-navlink1 button">
            Address, Value and Type
          </router-link>
          <router-link to="/basic-py-1c" class="basic-py1c-navlink2 button">
            The Concept of Binding
          </router-link>
          <router-link to="/basic-py-1d" class="basic-py1c-navlink3 button">
            Scope and Lifetime
          </router-link>
          <router-link to="/basic-py-1e" class="basic-py1c-navlink4 button">
            Referencing Environments
          </router-link>
          <router-link to="/basic-py-1f" class="basic-py1c-navlink5 button">
            Named Constants
          </router-link>
        </div>
        <div class="basic-py1c-hapih">
          <h1 class="basic-py1c-text">
            <span class="basic-py1c-text01">The Concept of Binding</span>
            <br />
          </h1>
          <span class="basic-py1c-text03">
            Python is a dynamically typed language, whereas Django use both
            dynamic and static binding depending on the context.
          </span>
          <img
            alt="image"
            src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/1b%20Names%20and%20Bindings/4A17020E-7FEE-41D3-9BF8-85095297A913.jpeg?raw=true"
            class="basic-py1c-image"
          />
          <span class="basic-py1c-text04">
            <br class="basic-py1c-text05" />
            <span class="basic-py1c-text06">Features of Dynamic Typing</span>
            <br class="basic-py1c-text07" />
            <br class="basic-py1c-text08" />
            <span class="basic-py1c-text09">- </span>
            <span class="basic-py1c-text10">Type Inference</span>
            <span class="basic-py1c-text11">
              : You don’t need to declare the type of a variable explicitly. The
              interpreter infers the type based on the value assigned to it. If
              you, for
            </span>
            <br class="basic-py1c-text12" />
            <span class="basic-py1c-text13">
                  instance, assign an integer to a variable, it becomes an integer
              type, and if you later assign a string to the same variable, it
              becomes a string type.
            </span>
            <br class="basic-py1c-text14" />
            <br class="basic-py1c-text15" />
            <span class="basic-py1c-text16">- </span>
            <span class="basic-py1c-text17">Runtime Type Checking</span>
            <span class="basic-py1c-text18">
              : Dynamic typing allows for runtime type checking where the type of
              a variable is checked during the execution of the program. If an 
              <span v-html="raw6g6l"></span>
            </span>
            <br class="basic-py1c-text19" />
            <span class="basic-py1c-text20">
                 operation is performed on a variable that is not compatible with
              its current type, a runtime error will occur.
            </span>
            <br class="basic-py1c-text21" />
            <br class="basic-py1c-text22" />
            <span class="basic-py1c-text23">- </span>
            <span class="basic-py1c-text24">Flexibility and Expressiveness</span>
            <span class="basic-py1c-text25">
              : Dynamic typing offers greater flexibility and expressiveness in
              writing code. It allows you to easily change the type of a 
              <span v-html="raw4as5"></span>
            </span>
            <br class="basic-py1c-text26" />
            <span class="basic-py1c-text27">
                 variable or use the same variable to hold different types of
              data. 
            </span>
            <br class="basic-py1c-text28" />
            <br class="basic-py1c-text29" />
            <span class="basic-py1c-text30">- </span>
            <span class="basic-py1c-text31">
              Rapid Prototyping and Iterative Development
            </span>
            <span class="basic-py1c-text32">
              : Dynamic typing simplifies the process of rapid prototyping and
              iterative development. You can quickly write
              <span v-html="rawha1o"></span>
            </span>
            <br class="basic-py1c-text33" />
            <span class="basic-py1c-text34">
                 and test code without the need for explicit type declarations
              hence easier to experiment and make changes on the fly.
            </span>
            <br class="basic-py1c-text35" />
            <br class="basic-py1c-text36" />
            <span class="basic-py1c-text37">
              -
              <span v-html="rawc61x"></span>
            </span>
            <span class="basic-py1c-text38">Enhanced Productivity</span>
            <span class="basic-py1c-text39">
              : The dynamic nature of Python’s typing system often leads to
              enhanced productivity.
            </span>
            <br />
            <br />
          </span>
          <h1 class="basic-py1c-text42">
            <br class="basic-py1c-text43" />
            <span class="basic-py1c-text44">Dynamic and Static Binding</span>
            <br />
          </h1>
          <span class="basic-py1c-text46">
            <span class="basic-py1c-text47">
              Django’s template engine uses dynamic binding to render HTML pages
              with data from the view function or the model. The template syntax
              allows the use of variables, filters, tags, and expressions that are
              evaluated at run time and inserted into the static parts of the
              HTML.
            </span>
            <br />
            <br />
          </span>
          <img
            alt="image"
            src="https://github.com/rydzze/TPL6213-Project/blob/main/IMG_SRC_WebReport/2%20-%20Basic%20Element%20of%20Python/1b%20Names%20and%20Bindings/8E0370E2-C966-4374-8732-E977E10DA740.jpeg?raw=true"
            class="basic-py1c-image1"
          />
          <span class="basic-py1c-text50">
            <br />
            <span>
              In this code, the variables name and date are dynamically bound to
              the values passed from the view function or the model and rendered
              in the HTML page.
            </span>
          </span>
          <span class="basic-py1c-text53">
            <br />
            <span>
              Django’s static files management uses static binding to collect and
              serve the files that are not generated dynamically, such as CSS,
              JavaScript, and images3. The collectstatic command copies the static
              files from each app’s static directory into a single location
              specified by the STATIC_ROOT setting3. The static file server then
              serves the files from that location.
            </span>
          </span>
          <span class="basic-py1c-text56">
            <span>
              -
              <span v-html="raw6vvm"></span>
            </span>
            <span>Muhammad Hafiz</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py1c-reference">
      <h1 class="basic-py1c-text59">References</h1>
      <span class="basic-py1c-text60">
        <br class="basic-py1c-text61" />
        <span class="basic-py1c-text62">
          Zubair, S. (n.d.).
          <span v-html="rawkbw7"></span>
        </span>
        <span class="basic-py1c-text63">
          Is Python a dynamically typed language?
        </span>
        <span class="basic-py1c-text64">Educative.</span>
        <br class="basic-py1c-text65" />
        <span class="basic-py1c-text66">
                 
          <span v-html="rawz5ms"></span>
        </span>
        <a
          href="https://www.educative.io/answers/is-python-a-dynamically-typed-language"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1c-link"
        >
          https://www.educative.io/answers/is-python-a-dynamically-typed-language
        </a>
        <br class="basic-py1c-text67" />
        <br class="basic-py1c-text68" />
        <span class="basic-py1c-text69">Template - Django documentation</span>
        <span class="basic-py1c-text70">. (n.d.). Django.</span>
        <br class="basic-py1c-text71" />
        <span class="basic-py1c-text72">
                 
          <span v-html="raw8rlk"></span>
        </span>
        <a
          href="https://docs.djangoproject.com/en/5.0/topics/templates/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1c-link1"
        >
          https://docs.djangoproject.com/en/5.0/topics/templates/
        </a>
        <br class="basic-py1c-text73" />
        <br class="basic-py1c-text74" />
        <span class="basic-py1c-text75">
          Omondi, A. (2020, September 15).
          <span v-html="raw9gfr"></span>
        </span>
        <span class="basic-py1c-text76">
          Working with Django Templates &amp; Static Files
        </span>
        <span class="basic-py1c-text77">. DigitalOcean.</span>
        <br class="basic-py1c-text78" />
        <span class="basic-py1c-text79">
                 
          <span v-html="rawrs0p"></span>
        </span>
        <a
          href="https://www.digitalocean.com/community/tutorials/working-with-django-templates-static-files"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1c-link2"
        >
          https://www.digitalocean.com/community/tutorials/working-with-django-templates-static-files
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py1c-footer">
      <div class="basic-py1c-container2">
        <router-link to="/strace" class="basic-py1c-navlink6">STRACE</router-link>
      </div>
      <span class="basic-py1c-text81">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py1c-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py1c-icon">
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
  name: 'BasicPy1c',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      raw6g6l: ' ',
      raw4as5: ' ',
      rawha1o: ' ',
      rawc61x: ' ',
      raw6vvm: ' ',
      rawkbw7: ' ',
      rawz5ms: ' ',
      raw8rlk: ' ',
      raw9gfr: ' ',
      rawrs0p: ' ',
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
.basic-py1c-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py1c-banner {
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

.basic-py1c-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py1c-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py1c-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py1c-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1c-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1c-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1c-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1c-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1c-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1c-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1c-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1c-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1c-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1c-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1c-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1c-hapih {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1c-image {
  width: 200px;
  object-fit: cover;
}
.basic-py1c-image1 {
  width: 200px;
  object-fit: cover;
}
.basic-py1c-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py1c-footer {
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
.basic-py1c-container2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py1c-navlink6 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py1c-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py1c-container {
    background-color: #f7f7f7;
  }
  .basic-py1c-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py1c-main-content {
    flex: 1;
    width: 1300px;
    height: 1069px;
    box-shadow: 0px 0px 10px 0px #d3d2d6;
    align-items: flex-start;
    padding-top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .basic-py1c-heading {
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
  .basic-py1c-container1 {
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
  .basic-py1c-navlink {
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
  .basic-py1c-navlink1 {
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
  .basic-py1c-navlink2 {
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
  .basic-py1c-navlink3 {
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
  .basic-py1c-navlink4 {
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
  .basic-py1c-navlink5 {
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
  .basic-py1c-hapih {
    width: 1200px;
    height: 1164px;
    position: relative;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 39px;
  }
  .basic-py1c-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 10px;
  }
  .basic-py1c-text01 {
    margin-bottom: 10px;
  }
  .basic-py1c-text03 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1c-image {
    width: 553px;
    height: 242px;
    align-self: center;
  }
  .basic-py1c-text04 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1c-text05 {
    text-align: justify;
  }
  .basic-py1c-text06 {
    text-align: justify;
    font-weight: 700;
  }
  .basic-py1c-text07 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text08 {
    text-align: justify;
  }
  .basic-py1c-text09 {
    text-align: justify;
  }
  .basic-py1c-text10 {
    text-align: justify;
    font-weight: 700;
  }
  .basic-py1c-text11 {
    text-align: justify;
  }
  .basic-py1c-text12 {
    text-align: justify;
  }
  .basic-py1c-text13 {
    text-align: justify;
  }
  .basic-py1c-text14 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text15 {
    text-align: justify;
  }
  .basic-py1c-text16 {
    text-align: justify;
  }
  .basic-py1c-text17 {
    text-align: justify;
    font-weight: 700;
  }
  .basic-py1c-text18 {
    text-align: justify;
  }
  .basic-py1c-text19 {
    text-align: justify;
  }
  .basic-py1c-text20 {
    text-align: justify;
  }
  .basic-py1c-text21 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text22 {
    text-align: justify;
  }
  .basic-py1c-text23 {
    text-align: justify;
  }
  .basic-py1c-text24 {
    text-align: justify;
    font-weight: 700;
  }
  .basic-py1c-text25 {
    text-align: justify;
  }
  .basic-py1c-text26 {
    text-align: justify;
  }
  .basic-py1c-text27 {
    text-align: justify;
  }
  .basic-py1c-text28 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text29 {
    text-align: justify;
  }
  .basic-py1c-text30 {
    text-align: justify;
  }
  .basic-py1c-text31 {
    text-align: justify;
    font-weight: 700;
  }
  .basic-py1c-text32 {
    text-align: justify;
  }
  .basic-py1c-text33 {
    text-align: justify;
  }
  .basic-py1c-text34 {
    text-align: justify;
  }
  .basic-py1c-text35 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text36 {
    text-align: justify;
  }
  .basic-py1c-text37 {
    text-align: justify;
  }
  .basic-py1c-text38 {
    text-align: justify;
    font-weight: 700;
  }
  .basic-py1c-text39 {
    text-align: justify;
  }
  .basic-py1c-text42 {
    font-size: 25px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 10px;
  }
  .basic-py1c-text43 {
    margin-bottom: 10px;
  }
  .basic-py1c-text44 {
    margin-bottom: 10px;
  }
  .basic-py1c-text46 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1c-text47 {
    text-align: justify;
  }
  .basic-py1c-image1 {
    width: 618px;
    height: 135px;
  }
  .basic-py1c-text50 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1c-text53 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1c-text56 {
    font-size: 18px;
    align-self: flex-end;
    font-style: italic;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py1c-reference {
    width: 1600px;
    height: auto;
    align-self: center;
    box-shadow: 0px -1px 15px 0px #ebebeb;
    margin-top: 0px;
    align-items: flex-start;
    padding-top: 50px;
    padding-left: 200px;
    margin-bottom: var(--dl-space-space-unit);
    padding-right: 200px;
    flex-direction: column;
    padding-bottom: 50px;
    justify-content: flex-start;
  }
  .basic-py1c-text59 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py1c-text60 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.25;
  }
  .basic-py1c-text61 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text62 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text63 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text64 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text65 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text66 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-link {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py1c-text67 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text68 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text69 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text70 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text71 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text72 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-link1 {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py1c-text73 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text74 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text75 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text76 {
    font-size: 16px;
    font-style: italic;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text77 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text78 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-text79 {
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
  }
  .basic-py1c-link2 {
    color: var(--dl-color-primary-300);
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    text-decoration: underline;
  }
  .basic-py1c-footer {
    height: 114px;
    margin-bottom: var(--dl-space-space-unit);
    justify-content: space-between;
  }
  .basic-py1c-navlink6 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py1c-text81 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py1c-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py1c-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py1c-footer {
    align-self: center;
  }
  .basic-py1c-icon-group {
    display: none;
  }
}
</style>
