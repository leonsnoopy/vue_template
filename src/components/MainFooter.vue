<template>
  <footer style="height:60px; width:100vw; background-color:#4f4f4f; height:30px; text-align: center;">
    <div style="height:25px; font-size:12px; word-spacing:1px; font-weight:bold;">
      <div style="padding-top: 7px;">
        <span>{{ Copyright }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      Copyright: ""
    };
  },
  mounted() {
    var tm = new Date();
    var y = tm.getFullYear();
    var cp = "";
    if (y == "2019") cp = y;
    else cp = "2019 - " + y;
    this.Copyright = "Footer Copyright " + cp + "    leon  design  ";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
