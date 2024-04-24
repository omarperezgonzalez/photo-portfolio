import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var container = document.getElementById( 'canvas' );

const render = function(){
    renderer.render( scene, camera );
};

const onWindowResize = function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
};

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10
);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( container.clientWidth, container.clientHeight);
container.appendChild( renderer.domElement );

// new OrbitControls(camera, renderer.domElement);


//Import the Gltf model
let model;
const loader = new GLTFLoader();
loader.load(
    '/src/model/scene.gltf',
    function(gltf){
        scene.add(gltf.scene);
        
        model = gltf.scene;
        console.log(model);
        model.position.x = 0;
        model.position.z = -0.25;

        animate();
        gsapAnimation();
    },
    //Called while loading
    function(xhr){
        console.log((xhr.loaded / xhr.total * 100) + '%loaded');
    },
    // called when loading has errors
	function (error) {
		console.log( 'An error happened' );
	}
);

camera.position.z = .25;
camera.position.y = 0.03;

function animate() {
	requestAnimationFrame( animate );

	render();
}

const gsapAnimation = function() {
    gsap.to(".info--container--img", {
        y: window.innerHeight/2,
        scrollTrigger: {
            trigger: ".about--info",
            start: 0,
            end: "center top",
            scrub: true
        }
    });

    gsap.to(".info--container", {
        y: -150,
        scrollTrigger: {
            trigger: ".about--info",
            start: 0,
            end: "center top",
            scrub: true
        }
    });


    const tlCIM2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about--info",
            start: 0, // Animation starts when the top of the container hits the top of the viewport
            end: "bottom top", // Animation ends when the bottom of the container hits the top of the viewport
            scrub: true, // Smoothly animates the changes
            //markers: true // For debugging, can be removed
        }
    });
    // Define individual tweens for each image
    tlCIM2.to(model.rotation, {
        y: Math.PI,
        ease: 'power1.inOut',
    }, "sc-1");
    tlCIM2.to(model.position, {
        z: -0.1,
        x: 0.15,
        ease: 'power1.inOut',
    }, "sc-1");
    tlCIM2.to(".flash", {
        scale: 1000,
        opacity: 1,
        duration: 0.1
    }, "sc-2");
    tlCIM2.to(".flash", {
        scale: 0,
        opacity: 0,
        duration: 0.1
    }, "sc-3");
    // Define individual tweens for each image
    tlCIM2.to(model.rotation, {
        y: Math.PI * 3,
        ease: 'power1.inOut',
    }, "sc2-1");
    tlCIM2.to(model.position, {
        z: -0.05,
        x: -0.35,
        ease: 'power1.inOut',
    }, "sc2-1");
    tlCIM2.to(".flash", {
        scale: 1000,
        opacity: 1,
        duration: 0.1
    }, "sc2-2");
    tlCIM2.to(".flash", {
        scale: 0,
        opacity: 0,
        duration: 0.1
    }, "sc2-3");
    tlCIM2.to(model.rotation, {
        y: Math.PI*2,
        ease: 'power1.inOut',
    }, "sc2-4");
    tlCIM2.to(model.position, {
        z: 0,
        x: 0,
        ease: 'power1.inOut',
    }, "sc2-4");
    tlCIM2.to(".flash", {
        scale: 1000,
        opacity: 1,
        duration: 0.5
    }, "sc2-5");
    tlCIM2.to("#canvas", {
        opacity: 0,
        zIndex: -1,
    }, "sc2-5");
    tlCIM2.to(".flash", {
        scale: 0,
        opacity: 0,
        duration: 0.3
    }, "sc2-6");
};

//On ThreeJS resize
window.addEventListener('resize', onWindowResize, false);