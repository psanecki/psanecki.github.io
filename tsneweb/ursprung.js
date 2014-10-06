// Our Javascript will go here.

// //console.log(letter_lens.length);
// //console.log(letter_lens.constructor.toString().indexOf("Array"));





var letterXYZs = [];// tablica z pojedynczymi literami
var start = 0;
var end = 0;

for(var i = 0; i < letter_lens.length; i++){
    end += (3*letter_lens[i]);
    letterXYZs[i] = letters.slice(start,end);
    start = end;
}

// //console.log(letter_lens.length == letterXYZs.length);
// //console.log(letterXYZs[0]);

// SCENE
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);


var fpc = new THREE.FirstPersonControls(camera); // TRACKBALL
fpc.lookSpeed = 0.15;
fpc.movementSpeed = 150;
fpc.noFly = false;
fpc.lookVertical = true;
fpc.constrainVertical= true;
fpc.verticalMin = 1;
fpc.verticalMax = 2;
fpc.lon = -90;
fpc.lat = -80;


var clock = new THREE.Clock();
// //console.log(fpc);


// RENDERER
var renderer;
if (window.WebGLRenderingContext){
    renderer = new THREE.WebGLRenderer();
} else{
    renderer = new THREE.CanvasRenderer();
}
renderer.setSize(window.innerWidth, window.innerHeight);

// material
var material = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 1.2, fog: true });
var group = new THREE.Object3D();

scene.add(group);
scene.fog = new THREE.Fog(0xffffff,0.015,2000);
renderer.setClearColor(0xffffff);

var render = function (){
    fpc.update(clock.getDelta());



    for(var counter = 0; counter < 100; counter++) {
        if (letterXYZs.length > 0){
            var xyzs = letterXYZs.shift();
            var geometry = new THREE.Geometry();
            var line = new THREE.Line(geometry, material); // litera

            for(var i = 0; i < xyzs.length; i+=3){
                var x = xyzs[i];
                var y = -1 * xyzs[i+1];
                var z =  xyzs[i+2] - 500;
                var point =  new THREE.Vector3(x,y,z);
                // dodaje punkty do litery
                geometry.vertices.push(point);

                // if (letterXYZs.length > letter_lens.length - 100){
                //     //console.log(point);
                // }
            }

            group.add(line);
            //console.log(letterXYZs.length);
        }
    }

    //console.log(fpc.lat);
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

document.body.appendChild(renderer.domElement);
render();
