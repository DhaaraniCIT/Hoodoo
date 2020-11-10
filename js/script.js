$(document).ready(function(){
    $(window).scroll(function(){
        console.log("jhjhjh")
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
  });