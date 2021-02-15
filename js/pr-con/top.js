/* ------------------------------------------*/
// ヒーローエリアの Canvas
/* ------------------------------------------*/
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width    : 596,
  height   : 596,
  fps      : 30,
  color    : "#FFFFFF",
  manifest : [
    {src:"img/frame.png", id:"frame"},
    {src:"img/note05.png", id:"note01"},
    //{src:"../img/note02.png", id:"note02"},
    {src:"img/note04.png", id:"note03"}
  ]
};

// 値の設定
if(!document.getElementById('js-top-canvas-config')) {
  return false;
}

var elm = document.getElementById('js-top-canvas-config');

// badge
lib.properties.manifest.push({
  src : elm.getAttribute('data-top-canvas-badge'),
  id  : "badge"
});

// images
var imgs = elm.getAttribute('data-top-canvas-img');
imgs = imgs.split(',');

for(var i=0, len=imgs.length; i<len; i++) {
  lib.properties.manifest.push({
    src : imgs[i],
    id  : "pic0" + (i + 1)
  });
}

// symbols:
(lib.badge = function() {
  this.initialize(img.badge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.frame = function() {
  this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,576);


(lib.note01 = function() {
  this.initialize(img.note01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,31);


(lib.note02 = function() {
  this.initialize(img.note02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,48);


(lib.note03 = function() {
  this.initialize(img.note03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,55);


(lib.pic01 = function() {
  this.initialize(img.pic01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,566);


(lib.pic02 = function() {
  this.initialize(img.pic02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,566);


(lib.pic03 = function() {
  this.initialize(img.pic03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,566);


(lib.pic04 = function() {
  this.initialize(img.pic04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,566);


(lib.pic05 = function() {
  this.initialize(img.pic05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,566);


(lib.pic06 = function() {
  this.initialize(img.pic06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,566);


(lib.wave05 = function() {
  this.initialize();

  // レイヤー 1
  this.shape = new cjs.Shape();//#fca430
  this.shape.graphics.f("transparent").s().p("Egs/AylMAAAhdyQDpA4EWh6QQRl4T+EAQQfDoMkiNQLXiAFXj4MAAABlJg");
  this.shape.setTransform(0,293.8);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-30,576,647.6);


(lib.wave04 = function() {
  this.initialize();

  // レイヤー 2
  this.shape = new cjs.Shape();//#9de291
  this.shape.graphics.f("transparent").s().p("Egs/AygMAAAhduQFkBsFjiAQNtl8SAD5QPvD4Q5i7QH1h9Guj6MAAABk/g");
  this.shape.setTransform(0,293.3);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-30,576,646.5);


(lib.wave03 = function() {
  this.initialize();

  // レイヤー 3
  this.shape = new cjs.Shape();//#EF7D9B
  this.shape.graphics.f("transparent").s().p("Egs/AymMAAAhamQHmBbHliXQLDkQPMCOQS+DgLeiGQJJiGJAm7MAAABlLg");
  this.shape.setTransform(0,273.9);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-50,576,647.8);


(lib.wave02 = function() {
  this.initialize();

  // レイヤー 4
  this.shape = new cjs.Shape();//#AAE7F7
  this.shape.graphics.f("transparent").s().p("Egs/AyZMAAAheEQKDCdKljsQJCkGQQDKQMvC+MvjcQPZluDOCWMAAABkFg");
  this.shape.setTransform(0,292.5);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-30,576,645);


(lib.wave01 = function() {
  this.initialize();

  // レイヤー 5
  this.shape = new cjs.Shape();//#f9c7d9
  this.shape.graphics.f("transparent").s().p("Egs/AydMAAAhfRQRlD7LBlWQF1ioLpCKQHkCZNYijQQukKGRAqMAAABk0g");
  this.shape.setTransform(0,303);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-20,576,646);


(lib.tween = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.badge();
  this.instance.setTransform(-61,-61);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-61,122,122);


(lib.pic06_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.pic06();
  this.instance.setTransform(-283,-283);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-283,566,566);


(lib.pic05_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.pic05();
  this.instance.setTransform(-283,-283);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-283,566,566);


(lib.pic04_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.pic04();
  this.instance.setTransform(-283,-283);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-283,566,566);


(lib.pic03_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.pic03();
  this.instance.setTransform(-283,-283);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-283,566,566);


(lib.pic02_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.pic02();
  this.instance.setTransform(-283,-283);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-283,566,566);


(lib.pic01_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.pic01();
  this.instance.setTransform(-283,-283);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-283,566,566);


(lib.note03_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.note03();
  this.instance.setTransform(-42,-11);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-11,63,55);


(lib.note02_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.note02();
  this.instance.setTransform(-12,-13);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-13,22,48);


(lib.note01_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.note01();
  this.instance.setTransform(-20,-7);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-7,29,31);


(lib.frame_1 = function() {
  this.initialize();

  // レイヤー 1
  this.instance = new lib.frame();
  this.instance.setTransform(-288,-288);

  this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-288,-288,576,576);


// stage content:
(lib.top2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{loop:46});

  // timeline functions:
  this.frame_526 = function() {
    this.gotoAndPlay(0);
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(526).call(this.frame_526).wait(1));

  // badge
  this.instance = new lib.tween("synched",0);
  this.instance.setTransform(88,106,0.131,0.131,-45);
  this.instance._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:-43.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-40},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-32.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-21.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-11.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-4.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:0},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(191).to({startPosition:0},0).to({scaleX:0.06,scaleY:0.06,rotation:-45},16,cjs.Ease.get(-1)).to({_off:true},1).wait(43).to({_off:false,scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:-43.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-40},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-32.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-21.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-11.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-4.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:0},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(191).to({startPosition:0},0).to({scaleX:0.06,scaleY:0.06,rotation:-45},16,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

  // frame
  this.instance_1 = new lib.frame_1();
  this.instance_1.setTransform(298,298,0.017,0.017);
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).to({scaleX:1,scaleY:1},5).wait(204).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.07,scaleY:0.07},0).wait(1).to({scaleX:0.04,scaleY:0.04},0).wait(1).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.02,scaleY:0.02},0).wait(1).to({scaleX:0.02,scaleY:0.02},0).wait(12).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).to({scaleX:1,scaleY:1},5).wait(204).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.07,scaleY:0.07},0).wait(1).to({scaleX:0.04,scaleY:0.04},0).wait(1).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.02,scaleY:0.02},0).wait(1).to({scaleX:0.02,scaleY:0.02},0).wait(3));

  // mask (mask)
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_0 = new cjs.Graphics().p("AWIXqIAAhiIBiAAIAABig");
  var mask_graphics_10 = new cjs.Graphics().p("AVlX2IAAiRICRAAIAACRg");
  var mask_graphics_11 = new cjs.Graphics().p("AT4YaIAAkiIEiAAIAAEig");
  var mask_graphics_12 = new cjs.Graphics().p("AQ7ZZIAAoeIIeAAIAAIeg");
  var mask_graphics_13 = new cjs.Graphics().p("AMtazIAAuGIOGAAIAAOGg");
  var mask_graphics_14 = new cjs.Graphics().p("AHTcmIAA1TIVTAAIAAVTg");
  var mask_graphics_15 = new cjs.Graphics().p("AA8euIAA9yIdyAAIAAdyg");
  var mask_graphics_16 = new cjs.Graphics().p("EgGAAhDMAAAgnDMAnDAAAMAAAAnDg");
  var mask_graphics_17 = new cjs.Graphics().p("EgNIAjbMAAAgwjMAwjAAAMAAAAwjg");
  var mask_graphics_18 = new cjs.Graphics().p("EgT+AltMAAAg5rMA5rAAAMAAAA5rg");
  var mask_graphics_19 = new cjs.Graphics().p("EgaMAnxMAAAhB9MBB9AAAMAAABB9g");
  var mask_graphics_20 = new cjs.Graphics().p("EgflApkMAAAhJJMBJJAAAMAAABJJg");
  var mask_graphics_21 = new cjs.Graphics().p("EgkDArEMAAAhPHMBPHAAAMAAABPHg");
  var mask_graphics_22 = new cjs.Graphics().p("EgnkAsPMAAAhTzMBTzAAAMAAABTzg");
  var mask_graphics_23 = new cjs.Graphics().p("EgqMAtHMAAAhXTMBXTAAAMAAABXTg");
  var mask_graphics_24 = new cjs.Graphics().p("Egr/AttMAAAhZsMBZsAAAMAAABZsg");
  var mask_graphics_25 = new cjs.Graphics().p("EgtAAuDMAAAhbDMBbDAAAMAAABbDg");
  var mask_graphics_26 = new cjs.Graphics().p("EgtVAuKMAAAhbfMBbfAAAMAAABbfg");
  var mask_graphics_27 = new cjs.Graphics().p("EgtKAuGMAAAhbQMBbQAAAMAAABbQg");
  var mask_graphics_28 = new cjs.Graphics().p("EgsoAt7MAAAhajMBajAAAMAAABajg");
  var mask_graphics_29 = new cjs.Graphics().p("Egr0AtpMAAAhZdMBZdAAAMAAABZdg");
  var mask_graphics_30 = new cjs.Graphics().p("Egq5AtWMAAAhYPMBYPAAAMAAABYPg");
  var mask_graphics_31 = new cjs.Graphics().p("EgqKAtGMAAAhXQMBXQAAAMAAABXQg");
  var mask_graphics_32 = new cjs.Graphics().p("Egp4AtAMAAAhW4MBW4AAAMAAABW4g");
  var mask_graphics_33 = new cjs.Graphics().p("EgqHAtFMAAAhXMMBXMAAAMAAABXMg");
  var mask_graphics_34 = new cjs.Graphics().p("EgqVAtKMAAAhXfMBXfAAAMAAABXfg");
  var mask_graphics_35 = new cjs.Graphics().p("EgqkAtPMAAAhXzMBXzAAAMAAABXzg");
  var mask_graphics_36 = new cjs.Graphics().p("EgqzAtUMAAAhYHMBYHAAAMAAABYHg");
  var mask_graphics_37 = new cjs.Graphics().p("EgrBAtZMAAAhYaMBYaAAAMAAABYag");
  var mask_graphics_241 = new cjs.Graphics().p("Egq6AtWMAAAhYQMBYQAAAMAAABYQg");
  var mask_graphics_242 = new cjs.Graphics().p("EgqjAtOMAAAhXxMBXxAAAMAAABXxg");
  var mask_graphics_243 = new cjs.Graphics().p("Egp4AtAMAAAhW4MBW4AAAMAAABW4g");
  var mask_graphics_244 = new cjs.Graphics().p("Ego2AsqMAAAhVgMBVgAAAMAAABVgg");
  var mask_graphics_245 = new cjs.Graphics().p("EgnYAsLMAAAhTjMBTjAAAMAAABTjg");
  var mask_graphics_246 = new cjs.Graphics().p("EglYArgMAAAhQ4MBQ4AAAMAAABQ4g");
  var mask_graphics_247 = new cjs.Graphics().p("EgirAqmMAAAhNRMBNRAAAMAAABNRg");
  var mask_graphics_248 = new cjs.Graphics().p("EgfFApaMAAAhIfMBIfAAAMAAABIfg");
  var mask_graphics_249 = new cjs.Graphics().p("EgaUAn0MAAAhCIMBCIAAAMAAABCIg");
  var mask_graphics_250 = new cjs.Graphics().p("EgUJAlwMAAAg55MA55AAAMAAAA55g");
  var mask_graphics_251 = new cjs.Graphics().p("EgMiAjOMAAAgvwMAvwAAAMAAAAvwg");
  var mask_graphics_252 = new cjs.Graphics().p("EgEQAgdMAAAgktMAktAAAMAAAAktg");
  var mask_graphics_253 = new cjs.Graphics().p("ADPd9IAA6uIauAAIAAaug");
  var mask_graphics_254 = new cjs.Graphics().p("AJMb+IAAyyISyAAIAASyg");
  var mask_graphics_255 = new cjs.Graphics().p("ANmagIAAs6IM6AAIAAM6g");
  var mask_graphics_256 = new cjs.Graphics().p("AQwZdIAAotIItAAIAAItg");
  var mask_graphics_257 = new cjs.Graphics().p("AS/YtIAAluIFuAAIAAFug");
  var mask_graphics_258 = new cjs.Graphics().p("AUgYNIAAjtIDtAAIAADtg");
  var mask_graphics_259 = new cjs.Graphics().p("AVdX4IAAibICbAAIAACbg");
  var mask_graphics_260 = new cjs.Graphics().p("AV+XtIAAhvIBvAAIAABvg");
  var mask_graphics_261 = new cjs.Graphics().p("AWIXqIAAhiIBiAAIAABig");
  var mask_graphics_273 = new cjs.Graphics().p("AVlX2IAAiRICRAAIAACRg");
  var mask_graphics_274 = new cjs.Graphics().p("AT4YaIAAkiIEiAAIAAEig");
  var mask_graphics_275 = new cjs.Graphics().p("AQ7ZZIAAoeIIeAAIAAIeg");
  var mask_graphics_276 = new cjs.Graphics().p("AMtazIAAuGIOGAAIAAOGg");
  var mask_graphics_277 = new cjs.Graphics().p("AHTcmIAA1TIVTAAIAAVTg");
  var mask_graphics_278 = new cjs.Graphics().p("AA8euIAA9yIdyAAIAAdyg");
  var mask_graphics_279 = new cjs.Graphics().p("EgGAAhDMAAAgnDMAnDAAAMAAAAnDg");
  var mask_graphics_280 = new cjs.Graphics().p("EgNIAjbMAAAgwjMAwjAAAMAAAAwjg");
  var mask_graphics_281 = new cjs.Graphics().p("EgT+AltMAAAg5rMA5rAAAMAAAA5rg");
  var mask_graphics_282 = new cjs.Graphics().p("EgaMAnxMAAAhB9MBB9AAAMAAABB9g");
  var mask_graphics_283 = new cjs.Graphics().p("EgflApkMAAAhJJMBJJAAAMAAABJJg");
  var mask_graphics_284 = new cjs.Graphics().p("EgkDArEMAAAhPHMBPHAAAMAAABPHg");
  var mask_graphics_285 = new cjs.Graphics().p("EgnkAsPMAAAhTzMBTzAAAMAAABTzg");
  var mask_graphics_286 = new cjs.Graphics().p("EgqMAtHMAAAhXTMBXTAAAMAAABXTg");
  var mask_graphics_287 = new cjs.Graphics().p("Egr/AttMAAAhZsMBZsAAAMAAABZsg");
  var mask_graphics_288 = new cjs.Graphics().p("EgtAAuDMAAAhbDMBbDAAAMAAABbDg");
  var mask_graphics_289 = new cjs.Graphics().p("EgtVAuKMAAAhbfMBbfAAAMAAABbfg");
  var mask_graphics_290 = new cjs.Graphics().p("EgtKAuGMAAAhbQMBbQAAAMAAABbQg");
  var mask_graphics_291 = new cjs.Graphics().p("EgsoAt7MAAAhajMBajAAAMAAABajg");
  var mask_graphics_292 = new cjs.Graphics().p("Egr0AtpMAAAhZdMBZdAAAMAAABZdg");
  var mask_graphics_293 = new cjs.Graphics().p("Egq5AtWMAAAhYPMBYPAAAMAAABYPg");
  var mask_graphics_294 = new cjs.Graphics().p("EgqKAtGMAAAhXQMBXQAAAMAAABXQg");
  var mask_graphics_295 = new cjs.Graphics().p("Egp4AtAMAAAhW4MBW4AAAMAAABW4g");
  var mask_graphics_296 = new cjs.Graphics().p("EgqHAtFMAAAhXMMBXMAAAMAAABXMg");
  var mask_graphics_297 = new cjs.Graphics().p("EgqVAtKMAAAhXfMBXfAAAMAAABXfg");
  var mask_graphics_298 = new cjs.Graphics().p("EgqkAtPMAAAhXzMBXzAAAMAAABXzg");
  var mask_graphics_299 = new cjs.Graphics().p("EgqzAtUMAAAhYHMBYHAAAMAAABYHg");
  var mask_graphics_300 = new cjs.Graphics().p("EgrBAtZMAAAhYaMBYaAAAMAAABYag");
  var mask_graphics_504 = new cjs.Graphics().p("Egq6AtWMAAAhYQMBYQAAAMAAABYQg");
  var mask_graphics_505 = new cjs.Graphics().p("EgqjAtOMAAAhXxMBXxAAAMAAABXxg");
  var mask_graphics_506 = new cjs.Graphics().p("Egp4AtAMAAAhW4MBW4AAAMAAABW4g");
  var mask_graphics_507 = new cjs.Graphics().p("Ego2AsqMAAAhVgMBVgAAAMAAABVgg");
  var mask_graphics_508 = new cjs.Graphics().p("EgnYAsLMAAAhTjMBTjAAAMAAABTjg");
  var mask_graphics_509 = new cjs.Graphics().p("EglYArgMAAAhQ4MBQ4AAAMAAABQ4g");
  var mask_graphics_510 = new cjs.Graphics().p("EgirAqmMAAAhNRMBNRAAAMAAABNRg");
  var mask_graphics_511 = new cjs.Graphics().p("EgfFApaMAAAhIfMBIfAAAMAAABIfg");
  var mask_graphics_512 = new cjs.Graphics().p("EgaUAn0MAAAhCIMBCIAAAMAAABCIg");
  var mask_graphics_513 = new cjs.Graphics().p("EgUJAlwMAAAg55MA55AAAMAAAA55g");
  var mask_graphics_514 = new cjs.Graphics().p("EgMiAjOMAAAgvwMAvwAAAMAAAAvwg");
  var mask_graphics_515 = new cjs.Graphics().p("EgEQAgdMAAAgktMAktAAAMAAAAktg");
  var mask_graphics_516 = new cjs.Graphics().p("ADPd9IAA6uIauAAIAAaug");
  var mask_graphics_517 = new cjs.Graphics().p("AJMb+IAAyyISyAAIAASyg");
  var mask_graphics_518 = new cjs.Graphics().p("ANmagIAAs6IM6AAIAAM6g");
  var mask_graphics_519 = new cjs.Graphics().p("AQwZdIAAotIItAAIAAItg");
  var mask_graphics_520 = new cjs.Graphics().p("AS/YtIAAluIFuAAIAAFug");
  var mask_graphics_521 = new cjs.Graphics().p("AUgYNIAAjtIDtAAIAADtg");
  var mask_graphics_522 = new cjs.Graphics().p("AVdX4IAAibICbAAIAACbg");
  var mask_graphics_523 = new cjs.Graphics().p("AV+XtIAAhvIBvAAIAABvg");
  var mask_graphics_524 = new cjs.Graphics().p("AWIXqIAAhiIBiAAIAABig");

  this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:151.5,y:151.5}).wait(10).to({graphics:mask_graphics_10,x:152.6,y:152.6}).wait(1).to({graphics:mask_graphics_11,x:156.3,y:156.3}).wait(1).to({graphics:mask_graphics_12,x:162.5,y:162.5}).wait(1).to({graphics:mask_graphics_13,x:171.5,y:171.5}).wait(1).to({graphics:mask_graphics_14,x:183.1,y:183.1}).wait(1).to({graphics:mask_graphics_15,x:196.7,y:196.7}).wait(1).to({graphics:mask_graphics_16,x:211.5,y:211.5}).wait(1).to({graphics:mask_graphics_17,x:226.7,y:226.7}).wait(1).to({graphics:mask_graphics_18,x:241.3,y:241.3}).wait(1).to({graphics:mask_graphics_19,x:254.6,y:254.6}).wait(1).to({graphics:mask_graphics_20,x:266.1,y:266.1}).wait(1).to({graphics:mask_graphics_21,x:275.6,y:275.6}).wait(1).to({graphics:mask_graphics_22,x:283.1,y:283.1}).wait(1).to({graphics:mask_graphics_23,x:288.7,y:288.7}).wait(1).to({graphics:mask_graphics_24,x:292.5,y:292.5}).wait(1).to({graphics:mask_graphics_25,x:294.7,y:294.7}).wait(1).to({graphics:mask_graphics_26,x:295.4,y:295.4}).wait(1).to({graphics:mask_graphics_27,x:295,y:295}).wait(1).to({graphics:mask_graphics_28,x:293.9,y:293.9}).wait(1).to({graphics:mask_graphics_29,x:292.2,y:292.2}).wait(1).to({graphics:mask_graphics_30,x:290.2,y:290.2}).wait(1).to({graphics:mask_graphics_31,x:288.6,y:288.6}).wait(1).to({graphics:mask_graphics_32,x:288,y:288}).wait(1).to({graphics:mask_graphics_33,x:288.5,y:288.5}).wait(1).to({graphics:mask_graphics_34,x:289,y:289}).wait(1).to({graphics:mask_graphics_35,x:289.5,y:289.5}).wait(1).to({graphics:mask_graphics_36,x:290,y:290}).wait(1).to({graphics:mask_graphics_37,x:290.5,y:290.5}).wait(204).to({graphics:mask_graphics_241,x:290.3,y:290.3}).wait(1).to({graphics:mask_graphics_242,x:289.5,y:289.5}).wait(1).to({graphics:mask_graphics_243,x:288,y:288}).wait(1).to({graphics:mask_graphics_244,x:285.9,y:285.9}).wait(1).to({graphics:mask_graphics_245,x:282.7,y:282.7}).wait(1).to({graphics:mask_graphics_246,x:278.4,y:278.4}).wait(1).to({graphics:mask_graphics_247,x:272.7,y:272.7}).wait(1).to({graphics:mask_graphics_248,x:265,y:265}).wait(1).to({graphics:mask_graphics_249,x:254.9,y:254.9}).wait(1).to({graphics:mask_graphics_250,x:241.7,y:241.7}).wait(1).to({graphics:mask_graphics_251,x:225.4,y:225.4}).wait(1).to({graphics:mask_graphics_252,x:207.8,y:207.8}).wait(1).to({graphics:mask_graphics_253,x:191.7,y:191.7}).wait(1).to({graphics:mask_graphics_254,x:179.1,y:179.1}).wait(1).to({graphics:mask_graphics_255,x:169.7,y:169.7}).wait(1).to({graphics:mask_graphics_256,x:162.9,y:162.9}).wait(1).to({graphics:mask_graphics_257,x:158.2,y:158.2}).wait(1).to({graphics:mask_graphics_258,x:154.9,y:154.9}).wait(1).to({graphics:mask_graphics_259,x:152.9,y:152.9}).wait(1).to({graphics:mask_graphics_260,x:151.8,y:151.8}).wait(1).to({graphics:mask_graphics_261,x:151.5,y:151.5}).wait(12).to({graphics:mask_graphics_273,x:152.6,y:152.6}).wait(1).to({graphics:mask_graphics_274,x:156.3,y:156.3}).wait(1).to({graphics:mask_graphics_275,x:162.5,y:162.5}).wait(1).to({graphics:mask_graphics_276,x:171.5,y:171.5}).wait(1).to({graphics:mask_graphics_277,x:183.1,y:183.1}).wait(1).to({graphics:mask_graphics_278,x:196.7,y:196.7}).wait(1).to({graphics:mask_graphics_279,x:211.5,y:211.5}).wait(1).to({graphics:mask_graphics_280,x:226.7,y:226.7}).wait(1).to({graphics:mask_graphics_281,x:241.3,y:241.3}).wait(1).to({graphics:mask_graphics_282,x:254.6,y:254.6}).wait(1).to({graphics:mask_graphics_283,x:266.1,y:266.1}).wait(1).to({graphics:mask_graphics_284,x:275.6,y:275.6}).wait(1).to({graphics:mask_graphics_285,x:283.1,y:283.1}).wait(1).to({graphics:mask_graphics_286,x:288.7,y:288.7}).wait(1).to({graphics:mask_graphics_287,x:292.5,y:292.5}).wait(1).to({graphics:mask_graphics_288,x:294.7,y:294.7}).wait(1).to({graphics:mask_graphics_289,x:295.4,y:295.4}).wait(1).to({graphics:mask_graphics_290,x:295,y:295}).wait(1).to({graphics:mask_graphics_291,x:293.9,y:293.9}).wait(1).to({graphics:mask_graphics_292,x:292.2,y:292.2}).wait(1).to({graphics:mask_graphics_293,x:290.2,y:290.2}).wait(1).to({graphics:mask_graphics_294,x:288.6,y:288.6}).wait(1).to({graphics:mask_graphics_295,x:288,y:288}).wait(1).to({graphics:mask_graphics_296,x:288.5,y:288.5}).wait(1).to({graphics:mask_graphics_297,x:289,y:289}).wait(1).to({graphics:mask_graphics_298,x:289.5,y:289.5}).wait(1).to({graphics:mask_graphics_299,x:290,y:290}).wait(1).to({graphics:mask_graphics_300,x:290.5,y:290.5}).wait(204).to({graphics:mask_graphics_504,x:290.3,y:290.3}).wait(1).to({graphics:mask_graphics_505,x:289.5,y:289.5}).wait(1).to({graphics:mask_graphics_506,x:288,y:288}).wait(1).to({graphics:mask_graphics_507,x:285.9,y:285.9}).wait(1).to({graphics:mask_graphics_508,x:282.7,y:282.7}).wait(1).to({graphics:mask_graphics_509,x:278.4,y:278.4}).wait(1).to({graphics:mask_graphics_510,x:272.7,y:272.7}).wait(1).to({graphics:mask_graphics_511,x:265,y:265}).wait(1).to({graphics:mask_graphics_512,x:254.9,y:254.9}).wait(1).to({graphics:mask_graphics_513,x:241.7,y:241.7}).wait(1).to({graphics:mask_graphics_514,x:225.4,y:225.4}).wait(1).to({graphics:mask_graphics_515,x:207.8,y:207.8}).wait(1).to({graphics:mask_graphics_516,x:191.7,y:191.7}).wait(1).to({graphics:mask_graphics_517,x:179.1,y:179.1}).wait(1).to({graphics:mask_graphics_518,x:169.7,y:169.7}).wait(1).to({graphics:mask_graphics_519,x:162.9,y:162.9}).wait(1).to({graphics:mask_graphics_520,x:158.2,y:158.2}).wait(1).to({graphics:mask_graphics_521,x:154.9,y:154.9}).wait(1).to({graphics:mask_graphics_522,x:152.9,y:152.9}).wait(1).to({graphics:mask_graphics_523,x:151.8,y:151.8}).wait(1).to({graphics:mask_graphics_524,x:151.5,y:151.5}).wait(3));

  // note01
  this.instance_2 = new lib.note01_1();
  this.instance_2.setTransform(369,474);
  this.instance_2.alpha = 0;
  this.instance_2._off = true;
  this.instance_2.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(1).to({regX:-5.5,regY:8.5,x:363.5,y:479.7,alpha:0.278},0).wait(1).to({y:476.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.804},0).wait(1).to({y:473.4,alpha:0.907},0).wait(1).to({y:472.9,alpha:0.958},0).wait(1).to({y:472.7,alpha:0.985},0).wait(1).to({y:472.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:369,y:464,alpha:1},0).wait(26).to({y:454,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(35).to({_off:false,y:474},0).wait(1).to({regX:-5.5,regY:8.5,x:363.5,y:479.7,alpha:0.278},0).wait(1).to({y:476.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.804},0).wait(1).to({y:473.4,alpha:0.907},0).wait(1).to({y:472.9,alpha:0.958},0).wait(1).to({y:472.7,alpha:0.985},0).wait(1).to({y:472.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:369,y:464,alpha:1},0).wait(26).to({y:454,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(34).to({_off:false,y:474},0).wait(1).to({regX:-5.5,regY:8.5,x:363.5,y:479.7,alpha:0.278},0).wait(1).to({y:476.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.804},0).wait(1).to({y:473.4,alpha:0.907},0).wait(1).to({y:472.9,alpha:0.958},0).wait(1).to({y:472.7,alpha:0.985},0).wait(1).to({y:472.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:369,y:464,alpha:1},0).wait(25).to({y:454,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(69).to({_off:false,y:474},0).wait(1).to({regX:-5.5,regY:8.5,x:363.5,y:479.7,alpha:0.278},0).wait(1).to({y:476.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.804},0).wait(1).to({y:473.4,alpha:0.907},0).wait(1).to({y:472.9,alpha:0.958},0).wait(1).to({y:472.7,alpha:0.985},0).wait(1).to({y:472.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:369,y:464,alpha:1},0).wait(26).to({y:454,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(35).to({_off:false,y:474},0).wait(1).to({regX:-5.5,regY:8.5,x:363.5,y:479.7,alpha:0.278},0).wait(1).to({y:476.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.804},0).wait(1).to({y:473.4,alpha:0.907},0).wait(1).to({y:472.9,alpha:0.958},0).wait(1).to({y:472.7,alpha:0.985},0).wait(1).to({y:472.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:369,y:464,alpha:1},0).wait(26).to({y:454,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(34).to({_off:false,y:474},0).wait(1).to({regX:-5.5,regY:8.5,x:363.5,y:479.7,alpha:0.278},0).wait(1).to({y:476.6,alpha:0.59},0).wait(1).to({y:474.5,alpha:0.804},0).wait(1).to({y:473.4,alpha:0.907},0).wait(1).to({y:472.9,alpha:0.958},0).wait(1).to({y:472.7,alpha:0.985},0).wait(1).to({y:472.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:369,y:464,alpha:1},0).wait(25).to({y:454,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(24));

  // note02
  this.instance_3 = new lib.note02_1();
  this.instance_3.setTransform(401,481);
  this.instance_3.alpha = 0;
  this.instance_3._off = true;
  this.instance_3.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).wait(1).to({regX:-1,regY:11,x:400,y:489.2,alpha:0.278},0).wait(1).to({y:486.1,alpha:0.59},0).wait(1).to({y:484,alpha:0.804},0).wait(1).to({y:482.9,alpha:0.907},0).wait(1).to({y:482.4,alpha:0.958},0).wait(1).to({y:482.2,alpha:0.985},0).wait(1).to({y:482,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:401,y:471,alpha:1},0).wait(18).to({y:461,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(43).to({_off:false,y:481},0).wait(1).to({regX:-1,regY:11,x:400,y:489.2,alpha:0.278},0).wait(1).to({y:486.1,alpha:0.59},0).wait(1).to({y:484,alpha:0.804},0).wait(1).to({y:482.9,alpha:0.907},0).wait(1).to({y:482.4,alpha:0.958},0).wait(1).to({y:482.2,alpha:0.985},0).wait(1).to({y:482,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:401,y:471,alpha:1},0).wait(18).to({y:461,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(42).to({_off:false,y:481},0).wait(1).to({regX:-1,regY:11,x:400,y:489.2,alpha:0.278},0).wait(1).to({y:486.1,alpha:0.59},0).wait(1).to({y:484,alpha:0.804},0).wait(1).to({y:482.9,alpha:0.907},0).wait(1).to({y:482.4,alpha:0.958},0).wait(1).to({y:482.2,alpha:0.985},0).wait(1).to({y:482,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:401,y:471,alpha:1},0).wait(17).to({y:461,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(77).to({_off:false,y:481},0).wait(1).to({regX:-1,regY:11,x:400,y:489.2,alpha:0.278},0).wait(1).to({y:486.1,alpha:0.59},0).wait(1).to({y:484,alpha:0.804},0).wait(1).to({y:482.9,alpha:0.907},0).wait(1).to({y:482.4,alpha:0.958},0).wait(1).to({y:482.2,alpha:0.985},0).wait(1).to({y:482,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:401,y:471,alpha:1},0).wait(18).to({y:461,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(43).to({_off:false,y:481},0).wait(1).to({regX:-1,regY:11,x:400,y:489.2,alpha:0.278},0).wait(1).to({y:486.1,alpha:0.59},0).wait(1).to({y:484,alpha:0.804},0).wait(1).to({y:482.9,alpha:0.907},0).wait(1).to({y:482.4,alpha:0.958},0).wait(1).to({y:482.2,alpha:0.985},0).wait(1).to({y:482,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:401,y:471,alpha:1},0).wait(18).to({y:461,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(42).to({_off:false,y:481},0).wait(1).to({regX:-1,regY:11,x:400,y:489.2,alpha:0.278},0).wait(1).to({y:486.1,alpha:0.59},0).wait(1).to({y:484,alpha:0.804},0).wait(1).to({y:482.9,alpha:0.907},0).wait(1).to({y:482.4,alpha:0.958},0).wait(1).to({y:482.2,alpha:0.985},0).wait(1).to({y:482,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:401,y:471,alpha:1},0).wait(17).to({y:461,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(24));

  // note03
  this.instance_4 = new lib.note03_1();
  this.instance_4.setTransform(471,430);
  this.instance_4.alpha = 0;
  this.instance_4._off = true;
  this.instance_4.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(1).to({regX:-10.5,regY:16.5,x:460.5,y:443.7,alpha:0.278},0).wait(1).to({y:440.6,alpha:0.59},0).wait(1).to({y:438.5,alpha:0.804},0).wait(1).to({y:437.4,alpha:0.907},0).wait(1).to({y:436.9,alpha:0.958},0).wait(1).to({y:436.7,alpha:0.985},0).wait(1).to({y:436.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:471,y:420,alpha:1},0).wait(10).to({y:410,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(51).to({_off:false,y:430},0).wait(1).to({regX:-10.5,regY:16.5,x:460.5,y:443.7,alpha:0.278},0).wait(1).to({y:440.6,alpha:0.59},0).wait(1).to({y:438.5,alpha:0.804},0).wait(1).to({y:437.4,alpha:0.907},0).wait(1).to({y:436.9,alpha:0.958},0).wait(1).to({y:436.7,alpha:0.985},0).wait(1).to({y:436.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:471,y:420,alpha:1},0).wait(10).to({y:410,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(50).to({_off:false,y:430},0).wait(1).to({regX:-10.5,regY:16.5,x:460.5,y:443.7,alpha:0.278},0).wait(1).to({y:440.6,alpha:0.59},0).wait(1).to({y:438.5,alpha:0.804},0).wait(1).to({y:437.4,alpha:0.907},0).wait(1).to({y:436.9,alpha:0.958},0).wait(1).to({y:436.7,alpha:0.985},0).wait(1).to({y:436.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:471,y:420,alpha:1},0).wait(9).to({y:410,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(85).to({_off:false,y:430},0).wait(1).to({regX:-10.5,regY:16.5,x:460.5,y:443.7,alpha:0.278},0).wait(1).to({y:440.6,alpha:0.59},0).wait(1).to({y:438.5,alpha:0.804},0).wait(1).to({y:437.4,alpha:0.907},0).wait(1).to({y:436.9,alpha:0.958},0).wait(1).to({y:436.7,alpha:0.985},0).wait(1).to({y:436.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:471,y:420,alpha:1},0).wait(10).to({y:410,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(51).to({_off:false,y:430},0).wait(1).to({regX:-10.5,regY:16.5,x:460.5,y:443.7,alpha:0.278},0).wait(1).to({y:440.6,alpha:0.59},0).wait(1).to({y:438.5,alpha:0.804},0).wait(1).to({y:437.4,alpha:0.907},0).wait(1).to({y:436.9,alpha:0.958},0).wait(1).to({y:436.7,alpha:0.985},0).wait(1).to({y:436.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:471,y:420,alpha:1},0).wait(10).to({y:410,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(50).to({_off:false,y:430},0).wait(1).to({regX:-10.5,regY:16.5,x:460.5,y:443.7,alpha:0.278},0).wait(1).to({y:440.6,alpha:0.59},0).wait(1).to({y:438.5,alpha:0.804},0).wait(1).to({y:437.4,alpha:0.907},0).wait(1).to({y:436.9,alpha:0.958},0).wait(1).to({y:436.7,alpha:0.985},0).wait(1).to({y:436.5,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:471,y:420,alpha:1},0).wait(9).to({y:410,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(24));

  // wave01
  this.instance_5 = new lib.wave01();
  this.instance_5.setTransform(298,453.1);
  this.instance_5.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.23,scaleY:1.23,y:458.4},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:563.1},12,cjs.Ease.get(-1)).to({y:548.1},5,cjs.Ease.get(1)).wait(1).to({regY:303,y:851.6},0).wait(1).to({y:853.3},0).wait(1).to({y:855.2},0).wait(1).to({regY:0,y:553.1},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:458.4},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:563.1},12,cjs.Ease.get(-1)).to({y:548.1},5,cjs.Ease.get(1)).wait(1).to({regY:303,y:851.6},0).wait(1).to({y:853.3},0).wait(1).to({y:855.2},0).wait(1).to({regY:0,y:553.1},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:458.4},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:563.1},12,cjs.Ease.get(-1)).to({y:548.1},5,cjs.Ease.get(1)).wait(1).to({regY:303,y:851.6},0).wait(1).to({y:853.3},0).wait(1).to({y:855.2},0).wait(1).to({regY:0,y:553.1},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:458.4},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:453.1},8,cjs.Ease.get(1)).to({_off:true},9).wait(1).to({_off:false},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:458.4},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:563.1},12,cjs.Ease.get(-1)).to({y:548.1},5,cjs.Ease.get(1)).wait(1).to({regY:303,y:851.6},0).wait(1).to({y:853.3},0).wait(1).to({y:855.2},0).wait(1).to({regY:0,y:553.1},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:458.4},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:563.1},12,cjs.Ease.get(-1)).to({y:548.1},5,cjs.Ease.get(1)).wait(1).to({regY:303,y:851.6},0).wait(1).to({y:853.3},0).wait(1).to({y:855.2},0).wait(1).to({regY:0,y:553.1},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:458.4},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:563.1},12,cjs.Ease.get(-1)).to({y:548.1},5,cjs.Ease.get(1)).wait(1).to({regY:303,y:851.6},0).wait(1).to({y:853.3},0).wait(1).to({y:855.2},0).wait(1).to({regY:0,y:553.1},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:458.4},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:453.1},8,cjs.Ease.get(1)).to({_off:true},9).wait(2));

  // wave02
  this.instance_6 = new lib.wave02();
  this.instance_6.setTransform(298,431);
  this.instance_6.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({scaleX:1.23,scaleY:1.23,y:351.3},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:546},12,cjs.Ease.get(-1)).wait(1).to({regY:292.5,y:837.1},0).wait(1).to({y:832.4},0).wait(1).to({y:824.6},0).wait(1).to({y:816.6},0).wait(1).to({regY:0,y:521},0).wait(1).to({regY:292.5,y:814.7},0).wait(1).to({y:817.9},0).wait(1).to({y:821.8},0).wait(1).to({regY:0,y:531},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:351.3},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:546},12,cjs.Ease.get(-1)).wait(1).to({regY:292.5,y:837.1},0).wait(1).to({y:832.4},0).wait(1).to({y:824.6},0).wait(1).to({y:816.6},0).wait(1).to({regY:0,y:521},0).wait(1).to({regY:292.5,y:814.7},0).wait(1).to({y:817.9},0).wait(1).to({y:821.8},0).wait(1).to({regY:0,y:531},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:351.3},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:546},12,cjs.Ease.get(-1)).wait(1).to({regY:292.5,y:837.1},0).wait(1).to({y:832.4},0).wait(1).to({y:824.6},0).wait(1).to({y:816.6},0).wait(1).to({regY:0,y:521},0).wait(1).to({regY:292.5,y:814.7},0).wait(1).to({y:817.9},0).wait(1).to({y:821.8},0).wait(1).to({regY:0,y:531},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:351.3},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:431},8,cjs.Ease.get(1)).to({_off:true},7).wait(1).to({_off:false},0).wait(3).to({scaleX:1.23,scaleY:1.23,y:351.3},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:546},12,cjs.Ease.get(-1)).wait(1).to({regY:292.5,y:837.1},0).wait(1).to({y:832.4},0).wait(1).to({y:824.6},0).wait(1).to({y:816.6},0).wait(1).to({regY:0,y:521},0).wait(1).to({regY:292.5,y:814.7},0).wait(1).to({y:817.9},0).wait(1).to({y:821.8},0).wait(1).to({regY:0,y:531},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:351.3},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:546},12,cjs.Ease.get(-1)).wait(1).to({regY:292.5,y:837.1},0).wait(1).to({y:832.4},0).wait(1).to({y:824.6},0).wait(1).to({y:816.6},0).wait(1).to({regY:0,y:521},0).wait(1).to({regY:292.5,y:814.7},0).wait(1).to({y:817.9},0).wait(1).to({y:821.8},0).wait(1).to({regY:0,y:531},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:351.3},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:546},12,cjs.Ease.get(-1)).wait(1).to({regY:292.5,y:837.1},0).wait(1).to({y:832.4},0).wait(1).to({y:824.6},0).wait(1).to({y:816.6},0).wait(1).to({regY:0,y:521},0).wait(1).to({regY:292.5,y:814.7},0).wait(1).to({y:817.9},0).wait(1).to({y:821.8},0).wait(1).to({regY:0,y:531},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:351.3},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:431},8,cjs.Ease.get(1)).to({_off:true},7).wait(2));

  // wave03
  this.instance_7 = new lib.wave03();
  this.instance_7.setTransform(298,396.3);
  this.instance_7.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({scaleX:1.23,scaleY:1.23,y:228.7},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:516.3},12,cjs.Ease.get(-1)).wait(1).to({regY:273.9,y:788.2},0).wait(1).to({y:781.7},0).wait(1).to({y:770.7},0).wait(1).to({y:759.5},0).wait(1).to({regY:0,y:481.3},0).wait(1).to({regY:273.9,y:756.9},0).wait(1).to({y:761.8},0).wait(1).to({y:767.6},0).wait(1).to({regY:0,y:496.3},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:228.7},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:516.3},12,cjs.Ease.get(-1)).wait(1).to({regY:273.9,y:788.2},0).wait(1).to({y:781.7},0).wait(1).to({y:770.7},0).wait(1).to({y:759.5},0).wait(1).to({regY:0,y:481.3},0).wait(1).to({regY:273.9,y:756.9},0).wait(1).to({y:761.8},0).wait(1).to({y:767.6},0).wait(1).to({regY:0,y:496.3},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:228.7},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:516.3},12,cjs.Ease.get(-1)).wait(1).to({regY:273.9,y:788.2},0).wait(1).to({y:781.7},0).wait(1).to({y:770.7},0).wait(1).to({y:759.5},0).wait(1).to({regY:0,y:481.3},0).wait(1).to({regY:273.9,y:756.9},0).wait(1).to({y:761.8},0).wait(1).to({y:767.6},0).wait(1).to({regY:0,y:496.3},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:228.7},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:396.3},8,cjs.Ease.get(1)).to({_off:true},5).wait(1).to({_off:false},0).wait(5).to({scaleX:1.23,scaleY:1.23,y:228.7},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:516.3},12,cjs.Ease.get(-1)).wait(1).to({regY:273.9,y:788.2},0).wait(1).to({y:781.7},0).wait(1).to({y:770.7},0).wait(1).to({y:759.5},0).wait(1).to({regY:0,y:481.3},0).wait(1).to({regY:273.9,y:756.9},0).wait(1).to({y:761.8},0).wait(1).to({y:767.6},0).wait(1).to({regY:0,y:496.3},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:228.7},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:516.3},12,cjs.Ease.get(-1)).wait(1).to({regY:273.9,y:788.2},0).wait(1).to({y:781.7},0).wait(1).to({y:770.7},0).wait(1).to({y:759.5},0).wait(1).to({regY:0,y:481.3},0).wait(1).to({regY:273.9,y:756.9},0).wait(1).to({y:761.8},0).wait(1).to({y:767.6},0).wait(1).to({regY:0,y:496.3},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:228.7},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:516.3},12,cjs.Ease.get(-1)).wait(1).to({regY:273.9,y:788.2},0).wait(1).to({y:781.7},0).wait(1).to({y:770.7},0).wait(1).to({y:759.5},0).wait(1).to({regY:0,y:481.3},0).wait(1).to({regY:273.9,y:756.9},0).wait(1).to({y:761.8},0).wait(1).to({y:767.6},0).wait(1).to({regY:0,y:496.3},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:228.7},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:396.3},8,cjs.Ease.get(1)).to({_off:true},5).wait(2));

  // wave04
  this.instance_8 = new lib.wave04();
  this.instance_8.setTransform(298,366.5);
  this.instance_8.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({scaleX:1.23,scaleY:1.23,y:112.2},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:491.5},12,cjs.Ease.get(-1)).wait(1).to({regY:293.2,y:781.9},0).wait(1).to({y:772.6},0).wait(1).to({y:756.8},0).wait(1).to({y:740.9},0).wait(1).to({regY:0,y:441.5},0).wait(1).to({regY:293.2,y:737.6},0).wait(1).to({y:745.8},0).wait(1).to({y:755.4},0).wait(1).to({regY:0,y:466.5},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:112.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:491.5},12,cjs.Ease.get(-1)).wait(1).to({regY:293.2,y:781.9},0).wait(1).to({y:772.6},0).wait(1).to({y:756.8},0).wait(1).to({y:740.9},0).wait(1).to({regY:0,y:441.5},0).wait(1).to({regY:293.2,y:737.6},0).wait(1).to({y:745.8},0).wait(1).to({y:755.4},0).wait(1).to({regY:0,y:466.5},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:112.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:491.5},12,cjs.Ease.get(-1)).wait(1).to({regY:293.2,y:781.9},0).wait(1).to({y:772.6},0).wait(1).to({y:756.8},0).wait(1).to({y:740.9},0).wait(1).to({regY:0,y:441.5},0).wait(1).to({regY:293.2,y:737.6},0).wait(1).to({y:745.8},0).wait(1).to({y:755.4},0).wait(1).to({regY:0,y:466.5},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:112.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:366.5},8,cjs.Ease.get(1)).to({_off:true},3).wait(1).to({_off:false},0).wait(7).to({scaleX:1.23,scaleY:1.23,y:112.2},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:491.5},12,cjs.Ease.get(-1)).wait(1).to({regY:293.2,y:781.9},0).wait(1).to({y:772.6},0).wait(1).to({y:756.8},0).wait(1).to({y:740.9},0).wait(1).to({regY:0,y:441.5},0).wait(1).to({regY:293.2,y:737.6},0).wait(1).to({y:745.8},0).wait(1).to({y:755.4},0).wait(1).to({regY:0,y:466.5},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:112.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:491.5},12,cjs.Ease.get(-1)).wait(1).to({regY:293.2,y:781.9},0).wait(1).to({y:772.6},0).wait(1).to({y:756.8},0).wait(1).to({y:740.9},0).wait(1).to({regY:0,y:441.5},0).wait(1).to({regY:293.2,y:737.6},0).wait(1).to({y:745.8},0).wait(1).to({y:755.4},0).wait(1).to({regY:0,y:466.5},0).wait(43).to({scaleX:1.23,scaleY:1.23,y:112.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:491.5},12,cjs.Ease.get(-1)).wait(1).to({regY:293.2,y:781.9},0).wait(1).to({y:772.6},0).wait(1).to({y:756.8},0).wait(1).to({y:740.9},0).wait(1).to({regY:0,y:441.5},0).wait(1).to({regY:293.2,y:737.6},0).wait(1).to({y:745.8},0).wait(1).to({y:755.4},0).wait(1).to({regY:0,y:466.5},0).wait(41).to({scaleX:1.23,scaleY:1.23,y:112.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:366.5},8,cjs.Ease.get(1)).to({_off:true},3).wait(2));

  // wave05
  this.instance_9 = new lib.wave05();
  this.instance_9.setTransform(298,340.5);
  this.instance_9.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9)
