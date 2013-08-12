var Kaleidosine = {
	audioContext: undefined,
	rectangles: [],
	init: function(){
		Kaleidosine.audioContext = new webkitAudioContext();
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);
		console.log(window.innerWidth, window.innerHeight)
		camera.position.z = 10;
		camera.position.y = 0;
		camera.position.x = 0;

		// var lineMaterial = new THREE.LineBasicMaterial({color: 0x000000,
		// 	size: 10});
		// var lineGeometry = new THREE.Geometry();
		// lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
		// lineGeometry.vertices.push(new THREE.Vector3(5, 5, 0));
		// var line = new THREE.Line(lineGeometry, lineMaterial);
		// scene.add(line);

		var geometry = new THREE.CubeGeometry(4,4,0.1);
		var material = new THREE.MeshBasicMaterial({color: 0x000000});
		var cube = new THREE.Mesh(geometry, material);
		var g2 = new THREE.CubeGeometry(4, 4, 0.1);
		var m2 = new THREE.MeshBasicMaterial({color: 0x000000});
		var cube2 = new THREE.Mesh(g2, m2);
		cube2.position.z += 0.1;
		var g3 = new THREE.CubeGeometry(4, 4, 0.1);
		var m3 = new THREE.MeshBasicMaterial({color: 0x000000});
		var cube3 = new THREE.Mesh(g3, m3);
		cube3.position.z += 0.1;

		scene.add(cube);
		scene.add(cube2);
		scene.add(cube3);
		console.log(cube);

		var render = function (){
			cube.rotation.z += 0.01;
			cube2.rotation.z += 0.02;
			cube3.rotation.z += 0.03;
			cube.rotation.y += 0.01;
			cube2.rotation.y += 0.01;
			cube3.rotation.y += 0.01;
			cube.rotation.x += 0.01;
			cube2.rotation.x += 0.01;
			cube3.rotation.x += 0.01;


			requestAnimationFrame(render);
			renderer.render(scene, camera);
		}
		render();
	},
}


