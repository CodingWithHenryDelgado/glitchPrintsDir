//Import Three.JS
import * as THREE from 'three';
// END OF IMPORT

// THREE.JS CODE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 1, 100);
camera.position.set(0, 110, 31);

const renderer = new THREE.WebGLRenderer();
const container = document.getElementById('heather-canvas');
renderer.setSize(500, 500);
container.appendChild(renderer.domElement);

scene.background = new THREE.Color(0xa0a0a0);
scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(0, 200, 100);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 180;
dirLight.shadow.camera.bottom = - 100;
dirLight.shadow.camera.left = - 120;
dirLight.shadow.camera.right = 120;
scene.add(dirLight);

// scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

// ground
const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
mesh.rotation.x = - Math.PI / 2;
mesh.receiveShadow = true;
scene.add(mesh);

const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
grid.material.opacity = 0.2;
grid.material.transparent = true;
scene.add(grid);

export {
    grid,
    mesh,
    dirLight,
    hemiLight,
    container,
    renderer,
    scene,
    camera
}