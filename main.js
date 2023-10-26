import * as THREE from 'three';
import { Mesh, Vector3 } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// index finger starts
const indexgeometry = new THREE.CapsuleGeometry( 3,5,20,32 );
const indexmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexfinger = new THREE.Mesh( indexgeometry, indexmaterial );
indexfinger.position.set(-6,5.5,0);
scene.add( indexfinger );


const indexxgeometry = new THREE.CapsuleGeometry( 3,5,20,32 );
const indexxmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexxfinger = new THREE.Mesh( indexxgeometry, indexxmaterial );
indexxfinger.position.set(-6,-5,0);
scene.add( indexxfinger );

// const initialposition =  new THREE.Vector3(-6,6,0);
// const finalposition = new THREE.Vector3(-6,-3,0);
// indexfinger.position.copy(initialposition);

// const group = new THREE.Group();
// group.add(indexfinger);
// group.add(indexxfinger);
// scene.add(group);


const indexxxgeometry = new THREE.CapsuleGeometry( 3,5,20,32 );
const indexxxmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexxxfinger = new THREE.Mesh( indexxxgeometry, indexxxmaterial );
indexxxfinger.position.set(-6,-15,0);
scene.add( indexxxfinger);
//index finger ends

// middle finger starts
const middlegeometry = new THREE.CapsuleGeometry(3,6,20,32 );
const middlematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middlefinger = new THREE.Mesh( middlegeometry, middlematerial );
middlefinger.position.set(0,11,0);
scene.add( middlefinger );

const middleegeometry = new THREE.CapsuleGeometry(3,6,20,32 );
const middleematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middleefinger = new THREE.Mesh( middleegeometry, middleematerial );
middleefinger.position.set(0,0,0);
scene.add( middleefinger );

const middleeegeometry = new THREE.CapsuleGeometry(3,6,20,32 );
const middleeematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middleeefinger = new THREE.Mesh( middleeegeometry, middleeematerial );
middleeefinger.position.set(0,-11.5,0);
scene.add( middleeefinger );

// middle finger ends

// ring finger starts 
const ringgeometry = new THREE.CapsuleGeometry( 3,4,20,32 );
const ringmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const ringfinger = new THREE.Mesh( ringgeometry, ringmaterial );
ringfinger.position.set(6,7.5,0);
scene.add( ringfinger );

const rinnggeometry = new THREE.CapsuleGeometry( 3,5,20,32 );
const rinngmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const rinngfinger = new THREE.Mesh( rinnggeometry, rinngmaterial );
rinngfinger.position.set(6,-2,0);
scene.add( rinngfinger );

const rinnnggeometry = new THREE.CapsuleGeometry( 3,4,20,32 );
const rinnngmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const rinnngfinger = new THREE.Mesh( rinnnggeometry, rinnngmaterial );
rinnngfinger.position.set(6,-12,0);
scene.add( rinnngfinger );

//ring finger ends

// little finger starts
const littlegeometry = new THREE.CapsuleGeometry( 2.5,3,20,32 );
const littlematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littlefinger = new THREE.Mesh( littlegeometry, littlematerial );
littlefinger.position.set(11.5,0.2,0);
scene.add( littlefinger );

const littleegeometry = new THREE.CapsuleGeometry( 2.5,3,20,32 );
const littleematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littleefinger = new THREE.Mesh( littleegeometry, littleematerial );
littleefinger.position.set(11.5,-7.5,0);
scene.add( littleefinger );

const littleeegeometry = new THREE.CapsuleGeometry( 2.5,4	,20,32 );
const littleeematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littleeefinger = new THREE.Mesh( littleeegeometry, littleeematerial );
littleeefinger.position.set(11.5,-15.5,0);
scene.add( littleeefinger );
// little finger ends


// thumb starts
const thumbgeometry = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbfinger = new THREE.Mesh( thumbgeometry, thumbmaterial );
thumbfinger.position.set(-12,-15,0);
scene.add( thumbfinger );

const thumbbgeometry = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbbmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbbfinger = new THREE.Mesh( thumbbgeometry, thumbbmaterial );
thumbbfinger.position.set(-12,-23.5,0);
scene.add( thumbbfinger );

const thumbbbgeometry = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbbbmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbbbfinger = new THREE.Mesh( thumbbbgeometry, thumbbbmaterial );
thumbbbfinger.position.set(-12,-32,0);
scene.add( thumbbbfinger );

// thumb ends

//palm starts
const palmgeometry = new THREE.CylinderGeometry( 12,12,6,32 );
const palmmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const palm = new THREE.Mesh( palmgeometry, palmmaterial );
palm.position.set(3,-29,0);
palm.rotation.set(39.28,0,0);

scene.add( palm );
const dot =  new THREE.SphereGeometry(1);
const dotmat = new THREE.MeshPhongMaterial({color: "red"});



// let hand = new THREE.Object3D();
// Loader.load(objects.handGLTF,function(object){
// 	hand = object.scene; 
// 	scene.add(hand);
// });



scene.background = new THREE.Color('cyan');
const directionalLight = new THREE.DirectionalLight(0xfffff0, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);


camera.position.z = 70;
camera.position.x = 10;
camera.position.y =0;
//camera.rotation.set(0,0,0);

//group.rotation.set(0,0,20)

var group = new THREE.Group();



var amplitude = 1;
var frequency = 1;
var time = 0;
function updateGroupPosition(){
	var yoffset = amplitude * Math.sin(2*Math.PI*frequency*time);
	
	group.rotation.z = yoffset;
	group.rotation.y = yoffset;
	group.rotation.x = yoffset;
}

document.addEventListener('keydown', function(event) {
	
	if (event.key === 'a') {
	  amplitude += 0.1;
	}
	
	
	if (event.key === 'd' && amplitude > 0.1) {
	  amplitude -= 0.1;
	}
	
	
	if (event.key === 'w') {
	  frequency += 1;
	}
	
	
	if (event.key === 's' && frequency > 1) {
	  frequency -= 1;
	}
  });


// group2.add(indexfinger);
// group2.add(middlefinger);
// group2.add(ringfinger);
// group2.add(littlefinger);



// movement with mouse  



group.add(indexfinger);
group.add(indexxfinger);
group.add(indexxxfinger);

group.add(middlefinger);
group.add(middleefinger);
group.add(middleeefinger);

group.add(ringfinger);
group.add(rinngfinger);
group.add(rinnngfinger);

group.add(littlefinger);
group.add(littleefinger);
group.add(littleeefinger);

group.add(thumbfinger);
group.add(thumbbfinger);
group.add(thumbbbfinger);

group.add(palm);


scene.add(group);





function animate() {
	requestAnimationFrame( animate );
	
	
	
	
	//group2.rotation.x += 0.03;
	//group.position.set(10,10,group.position.z);
	//group.rotation.y = Math.PI/4;
	//group.rotation.z += 0.03;
	time += 0.01;
	
	
	
	updateGroupPosition();
	
	renderer.render( scene, camera );
	
}


animate();

// window.onresize = function(e){
// 	camera.aspect = window.innerWidth/window.innerHeight
// 	camera.updateProjectionMatrix()

// 	renderer.setSize(window.innerWidth,window.innerHeight)
// }

// let oldx = 0
// let oldy = 0
// window.onmousemove = function(mv){
// 	let changex = mv.x - oldx
// 	let changey = mv.y - oldy
// 	camera.position.x += changex/100
// 	camera.position.y -= changey/100

// 	oldx =mv.x
// 	oldy =mv.y

// }
