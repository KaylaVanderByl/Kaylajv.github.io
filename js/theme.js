
document.getElementById("go").addEventListener("click", function() {
  var feeling = document.getElementById("feeling").value;
  var fav_color = document.getElementById("fav_color").value;
  var greeting = document.getElementById("greeting2");
  if(feeling.toLowerCase() == "happy"){
    var greeting_1 = "Yay!";
    greeting.style.font= "Permanent Marker";
  }else if (feeling == "sad"){
    var greeting_1 = "Buy yourself an ice-cream to cheer up!";
  }else if (feeling == "tired"){
    var greeting_1 = "Take a quick power nap!";
}else if (feeling == "hungry"){
  var greeting_1 = "Get a bagel!";
}else if (feeling == "energetic"){
    var greeting_1 = "Take advantage and be productive!";

}else {
  var greeting_1 = "Nice!";
    greeting.style.color ="black";
}

  if(fav_color.toLowerCase()=="red"){
    var greeting_2 ="<strong>My fav color is red too!</strong>";
    greeting.style.color ="red";
  }else if(fav_color =="blue"){
    var greeting_2 = "I don't like blue";
      greeting.style.color ="blue";
  }else if(fav_color =="purple"){
    var greeting_2 = "That's awesome!";
    greeting.style.color ="purple";
  }else if(fav_color =="yellow"){
    var greeting_2 = "Like the sun.";
      greeting.style.color ="yellow";
  }else if(fav_color =="green"){
    var greeting_2 = "The color of envy!";
      greeting.style.color ="green";
  }else {
    var greeting_2 = "Cool!";
      greeting.style.color ="black";
  }

  greeting.innerHTML=greeting_1 + "<br/>" + greeting_2;
});
