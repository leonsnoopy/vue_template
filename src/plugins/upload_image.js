/* eslint-disable no-console */
function loadFileToBase64(fileData) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(fileData); //將圖片轉成base64格式
    reader.onloadend = function() {
      // 這邊的 this 是回調後的 e.target 是FileReader，result是編碼後的base64格式
      // console.log(this.result);
      let result = this.result;
      console.log("未壓縮的圖片大小(KB):" + Math.round(result.length / 1024));
      resolve(result);
    };
  });
}

function loadBase64ToImage(base64) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = base64;
    img.onload = () => resolve(img);
  });
}

function base64ToFile(base64, filename) {
  let arr = base64.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  let newFile = new File([u8arr], filename.split(".")[0] + ".jpg", {
    type: mime
  });
  // console.log(arr);
  // console.log(mime);
  // console.log(u8arr);
  // console.log(newFile);
  return newFile;
}

function compressImagetoBase64(img) {
  // 用 canvas 重新繪製圖片
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  //將圖片固定在寬 600 高自適應
  let width = img.width;
  let height = img.height;
  canvas.width = (width * 600) / width;
  canvas.height = (height * 600) / width;
  console.log("原尺寸(寬): " + width);
  console.log("原尺寸(高): " + height);

  console.log("壓縮後尺寸(寬): " + canvas.width);
  console.log("壓縮後尺寸(高): " + canvas.height);

  //將png透明背景 轉為白色
  let imageData = ctx.getImageData(0, 0, (width * 600) / width, (height * 600) / width);
  for (var i = 0; i < imageData.data.length; i += 4) {
    // 把png透明背景改成白色背景
    if (imageData.data[i + 3] == 0) {
      imageData.data[i] = 255;
      imageData.data[i + 1] = 255;
      imageData.data[i + 2] = 255;
      imageData.data[i + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);

  // 開始從新畫圖
  ctx.drawImage(img, 0, 0, (width * 600) / width, (height * 600) / width);

  // 將新的圖轉乘 base64，並解質量壓縮為0.6
  let ndata = canvas.toDataURL("image/jpeg", 0.6);
  console.log("壓縮後的圖片大小(KB):" + Math.round(ndata.length / 1024));

  return ndata;
}

export { loadFileToBase64, loadBase64ToImage, base64ToFile, compressImagetoBase64 };
