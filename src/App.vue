<template>
  <div id="app">
    <main-header class="sticky-0"></main-header>

    <!-- <div class="response sticky-60">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->

    <el-row class="my-main-content">
      <router-view />
    </el-row>

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

@media screen and (min-width: 599px) {
  .response {
    max-width: 1280px;
    padding-right: 8vw;
    padding-left: 8vw;
  }
}

@media screen and (max-width: 600px) {
  .response {
  }
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

.sticky-0 {
  position: sticky;
  z-index: 10;
  top: 0px;
}

.sticky-60 {
  position: sticky;
  z-index: 10;
  top: 60px;
}
</style>
