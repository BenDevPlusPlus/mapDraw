var booth1 = [4, 10, "4x10"];
var booth2 = [4, 15, "4x15"];
var booth3 = [4, 20, "4x20"];
var curbooth = 1;
var curscale = 2;
var canvas;

$( document ).ready(function()
{
	var scale = 1;
	var _map = new Image();
	_map.src = "img/convention_floorplan.png";
	canvas = document.getElementById('mapCanvas');
	var ctx = canvas.getContext('2d');

	if (_map.naturalWidth > _map.naturalHeight) {
		scale = 800/_map.naturalWidth;
		ctx.drawImage(_map,0,0,800,_map.naturalHeight*scale);
	} else {
		scale = 600/_map.naturalHeight;
		ctx.drawImage(_map,0,0,_map.naturalWidth*scale,600);
	}

	document.getElementById('curBooth').innerHTML = 'Selected: '.concat(booth1[2], ' Booth');


	$('#sinput').bind('input', function(){
		curscale = $('#sinput').val();
	});

	$('#mapCanvas').click(function(e){
		var ctx = $('#mapCanvas')[0].getContext('2d');
		var position = $('#mapCanvas').position();
		//console.log(Math.round(position.left));
		console.log(e);
		console.log(e.clientX.toString().concat(", ", position.left.toString(), ", ", $(window).scrollLeft().toString()));
		console.log(e.clientY.toString().concat(", ", position.top.toString(), ", ", $(window).scrollTop().toString()));
		//console.log(e.clientX - canvas.offsetLeft + $(window).scrollLeft());//Math.round(position.left));
		//console.log(e.clientY - canvas.offsetTop + $(window).scrollTop());//Math.round(position.top));
		var posx = e.clientX - canvas.offsetLeft + $(window).scrollLeft();//Math.round(position.left);
		var posy = e.clientY - canvas.offsetTop + $(window).scrollTop();//Math.round(position.top);
		ctx.beginPath();
		ctx.strokeStyle="green";
		ctx.rect(posx, posy, 4*curscale, 10*curscale);
		ctx.stroke();
	});

});

function onclick10(){
	document.getElementById('curBooth').innerHTML = 'Selected: '.concat(booth1[2], ' Booth');
	curbooth = 1;
}

function onclick15(){
	document.getElementById('curBooth').innerHTML = 'Selected: '.concat(booth2[2], ' Booth');
	curbooth = 2;
}

function onclick20(){
	document.getElementById('curBooth').innerHTML = 'Selected: '.concat(booth3[2], ' Booth');
	curbooth = 3;
}
