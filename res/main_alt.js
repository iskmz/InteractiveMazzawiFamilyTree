const subMapDiv = document.getElementById("div_subMap");
const modalImgDiv = document.getElementById("div_modalImg");
const modalTitle = document.getElementById("modalTitle");
const imgBulb = document.getElementById("lightBulb");
const mainTreeIcon = document.getElementById("mainTreeIcon");
const isArabic=(location.pathname.indexOf("_ar.html")!=-1);
const traceDiv = document.getElementById("trace");
const traceArrow = "<span class=\"arrow\">"+(isArabic?"&#x211B":"&#x2122")+"</span>"; // left_arrow:right_arrow // in original unicode: U+1F880 : U+1F882 , "🡸":"🡺" // in Symbola.ttf:  U+211B:U+2122 //
var index; // global index, for tracking ... // 

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
		if(curr.hasOwnProperty("p")) 
		{
			pText = pPre + curr.p;	
			if(curr.hasOwnProperty("pXtra")) pText+="_"+(isArabic?curr.pXtra[0].ar:curr.pXtra[0].en);
			pText += pPost;
		}
		areasStr += "<area shape=\"rect\" coords=\""+coords+"\" href=\"#"+curr.i+"\""+ (i==0? titleAttr:"") + pText +">";
	}
	subMapDiv.firstElementChild.innerHTML = areasStr;
	
	// add event listener to handle clicks on areas 
	subMapDiv.firstElementChild.addEventListener("click",handleSubMapClick,false);
	
	// init-state for submap highlights //
	$(function () { $('.map').maphilight(highlights_submap_default); });
	
	// add event listeners for light-bulb mouse-over-out events 
	// imgBulb.removeAttribute("hidden");
	// imgBulb.addEventListener("mouseover", highlightSubMap, false);
	// imgBulb.addEventListener("mouseout", unhilightSubMap, false);
	
	// add event listeners for mainTreeIcon mouse-over-out events ...
	mainTreeIcon.addEventListener("mouseover", highlightSubMap, false);
	mainTreeIcon.addEventListener("mouseout", unhilightSubMap, false);
}

function highlightSubMap() { $(function () { $('.map').maphilight(highlights_submap_AllOn); });   mainTreeIcon.style.backgroundColor="#00cc00"; }
function unhilightSubMap() { $(function () { $('.map').maphilight(highlights_submap_default); }); mainTreeIcon.style.backgroundColor=""; }
	
function handleSubMapClick(e)
{
	e.preventDefault();
	if (e.target != e.currentTarget) 
	{
		index = Number(e.target.getAttribute('href').substring(1)); // to discard # at pos=0 // get index of clicked area //
		traceDivUpdate(e.target,index); // update trace div ('top-bar')
		clearModalElements();	// clear current subMap & modalImg & modalTitle elements
		updateModalElements(index); // build new modal title , img, and submap (if exists)
	}
	e.stopPropagation();
}

