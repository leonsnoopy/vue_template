/* eslint-disable no-console */
import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;

// global mixin
Vue.mixin({
  methods: {
    $routerTo(url_hash) {
      this.$router.push(url_hash).catch(err => {
        if (err.name !== "NavigationDuplicated") {
          console.log(err);
        }
      });
    },
    $goBack() {
      this.$router.go(-1);
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 圖片家載錯誤
document.addEventListener(
  "error",
  function(e) {
    var elem = e.target;
    if (elem.tagName.toLowerCase() === "img") {
      elem.src = require("./assets/image/errorImg.png");
    }
  },
  true
);
