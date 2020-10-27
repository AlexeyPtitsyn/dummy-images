/**
 * @file Dummy images generator
 * @copyright Alexey Ptitsyn <numidium.ru@gmail.com>, 2019
 */

var DummyImages = function(el, className, minWidth, minHeight) {
  var el = el || document.body;
  var className = className || 'dummy';
  var minWidth = minWidth || 160;
  var minHeight = minHeight || 100;

  var images = el.querySelectorAll('img.' + className);
  
  for(var i = 0; i<images.length; i++) {
    var width = images[i].width || minWidth;
    var height = images[i].height || minHeight;
    
    var newImage = this.createImage(width, height);
    images[i].src = newImage.toDataURL();
  }
};

DummyImages.prototype.createImage = function(width, height) {
    var can = document.createElement('canvas');
    can.width = width;
    can.height = height;
    
    var ctx = can.getContext('2d');
    ctx.fillStyle = '#ddd';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#888';
    
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, height);
    ctx.moveTo(0, height);
    ctx.lineTo(width, 0);
    ctx.stroke();
    
    ctx.strokeRect(0, 0, width, height);
    
    var min = width;
    if (height < width) {
      min = height;
    }
    
    var fontSize = min / 4;
    var text = width + '×' + height;
    ctx.font = fontSize + 'px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(text, width / 2 - ctx.measureText(text).width / 2, height / 2 + fontSize / 3);
    
    return can;
};
