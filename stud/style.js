function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
$(function() {


  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });


$('#boxclose').click(function(){
      $('#contactForm').animate({'top':'-200px'},500,function(){
          $('#contactForm').fadeOut('fast');
      });
  });

});
