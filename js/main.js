function myFunction() 
	{
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") 
		{
			x.className += " responsive";
		} else 
		{
			x.className = "topnav";
		}
	}

function prod1js()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="none";
}

function prod2js()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="block";
	document.getElementById("prodimg3").style.display="none";
}

function prod3js()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="1";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="block";
}
	
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

	