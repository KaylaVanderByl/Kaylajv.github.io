

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


$(document).ready(function(){
  $(window).scroll(function(){
    $(".section").each(function(){
      var x = $(window).scrollTop() + $(window).height();
      var y = $(this).offset().top + ($(this).height() / 2);
console.log($(window).scrollTop())
      if (x >= y) {
        $(this).addClass('active');
      };
    });
  });
});
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
$(function() {


  $('#contact2').click(function() {
    $('#contactForm2').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm2");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });


$('#boxclose2').click(function(){
      $('#contactForm2').animate({'top':'-200px'},500,function(){
          $('#contactForm2').fadeOut('fast');
      });
  });

});

$(function() {


  $('#contact3').click(function() {
    $('#contactForm3').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm3");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });


$('#boxclose3').click(function(){
      $('#contactForm3').animate({'top':'-200px'},500,function(){
          $('#contactForm3').fadeOut('fast');
      });
  });

});

$(function() {


  $('#contact4').click(function() {
    $('#contactForm4').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm4");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });


$('#boxclose4').click(function(){
      $('#contactForm4').animate({'top':'-200px'},500,function(){
          $('#contactForm4').fadeOut('fast');
      });
  });

});

$(function() {


  $('#contact5').click(function() {
    $('#contactForm5').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm5");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });


$('#boxclose5').click(function(){
      $('#contactForm5').animate({'top':'-200px'},500,function(){
          $('#contactForm5').fadeOut('fast');
      });
  });

});

$(function() {


  $('#contact6').click(function() {
    $('#contactForm6').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm6");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.fadeOut();
    }
  });


$('#boxclose6').click(function(){
      $('#contactForm6').animate({'top':'-200px'},500,function(){
          $('#contactForm6').fadeOut('fast');
      });
  });

});
