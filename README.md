# Interactive Mazzawi Family Tree


a webpage that merges between the old [1949 drawing](./res/mazzawi-family-tree-1949.png) of the Mazzawi family tree (in arabic) , with the newer [2009 english language tree](./res/mazzawi_english)

It is basically an image map of the drawing that utilizes the jquery package of [maphilight](https://github.com/kemayo/maphilight) to highlight selected map areas, which when clicked upon an image of the subtree of the leaf/branch as its root opens inside a "modal" div.  The subtree is from the English language 2009 tree.

project contains 155 images from the 2009 english tree , that were print-screened and re-edited extensively.

map areas' coordinates were generated using the help of [image-map.net](https://www.image-map.net/)

view the project at [iskmz.com](https://iskmz.com/MazzawiFamily/mz_tree/index.html)  or download an offline copy from [releases](https://github.com/iskmz/InteractiveMazzawiFamilyTree/releases)

downloaded project contains an .exe which runs a batch that gives options to open in browser's KIOSK / fullscreen mode

at the moment, it is viewed best at ***100% zoom on a desktop PC !***

----------

all rights for the drawing and the english language tree belong to their respective creators

they were recovered from the apparently closed [mazzawi.net](http://mazzawi.net/) website using the wayback machine, and from an old hdd backup drive which the drawing was stored on years ago.

----------


<p align="center">
<img src="./res/icons8-tree-64.ico" width=32 height=32>&emsp;<img src="./res/icons8-tree-64.ico" width=32 height=32>&emsp;<img src="./res/icons8-tree-64.ico" width=32 height=32> </p>

<p align="center"><b><i>The main idea & goal behind this project is to make an easy to navigate tree for the benefit of the Mazzawi Family members all over the world and to be a platform that the future (& current) generations could add to, change & correct information regarding their ancestry and add new family members as the years go by</b></i></p>

<p align="center">
<img src="./res/icons8-tree-64.ico" width=32 height=32>&emsp;<img src="./res/icons8-tree-64.ico" width=32 height=32>&emsp;<img src="./res/icons8-tree-64.ico" width=32 height=32>
  </p>



<p align="center"><img src="./res/mazzawi-family-tree-1949.png" width="70%" height="70%"></p>


----------

### Updates

<b>2023-04-25</b>
+ added arabic version for all sub-trees, which includes additional 155 images translated to arabic , all found in [ar](./ar)
+ improved appearance of header and footer, with an option to show/hide them (using some jquery magic)
+ added magnifier glass to use on the drawing , credits to [w3schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_magnifier_glass)
+ improved and re-organized code: more files, much less lines.  separate .js and .css files.  removing duplicates as much as possible.  all raw map_data is in one .js file now.

<b>2023-05-01</b>
+ changed relative position & style of magnifier button & show/hide highlights button with some changes in code (visibility instead of disable)
+ added full-screen option via a button in the top-right corner of the tree-image

<b>2023-05-19</b>
+ added 'submaps': for each element of the 155;  'submaps' are mini-image-maps for each image out of the 155, to connect all of them together so that user could browse them faster, by clicking on a parent or a son/daughter, instead of going back to main drawing everytime.
+ added alternate-trees, both in english and arabic, which are basically a simpler version, based on submaps, that browses the family tree without a drawing to begin with. Instead, it starts from about_family image and continues upward along the tree.
+ added a 'trace' top-bar for the alternate trees, so that user could jump back many levels at once along the ancestry travelled. 
+ improved buttons, icons and styles

<b>2023-09-29</b>
+ fixed issue with 'traceArrow' glyph (used in alternate trees) , which was not supported on Android mobile/TV fonts , by adding free font 'Symbola.ttf' to take the glyph from 
+ added feature in main tree pages: that when clicking a leave/branch all its ancestry is highlighted up to Ibrahim al doumany ; and when clicking out of the modal it is hidden again. Also added this to submaps inside modals, so that highlighted ancestry in the drawing (background) moves along the clicked areas in the modal.
+ made modal-content draggable , using jquery-UI. Along with changing some styles to modal-title so that movement ability is shown.
+ modal-content window: added (-/+) to minimize/restore window ;  added (x) close button ; added opacity bar for it ; added button on top-right corner to open current subTree in "alternate_tree" page for faster more dynamic browsing.
+ in alternate tree pages: changed functionality of Arabic/English buttons to re-load the same current subTree but in different language , for faster more dynamic browsing.
+ some changes to lightBulb style / hover
+ added files for "bootstrap 4.0.0" in res folder , to start making this website mobile-friendly. Not yet though , as it needs more time to integrate bootstrap into current website, without making many bugs to website style and functionality. So, it is commented-out at the moment.


----------

<i><b>main goals for future development:</b> (1) make fully mobile-friendly website (2) further expand 'submaps' feature, to add MORE desendants' leaves that are not directly reachable from drawing, thus opening a way for a simple future expansion of the tree as more data is collected.</i>

