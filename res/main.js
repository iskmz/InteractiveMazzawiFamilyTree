
// code block to add / remove subMaps and handle their click events // >>>>>>>>> //

const subMapDiv = document.getElementById("div_subMap");
const modalImgDiv = document.getElementById("div_modalImg");
const modalTitle = document.getElementById("modalTitle");
const imgBulb = document.getElementById("lightBulb");

const highlights_submap_default = {strokeColor: 'ffaa00', fillColor: 'ffff00', alwaysOn: false};
const highlights_submap_AllOn = {strokeColor: 'ffaa00', fillColor: 'ffff00', alwaysOn: true};

const img1949 = document.getElementById("mz1949img");
const imgContainer = document.getElementById("imgContainer");

var isArabic=(location.pathname.indexOf("_ar.html")!=-1);
var index;

function addSubMap(smapArr)
{
	// build map's area tags from smapArr data //
	var areasStr="",curr,coords;
	const titleAttr = " title=\"&#11165; "+(isArabic? "إلى الأعلى (الأب)":"go to parent (upwards)")+" &#11165;\"";
	const pPre=" alt=\"", pPost="\" ";
	var pText;
	for(var i=0; i<smapArr.length; i++)
	{
		pText="";
		curr = smapArr[i];
		coords = (isArabic)? curr.c_ar : curr.c_en;
		if(curr.hasOwnProperty("p")) pText = pPre + curr.p + pPost;
		areasStr += "<area shape=\"rect\" coords=\""+coords+"\" href=\"#"+curr.i+"\""+ (i==0? titleAttr:"") + pText +">";
	}
	subMapDiv.firstElementChild.innerHTML = areasStr;
	// adjust maphilight for different settings for subMap areas //
	$(function () { $('.map').maphilight(highlights_default); });
	var areas = subMapDiv.firstElementChild.children;
	for(var i=0; i<areas.length; i++)
	{
		$(areas[i]).data('maphilight', highlights_submap_default);
	}
	// add event listener to handle clicks on areas 
	subMapDiv.firstElementChild.addEventListener("click",handleSubMapClick,false);
	// add event listeners for light-bulb mouse-over-out events 
	imgBulb.removeAttribute("hidden");
	imgBulb.addEventListener("mouseover", highlightSubMap, false);
	imgBulb.addEventListener("mouseout", unhilightSubMap, false);
	function highlightSubMap()
	{
		imgBulb.src = imgBulb.src.replace('bulb.png','bulb_on.png');
		$(function () { $('.map').maphilight(highlights_default); });
		for(var i=0; i<areas.length; i++) { $(areas[i]).data('maphilight', highlights_submap_AllOn); }
	}
	function unhilightSubMap()
	{
		imgBulb.src = imgBulb.src.replace('bulb_on.png','bulb.png');
		$(function () { $('.map').maphilight(highlights_default); });
		for(var i=0; i<areas.length; i++) { $(areas[i]).data('maphilight', highlights_submap_default); }
	}
}

function handleSubMapClick(e)
{
	e.preventDefault();
	if (e.target != e.currentTarget) 
	{
		// get index of clicked area //
		index = Number(e.target.getAttribute('href').substring(1)); // to discard # at pos=0 // 
		
		// clear current subMap & modalImg & modalTitle elements
		clearModalElements();
		
		// next build new modal title , img, and submap (if exists)
		
		if (location.pathname.indexOf("_ar.html")==-1) modalTitle.innerHTML = dataArr[index].eng + "&nbsp;";
		modalTitle.innerHTML = "&emsp;&emsp;" + modalTitle.innerHTML + dataArr[index].ar + "&emsp;&emsp;";
		
		document.getElementById("modalImg").setAttribute('src',dataArr[index].path);
		
		if(dataArr[index].hasOwnProperty("smap")) addSubMap(dataArr[index].smap);
		
		highlightAncestry(index);
		
		// console.log(index);
	}
	e.stopPropagation();
}

function clearModalElements()
{
	subMapDiv.firstElementChild.innerHTML = "";
	modalImgDiv.removeChild(modalImgDiv.firstElementChild); // <img> wrapper <div> and <canvas> created by maphilight !!! // 
	modalImgDiv.innerHTML = "<img id=\"modalImg\" src=\"#\" usemap=\"#subMap\" class=\"map\"/>";
	modalTitle.innerHTML = "";
	imgBulb.setAttribute("hidden","");
	//imgBulb.setAttribute("
}



