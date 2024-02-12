<template>
  <div class="basic-py1d-container">
    <div class="basic-py1d-banner">
      <div class="basic-py1d-main-content">
        <h1 class="basic-py1d-heading">NAMES AND BINDINGS</h1>
        <div class="basic-py1d-container1">
          <router-link to="/basic-py-1a" class="basic-py1d-navlink button">
            Name
          </router-link>
          <router-link to="/basic-py-1b" class="basic-py1d-navlink1 button">
            Address, Value and Type
          </router-link>
          <router-link to="/basic-py-1c" class="basic-py1d-navlink2 button">
            The Concept of Binding
          </router-link>
          <router-link to="/basic-py-1d" class="basic-py1d-navlink3 button">
            Scope and Lifetime
          </router-link>
          <router-link to="/basic-py-1e" class="basic-py1d-navlink4 button">
            Referencing Environments
          </router-link>
          <router-link to="/basic-py-1f" class="basic-py1d-navlink5 button">
            Named Constants
          </router-link>
        </div>
        <div class="basic-py1d-scope">
          <h1 class="basic-py1d-text">
            <span>Scope of Variable</span>
            <br />
          </h1>
          <h2 class="basic-py1d-text003">
            <span>Determing the Code Section</span>
            <br />
          </h2>
          <span class="basic-py1d-text006">
            <span>
              Unlike the other programming languages,
              <span v-html="rawa0mi"></span>
            </span>
            <span class="basic-py1d-text008">
              Python use indentation
              <span v-html="rawejpo"></span>
            </span>
            <span>
              to
              <span v-html="rawv04b"></span>
            </span>
            <span class="basic-py1d-text010">
              identify the scope
              <span v-html="rawz9i3"></span>
            </span>
            <span>
              of the code section. For example, two source code lines with same
              level of identation indicates that both lines is part of the same
              section. If the level of identation of the line is higher than
              previous line, then it is a nested section. This situation can be
              found in if-else statement, looping like for-loop, while loop, and
              do-while loop, and function definition.
            </span>
            <br />
          </span>
          <div class="basic-py1d-container2">
            <div class="basic-py1d-container3">
              <h2 class="basic-py1d-text013">
                <span>Local Scope</span>
                <br />
              </h2>
              <span class="basic-py1d-text016">
                <span class="basic-py1d-text017">
                  Any variable within the local scope only can be seen by other
                  code lines with the
                  <span v-html="raw7374"></span>
                </span>
                <span class="basic-py1d-text018">same level of scoping</span>
                <span class="basic-py1d-text019">. For example, </span>
                <span class="basic-py1d-text020">formset</span>
                <span class="basic-py1d-text021">
                  ,
                  <span v-html="rawlf8h"></span>
                </span>
                <span class="basic-py1d-text022">supplierobj</span>
                <span class="basic-py1d-text023">
                  , and
                  <span v-html="raw2vel"></span>
                </span>
                <span class="basic-py1d-text024">
                  context
                  <span v-html="rawacxn"></span>
                </span>
                <span class="basic-py1d-text025">
                  variables is declared inside
                  <span v-html="rawqwjf"></span>
                </span>
                <span class="basic-py1d-text026">
                  get
                  <span v-html="raw0z8y"></span>
                </span>
                <span>
                  function and only visible in that specific scope. Thus, the
                  variables cannot be used outside.
                </span>
                <br class="basic-py1d-text028" />
              </span>
              <h2 class="basic-py1d-text029">
                <span>Nonlocal Scope</span>
                <br />
              </h2>
              <span class="basic-py1d-text032">
                <span>
                  Any variable declared
                  <span v-html="rawvk21"></span>
                </span>
                <span class="basic-py1d-text034">outside of a scope</span>
                <span>
                  can be considered as non-local variable. Referring to the
                  <span v-html="rawftgx"></span>
                </span>
                <span class="basic-py1d-text036">for-loop</span>
                <span>
                  inside
                  <span v-html="raw0cof"></span>
                </span>
                <span class="basic-py1d-text038">post</span>
                <span>
                  function, the
                  <span v-html="raw8icj"></span>
                </span>
                <span class="basic-py1d-text040">billitem.billno</span>
                <span>
                  variable was assigned with the value of
                  <span v-html="rawc9dj"></span>
                </span>
                <span class="basic-py1d-text042">billobj</span>
                <span>, another variable that was defined outside of it.</span>
                <br />
              </span>
              <h2 class="basic-py1d-text045">
                <span>Global Scope</span>
                <br />
              </h2>
              <span class="basic-py1d-text048">
                <span>
                  Any variable declared at the
                  <span v-html="rawj5qd"></span>
                </span>
                <span class="basic-py1d-text050">Python&apos;s main body </span>
                <span>(</span>
                <span class="basic-py1d-text052">no identation</span>
                <span>
                  ) is a
                  <span v-html="raw2gte"></span>
                </span>
                <span class="basic-py1d-text054">global variable</span>
                <span>
                  . During the assignment of
                  <span v-html="rawauat"></span>
                </span>
                <span class="basic-py1d-text056">
                  supplierobj
                  <span v-html="rawb5gk"></span>
                </span>
                <span>
                  variable in
                  <span v-html="rawsfed"></span>
                </span>
                <span class="basic-py1d-text058">
                  post
                  <span v-html="raw6taw"></span>
                </span>
                <span>
                  function,
                  <span v-html="rawgry7"></span>
                </span>
                <span class="basic-py1d-text060">
                  Supplier
                  <span v-html="rawu655"></span>
                </span>
                <span>
                  class is retrieved from a different file, through import
                  statement.
                </span>
                <br />
              </span>
              <h2 class="basic-py1d-text063">
                <span>Static Scope</span>
                <br />
              </h2>
              <span class="basic-py1d-text066">
                <span>
                  Python use static scoping (also known as lexical scoping). If
                  the declaration of a variable is not found in a scope, it will
                  <span v-html="rawraf3"></span>
                </span>
                <span class="basic-py1d-text068">
                  search
                  <span v-html="rawbesm"></span>
                </span>
                <span>
                  for the
                  <span v-html="rawk2kq"></span>
                </span>
                <span class="basic-py1d-text070">declaration</span>
                <span>
                  in the
                  <span v-html="rawq7ev"></span>
                </span>
                <span class="basic-py1d-text072">static parent of the scope</span>
                <span>.</span>
                <br />
              </span>
            </div>
            <img
              alt="pastedImage"
              src="/external/nab-scope-600h.png"
              class="basic-py1d-pasted-image"
            />
          </div>
        </div>
        <div class="basic-py1d-lifetime">
          <div class="basic-py1d-row">
            <div class="basic-py1d-column">
              <h1 class="basic-py1d-text075">
                <span>Lifetime of Variable</span>
                <br />
              </h1>
              <span class="basic-py1d-text078">
                <span>
                  Due to the
                  <span v-html="rawaul3"></span>
                </span>
                <span class="basic-py1d-text080">
                  nature of dynamic variable binding
                </span>
                <span>
                  , the memory management of Python support
                  <span v-html="rawt3fj"></span>
                </span>
                <span class="basic-py1d-text082">stack-dynamic</span>
                <span>
                  , as well as
                  <span v-html="raw0hr4"></span>
                </span>
                <span class="basic-py1d-text084">implicit heap-dynamic</span>
                <span>
                  . The interpreter allocates a specific amount of memory on the
                  computer, known as the private heap space. Memory is dynamically
                  allocated by the interpreter when necessary, and a garbage
                  collector takes over deallocation automatically.
                </span>
                <br />
              </span>
            </div>
          </div>
          <div class="basic-py1d-container4">
            <div class="basic-py1d-container5">
              <h2 class="basic-py1d-text087">Stack-Dynamic</h2>
              <span class="basic-py1d-text088">
                <span>
                  Python will allocates the memory when the declaration statements
                  occurs, which mean that its
                  <span v-html="rawy08i"></span>
                </span>
                <span class="basic-py1d-text090">
                  only happen during the execution
                </span>
                <span>of the programme.</span>
                <br />
              </span>
              <img
                alt="image"
                src="/external/nab-lifetime1-600w.png"
                class="basic-py1d-image"
              />
              <span class="basic-py1d-text093">
                <span>
                  Based on the source code, memory will be allocated for all
                  variables inside
                  <span v-html="rawoq4u"></span>
                </span>
                <span class="basic-py1d-text095">
                  class SaleView
                  <span v-html="rawl218"></span>
                </span>
                <span>
                  only when an instance is created for the class during runtime.
                </span>
                <br />
              </span>
            </div>
            <div class="basic-py1d-container6">
              <h2 class="basic-py1d-text098">Implicit Heap-Dynamic</h2>
              <span class="basic-py1d-text099">
                <span>
                  Assignment statements can causes the
                  <span v-html="rawjjwx"></span>
                </span>
                <span class="basic-py1d-text101">
                  allocation and deallocation
                  <span v-html="raw5ayh"></span>
                </span>
                <span>
                  of the
                  <span v-html="raw3evk"></span>
                </span>
                <span class="basic-py1d-text103">
                  memory inside
                  <span v-html="raw2jow"></span>
                </span>
                <span>
                  the
                  <span v-html="rawt0yf"></span>
                </span>
                <span class="basic-py1d-text105">heap</span>
                <span>, that can increase or decrease in size.</span>
                <br />
              </span>
              <img
                alt="pastedImage"
                src="/external/nab-lifetime2-600w.png"
                class="basic-py1d-pasted-image1"
              />
              <span class="basic-py1d-text108">
                <span>
                  From the given sample code, memory can be allocated inside
                  variable
                  <span v-html="raw53a3"></span>
                </span>
                <span class="basic-py1d-text110">
                  form
                  <span v-html="rawo91i"></span>
                </span>
                <span>
                  and
                  <span v-html="rawwjap"></span>
                </span>
                <span class="basic-py1d-text112">formset</span>
                <span>
                  . If there is none, the memory space would be minimal or lesser.
                </span>
              </span>
            </div>
          </div>
          <span class="basic-py1d-text114">
            <span>
              -
              <span v-html="rawnapx"></span>
            </span>
            <span class="basic-py1d-text116">Muhammad Ariff Ridzlan</span>
          </span>
        </div>
      </div>
    </div>
    <div class="basic-py1d-reference">
      <h1 class="basic-py1d-text117">References</h1>
      <span class="basic-py1d-text118">
        <br />
        <span>
          Lunga, N. (2023, November 8).
          <span v-html="rawe599"></span>
        </span>
        <span class="basic-py1d-text121">How to Manage Memory with Python</span>
        <span>. Squash.</span>
        <br />
        <span>
                 
          <span v-html="rawbgjq"></span>
        </span>
        <a
          href="https://www.squash.io/how-to-manage-memory-with-python/"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1d-link"
        >
          https://www.squash.io/how-to-manage-memory-with-python/
        </a>
        <br />
        <br />
        <span>
          Ugochukwu, U. (2020, June 22).
          <span v-html="rawnnah"></span>
        </span>
        <span class="basic-py1d-text128">
          Understanding Python scope and indentation
        </span>
        <span>. Hashnode.</span>
        <br />
        <span>
                 
          <span v-html="rawfkqh"></span>
        </span>
        <a
          href="https://Ugochukwu, U. (2020, June 22). Understanding Python scope and indentation - Hashnode. Hashnode. Retrieved December 24, 2023, from https://hashnode.com/post/understanding-python-scope-and-indentation-ckbpbc3m501usjps1fe27ti0n"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1d-link1"
        >
          https://hashnode.com/post/understanding-python-scope-and-indentation-ckb
        </a>
        <span class="basic-py1d-text132">pbc3m501usjps1fe27ti0n</span>
        <br />
        <br />
        <span>
          Mcwaves, D. (2017, December 16).
          <span v-html="rawvqol"></span>
        </span>
        <span class="basic-py1d-text136">
          A Python Tutorial To Understanding Scopes and Closures
        </span>
        <span>. Medium.</span>
        <br />
        <span>
                 
          <span v-html="rawiif6"></span>
        </span>
        <a
          href="https://medium.com/@dannymcwaves/a-python-tutorial-to-understanding-scopes-and-closures-c6a3d3ba0937"
          target="_blank"
          rel="noreferrer noopener"
          class="basic-py1d-link2"
        >
          https://medium.com/@dannymcwaves/a-python-tutorial-to-understanding-scopes-and-closures-c6a3d3ba0937
        </a>
        <br />
      </span>
    </div>
    <footer class="basic-py1d-footer">
      <div class="basic-py1d-container7">
        <router-link to="/strace" class="basic-py1d-navlink6">STRACE</router-link>
      </div>
      <span class="basic-py1d-text141">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="basic-py1d-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="basic-py1d-icon">
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
  name: 'BasicPy1d',
  props: {},
  components: {
    AppHeader,
  },
  data() {
    return {
      rawa0mi: ' ',
      rawejpo: ' ',
      rawv04b: ' ',
      rawz9i3: ' ',
      raw7374: ' ',
      rawlf8h: ' ',
      raw2vel: ' ',
      rawacxn: ' ',
      rawqwjf: ' ',
      raw0z8y: ' ',
      rawvk21: ' ',
      rawftgx: ' ',
      raw0cof: ' ',
      raw8icj: ' ',
      rawc9dj: ' ',
      rawj5qd: ' ',
      raw2gte: ' ',
      rawauat: ' ',
      rawb5gk: ' ',
      rawsfed: ' ',
      raw6taw: ' ',
      rawgry7: ' ',
      rawu655: ' ',
      rawraf3: ' ',
      rawbesm: ' ',
      rawk2kq: ' ',
      rawq7ev: ' ',
      rawaul3: ' ',
      rawt3fj: ' ',
      raw0hr4: ' ',
      rawy08i: ' ',
      rawoq4u: ' ',
      rawl218: ' ',
      rawjjwx: ' ',
      raw5ayh: ' ',
      raw3evk: ' ',
      raw2jow: ' ',
      rawt0yf: ' ',
      raw53a3: ' ',
      rawo91i: ' ',
      rawwjap: ' ',
      rawnapx: ' ',
      rawe599: ' ',
      rawbgjq: ' ',
      rawnnah: ' ',
      rawfkqh: ' ',
      rawvqol: ' ',
      rawiif6: ' ',
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
.basic-py1d-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.basic-py1d-banner {
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

.basic-py1d-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.basic-py1d-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.basic-py1d-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.basic-py1d-navlink {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1d-navlink:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1d-navlink1 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1d-navlink1:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1d-navlink2 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1d-navlink2:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1d-navlink3 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1d-navlink3:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1d-navlink4 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1d-navlink4:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1d-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.basic-py1d-navlink5:hover {
  color: #a068ff;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.75);
}
.basic-py1d-scope {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.basic-py1d-text006 {
  text-align: justify;
}
.basic-py1d-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py1d-container3 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1d-text016 {
  text-align: justify;
}
.basic-py1d-text032 {
  text-align: justify;
}
.basic-py1d-text048 {
  text-align: justify;
}
.basic-py1d-text066 {
  text-align: justify;
}
.basic-py1d-lifetime {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1d-row {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py1d-column {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.basic-py1d-text078 {
  text-align: justify;
}
.basic-py1d-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.basic-py1d-container5 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1d-text088 {
  text-align: justify;
}
.basic-py1d-image {
  width: 200px;
  object-fit: cover;
}
.basic-py1d-text093 {
  text-align: justify;
}
.basic-py1d-container6 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.basic-py1d-text099 {
  text-align: justify;
}
.basic-py1d-text108 {
  text-align: justify;
}
.basic-py1d-reference {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.basic-py1d-footer {
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
.basic-py1d-container7 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.basic-py1d-navlink6 {
  font-weight: 700;
  text-decoration: none;
}
.basic-py1d-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .basic-py1d-container {
    background-color: #f7f7f7;
  }
  .basic-py1d-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .basic-py1d-main-content {
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
  .basic-py1d-heading {
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
  .basic-py1d-container1 {
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
  .basic-py1d-navlink {
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
  .basic-py1d-navlink1 {
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
  .basic-py1d-navlink2 {
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
  .basic-py1d-navlink3 {
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
  .basic-py1d-navlink4 {
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
  .basic-py1d-navlink5 {
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
  .basic-py1d-scope {
    flex: 1;
    align-items: flex-start;
    margin-left: 50px;
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 25px;
  }
  .basic-py1d-text {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .basic-py1d-text003 {
    font-size: 24px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .basic-py1d-text006 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 25px;
  }
  .basic-py1d-text008 {
    font-weight: 700;
  }
  .basic-py1d-text010 {
    font-weight: 700;
  }
  .basic-py1d-container2 {
    justify-content: space-between;
  }
  .basic-py1d-container3 {
    width: 50%;
    padding-right: 30px;
  }
  .basic-py1d-text013 {
    font-size: 1.5rem;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .basic-py1d-text016 {
    font-size: 16px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .basic-py1d-text017 {
    font-style: normal;
    font-weight: 400;
  }
  .basic-py1d-text018 {
    font-style: normal;
    font-weight: 700;
  }
  .basic-py1d-text019 {
    font-style: normal;
    font-weight: 400;
  }
  .basic-py1d-text020 {
    font-style: italic;
  }
  .basic-py1d-text021 {
    font-style: normal;
  }
  .basic-py1d-text022 {
    font-style: italic;
  }
  .basic-py1d-text023 {
    font-style: normal;
  }
  .basic-py1d-text024 {
    font-style: italic;
  }
  .basic-py1d-text025 {
    font-style: normal;
  }
  .basic-py1d-text026 {
    font-style: italic;
  }
  .basic-py1d-text028 {
    font-style: normal;
  }
  .basic-py1d-text029 {
    font-size: 1.5rem;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .basic-py1d-text032 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .basic-py1d-text034 {
    font-weight: 700;
  }
  .basic-py1d-text036 {
    font-style: italic;
  }
  .basic-py1d-text038 {
    font-style: italic;
  }
  .basic-py1d-text040 {
    font-style: italic;
  }
  .basic-py1d-text042 {
    font-style: italic;
  }
  .basic-py1d-text045 {
    font-size: 1.5rem;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .basic-py1d-text048 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .basic-py1d-text050 {
    font-weight: 700;
  }
  .basic-py1d-text052 {
    font-style: italic;
  }
  .basic-py1d-text054 {
    font-weight: 700;
  }
  .basic-py1d-text056 {
    font-style: italic;
  }
  .basic-py1d-text058 {
    font-style: italic;
  }
  .basic-py1d-text060 {
    font-style: italic;
  }
  .basic-py1d-text063 {
    font-size: 1.5rem;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .basic-py1d-text066 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 15px;
  }
  .basic-py1d-text068 {
    font-weight: 700;
  }
  .basic-py1d-text070 {
    font-weight: 700;
  }
  .basic-py1d-text072 {
    font-weight: 700;
  }
  .basic-py1d-pasted-image {
    width: 511px;
    height: 504px;
    border-radius: var(--dl-radius-radius-radius4);
  }
  .basic-py1d-lifetime {
    width: 1200px;
    align-items: flex-end;
    margin-left: 50px;
    padding-top: 25px;
    margin-right: 50px;
    padding-bottom: 50px;
  }
  .basic-py1d-row {
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .basic-py1d-column {
    flex: 1;
    align-items: flex-start;
  }
  .basic-py1d-text075 {
    font-size: 36px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 30px;
  }
  .basic-py1d-text078 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1d-text080 {
    font-weight: 700;
  }
  .basic-py1d-text082 {
    font-weight: 700;
  }
  .basic-py1d-text084 {
    font-weight: 700;
  }
  .basic-py1d-container4 {
    justify-content: space-between;
  }
  .basic-py1d-container5 {
    width: 575px;
    height: auto;
  }
  .basic-py1d-text087 {
    font-size: 24px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .basic-py1d-text088 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 25px;
  }
  .basic-py1d-text090 {
    font-weight: 700;
  }
  .basic-py1d-image {
    width: 570px;
    height: 285px;
    align-self: center;
  }
  .basic-py1d-text093 {
    font-size: 16px;
    font-style: normal;
    margin-top: 25px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1d-text095 {
    font-style: italic;
  }
  .basic-py1d-container6 {
    width: 575px;
    height: auto;
  }
  .basic-py1d-text098 {
    font-size: 24px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .basic-py1d-text099 {
    font-size: 16px;
    font-style: normal;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 25px;
  }
  .basic-py1d-text101 {
    font-weight: 700;
  }
  .basic-py1d-text103 {
    font-weight: 700;
  }
  .basic-py1d-text105 {
    font-weight: 700;
  }
  .basic-py1d-pasted-image1 {
    width: 517px;
    height: 285px;
    align-self: center;
  }
  .basic-py1d-text108 {
    font-size: 16px;
    font-style: normal;
    margin-top: 25px;
    text-align: justify;
    font-family: Inter;
    font-weight: 400;
    line-height: 1.15;
  }
  .basic-py1d-text110 {
    font-style: italic;
  }
  .basic-py1d-text112 {
    font-style: italic;
  }
  .basic-py1d-text114 {
    font-size: 18px;
    font-style: normal;
    font-family: Inter;
    font-weight: 500;
    padding-top: 25px;
  }
  .basic-py1d-text116 {
    font-style: italic;
  }
  .basic-py1d-reference {
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
  .basic-py1d-text117 {
    font-size: 32px;
    font-style: normal;
    font-family: Inter;
    font-weight: 700;
  }
  .basic-py1d-text118 {
    line-height: 1.25;
  }
  .basic-py1d-text121 {
    font-style: italic;
  }
  .basic-py1d-link {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py1d-text128 {
    font-style: italic;
  }
  .basic-py1d-link1 {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py1d-text132 {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py1d-text136 {
    font-style: italic;
  }
  .basic-py1d-link2 {
    color: var(--dl-color-primary-300);
    text-decoration: underline;
  }
  .basic-py1d-footer {
    justify-content: space-between;
  }
  .basic-py1d-navlink6 {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .basic-py1d-text141 {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .basic-py1d-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .basic-py1d-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .basic-py1d-footer {
    align-self: center;
  }
  .basic-py1d-icon-group {
    display: none;
  }
}
</style>
