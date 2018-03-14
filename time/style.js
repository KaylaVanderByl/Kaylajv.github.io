
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    "Wednesday, March 14, 2018,"  + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


// fucntion printTime(){
//   var current_date = new Date();
//   var hour = current_date.getHours()
//   var minutes = current_date.getMinutes();
//   var seconds = current_date.getSeconds();
//
//   document.getElementById("hours").innerHTML= hour;
//   document.getElementById("minutes").innerHTML= minute;
//   document.getElementById("seconds").innerHTML= seconds;
//
// }
//
// SetInterval(printTime, 1000);
