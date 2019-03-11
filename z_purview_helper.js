// note: this file is poorly named - it can generally be ignored.

// helper functions below for supporting blocks/purview

function saveBlocksImages() {
  var offscreenCanvas = document.createElement('canvas');
  offscreenCanvas.width = 1080;
  offscreenCanvas.height = 1920;
  var context = offscreenCanvas.getContext('2d');
  // background is flat white
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 1080, 1920);
  context.drawImage(this.canvas, 0, 0, 1080, 1920);
  // save to browser
  var downloadMime = 'image/octet-stream';
  var imageData = offscreenCanvas.toDataURL('image/png');
  imageData = imageData.replace('image/png', downloadMime);
  p5.prototype.downloadFile(imageData, 'artwork.png', 'png');


  // generate 960x500 preview.jpg 1/3 of the way down
  offscreenCanvas.width = 960;
  offscreenCanvas.height = 500;

  // background is flat white  
  context = offscreenCanvas.getContext('2d');
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 960, 500);

  // now scaledown
  var crop_width = 1080;
  var crop_height = 564;
  context.drawImage(this.canvas, 0, 640, crop_width, crop_height, 0, 0, 960, 500);

  // save to browser
  var downloadMime = 'image/octet-stream';
  var imageDataPreview = offscreenCanvas.toDataURL('image/jpeg');
  imageDataPreview = imageDataPreview.replace('image/jpeg', downloadMime);
  // call this function after 1 second
  setTimeout(function(){
    p5.prototype.downloadFile(imageDataPreview, 'preview.jpg', 'jpg');
  }, 1000);

  // generate 230x120 thumbnail.png  1/3 of the way down
  offscreenCanvas.width = 230;
  offscreenCanvas.height = 120;

  // background is flat white  
  context = offscreenCanvas.getContext('2d');
  context.fillStyle="#FFFFFF";
  context.fillRect(0, 0, 230, 120);

  // now scaledown
  var crop_width = 1080;
  var crop_height = 564;
  context.drawImage(this.canvas, 0, 640, crop_width, crop_height, 0, 0, 230, 120);

  var imageDataThumbnail = offscreenCanvas.toDataURL('image/png');
  imageDataThumbnail = imageDataThumbnail.replace('image/png', downloadMime);
  // call this function after 2 seconds
  setTimeout(function(){
    p5.prototype.downloadFile(imageDataThumbnail, 'thumbnail.png', 'png');
  }, 2000);
}
