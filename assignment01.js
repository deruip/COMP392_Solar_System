//Name: Aron Ly
//Date: Feb 15, 2019
//File: assignment01.js

// recurrent constants
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const clock = new THREE.Clock();

// global variables
var trackballControls, speed = 1;

function init() {
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    trackballControls = new THREE.TrackballControls(camera, renderer.domElement);

    var axesHelper = new THREE.AxesHelper(500);
    scene.add(axesHelper);
}

function setupCameraAndLights() {
    camera.position.set(0, 20, 200);
    camera.lookAt(scene.position);

    // var ambientLight = new THREE.AmbientLight(0xFFFFFF);
    // scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);

}

function render() {
    trackballControls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(render);

    mercuryOrbit.rotation.y += 0.002 * speed;
    venusOrbit.rotation.y += 0.001 * speed;
    earthOrbit.rotation.y += 0.001 * speed;
    marsOrbit.rotation.y += 0.001 * speed;
    jupiterOrbit.rotation.y += 0.001 * speed;
    saturnOrbit.rotation.y += 0.001 * speed;
    uranusOrbit.rotation.y += 0.001 * speed;
    neptuneOrbit.rotation.y += 0.001 * speed;
    plutoOrbit.rotation.y += 0.001 * speed;

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

    // var text = new controls;
    // var gui = new dat.GUI();
    // gui.add(text, 'TemplateFunction');
    // gui.add(text, 'number', 1, 10).step(1);
    // gui.add(text, 'dropdown', ['choice 1', 'choice 2']);
    // gui.addColor(text, 'myColor');

}


function createGeometry() {
    sunRadius = 69.5;
    sun = new THREE.Mesh(new THREE.SphereGeometry(sunRadius, 32, 32), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
    sun.position.set(0, 0, 0);
    sun.receiveShadow = true;
    scene.add(sun);

    mercury = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    mercury.castShadow = true;
    mercury.translateX(57.9 + sunRadius);
    mercuryOrbit = new THREE.Group();
    mercuryOrbit.add(mercury);

    venus = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    venus.castShadow = true;
    venus.translateX(57.9 + sunRadius);
    venusOrbit = new THREE.Group();
    venusOrbit.add(venus);

    earth = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0x0000FF }));
    earth.castShadow = true;
    earth.translateX(147.1 + sunRadius);
    earthOrbit = new THREE.Group();
    earthOrbit.add(earth);

    mars = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    mars.castShadow = true;
    mars.translateX(57.9 + sunRadius);
    marsOrbit = new THREE.Group();
    marsOrbit.add(mars);

    jupiter = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    jupiter.castShadow = true;
    jupiter.translateX(57.9 + sunRadius);
    jupiterOrbit = new THREE.Group();
    jupiterOrbit.add(jupiter);

    saturn = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    saturn.castShadow = true;
    saturn.translateX(57.9 + sunRadius);
    saturnOrbit = new THREE.Group();
    saturnOrbit.add(saturn);

    uranus = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    uranus.castShadow = true;
    uranus.translateX(57.9 + sunRadius);
    uranusOrbit = new THREE.Group();
    uranusOrbit.add(uranus);

    neptune = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    neptune.castShadow = true;
    neptune.translateX(57.9 + sunRadius);
    neptuneOrbit = new THREE.Group();
    neptuneOrbit.add(neptune);

    pluto = new THREE.Mesh(new THREE.SphereGeometry(6.37, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    pluto.castShadow = true;
    pluto.translateX(57.9 + sunRadius);
    plutoOrbit = new THREE.Group();
    plutoOrbit.add(pluto);

    planetArray = [mercuryOrbit, venusOrbit, earthOrbit, marsOrbit, jupiterOrbit, saturnOrbit, uranusOrbit, neptuneOrbit, plutoOrbit];
    planetArray.forEach(element => {
        scene.add(element);
    });

}

window.onload = () => {
    init();
    setupCameraAndLights();
    setupInterface();
    createGeometry();
    render();
}