// END // code block to add / remove subMaps and handle their click events // <<<<<<<< //


const show_value_ar="عــرض الــــكــل";
const hide_value_ar="اخــفـاء الــــكــل";
const show_value_eng="Show All Highlights";
const hide_value_eng="Hide All Highlights";

// toggle all highlights button event-listener
var btnToggle = document.getElementById("btnAllHighlights");
btnToggle.addEventListener("click",handleToggleBtn,false);
var show=false; // hidden by default
function handleToggleBtn(e)
{
	if(show)
	{
		document.getElementById("btnMagnifier").style.visibility="visible"; // show magnifier button 
		unhighlightAllAreas(); // OLD_CODE // $(function () { $('.map').maphilight(highlights_default); });
		btnToggle.setAttribute('title',(location.pathname.indexOf("_ar.html")!=-1)?show_value_ar:show_value_eng);
		btnToggle.style.backgroundColor = "";
	}
	else
	{
		document.getElementById("btnMagnifier").style.visibility="hidden"; // hide magnifier button
		highlightAllAreas(); // OLD_CODE // $(function () { $('.map').maphilight(highlights_AllOn); });
		btnToggle.setAttribute('title',(location.pathname.indexOf("_ar.html")!=-1)?hide_value_ar:hide_value_eng);
		btnToggle.style.backgroundColor = "#00ff00";
	}
	show=!show;
}


var modal = document.getElementById("subTree");
var map = document.getElementById("treeMap");

// event listener to map-area click --> load correct image & open the modal to show it // 
map.addEventListener("click",handleMapClick,false); 
function handleMapClick(e)
{
	e.preventDefault();
	if (e.target != e.currentTarget) 
	{
		if(e.target.getAttribute('href')[0]!=="#") return; // do nothing when non-links are clicked // for e.g. "cut-branches" // 
		document.getElementById("modalTitle").innerHTML = "&emsp;&emsp;" + e.target.getAttribute('title') + "&emsp;&emsp;";
		document.getElementById("modalImg").setAttribute('src',e.target.getAttribute('alt'));
		index = Number(e.target.getAttribute('href').substring(1)); // to discard # at pos=0 // 
		if(dataArr[index].hasOwnProperty("smap")) addSubMap(dataArr[index].smap);
		highlightAncestry(index);
		// console.log(index);
	}
	e.stopPropagation();
	modal.style.display = "block";
}


// click outside modal-content --> close it //
window.onclick = function(event) {
  if (event.target == modal) 
  {
    closeModal();
  }
  else if(event.target == img1949 || event.target == imgContainer) 		// after 'getting out' of "modal" , another click on the drawing un-hilights everything // 
  {
	 if(show) btnToggle.click(); // unhilights all anyways , so no need to repeat it ... // 
	 else unhighlightAllAreas();
  }
  else
  {
	  // console.log(event.target);
  }
}


$('.modal-content').draggable({ handle: "#modalTitleDiv" }); // make modal-content draggable , using jquery-UI //

function restoreModalPosition() // in case "draggable" was used on modal-content // re-center it ! // 
{
	var modalContent = document.getElementsByClassName("modal-content")[0];
	modalContent.style.left = "0px";
	modalContent.style.top = "0px";
}

function deMinimizeModalContent() // in case modal was closed when "minimized" (title only showing) , then re-expand it , for the next time //
{
	var modalHideShow = document.getElementById("modalHideShow");
	if(modalHideShow.innerHTML==="+") modalHideShow.click();
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


// Fullscreen functionality START >>>

function hideAllAround() {
	document.getElementById("full_header").style.display="none";
	document.getElementById("title").style.display="none";
	document.getElementById("full_footer").style.display="none";
}

function showAllAround() {
	document.getElementById("full_header").style.display="initial";
	document.getElementById("title").style.display="initial";
	document.getElementById("full_footer").style.display="initial";
}

// SOURCE:	https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen2
var elemDoc = document.documentElement;
function openFullScr() {
	if (elemDoc.requestFullscreen) { elemDoc.requestFullscreen(); } 
	else if (elemDoc.webkitRequestFullscreen) {   elemDoc.webkitRequestFullscreen(); } // Safari
	else if (elemDoc.msRequestFullscreen) { elemDoc.msRequestFullscreen(); } // IE11
}
function exitFullScr() {
	if (document.exitFullscreen) { document.exitFullscreen(); }
	else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }  // Safari 
	else if (document.msExitFullscreen) { document.msExitFullscreen();  }  // IE11
}

