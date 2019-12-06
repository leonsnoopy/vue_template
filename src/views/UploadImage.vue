<template>
  <div style="text-align: center">
    <el-row type="flex" justify="center">
      <el-col :xs="12" :sm="6" :md="6" style>
        <span>圖片</span>
        <div class="square-img" style="text-align:left;border: 5px solid;border-color: black;">
          <img :src="image" class="image" />
        </div>

        <el-upload action="#" list-type="picture" :on-change="selectFile" :show-file-list="false" :auto-upload="false" style="margin-top:10px">
          <el-button size="small" type="primary">選擇圖片</el-button>
        </el-upload>
      </el-col>
    </el-row>

    <el-button @click="uplaod()" size="small" type="primary">上傳</el-button>
  </div>
</template>

<script>
let formData = new FormData();
import { loadFileToBase64, loadBase64ToImage, base64ToFile, compressImagetoBase64 } from "../plugins/upload_image";

export default {
  data() {
    return {
      image: "",
      file: ""
    };
  },
  computed: {},
  async mounted() {},
  methods: {
    uplaod() {
      let formData = new FormData();
      formData.append("img", this.file.raw);

      axios
        .post("https://taog.amiasay.net/upload/image", formData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    async selectFile(file, fileList) {
      console.log(file);
      let filename = file.name;
      let fileData = file.raw;
      console.log("原圖片大小(KB): " + Math.round(fileData.size / 1024));
      // this.file = file;
      // this.image = file.url;

      if (!fileData || !window.FileReader) {
        this.$message.warning("您的瀏覽器不支援上傳圖片");
        return false;
      }

      //把處理圖片處理成base64
      let img_base64 = await loadFileToBase64(fileData);
      // console.log(img_base64);

      let img = await loadBase64ToImage(img_base64);
      // console.log(img);

      // 開始壓縮圖片
      let new_base64 = compressImagetoBase64(img);
      this.image = new_base64;

      // base64 轉為 File
      let new_file = base64ToFile(new_base64, filename);
      console.log(new_file);
    },
    postDocument() {
      console.log(this.document);
    },
    editDocument() {}
  }
};
</script>
