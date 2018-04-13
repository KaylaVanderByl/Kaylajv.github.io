


$("#go").on("click", function() {
  var feeling = $("#feeling").val();
  var fav_color = $("#fav_color").val();
  var greeting = $("#greeting2");
  if(feeling.toLowerCase() == "happy"){
    var greeting_1 = "Yay!";
    $("font").css("Permanent Marker");
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
    $("#greeting2").css("color","black");
}

  if(fav_color.toLowerCase()=="red"){
    var greeting_2 ="<strong>My fav color is red too!</strong>";
    $("#greeting2").css("color","red");
  }else if(fav_color =="blue"){
    var greeting_2 = "I don't like blue";
      $("#greeting2").css("color","blue");
  }else if(fav_color =="purple"){
    var greeting_2 = "That's awesome!";
    $("#greeting2").css("color","purple");
  }else if(fav_color =="yellow"){
    var greeting_2 = "Like the sun.";
      $("#greeting2").css("color","yellow");
  }else if(fav_color =="green"){
    var greeting_2 = "The color of envy!";
      $("#greeting2").css("color","green");
  }else {
    var greeting_2 = "Cool!";
    $("#greeting2").css("color","black");
  }

  greeting.html (greeting_1 + "<br/>" + greeting_2);
});
