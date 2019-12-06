<template>
  <div style="text-align: center">
    <el-row :span="24">
      <h1>範本示例</h1>
    </el-row>

    <el-row>
      <el-button>按鈕</el-button>

      <router-link to="/UploadImage">
        <el-button>上傳圖片</el-button>
      </router-link>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
