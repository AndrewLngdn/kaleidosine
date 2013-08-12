var Kaleidosine = {
	context: undefined,
	init: function(){
		Kaleidosine.context = new webkitAudioContext();
		var canvas = document.getElementById('canvas');
		var canvasContext = canvas.getContext('2d');
		canvasContext.fillStyle = 'red';
		canvasContext.fillRect(200, 100, 400, 400);
	}
}


