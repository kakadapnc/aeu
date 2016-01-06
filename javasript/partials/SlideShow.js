	/**
	 * Created by kakada on 1/6/16.
	 */

	var changePhoto=0;
	var opacitys=0;
	var outAndIn = true;
	var photo = ["../../images/slideShow/a.jpg", "b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","f.jpg"];
	var gallery="";
	function runners() { //this fx will make your photo come-in and go-out slowly
		for (var i =0; i<photo.length; i++) {
			gallery+="<img style='margin:3px;width:146px;'  class='img-thumbnail' onclick='da.src=this.src;changePhoto="+i+"' src='"+photo[i]+"'onmouseover='opacityIn(this);' onmouseout='opacityOut(this)'/>"
		}
		// var galleries=slide.innerHTML=gallery;
		var runner=setInterval(function() {
			da.src=photo[changePhoto];
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
	function pre () {// this fx will change photo to by - 1 to variable changePhoto and call changePhotos
		changePhoto--;
		changePhotos ();
	}


	function opacityIn(x) {// this fx will add opacity  0.5 to list image when over in it
		x.style.opacity="0.5";
	}
	function opacityOut(x) {// this fx will add opacity 1 to list image when mouseout in it
		x.style.opacity="1";
	}

