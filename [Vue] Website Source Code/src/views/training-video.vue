<template>
  <div class="training-video-container">
    <div class="training-video-banner">
      <div class="training-video-main-content">
        <h1 class="training-video-heading">TRAINING VIDEO</h1>
        <div class="training-video-introduction">
          <iframe
            src="https://www.youtube.com/embed/VFoJ96y_na8?si=TOTpOl2q2oI5ROcr"
            class="training-video-iframe"
          ></iframe>
        </div>
      </div>
    </div>
    <footer class="training-video-footer">
      <div class="training-video-container1">
        <router-link to="/strace" class="training-video-navlink">
          STRACE
        </router-link>
      </div>
      <span class="training-video-text">
        &quot;Making System Calls Cool Again&quot;
      </span>
      <div class="training-video-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" class="training-video-icon">
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
  name: 'TrainingVideo',
  props: {},
  components: {
    AppHeader,
  },
  metaInfo: {
    title: 'Strace | Training Video',
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
.training-video-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f5f5f5;
}
.training-video-banner {
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

.training-video-main-content {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
}
.training-video-heading {
  color: #ff0000;
  font-size: 3rem;
  align-self: center;
  text-align: center;
}
.training-video-introduction {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.training-video-iframe {
  width: 320px;
  height: 200px;
}
.training-video-footer {
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
.training-video-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.training-video-navlink {
  font-weight: 700;
  text-decoration: none;
}
.training-video-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1600px) {
  .training-video-container {
    background-color: #f7f7f7;
  }
  .training-video-banner {
    height: auto;
    align-items: center;
    background-size: cover;
    justify-content: flex-start;
    background-image: url("/external/bgportrait-1500w.jpg");
  }
  .training-video-main-content {
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
  .training-video-heading {
    color: rgb(255, 255, 255);
    width: 900px;
    height: auto;
    font-size: 64px;
    font-style: normal;
    margin-top: 10px;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 1.15;
    padding-top: 25px;
    border-radius: var(--dl-radius-radius-radius4);
    margin-bottom: 25px;
    padding-bottom: 25px;
    background-size: cover;
    background-image: url("/external/bglandscape-900w.jpg");
    background-position: bottom left;
  }
  .training-video-introduction {
    width: 1000px;
    height: 500px;
    align-self: center;
    margin-top: 10px;
    align-items: center;
    margin-bottom: 50px;
    flex-direction: row;
    justify-content: center;
  }
  .training-video-iframe {
    width: 900px;
    height: 500px;
    border-radius: var(--dl-radius-radius-radius8);
  }
  .training-video-footer {
    justify-content: space-between;
  }
  .training-video-navlink {
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
  }
  .training-video-text {
    font-size: 16px;
    font-style: normal;
    font-family: Montserrat;
    font-weight: 500;
  }
  .training-video-icon {
    margin-left: 50px;
  }
}
@media(max-width: 1200px) {
  .training-video-heading {
    color: rgb(255, 255, 255);
  }
}
@media(max-width: 479px) {
  .training-video-footer {
    align-self: center;
  }
  .training-video-icon-group {
    display: none;
  }
}
</style>
