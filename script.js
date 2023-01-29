import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
	camera,
	renderer,
	scene
} from './scene.js';

let mixer;
const clock = new THREE.Clock();

// model
const loader = new GLTFLoader();
loader.load('./models/fbx/heather@waving.gltf', function (gltf) {

	scene.add(gltf.scene);

	gltf.animations; // Array<THREE.AnimationClip>
	gltf.scene; // THREE.Group
	gltf.scenes; // Array<THREE.Group>
	gltf.asset; // Object

	gltf.scene.scale.set(10, 10, 10, 10);

	mixer = new THREE.AnimationMixer(gltf.scene);
	let animation = mixer.clipAction(gltf.animations[0]);

	animation.play();

	animate();
});

function animate() {

	requestAnimationFrame(animate);

	const delta = clock.getDelta();
	mixer.update(delta);
	renderer.render(scene, camera);
}