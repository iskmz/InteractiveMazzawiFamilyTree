// SOURCE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_magnifier_glass //

var magnifier_created = false;

const zoom_default = 2.5;
const img_id_default = "mz1949img";
const btn_highlights_id = "btnAllHighlights";
const safety_margin = 25+40; // for btnMagnifier at TopLeft corner of image (+40 for btnMagnifier dimensions) // 

function magnifyTree() { 
	document.getElementById(img_id_default).setAttribute('usemap',"" ); // stop using map 1st
	document.getElementById(btn_highlights_id).style.visibility="hidden"; // and hide show-hide highlights button
	magnify(img_id_default, zoom_default);  // magnify
}

function magnify(imgID, zoom) {
	if (magnifier_created)
	{
		var glass = document.getElementsByClassName("img-magnifier-glass");
		glass[0].style.display = 'block';
		return;
	}
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
	if (y < h/zoom + safety_margin && x < w/zoom + safety_margin) { x = w/zoom+safety_margin; y=h/zoom+safety_margin; } // added to make room for btnMagnifier at TopLeft ! // 
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
  magnifier_created = true;
}

function demagnify()
{
	var glass = document.getElementsByClassName("img-magnifier-glass");
    glass[0].style.display = 'none';
	document.getElementById(img_id_default).setAttribute('usemap',"#treeMap"); // return to using map
	document.getElementById(btn_highlights_id).style.visibility="visible"; // and SHOW show-hide highlights button
}
