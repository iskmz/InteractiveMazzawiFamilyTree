const show_value_ar="عرض الكل";
const hide_value_ar="اخفاء الكل";
const show_value_eng="Show All Highlights";
const hide_value_eng="Hide All Highlights";

var modal = document.getElementById("subTree");
var map = document.getElementById("treeMap");

// event listener to map-area click --> load correct image & open the modal to show it // 
map.addEventListener("click",handleMapClick,false); 
function handleMapClick(e)
{
	e.preventDefault();
	if (e.target != e.currentTarget) 
	{
		if(e.target.getAttribute('href')!=="#") return; // do nothing when non-links are clicked // for e.g. "cut-branches" // 
		document.getElementById("modalTitle").innerHTML = e.target.getAttribute('title');
		document.getElementById("modalImg").setAttribute('src',e.target.getAttribute('alt'));
	}
	e.stopPropagation();
	modal.style.display = "block";
}


// click outside modal-content --> close it //
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// toggle all highlights button event-listener
var btnToggle = document.getElementById("btnAllHighlights");
btnToggle.addEventListener("click",handleToggleBtn,false);
var show=false; // hidden by default
function handleToggleBtn(e)
{
	if(show)
	{
		$(function () {
			$('.map').maphilight({ fillColor: 'ff0000', strokeColor: '00ff00', shadow : true, shadowRadius: 11, alwaysOn: false });
		});
		if(location.pathname.indexOf("_ar.html")!=-1) btnToggle.setAttribute('value',show_value_ar);
		else btnToggle.setAttribute('value',show_value_eng);
	}
	else
	{
		$(function () {
			$('.map').maphilight({ fillColor: 'ff0000', strokeColor: '00ff00', shadow : true, shadowRadius: 11, alwaysOn: true });
		});
		if(location.pathname.indexOf("_ar.html")!=-1) btnToggle.setAttribute('value',hide_value_ar);
		else btnToggle.setAttribute('value',hide_value_eng);
	}
	show=!show;
}

// copy mail to clipboard
function copyMail() {
	navigator.clipboard.writeText('iskmz@hotmail.com');
	// window.alert("copied 'iskmz@hotmail.com' to clipboard");
	return false;
}

// show-hide top header bar // with some jquery effects !
var headerShown=true;
$(document).ready(function(){
  $("#showhidebtn").click(function(){
    if(headerShown) { 
		$("#header").fadeOut("fast");
		$("#header_lang").fadeOut("fast");
		$("#showhidebtn").html("&#9660;"); 
	}
	else { 
		$("#header").fadeIn("fast");
		$("#header_lang").fadeIn("fast");
		$("#showhidebtn").html("&#9650;"); 
	}
	headerShown = !headerShown;
  });
});

// show-hide bottom footer bar // with some jquery effects !
var footerShown=true;
$(document).ready(function(){
  $("#showhidebtn2").click(function(){
    if(footerShown) { 
		$("#footer").fadeOut("fast");
		if(location.pathname.indexOf("index.html")!=-1) { $("#footer2").fadeOut("fast"); }
		$("#showhidebtn2").html("&#9650;"); 
	}
	else { 
		$("#footer").fadeIn("fast");
		if(location.pathname.indexOf("index.html")!=-1) { $("#footer2").fadeIn("fast"); }
		$("#showhidebtn2").html("&#9660;"); 
	}
	footerShown = !footerShown;
  });
});



// EXTRA CODE: to check how many subTree images (in 'area' tags) exist in total (out of 155) //

	// check if all images are loaded and type appropriate msg to console //
	var counterOK = 0, counterBAD = 0;
	var areas = document.getElementsByTagName("area");
	function displayCounters(){
		console.log("loaded "+counterOK+" / "+areas.length+" successfully!");
		if(counterBAD>0) console.log("but, "+counterBAD+" did not load ...");
	}
	function checkImage(imageSrc,isLastOne) {  // ASYNC function !!! // source: https://stackoverflow.com/a/18837818
		var img = new Image();
		img.onload = function() { counterOK++; if(isLastOne) displayCounters() }; 
		img.onerror = function() { counterBAD++; if(isLastOne) displayCounters(); };
		img.src = imageSrc;
	}
	function checkAllAreaImages() {
		for(var i=0; i<areas.length-1; i++) // check all but the last one !
		{
			checkImage(areas[i].getAttribute("alt"),false);
		}
		checkImage(areas[areas.length-1].getAttribute("alt"),true); // check last one ! 
	}
// checkAllAreaImages(); // only activated when needed for startup check


var isMagnified=false;
var btnMag = document.getElementById("btnMagnifier");
function toggleMagnifier() {
	if(isMagnified)  { demagnify(); btnMag.style.backgroundColor=""; }
	else  { magnifyTree(); btnMag.style.backgroundColor="orange"; }
	isMagnified = !isMagnified;
}