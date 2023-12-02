import * as THREE from 'three';
import { Mesh, Vector3 } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// index finger starts
const indexgeometry = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const indexmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexfinger = new THREE.Mesh( indexgeometry, indexmaterial );
indexfinger.position.set(-8.5,36.8,0);
scene.add( indexfinger );


const indexxgeometry = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const indexxmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexxfinger = new THREE.Mesh( indexxgeometry, indexxmaterial );
indexxfinger.position.set(-8.5,26,0);
scene.add( indexxfinger );

const indexxxgeometry = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const indexxxmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexxxfinger = new THREE.Mesh( indexxxgeometry, indexxxmaterial );
indexxxfinger.position.set(-8.5,15.5,0);
scene.add( indexxxfinger);
//index finger ends

// middle finger starts
const middlegeometry = new THREE.CapsuleGeometry(3,6,20,32 );
const middlematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middlefinger = new THREE.Mesh( middlegeometry, middlematerial );
middlefinger.position.set(-2.5,42,0);
scene.add( middlefinger );

const middleegeometry = new THREE.CapsuleGeometry(3,6,20,32 );
const middleematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middleefinger = new THREE.Mesh( middleegeometry, middleematerial );
middleefinger.position.set(-2.5,30,0);
scene.add( middleefinger );

const middleeegeometry = new THREE.CapsuleGeometry(3,6,20,32 );
const middleeematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middleeefinger = new THREE.Mesh( middleeegeometry, middleeematerial );
middleeefinger.position.set(-2.5,18,0);
scene.add( middleeefinger );

// middle finger ends

// ring finger starts 
const ringgeometry = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const ringmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const ringfinger = new THREE.Mesh( ringgeometry, ringmaterial );
ringfinger.position.set(3.5,38,0);
scene.add( ringfinger );

const rinnggeometry = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const rinngmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const rinngfinger = new THREE.Mesh( rinnggeometry, rinngmaterial );
rinngfinger.position.set(3.5,27.5,0);
scene.add( rinngfinger );

const rinnnggeometry = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const rinnngmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const rinnngfinger = new THREE.Mesh( rinnnggeometry, rinnngmaterial );
rinnngfinger.position.set(3.5,17,0);
scene.add( rinnngfinger );

//ring finger ends

// little finger starts
const littlegeometry = new THREE.CapsuleGeometry( 2.5,4.5,20,32 );
const littlematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littlefinger = new THREE.Mesh( littlegeometry, littlematerial );
littlefinger.position.set(9,30,0);
scene.add( littlefinger );

const littleegeometry = new THREE.CapsuleGeometry( 2.5,4,20,32 );
const littleematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littleefinger = new THREE.Mesh( littleegeometry, littleematerial );
littleefinger.position.set(9,21,0);
scene.add( littleefinger );

const littleeegeometry = new THREE.CapsuleGeometry( 2.5,4,20,32 );
const littleeematerial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littleeefinger = new THREE.Mesh( littleeegeometry, littleeematerial );
littleeefinger.position.set(9,12,0);
scene.add( littleeefinger );
// little finger ends


// thumb starts
const thumbgeometry = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbfinger = new THREE.Mesh( thumbgeometry, thumbmaterial );
thumbfinger.position.set(-15,16,0);
scene.add( thumbfinger );

const thumbbgeometry = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbbmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbbfinger = new THREE.Mesh( thumbbgeometry, thumbbmaterial );
thumbbfinger.position.set(-15,7.5,0);
scene.add( thumbbfinger );

const thumbbbgeometry = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbbbmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbbbfinger = new THREE.Mesh( thumbbbgeometry, thumbbbmaterial );
thumbbbfinger.position.set(-15,-1,0);
scene.add( thumbbbfinger );

// thumb ends

//palm starts
const palmgeometry = new THREE.CylinderGeometry( 12,12,6,32 );
const palmmaterial = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const palm = new THREE.Mesh( palmgeometry, palmmaterial );
palm.position.set(0,0,0);
palm.rotation.set(39.28,0,0);

scene.add( palm );
const dot =  new THREE.SphereGeometry(1);
const dotmat = new THREE.MeshPhongMaterial({color: "red"});

// RIGHT HAND

// index finger starts
const indexgeometry2 = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const indexmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexfinger2 = new THREE.Mesh( indexgeometry2, indexmaterial2 );
indexfinger2.position.set(9,35,0);
scene.add( indexfinger2 );


const indexxgeometry2 = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const indexxmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexxfinger2 = new THREE.Mesh( indexxgeometry2, indexxmaterial2 );
indexxfinger2.position.set(9,25,0);
scene.add( indexxfinger2 );


const indexxxgeometry2= new THREE.CapsuleGeometry( 3,4.5,20,32 );
const indexxxmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const indexxxfinger2 = new THREE.Mesh( indexxxgeometry2, indexxxmaterial2 );
indexxxfinger2.position.set(9,15,0);
scene.add( indexxxfinger2);
//index finger ends

