<template>
  <header class="response" style="height:60px; background-color: rgb(84, 92, 100);">
    <el-row type="flex" class="row-bg" justify="center" style="font-size: 34px;font-weight: bold;">
      <el-col :span="6" style="padding-top: 7px;">
        <span>Header</span>
      </el-col>

      <el-col :span="18">
        <el-menu :default-active="activeIndex2" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/">我的工作台</el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title"></template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "2"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-drawer {
  background-color: black !important;
  color: lightgray;
}
</style>
