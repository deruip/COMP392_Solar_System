//Name: Aron Ly
//Date: Jan 22, 2019
//File: template.js

// recurrent constants
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const clock = new THREE.Clock();

// global variables
var trackballControls;

function init() {
    renderer.setClearColor(new THREE.Color(0xaaffaa));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    trackballControls = new THREE.TrackballControls(camera, renderer.domElement);
}

function setupCameraAndLights() {
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    var ambientLight = new THREE.AmbientLight(0x292929);
    scene.add(ambientLight);
}

function render() {
    trackballControls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

function setupInterface() {

    controls = function () {
        this.number = 1;
        this.dropdown = 'choice 1';
        this.myColor = 0xffffff;
        this.TemplateFunction = function () {
            console.log("Test Output");

        }
    }

    var text = new controls;
    var gui = new dat.GUI();
    gui.add(text, 'TemplateFunction');
    gui.add(text, 'number', 1, 10).step(1);
    gui.add(text, 'dropdown', ['choice 1', 'choice 2']);
    gui.addColor(text, 'myColor');

}


function createGeometry() {
    let geom = new THREE.PlaneGeometry(40, 40, 1, 1);
    let mat = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    let plane = new THREE.Mesh(geom, mat);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, 0, 0);
    scene.add(plane);
}

window.onload = () => {
    init();
    setupCameraAndLights();
    setupInterface();
    createGeometry();
    render();
}