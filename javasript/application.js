/**
** Custom JavaScript
**/

var IncludeContent = function(data) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", data, false);
	xmlhttp.send();
	return xmlhttp.response;
}

//var loads = document.getElementById("header").innerHTML = IncludeContent("templates/partials/Menu.html");
var loads = document.getElementById("header").innerHTML = IncludeContent("templates/partials/Header.html");

//loadLib("partials/Header");
//alert(kakada);
