function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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

$(".twitter").hover(function () {
	$("#social-section").toggleClass("color-twitter")
});

$(".facebook").hover(function () {
	$("#social-section").toggleClass("color-facebook")
});

$(".googleplus").hover(function () {
	$("#social-section").toggleClass("color-googleplus")
});

$(".pinterest").hover(function () {
	$("#social-section").toggleClass("color-pinterest")
});

$(".dribbble").hover(function () {
	$("#social-section").toggleClass("color-dribbble")
});

$(".instagram").hover(function () {
	$("#social-section").toggleClass("color-instagram")
});
