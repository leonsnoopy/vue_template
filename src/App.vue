<template>
  <div id="app">
    <main-header></main-header>

    <div class="my-main-content">
      <router-view />
    </div>

    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style>
html {
  height: -webkit-fill-available;
}
body {
  margin: 0;
  height: -webkit-fill-available;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: -webkit-fill-available;
}

.my-main-content {
  min-height: calc(100vh - 90px);
  background-color: #333333;
}

.square-img {
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
}
.square-img img {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
