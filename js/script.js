window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

var audio0;
var audio1;

var audios;
var audio;

function init() {
	window.scrollTo(0, 0);	
	
	audio0 = document.getElementById("audio0"); 
	console.log(audio0.src);
	audio1 = document.getElementById("audio1");
	audios = [audio0, audio1];
	audio = audios[0];

}

function func(){
	console.log("func clicked");
	if (i<0){
		audio = audios[1];
	} else {
		audio = audios[0];
	}
	console.log(audio);
	audio.play();
}

var i = 1;
function changeAudio(){
	console.log("changge cliked");
	i = i*(-1)
	if (i<0){
		$("#fbtn").addClass("sas");
	} else {
		$("#fbtn").removeClass("sas");
	}
}
 