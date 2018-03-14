$(function () {
  setTimeout(function () {
    $(".animated-text").removeClass("hidden-text");
  }, 500);
});

function moveOnMax(field,nextFieldID){
  if(field.value.length >= field.maxLength){
    document.getElementById(nextFieldID).focus();
  }
};


function yes(form) {
	var one = document.forms.windingroad.one.value;
	var two = document.forms.windingroad.two.value;
	var three = document.forms.windingroad.three.value;
	var four = document.forms.windingroad.four.value;

	document.getElementById('your-words').innerHTML = one + "<br>" + two + "<br>" + three + "<br>" + four;

	document.getElementById('your-words').style.opacity = "1";


	return false;
};


function reset() {
	document.getElementById('windingroad').reset();
	document.getElementById('your-words').innerHTML = '';
}
