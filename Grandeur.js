var myVar;

function myloader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



//Background image slide show
	const SlideShow = document.querySelectorAll(".slide-show");

const nextImgDelay = 5000;
let CurrentImageCounter = 0; 

 SlideShow[CurrentImageCounter].style.opacity = 1;


 setInterval(NextImage, nextImgDelay);
 function NextImage(){


 	//SlideShow[CurrentImageCounter].style.display = "none";
 	

 	SlideShow[CurrentImageCounter].style.zIndex = -2;

    const tempcounter =  CurrentImageCounter;

 	setTimeout( () => {
 		 SlideShow[tempcounter].style.opacity = 0;
 	}, 1000);
 	CurrentImageCounter = (CurrentImageCounter + 1) % SlideShow.length;
 	SlideShow[CurrentImageCounter].style.opacity = 1;
 	//SlideShow[CurrentImageCounter].style.zIndex = -1;



 }

//Activate the responsive class
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function show() {
  document.getElementById("mydropdown").classList.toggle("show");
 
 

}


//To display the dropdown function onclick. 
//Not activated tho, the dropdown displays on hover.
//Just using this to practice
function show01() {

  document.getElementById("mydropdown01").classList.toggle("show");
}

function show02() {

  document.getElementById("mydropdown02").classList.toggle("show");
}
function show03() {

  document.getElementById("mydropdown03").classList.toggle("show");
}

function show04() {

  document.getElementById("mydropdown04").classList.toggle("show");
}

function show05() {

  document.getElementById("mydropdown05").classList.toggle("show");
}

function show06() {

  document.getElementById("mydropdown06").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  
}
