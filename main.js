import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { randFloat, randFloatSpread } from 'three/src/math/MathUtils.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointlight = new THREE.PointLight(0xffffff, 100, 100)
pointlight.position.set(-5,5, 0)
scene.add(pointlight)
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointlight);

const gridHelper = new THREE.GridHelper(200, 50);


const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.1;
  controls.update();
  renderer.render(scene, camera);

  
}
animate();
