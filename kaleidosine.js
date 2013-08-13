var Kaleidosine = {
	audioContext: undefined,
	scene: undefined,
	rectangles: [],
	lines: [],
	init: function(){
		Kaleidosine.audioContext = new webkitAudioContext();
		var scene = Kaleidosine.scene = new THREE.Scene();
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

		Kaleidosine.placeCubes(2);

		count = 0;
		var render = function (){
			Kaleidosine.fanCubes();
			Kaleidosine.drawCornerLines();
			scene.updateMatrixWorld();

			if (count++ == 10)
				return;
			requestAnimationFrame(render);
			renderer.render(scene, camera);
		}
		render();
	},

	placeCubes: function(n){
		for (var i = 0; i < n; i++){
			var geometry = new THREE.CubeGeometry(10,10,0.1);
			var material = new THREE.MeshBasicMaterial({color: 0x000000});
			var cube = new THREE.Mesh(geometry, material);

			Kaleidosine.rectangles.push(cube);
			Kaleidosine.scene.add(cube);

			var geo = new THREE.Geometry();
			var lineMaterial = new THREE.LineBasicMaterial({color: 0x330033, size: 10});
			geo.vertices.push(new THREE.Vector3(0,0,5));
			geo.vertices.push(new THREE.Vector3(0,0,5));
			var line = new THREE.Line(geo, lineMaterial);

			Kaleidosine.lines.push(line);
			Kaleidosine.scene.add(line);

		}
	},

	fanCubes: function(){
		for (var i = 0; i < Kaleidosine.rectangles.length; i++){
			Kaleidosine.rectangles[i].rotation.z += (0.005*(i+1));
		}
	},

	drawCornerLines: function(){


		// var box = Kaleidosine.rectangles[0].geometry.computeBoundingBox();
		// Kaleidosine.rectangles[0].updateMatrixWorld();
		var box = Kaleidosine.rectangles[0].matrixWorld;
		// console.log(Kaleidosine.rectangles[0].geometry.boundingBox);
		// var vert = Kaleidosine.rectangles[0].geometry.vertices[0];
		// var vert1 = Kaleidosine.rectangles[0].geometry.vertices[1];
		// var x1 = Kaleidosine.rectangles[0].geometry.vertices[0].x;
		// var y1 = Kaleidosine.rectangles[0].geometry.vertices[0].y;

		// var x2 = Kaleidosine.rectangles[1].geometry.vertices[0].x;
		// var y2 = Kaleidosine.rectangles[1].geometry.vertices[0].y;
		var line = Kaleidosine.lines[0];
		var corner1 = Kaleidosine.rectangles[0];//.geometry.vertices[0];
		// var corner2 = line.geometry.vertices[0];
		corner1.applyMatrix( box );
		console.log(corner1.geometry.vertices[0]);
		// end.applyMatrix( object.matrixWorld );

		// line
		// console.log(x1);

		// var vector = new THREE.Vector3();
		// vector.getPositionFromMatrix( vert.matrixWorld );

		// console.log(Kaleidosine.rectangles[0].localToWorld(Kaleidosine.rectangles[0].position.clone()));
		// console.log(Kaleidosine.rectangles[0].localToWorld(vert1));
		// var vector1 = line.geometry.vertices[0];
		// var vector2 = line.geometry.vertices[2];
		// var v1 = v
		// line.geometry.vertices[0].x = x1;
		// line.geometry.vertices[0].y = y1;
		// line.geometry.vertices[1].x = x2;
		// line.geometry.vertices[1].y = y2;
		line.geometry.verticesNeedUpdate = true;


	}
}


