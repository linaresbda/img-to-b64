(function () {
  var img = new Image();
  img.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.height = img.height;
    canvas.width = img.width;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var b64 = canvas.toDataURL();
    document.getElementById('out').innerHTML = b64;
  };
  img.src = document.getElementById('img').src;

})();