// middle finger starts
const middlegeometry2 = new THREE.CapsuleGeometry(3,6,20,32 );
const middlematerial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middlefinger2 = new THREE.Mesh( middlegeometry2, middlematerial2 );
middlefinger2.position.set(2.6,40,0);
scene.add( middlefinger2 );

const middleegeometry2 = new THREE.CapsuleGeometry(3,6,20,32 );
const middleematerial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middleefinger2 = new THREE.Mesh( middleegeometry2, middleematerial2 );
middleefinger2.position.set(2.6,28.5,0);
scene.add( middleefinger2);

const middleeegeometry2 = new THREE.CapsuleGeometry(3,6,20,32 );
const middleeematerial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const middleeefinger2 = new THREE.Mesh( middleeegeometry2, middleeematerial2 );
middleeefinger2.position.set(2.6,17,0);
scene.add( middleeefinger2 );

// middle finger ends

// ring finger starts 
const ringgeometry2 = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const ringmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const ringfinger2 = new THREE.Mesh( ringgeometry2, ringmaterial2 );
ringfinger2.position.set(-3.8,36.5,0);
scene.add( ringfinger2 );

const rinnggeometry2 = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const rinngmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const rinngfinger2 = new THREE.Mesh( rinnggeometry2, rinngmaterial2 );
rinngfinger2.position.set(-3.8,26,0);
scene.add( rinngfinger2 );

const rinnnggeometry2 = new THREE.CapsuleGeometry( 3,4.5,20,32 );
const rinnngmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const rinnngfinger2 = new THREE.Mesh( rinnnggeometry2, rinnngmaterial2 );
rinnngfinger2.position.set(-3.8,16,0);
scene.add( rinnngfinger2 );

//ring finger ends

// little finger starts
const littlegeometry2 = new THREE.CapsuleGeometry( 2.5,4.5,20,32 );
const littlematerial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littlefinger2 = new THREE.Mesh( littlegeometry2, littlematerial2 );
littlefinger2.position.set(-9.5,29,0);
scene.add( littlefinger2 );

const littleegeometry2 = new THREE.CapsuleGeometry( 2.5,4,20,32 );
const littleematerial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littleefinger2 = new THREE.Mesh( littleegeometry2, littleematerial2 );
littleefinger2.position.set(-9.5,20,0);
scene.add( littleefinger2 );

const littleeegeometry2 = new THREE.CapsuleGeometry( 2.5,4,20,32 );
const littleeematerial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const littleeefinger2 = new THREE.Mesh( littleeegeometry2, littleeematerial2 );
littleeefinger2.position.set(-9.5,11.5,0);
scene.add( littleeefinger2 );
// little finger ends


// thumb starts
const thumbgeometry2 = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbfinger2 = new THREE.Mesh( thumbgeometry2, thumbmaterial2 );
thumbfinger2.position.set(15,16,0);
scene.add( thumbfinger2 );

const thumbbgeometry2 = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbbmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbbfinger2 = new THREE.Mesh( thumbbgeometry2, thumbbmaterial2 );
thumbbfinger2.position.set(15,7.5,0);
scene.add( thumbbfinger2 );

const thumbbbgeometry2 = new THREE.CapsuleGeometry( 3,3,20,32 );
const thumbbbmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const thumbbbfinger2 = new THREE.Mesh( thumbbbgeometry2, thumbbbmaterial2 );
thumbbbfinger2.position.set(15,-1,0);
scene.add( thumbbbfinger2 );

// thumb ends

//palm starts
const palmgeometry2 = new THREE.CylinderGeometry( 12,12,6,32 );
const palmmaterial2 = new THREE.MeshBasicMaterial( { color: "#ffdbac" } );
const palm2= new THREE.Mesh( palmgeometry2, palmmaterial2 );
palm2.position.set(0,0,0);
palm2.rotation.set(39.28,0,0);

scene.add( palm2 );

//background

scene.background = new THREE.Color('cyan');
const directionalLight = new THREE.DirectionalLight(0xfffff0, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);


camera.position.z =70;
camera.position.x = 10;
camera.position.y =10;
//camera.rotation.set(0,0,0);

// Creating Group

var group = new THREE.Group();
group.position.set(-20,-10,0);
group.rotation.set(0,9.4,0);

var group2 = new THREE.Group();
group2.position.set(35,-10,0);
group2.rotation.set(0,9.4,0)




var amplitude = 1;
var frequency = 1;
var time = 0;
function updateGroupPosition(){
	var yoffset = amplitude * Math.sin(2*Math.PI*frequency*time);
	
	//group.rotation.z = yoffset;
	//group2.rotation.z = -yoffset;
	//group.rotation.x = yoffset;
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

// group 1

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



group2.add(indexfinger2);
group2.add(indexxfinger2);
group2.add(indexxxfinger2);

group2.add(middlefinger2);
group2.add(middleefinger2);
group2.add(middleeefinger2);

group2.add(ringfinger2);
group2.add(rinngfinger2);
group2.add(rinnngfinger2);

group2.add(littlefinger2);
group2.add(littleefinger2);
group2.add(littleeefinger2);

group2.add(thumbfinger2);
group2.add(thumbbfinger2);
group2.add(thumbbbfinger2);

group2.add(palm2);


scene.add(group2);



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