function traceDivUpdate(areaClicked,index)
{
	if (areaClicked.hasAttribute('alt')) //  "father" or "father_in_law" or "O" or "daughter" or "grandson" or "great_grandson" //
	{
		var altValue = areaClicked.getAttribute('alt');
		if(altValue.indexOf("daughter")!=-1)
		{
			traceDiv.innerHTML += traceArrow + hyperLinkStr(altValue.substring(altValue.indexOf("_")+1),index);
		}
		else if(altValue.indexOf("grandson")!=-1)	// this includes "great_grandson" as well !! //
		{
			// collect index list (for hyperLinking text)
			var indexArr = [index,0,0,0] , k;
			for(k=1; k<=2; k++) indexArr[k]=dataArr[indexArr[k-1]].smap[0].i; // loop 2 times
			if(altValue==="great_grandson") indexArr[k]=dataArr[indexArr[k-1]].smap[0].i; // loop once more
			// grandson & great_grandson are limited to few generations after ROOT ( <= 4 ) 
			// so could use some tricks to manipulate "title" string
			var txt = isArabic?dataArr[index].ar:dataArr[index].eng;
			var txtArr = txt.split(" "), res=hyperLinkStr("*",0);
			for(var i=txtArr.length-1; i>=0; i--) res+=traceArrow+hyperLinkStr(txtArr[i],indexArr[i]);
			traceDiv.innerHTML=res;
		}
		else if(altValue==="O") 
		{
			traceDiv.innerHTML=hyperLinkStr("*",0); 
		}
		else // "father" or "father_in_law" //
		{
			var currDivTxt = traceDiv.innerHTML;
			var parentDivTxt = currDivTxt.substring(0,currDivTxt.lastIndexOf(traceArrow)); // simply omit last arrow and link after it // 
			var possibleParent = parentDivTxt.substring(parentDivTxt.lastIndexOf(traceArrow)+traceArrow.length);
			possibleParent = possibleParent.substring(possibleParent.indexOf(">")+1);
			possibleParent = possibleParent.substring(0,possibleParent.lastIndexOf("</a>"));
			// console.log("possible: "+possibleParent);
			var trueParentFull = isArabic?dataArr[index].ar:dataArr[index].eng;
			var trueParent = trueParentFull.substring(0,trueParentFull.indexOf(" "))
			// console.log("true: "+trueParent);
			if(possibleParent!==trueParent) // father/father_in_law shift --> need to SCAN to ROOT and regenerate list ! //
			{
				// console.log("SHIFT!!!");
				var res = traceArrow+hyperLinkStr(trueParent,index);
				var parentIndex = dataArr[index].smap[0].i;
				while(parentIndex!=0)
				{
					var parentFull = isArabic?dataArr[parentIndex].ar:dataArr[parentIndex].eng;
					res = traceArrow +  hyperLinkStr(parentFull.substring(0,parentFull.indexOf(" ")),parentIndex) + res;
					parentIndex = dataArr[parentIndex].smap[0].i;
				}
				traceDiv.innerHTML= hyperLinkStr("*",0)+res;
			}
			else // no shift ; just remove son/daughter // 
			{
				traceDiv.innerHTML = parentDivTxt;
			}
		}
	}
	else // a son was clicked //
	{
		var fullName = isArabic?dataArr[index].ar:dataArr[index].eng;
		traceDiv.innerHTML += traceArrow + hyperLinkStr(fullName.substring(0,fullName.indexOf(" ")),index);
	}
}

function hyperLinkStr(str,index) { return "<a class=\"traceLink\" onclick=\"linkClick(this,"+index+")\" href=\"#"+index+"\">"+str+"</a>"; }

function linkClick(element,i)
{
	$(function(){ $(element).nextAll().remove(); });	// remove all siblings after link , including arrows (inside span)
	clearModalElements(); // clear current subMap & modalImg & modalTitle elements
	updateModalElements(i); // go to clicked link // i.e. change modal data: title, img , submap //
	index = i; // update global var // 
}

function updateModalElements(index)
{
	if (location.pathname.indexOf("_ar.html")==-1) document.getElementById("modalTitle").innerHTML = dataArr[index].eng + "&nbsp;";
	document.getElementById("modalTitle").innerHTML += dataArr[index].ar;
	document.getElementById("modalImg").setAttribute('src',dataArr[index].path);
	if(dataArr[index].hasOwnProperty("smap")) addSubMap(dataArr[index].smap);
}

function clearModalElements()
{
	subMapDiv.firstElementChild.innerHTML = "";
	modalImgDiv.removeChild(modalImgDiv.firstElementChild); // <img> wrapper <div> and <canvas> created by maphilight !!! // 
	modalImgDiv.innerHTML = "<img id=\"modalImg\" src=\"#\" usemap=\"#subMap\" class=\"map\"/>";
	modalTitle.innerHTML = "";
	// imgBulb.setAttribute("hidden","");
	mainTreeIcon.removeEventListener("mouseover", highlightSubMap);
	mainTreeIcon.removeEventListener("mouseout", unhilightSubMap);
}