// SOURCE:	https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event
elemDoc.addEventListener("fullscreenchange", fullscreenchanged);
function fullscreenchanged(event) {
  if (document.fullscreenElement) 
  {
	  hideAllAround();
	  document.getElementById("btnFullscreen").setAttribute('src', ((location.pathname.indexOf("_ar.html")!=-1)? '.' : '') + ('./res/full_screen_exit.png'));
  }
  else 
  {
	  showAllAround();
	  document.getElementById("btnFullscreen").setAttribute('src', ((location.pathname.indexOf("_ar.html")!=-1)? '.' : '') + ('./res/full_screen.png'));
  }
}

function toggleFullscreen(){
	if(document.fullscreenElement) exitFullScr(); else openFullScr();
}

// <<< Fullscreen functionality END 


const areasArr = document.getElementsByTagName("area");
const areasLEN = areasArr.length; // to get only the first 155 areas, which are loaded on_page_load (the drawing's) // and discard the remaining (the modal's submap) // 
function highlightAncestry(indx)
{
	if(show) btnToggle.click(); else unhighlightAllAreas(); // to remove previous highlights, in case user does not click on image1949 before next area click // 
	if(indx>0) { $(areasArr[indx]).data('maphilight', highlights_AllOn); }
	var parentIndex = dataArr[indx].smap[0].i;
	while(parentIndex!=0)
	{
		$(areasArr[parentIndex]).data('maphilight', highlights_AllOn);
		parentIndex = dataArr[parentIndex].smap[0].i;
	}
	//console.log(areasArr.length);
	//console.log(areasLEN);
}

function unhighlightAllAreas() // in general first & then area by area ! (overrides general) // 
{
	$(function () { $('.map').maphilight(highlights_default); });
	for (var i=0; i<areasLEN; i++) { $(areasArr[i]).data('maphilight', highlights_default); }
}

function highlightAllAreas() // in general first & then area by area ! (overrides general) // 
{
	$(function () { $('.map').maphilight(highlights_AllOn); });
	for (var i=0; i<areasLEN; i++) { $(areasArr[i]).data('maphilight', highlights_AllOn); }
}



// modal window  [-/+]  function //
function modalHideShowToggle(e)
{
	if(e.innerHTML==="-")
	{
		e.innerHTML="+";
		$(function(){ $(e).nextAll().hide(); });
		document.getElementById("modalTitle").style.margin = "0px";
		document.getElementsByClassName("modal-content")[0].style.paddingBottom = "0px";
	}
	else // ="+"
	{
		e.innerHTML="-"
		$(function(){ $(e).nextAll().show(); });
		document.getElementById("modalTitle").style.margin="0px 0px 15px 0px";
		document.getElementsByClassName("modal-content")[0].style.paddingBottom = "50px";
	}
}

// modal window [x] function //
function closeModal()
{
	modal.style.display = "none";
	clearModalElements();
	restoreModalPosition();
	deMinimizeModalContent();
	hideOpacityControls();
	resetOpacityValue();
}


// opacity image toggle controls ( bar + value ) //
function toggleOpacityControls() { 
	$(function(){ 
		$("#opacityControls").fadeToggle().css("display","inline-block");
		$("#opacityBar").toggleClass("opacityBar-green"); 
	}); 
}
function hideOpacityControls() { 
	document.getElementById("opacityControls").style.display="none"; 
	document.getElementById("opacityBar").className = "";
}

var opSlider = document.getElementById("opacitySlider");
opSlider.addEventListener("input", updateOpacityValue);
function updateOpacityValue()
{
	var opVal = Number(opSlider.value)/10;
	document.getElementById("opacityValue").innerHTML =  opVal==1?"1.0":opVal; 	// display value
	document.getElementsByClassName("modal-content")[0].style.opacity = opVal; // change actual modal opacity
}
function resetOpacityValue() 
{
	document.getElementById("opacityValue").innerHTML =  0.8; 	// display value
	document.getElementsByClassName("modal-content")[0].style.opacity = 0.8; // change actual modal opacity	
	opSlider.value = 8; // to restore slider "handle" to correct position 
	
}
updateOpacityValue(); // on page load , value from css : 0.8 // 


// open in alt tree button , in modal window //
function openInAltTree()
{
	var page = isArabic? "alt_index_ar.html":"alt_index.html";
	window.open(page+"#"+index,"_blank");
}