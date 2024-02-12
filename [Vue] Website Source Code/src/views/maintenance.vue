<template>
  <div class="maintenance-container">
    <div class="maintenance-banner">
      <h1 class="maintenance-text">
        <span class="maintenance-text1">STRACE</span>
        <br />
      </h1>
      <span class="maintenance-text3">
        <span class="maintenance-text4">IN MAINTENANCE ...</span>
        <br />
      </span>
      <div class="maintenance-container1">
        <img
          alt="image"
          src="https://i.imgflip.com/wfenk.jpg?a473376"
          loading="eager"
          class="maintenance-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  props: {},
  metaInfo: {
    title: 'Strace | Flag',
    meta: [
      {
        name: 'description',
        content: 'TPL6213 Project',
      },
      {
        property: 'og:title',
        content: 'Strace | Flag',
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
.maintenance-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.maintenance-banner {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.maintenance-text {
  font-size: 3rem;
  text-align: center;
}
.maintenance-text3 {
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.maintenance-text4 {
  max-width: var(--dl-size-size-maxwidth);
  text-align: center;
}
.maintenance-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.maintenance-image {
  width: 200px;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .maintenance-text {
    font-size: 3rem;
    font-family: Inter;
  }
  .maintenance-text1 {
    font-family: Montserrat;
  }
  .maintenance-text3 {
    font-size: 16px;
    font-style: normal;
    margin-top: var(--dl-space-space-threeunits);
    font-family: Inter;
    font-weight: bold;
    margin-bottom: var(--dl-space-space-threeunits);
  }
  .maintenance-container1 {
    align-self: center;
    justify-content: center;
  }
  .maintenance-image {
    width: 451px;
    height: 349px;
    align-self: center;
  }
}
</style>