function loadAbout() {
	// load "about_family" img with its title & submap //
	updateModalElements(0);
	index = 0; // global var // 
	// override some styles //
	var subTreeModal = document.getElementById("subTree");
	subTreeModal.style.display = "block";  // override initial hidden state 
	subTreeModal.style.position = "static"; // override main.css value ['fixed']
	subTreeModal.firstElementChild.style.border = "0px solid transparent"; // override modal-content element border (remove)
	subTreeModal.style.padding = "0px"; // override padding for modal
	// override some more styles
	document.getElementById("modalTitle").style.backgroundColor = "#ffffff";
	document.getElementById("modalTitle").style.cursor = "auto";
	// override initial state , to show "ibrahim" highlight on page load 
	$(function () { $('.map').maphilight(highlights_submap_AllOn); }); 
}

// copy mail to clipboard
function copyMail() {
	navigator.clipboard.writeText('iskmz@hotmail.com');
	// window.alert("copied 'iskmz@hotmail.com' to clipboard");
	return false;
}

// special ! //
const specialAncestryEn=["*","Ibrahim","Khalil","Sleiman","Asaad","Iskandar","Mundher"];
const specialAncestryAr=["*","ابراهيم","خليل","سليمان","أسعد","اسكندر","منذر"];
const ancestryArr = isArabic?specialAncestryAr:specialAncestryEn;
const ancestryIndexArr =[0,1,23,33,40,41,72];
function gotoSpecial()
{
	var res=hyperLinkStr(ancestryArr[0],ancestryIndexArr[0]);
	for(var i=1;i<7;i++) res+=traceArrow+hyperLinkStr(ancestryArr[i],ancestryIndexArr[i]);
	traceDiv.innerHTML = res;
	clearModalElements();	
	updateModalElements(72);
	index=72; // global var 
}


// load url index (passed from open modal window of original main tree: 'drawing')
function loadUrlIndex()
{
	const url = location.href;
	if(url.indexOf("#")==-1) return;
	var urlIndex = Number(url.substring(url.lastIndexOf("#")+1));
	if(isNaN(urlIndex)) {
		console.log("Error, index is Not-A-Number");
		return;
	}
	if(urlIndex<0 || urlIndex>=dataArr.length) { 
		console.log("Error, index out of range: [ 0 , ",dataArr.length-1,"]"); 
		return;
	}
	index = urlIndex; // to update global index // 
	if(urlIndex==0) return; // loadAbout() was enough, no need to continue ... // 
	// console.log(urlIndex);
	clearModalElements(); // after loadingAbout .. for styles override ! // 
	updateModalElements(urlIndex);
	// traceDiv update from current index back to "O" //
	var fullName = isArabic?dataArr[urlIndex].ar:dataArr[urlIndex].eng;
	var res = traceArrow+hyperLinkStr(fullName.substring(0,fullName.indexOf(" ")),urlIndex);
	var parentIndex = dataArr[urlIndex].smap[0].i;
	while(parentIndex!=0)
	{
		var parentFull = isArabic?dataArr[parentIndex].ar:dataArr[parentIndex].eng;
		res = traceArrow +  hyperLinkStr(parentFull.substring(0,parentFull.indexOf(" ")),parentIndex) + res;
		parentIndex = dataArr[parentIndex].smap[0].i;
	}
	traceDiv.innerHTML = hyperLinkStr("*",0)+res;
}

// to change lang for alternate-trees but keep open for same subtree index 
function openCurrentIndex(e)
{
	var pageURL = isArabic?"../alt_index.html":"./ar/alt_index_ar.html"; // Arabic->English , English->Arabic // 
	window.open(pageURL+"#"+index,"_self"); // using GLOBAL var: index // 
}