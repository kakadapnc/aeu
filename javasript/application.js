/**
** Custom JavaScript
**/

var IncludeContent = function(data) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", data, false);
	xmlhttp.send();
	return xmlhttp.response;
}

var menu = document.getElementById("header").innerHTML = IncludeContent("templates/partials/Menu.html");
var slideShow = document.getElementById("slide").innerHTML = IncludeContent("templates/partials/SlideShow.html");
var basseFood = document.getElementById("baseFood").innerHTML = IncludeContent("templates/partials/baseFood.html");
var ourChef = document.getElementById("ourChef").innerHTML = IncludeContent("templates/partials/ourChef.html");
var footer = document.getElementById("footer").innerHTML = IncludeContent("templates/partials/Footer.html");


/**
 * slide
 * */

var changePhoto=0;
var opacitys=0;
var outAndIn = true;
var photo = ["b.jpg", "a.jpg","b.jpg","a.jpg","b.jpg","a.jpg","b.jpg","a.jpg"];
function runners() { //this fx will make your photo come-in and go-out slowly
	for (var i =0; i<photo.length; i++) {
	}
	var runner=setInterval(function() {
		da.src="images/slideShow/"+photo[changePhoto];
		if(outAndIn==true){
			opacitys+=0.02;
			var opacity = da.style.opacity=opacitys;
			if(opacity>3){outAndIn=false;}
		}else{
			opacitys-=0.02;
			var opacity = da.style.opacity=opacitys;
			if(opacitys< -0.3){
				outAndIn=true;
				changePhoto++;
				if(changePhoto>2){changePhoto=0}
			}
		}
	}, 25);
}
function changePhotos () {// this fx will change the photo on slide next and pre
	if(changePhoto>=photo.length)
		changePhoto= 0;
	else if(changePhoto<0)
		changePhoto= photo.length-1;
	da.src=photo[changePhoto];
}
function next () {// this fx will change photo to by + 1 to variable changePhoto and call changePhotos
	changePhoto++;
	changePhotos ();
}
// this fx will change photo to by - 1 to variable changePhoto and call changePhotos
function pre () {
	changePhoto--;
	changePhotos ();
}
runners();
/***************************/



