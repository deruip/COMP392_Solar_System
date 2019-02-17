//Name: Aron Ly
//Date: Feb 15, 2019
//File: assignment01.js

// recurrent constants
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const clock = new THREE.Clock();

// global variables
var trackballControls,ambientLight, planetSpeed = 1, moonSpeed = 1;

function init() {
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    trackballControls = new THREE.TrackballControls(camera, renderer.domElement);

}

function setupCameraAndLights() {
    camera.position.set(1000, 20, 1000);
    camera.lookAt(scene.position);

    ambientLight = new THREE.AmbientLight(0xFFFFFF);
    ambientLight.visible = false;
    scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);

}

function render() {
    trackballControls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(render);

    mercuryOrbit.rotation.y += 0.01 * planetSpeed;
    venusOrbit.rotation.y += 0.003 * planetSpeed;
    earthOrbit.rotation.y += 0.0024 * planetSpeed;
    marsOrbit.rotation.y += 0.0012 * planetSpeed;
    jupiterOrbit.rotation.y += 0.00020 * planetSpeed;
    saturnOrbit.rotation.y += 0.000081 * planetSpeed;
    uranusOrbit.rotation.y += 0.000028 * planetSpeed;
    neptuneOrbit.rotation.y += 0.000014 * planetSpeed;
    plutoOrbit.rotation.y += 0.0000097 * planetSpeed;
    moonOrbit.rotation.y += 0.032 * moonSpeed;
    moonOrbit.rotation.x += 0.0001 * moonSpeed;
    jupiterMoonOrbit1.rotation.y += 0.030 * moonSpeed;
    jupiterMoonOrbit2.rotation.y += 0.012 * moonSpeed;
    jupiterMoonOrbit3.rotation.y += 0.022 * moonSpeed;
    jupiterMoonOrbit4.rotation.y += 0.015 * moonSpeed;
    jupiterMoonOrbit5.rotation.y += 0.008 * moonSpeed;
    saturnMoonOrbit1.rotation.y += 0.031 * moonSpeed;
    saturnMoonOrbit2.rotation.y += 0.014 * moonSpeed;
    saturnMoonOrbit3.rotation.y += 0.020 * moonSpeed;

}

function setupInterface() {

    controls = function () {
        this.planetSpeed = 1;
        this.moonSpeed = 1;
        this.ambientLight = false;
    }

    var text = new controls;
    var gui = new dat.GUI();
    gui.add(text, 'planetSpeed', 0, 10).name("Planet Orbit Speed").onChange((e) => { planetSpeed = e; });
    gui.add(text, 'moonSpeed', 0, 10).name("Moon Orbit Speed").onChange((e) => { moonSpeed = e; });
    gui.add(text, 'ambientLight').name("Ambient Light").onChange((e) => { ambientLight.visible = e; });


}


