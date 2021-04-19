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
//3 images
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

//2 images
function prod1js2()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimg2").style.display="none";
}

function prod2js2()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="block";
}

//4 images
function prod1js4()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimg4").style.display="none";
}

function prod2js4()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="block";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimg4").style.display="none";
}

function prod3js4()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="1";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="block";
	document.getElementById("prodimg4").style.display="none";
}

function prod4js4()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimgsmall4").style.opacity="1";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimg4").style.display="block";
}

//shops crafts, fashion, arts, gifts

function craftjs()
{
	document.getElementById("crafttext").style.opacity = "1";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("craftitems").style.display = "block";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "none";

}

function fashionjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "1";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "block";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "none";
}
function artsjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "1";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "block";
	document.getElementById("giftsitems").style.display = "none";
}
function giftsjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "1";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "block";
}

function wire()
{
	
	var wirex = document.getElementById("wireitem").style.display;
	console.log(wirex);
	if (wirex == 'none')
	{
	document.getElementById("wireitem").style.display = 'block';
	}
	else
	{
	document.getElementById("wireitem").style.display = 'none';
	}
}

function cloth()
{
	
	var clothx = document.getElementById("clothbagitems").style.display;
	if (clothx == 'none')
	{
	document.getElementById("clothbagitems").style.display = "block";
	}
	else
	{
	document.getElementById("clothbagitems").style.display = "none";
	}
	
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

	