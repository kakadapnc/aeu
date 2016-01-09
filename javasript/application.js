/**
 * delay time interval of carousel
 */
$('.carousel').carousel({
	interval: 1000 * 10
});

var changePhoto=0;
var opacitys=0;
var outAndIn = true;
var photo = ["b.jpg", "a.jpg","b.jpg","a.jpg","b.jpg","a.jpg","b.jpg","a.jpg"];

/**
 * Start slide-show
 */
function runners() {
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
			if(opacity< -0.3){
				outAndIn=true;
				changePhoto++;
				if(changePhoto>2){changePhoto=0}
			}
		}
	}, 35);
}

/**
 *  Change image in circle
 **/
function changePhotos () {
	if(changePhoto>=photo.length)
		changePhoto= 0;
	else if(changePhoto<0)
		changePhoto= photo.length-1;
	da.src=photo[changePhoto];
}

/**
 * Change image to next
 */
function next () {
	changePhoto++;
	changePhotos ();
}

/**
 * Change image to pre
 */
function pre () {
	changePhoto--;
	changePhotos ();
}

/**
 * Include file
 * @param data
 * @returns {Object}
 * @constructor
 */
var IncludeContent = function(data) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", data, false);
	xmlhttp.send();
	return xmlhttp.response;
}

/**
 * Load partails into index
 */
var loadPartails = function() {
	document.getElementById("slide").innerHTML = IncludeContent("partials/SlideShow.html");
	document.getElementById("ourChef").innerHTML = IncludeContent("partials/ourChef.html");
	document.getElementById("baseFood").innerHTML = IncludeContent("partials/baseFood.html");
	runners();
}
var slide = function() {
	document.getElementById("slide").innerHTML = IncludeContent("partials/SlideShow.html");
	runners();
}

var foodDetail = function() {
	document.getElementById("slide").innerHTML = IncludeContent("partials/SlideShow.html");
	document.getElementById("foodDetail").innerHTML = IncludeContent("partials/foodDetail.html");
	document.getElementById("footer").innerHTML = IncludeContent("partials/footer.html");
	runners();
}

var mainRoom = function() {
	document.getElementById("mainRoom").innerHTML = IncludeContent("partials/mainRoom.html");
}

var vipRoom = function() {
	document.getElementById("vipRoom").innerHTML = IncludeContent("partials/vipRoom.html");
}

var order = function() {
	document.getElementById("order").innerHTML = IncludeContent("partials/order.html");
}

document.getElementById("header").innerHTML = IncludeContent("partials/Menu.html");
document.getElementById("footer").innerHTML = IncludeContent("partials/footer.html");





var menu = [
	"Fried Rice", "Fried Egg", "Fried Fish", "Fried Chicken", "Fried Egg With Salad",
	"Fried Rice with Egg", "Fried Rice with Sea Food", "Fried Rice with Bef", "Fish Fried",
	"Ham Fried", "Pig Fried", "Soup Fish", "Soup Bef", "Soup Chicken", "Kor Kor Soup"
];
var price = [12, 7, 13, 12, 10, 15, 7, 4, 2, 6, 3, 18, 12, 18, 25]

/**
 * List menu
 */
function foodMenu(){
	var list = "";
	for (var i=0; i<menu.length; i++) {
		list += '<li> <a href="FoodDetail.html#'+menu[i]+'"><span class="bg-list">'+ menu[i]+'</span><span class="pull-right bg-list">$'+price[i]+'</span></a> <p class="lineMenu"></p> </li>'
	}
	document.getElementById("FoodMenu").innerHTML= "<ol class='menuList'>"+list+"</ol>";
	document.getElementById("footer").innerHTML = IncludeContent("partials/footer.html");
	slide();
	runners();

}















