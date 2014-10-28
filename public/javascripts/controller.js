angular.module('gearWorks.controllers', [])
.controller("index", function($scope, gearWorksAPIservice) {
    var container = $('#canvas-container');
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(50, container.width() / container.height(), 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
//	console.log(container.width()+ ', ' + container.height());
	renderer.setSize(container.width(), container.height() - 5);
    container.html(renderer.domElement);
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});
	var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 20), material);
    sphere.position.x = 1;
    cube.position.x = -1;
    camera.position.z = 5;
    scene.add(cube);
    scene.add(sphere);
    var pointLight = new THREE.PointLight(0xFFFFFF);

    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    scene.add(pointLight);

	function render() {
		requestAnimationFrame(render);
		//cube.rotation.x += 0.05;
		//cube.rotation.y += 0.05;
//		cube.rotation.z += 0.05;
		// camera.position.z += 0.5;
		renderer.render(scene, camera);
	}
	render();
});