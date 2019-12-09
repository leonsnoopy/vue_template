<template>
  <div style="text-align: center">
    <el-row :span="24">
      <h1>我的工作台</h1>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="24">
        <el-button @click="$routerTo('/Button')">按鈕</el-button>

        <el-button @click="$routerTo('/UploadImage')">上傳圖片</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
