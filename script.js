var pos = new THREE.Vector3();
var vel = new THREE.Vector3();
var dir = new THREE.Vector3();
var rot = new THREE.Vector3();
const speed = -0.005;
const rest = new THREE.Vector3(0, 0, 0);

AFRAME.registerComponent('rotation-reader', {
  init: function(){
    this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
  },
  tick: function (t, dt) {
  
    // `this.el` is the element.
    // `object3D` is the three.js object.
    var el = this.el;//for optimization
    var rotationTmp = this.rotationTmp = this.rotationTmp || {x: 0, y: 0, z: 0};
    //var positionTmp = this.positionTmp = this.positionTmp || {x: 0, y: 0, z: 0};
    //var directionTmp = this.directionTmp = this.directionTmp || {x: 0, y: 0, z: 0};

    rot = el.getAttribute('rotation');
    //pos = el.getAttribute('position');
    dir = el.getAttribute('direction');
    //dir = dir.unproject(this.el.camera);
    if (rot.x < -Math.PI/4){
      //vel = speed;      
      //el.object3D.translateZ(speed*dt);
      positionTmp.z += dir.z
      //el.setAttribute('rotation', rotationTmp);
      //pos.add(vel);
    }
    else {
      //vel = rest;
    }

    el.setAttribute('position', positionTmp);
    //console.log(this.el.object3D.rotation);

    // `position` is a three.js Vector3.
   // console.log(this.el.object3D.position);
  }
});
/*
AFRAME.registerComponent('foo', {
  init: function () {
    // Set up the tick throttling.
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

  /**
   * Tick function that will be wrapped to be throttled.
   */
  //tick: function (t, dt) {}
//});