function createGeometry() {
    sunRadius = 347;
    mercuryRadius = 2.43;
    venusRadius = 6.05;
    earthRadius = 6.37;
    moonRadius = 1.73;
    marsRadius = 3.39;
    jupiterRadius = 71.49;
    jupiterMoonRadius1 = 1.83;
    jupiterMoonRadius2 = 1.56;
    jupiterMoonRadius3 = 2.63;
    jupiterMoonRadius4 = 2.41;
    jupiterMoonRadius5 = 1.125;
    saturnRadius = 60.26;
    saturnMoonRadius1 = 2.57;
    saturnMoonRadius2 = 1.735;
    saturnMoonRadius3 = 1.527;
    uranusRadius = 25.55;
    neptuneRadius = 24.76;
    plutoRadius = 1.18;

    sun = new THREE.Mesh(new THREE.SphereGeometry(sunRadius, 32, 32), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
    sun.position.set(0, 0, 0);
    sun.receiveShadow = true;
    scene.add(sun);

    mercury = new THREE.Mesh(new THREE.SphereGeometry(mercuryRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD3D3D3 }));
    mercury.castShadow = true;
    mercury.translateX(57.9 + sunRadius + mercuryRadius);
    mercuryOrbit = new THREE.Group();
    mercuryOrbit.add(mercury);

    venus = new THREE.Mesh(new THREE.SphereGeometry(venusRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0xe3bb76 }));
    venus.castShadow = true;
    venus.translateX(108.2 + sunRadius + venusRadius);
    venusOrbit = new THREE.Group();
    venusOrbit.add(venus);

    earth = new THREE.Mesh(new THREE.SphereGeometry(earthRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0x0000FF }));
    earth.castShadow = true;
    earth.translateX(147.1 + sunRadius + earthRadius);
    earthOrbit = new THREE.Group();
    earthOrbit.add(earth);

    moon = new THREE.Mesh(new THREE.SphereGeometry(moonRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0x88959d }));
    moon.castShadow = true;
    moon.translateX(0.384 + earthRadius + moonRadius);
    moonOrbit = new THREE.Group();
    earth.add(moonOrbit);
    moonOrbit.add(moon);

    mars = new THREE.Mesh(new THREE.SphereGeometry(marsRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0xc77d4e }));
    mars.castShadow = true;
    mars.translateX(227.9 + sunRadius + marsRadius);
    marsOrbit = new THREE.Group();
    marsOrbit.add(mars);

    jupiter = new THREE.Mesh(new THREE.SphereGeometry(jupiterRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0xD39C7E }));
    jupiter.castShadow = true;
    jupiter.translateX(778.6 + sunRadius + jupiterRadius);
    jupiterOrbit = new THREE.Group();
    jupiterOrbit.add(jupiter);

    jupiterMoon1 = new THREE.Mesh(new THREE.SphereGeometry(jupiterMoonRadius1, 32, 32), new THREE.MeshLambertMaterial({ color: 0x583519 }));
    jupiterMoon1.castShadow = true;
    jupiterMoon1.translateX(3.422 + jupiterRadius + jupiterMoonRadius1);
    jupiterMoonOrbit1 = new THREE.Group();
    jupiter.add(jupiterMoonOrbit1)
    jupiterMoonOrbit1.add(jupiterMoon1);

    jupiterMoon2 = new THREE.Mesh(new THREE.SphereGeometry(jupiterMoonRadius2, 32, 32), new THREE.MeshLambertMaterial({ color: 0xc2a796 }));
    jupiterMoon2.castShadow = true;
    jupiterMoon2.translateX(10.671 + jupiterRadius + jupiterMoonRadius2);
    jupiterMoonOrbit2 = new THREE.Group();
    jupiterMoonOrbit2.rotation.x = Math.PI * 0.2;
    jupiter.add(jupiterMoonOrbit2)
    jupiterMoonOrbit2.add(jupiterMoon2);

    jupiterMoon3 = new THREE.Mesh(new THREE.SphereGeometry(jupiterMoonRadius3, 32, 32), new THREE.MeshLambertMaterial({ color: 0x977e63 }));
    jupiterMoon3.castShadow = true;
    jupiterMoon3.translateX(17.070 + jupiterRadius + jupiterMoonRadius3);
    jupiterMoonOrbit3 = new THREE.Group();
    jupiterMoonOrbit3.rotation.x = Math.PI * 0.4;
    jupiter.add(jupiterMoonOrbit3)
    jupiterMoonOrbit3.add(jupiterMoon3);

    jupiterMoon4 = new THREE.Mesh(new THREE.SphereGeometry(jupiterMoonRadius4, 32, 32), new THREE.MeshLambertMaterial({ color: 0x654b2a }));
    jupiterMoon4.castShadow = true;
    jupiterMoon4.translateX(24.181 + jupiterRadius + jupiterMoonRadius4);
    jupiterMoonOrbit4 = new THREE.Group();
    jupiterMoonOrbit4.rotation.x = Math.PI * 0.6;
    jupiter.add(jupiterMoonOrbit4)
    jupiterMoonOrbit4.add(jupiterMoon4);

    jupiterMoon5 = new THREE.Mesh(new THREE.SphereGeometry(jupiterMoonRadius5, 32, 32), new THREE.MeshLambertMaterial({ color: 0x8a7252 }));
    jupiterMoon5.castShadow = true;
    jupiterMoon5.translateX(30.480 + jupiterRadius + jupiterMoonRadius5);
    jupiterMoonOrbit5 = new THREE.Group();
    jupiterMoonOrbit5.rotation.x = Math.PI * 0.8;
    jupiter.add(jupiterMoonOrbit5)
    jupiterMoonOrbit5.add(jupiterMoon5);

    saturn = new THREE.Mesh(new THREE.SphereGeometry(saturnRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0xe3e0c0 }));
    saturn.castShadow = true;
    saturn.translateX(1433.5 + sunRadius + saturnRadius);
    saturnOrbit = new THREE.Group();
    saturnOrbit.add(saturn);

    saturnMoon1 = new THREE.Mesh(new THREE.SphereGeometry(saturnMoonRadius1, 32, 32), new THREE.MeshLambertMaterial({ color: 0xe0c963 }));
    saturnMoon1.castShadow = true;
    saturnMoon1.translateX(3.422 + saturnRadius + saturnMoonRadius1);
    saturnMoonOrbit1 = new THREE.Group();
    saturn.add(saturnMoonOrbit1)
    saturnMoonOrbit1.add(saturnMoon1);

    saturnMoon2 = new THREE.Mesh(new THREE.SphereGeometry(saturnMoonRadius2, 32, 32), new THREE.MeshLambertMaterial({ color: 0x646464 }));
    saturnMoon2.castShadow = true;
    saturnMoon2.translateX(10.671 + saturnRadius + saturnMoonRadius2);
    saturnMoonOrbit2 = new THREE.Group();
    saturnMoonOrbit2.rotation.x = Math.PI * 0.2;
    saturn.add(saturnMoonOrbit2)
    saturnMoonOrbit2.add(saturnMoon2);

    saturnMoon3 = new THREE.Mesh(new THREE.SphereGeometry(saturnMoonRadius3, 32, 32), new THREE.MeshLambertMaterial({ color: 0xa7a7a7 }));
    saturnMoon3.castShadow = true;
    saturnMoon3.translateX(17.070 + saturnRadius + saturnMoonRadius3);
    saturnMoonOrbit3 = new THREE.Group();
    saturnMoonOrbit3.rotation.x = Math.PI * 0.4;
    saturn.add(saturnMoonOrbit3)
    saturnMoonOrbit3.add(saturnMoon3);

    uranus = new THREE.Mesh(new THREE.SphereGeometry(uranusRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0xafdbf5 }));
    uranus.castShadow = true;
    uranus.translateX(2872.5 + sunRadius + uranusRadius);
    uranusOrbit = new THREE.Group();
    uranusOrbit.add(uranus);

    neptune = new THREE.Mesh(new THREE.SphereGeometry(neptuneRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0x62aee7 }));
    neptune.castShadow = true;
    neptune.translateX(4495.1 + sunRadius + neptuneRadius);
    neptuneOrbit = new THREE.Group();
    neptuneOrbit.add(neptune);

    pluto = new THREE.Mesh(new THREE.SphereGeometry(plutoRadius, 32, 32), new THREE.MeshLambertMaterial({ color: 0x7a5b3f }));
    pluto.castShadow = true;
    pluto.translateX(5906.4 + sunRadius + plutoRadius);
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