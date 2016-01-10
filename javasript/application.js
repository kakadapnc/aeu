/**
 * delay time interval of carousel
 */

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

var slide = function() {
	document.getElementById("slide").innerHTML = IncludeContent("partials/SlideShow.html");
	runners();
}

function loadPage(page) {
	event.preventDefault();
	if (page =='orderPage') {
		document.getElementById("dynamicContent").innerHTML = IncludeContent("partials/order.html");
	}else if(page == "menuListPage") {
		foodMenu();
	}else if(page == "menuDetailPage") {
		document.getElementById("dynamicContent").innerHTML = IncludeContent("partials/foodDetail.html");
	}else if(page == "mainRoomPage") {
		document.getElementById("dynamicContent").innerHTML = IncludeContent("partials/mainRoom.html");
	}else if(page == "vipRoomPage") {
		document.getElementById("dynamicContent").innerHTML = IncludeContent("partials/vipRoom.html");
	} else {
		document.getElementById("dynamicContent").innerHTML = IncludeContent("partials/SlideShow.html") + IncludeContent("partials/ourChef.html") + IncludeContent("partials/baseFood.html");
	}
}

document.getElementById("header").innerHTML = IncludeContent("partials/Menu.html");
document.getElementById("footer").innerHTML = IncludeContent("partials/footer.html");

var menu = [
	"Fried Rice", "Fried Egg", "Fried Fish", "Fried Chicken", "Fried Egg With Salad",
	"Fried Rice with Egg", "Fried Rice with Sea Food", "Fried Rice with Bef", "Fish Fried",
	"Ham Fried", "Pig Fried", "Soup Fish", "Soup Bef", "Soup Chicken", "Kor Kor Soup", "Arathna",
	"test", "Salad & bef"
];
var price = [12, 7, 13, 12, 10, 15, 7, 4, 2, 6, 3, 18, 12, 18, 25, 24,100, 23]

/**
 * List menu
 */
function foodMenu(){
	var list = "";
	for (var i=0; i<menu.length; i++) {
		list += '<li> <a href="FoodDetail.html#'+menu[i]+'"><span class="bg-list">'+ menu[i]+'</span><span class="pull-right bg-list">$'+price[i]+'</span></a> <p class="lineMenu"></p> </li>'
	}
	document.getElementById("dynamicContent").innerHTML= "<div class='col-sm-10 col-sm-offset-1'><ol class='menuList'>"+list+"</ol></div>";
	slide();
	runners();

}


