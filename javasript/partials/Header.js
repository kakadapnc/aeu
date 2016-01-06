/**
 * Created by kakada on 1/6/16.
 */

var IncludeContents = function(data) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", data, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}
var loadMenu = document.getElementById("menu").innerHTML = IncludeContents("Menu.html");