//					 
.to({scaleX:1.23,scaleY:1.23,y:0.3},15,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:470.5},12,cjs.Ease.get(-1)).wait(1)
.to({regY:293.8,y:760.9},0).wait(1)
.to({y:749.7},0).wait(1)
.to({y:730.8},0).wait(1)
.to({y:711.7},0).wait(1)
.to({regY:0,y:410.5},0).wait(1)
.to({regY:293.8,y:707.7},0).wait(1)
.to({y:717.5},0).wait(1)
.to({y:729.1},0).wait(1)
.to({regY:0,y:440.5},0).wait(43)
//						 
.to({scaleX:1.23,scaleY:1.23,y:0.3},13,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:470.5},12,cjs.Ease.get(-1)).wait(1)
.to({regY:293.8,y:760.9},0).wait(1)
.to({y:749.7},0).wait(1)
.to({y:730.8},0).wait(1)
.to({y:711.7},0).wait(1)
.to({regY:0,y:410.5},0).wait(1)
.to({regY:293.8,y:707.7},0).wait(1)
.to({y:717.5},0).wait(1)
.to({y:729.1},0).wait(1)
.to({regY:0,y:440.5},0).wait(43)
//
.to({scaleX:1.23,scaleY:1.23,y:0.3},13,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:470.5},12,cjs.Ease.get(-1)).wait(1)
.to({regY:293.8,y:760.9},0).wait(1)
.to({y:749.7},0).wait(1)
.to({y:730.8},0).wait(1)
.to({y:711.7},0).wait(1)
.to({regY:0,y:410.5},0).wait(1)
.to({regY:293.8,y:707.7},0).wait(1)
.to({y:717.5},0).wait(1)
.to({y:729.1},0).wait(1)
.to({regY:0,y:440.5},0).wait(41)
//
.to({scaleX:1.23,scaleY:1.23,y:0.3},13,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:340.5},8,cjs.Ease.get(1))
.to({_off:true},1).wait(1)
.to({_off:false},0).wait(9)
//						 
.to({scaleX:1.23,scaleY:1.23,y:0.3},15,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:470.5},12,cjs.Ease.get(-1)).wait(1)
.to({regY:293.8,y:760.9},0).wait(1)
.to({y:749.7},0).wait(1)
.to({y:730.8},0).wait(1)
.to({y:711.7},0).wait(1)
.to({regY:0,y:410.5},0).wait(1)
.to({regY:293.8,y:707.7},0).wait(1)
.to({y:717.5},0).wait(1)
.to({y:729.1},0).wait(1)
.to({regY:0,y:440.5},0).wait(43)
//
.to({scaleX:1.23,scaleY:1.23,y:0.3},13,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:470.5},12,cjs.Ease.get(-1)).wait(1)
.to({regY:293.8,y:760.9},0).wait(1)
.to({y:749.7},0).wait(1)
.to({y:730.8},0).wait(1)
.to({y:711.7},0).wait(1)
.to({regY:0,y:410.5},0).wait(1)
.to({regY:293.8,y:707.7},0).wait(1)
.to({y:717.5},0).wait(1)
.to({y:729.1},0).wait(1)
.to({regY:0,y:440.5},0).wait(43)
//
.to({scaleX:1.23,scaleY:1.23,y:0.3},13,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:470.5},12,cjs.Ease.get(-1)).wait(1)
.to({regY:293.8,y:760.9},0).wait(1)
.to({y:749.7},0).wait(1)
.to({y:730.8},0).wait(1)
.to({y:711.7},0).wait(1)
.to({regY:0,y:410.5},0).wait(1)
.to({regY:293.8,y:707.7},0).wait(1)
.to({y:717.5},0).wait(1)
.to({y:729.1},0).wait(1)
.to({regY:0,y:440.5},0).wait(41)
//
.to({scaleX:1.23,scaleY:1.23,y:0.3},13,cjs.Ease.get(1))
.to({scaleX:1,scaleY:1,y:340.5},8,cjs.Ease.get(1))
.to({_off:true},1).wait(2));
	

  // pic03
  this.instance_10 = new lib.pic03_1();
  this.instance_10.setTransform(298,298,1.237,1.237);
  this.instance_10._off = true;
  this.instance_10.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(178).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(38).to({scaleX:1.41,scaleY:1.41},20,cjs.Ease.get(-1)).to({_off:true},1).wait(274));

  // pic02
  this.instance_11 = new lib.pic02_1();
  this.instance_11.setTransform(298,298,1.237,1.237);
  this.instance_11._off = true;
  this.instance_11.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(36).to({scaleX:1.41,scaleY:1.41},20,cjs.Ease.get(-1)).to({_off:true},1).wait(349));

  // pic01
  this.instance_12 = new lib.pic01_1();
  this.instance_12.setTransform(298,298,1.237,1.237);
  this.instance_12._off = true;
  this.instance_12.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(36).to({scaleX:1.41,scaleY:1.41},20,cjs.Ease.get(-1)).to({_off:true},1).wait(426));

  // pic06
  this.instance_13 = new lib.pic06_1();
  this.instance_13.setTransform(298,298,1.237,1.237);
  this.instance_13._off = true;
  this.instance_13.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(441).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(38).to({scaleX:1.41,scaleY:1.41},20,cjs.Ease.get(-1)).to({_off:true},1).wait(11));

  // pic05
  this.instance_14 = new lib.pic05_1();
  this.instance_14.setTransform(298,298,1.237,1.237);
  this.instance_14._off = true;
  this.instance_14.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(364).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(36).to({scaleX:1.41,scaleY:1.41},20,cjs.Ease.get(-1)).to({_off:true},1).wait(86));

  // pic04
  this.instance_15 = new lib.pic04_1();
  this.instance_15.setTransform(298,298,1.237,1.237);
  this.instance_15._off = true;
  this.instance_15.mask = mask;
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(287).to({_off:false},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(36).to({scaleX:1.41,scaleY:1.41},20,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308,308,576,576);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

(function($) {// ($, undefined)
  $(function() {
    var canvas, stage, exportRoot;
    function init() {
      canvas = document.getElementById("top-canvas");
      images = images||{};

      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", handleFileLoad);
      loader.addEventListener("complete", handleComplete);
      loader.loadManifest(lib.properties.manifest);
    }

    function handleFileLoad(evt) {
      if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function handleComplete() {
      exportRoot = new lib.top2();

      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      stage.update();

      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }
    init();
  });
})(jQuery);

